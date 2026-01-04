const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Mide el tiempo de respuesta del bot'),

  async execute(interaction) {
    const sent = await interaction.reply({
      content: '🏓 Pingeando...',
      fetchReply: true
    });

    const latency = sent.createdTimestamp - interaction.createdTimestamp;
    const apiLatency = Math.round(interaction.client.ws.ping);

    await interaction.editReply(
      `🏓 **Pong!**\n` +
      `⏱️ Latencia: **${latency} ms**\n` +
      `🌐 API Discord: **${apiLatency} ms**`
    );
  }
};

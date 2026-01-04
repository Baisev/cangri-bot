const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder
} = require('discord.js');

const {
  obtenerProximo18,
  diasRestantes18
} = require('../utils/fechas18');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fiestas')
    .setDescription('Envía la cuenta regresiva pal 18 🇨🇱')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const dias = diasRestantes18();
    const objetivo = obtenerProximo18();

    const embed = new EmbedBuilder()
      .setTitle('🇨🇱 Cuenta regresiva pal 18')
      .setDescription(`**Faltan ${dias} días** para el 18`)
      .addFields(
        { name: '📅 Fecha', value: '18 de septiembre', inline: true },
        { name: '🗓️ Año', value: objetivo.getFullYear().toString(), inline: true }
      )
      .setColor(0xd52b1e)
      .setFooter({ text: 'no piñera no te subas en ese helicoptero!' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};


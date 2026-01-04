const { REST, Routes } = require('discord.js');
const config = require('./config.json');

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
  try {
    console.log('🧹 Borrando comandos globales...');

    await rest.put(
      Routes.applicationCommands(config.clientId),
      { body: [] }
    );

    console.log('✅ Comandos globales eliminados');
  } catch (error) {
    console.error(error);
  }
})();

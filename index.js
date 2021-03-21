const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(File => File.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commandes/${file}`);
  client.commands.set(command.name, command);
}

const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("message", message => {
  if (message.author.bot) return;
  });

client.login(process.env.TOKEN);

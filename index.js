const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("message", message => {
  if (!message.content.startsWith(prefixcmd) || message.author.bot) return;
  const args = message.content.slice(prefixcmd,length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "user") message.channel.send (`je suis suis l'utilisateur ${message.author.tag}`);

  if (command === "serveur") message.channel.send (`je suis sur le serveur ${message.guild.name}`);
  
  if (command === "mr1") message.reply ("tu as activé la mission ressources 1, bonne chance!");

  if (command === "cavaetretoutnoir") message.reply ("TA GUEULE!");
  
  });

client.login(process.env.TOKEN);

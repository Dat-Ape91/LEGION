const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefixcmd + "user")) {
    message.channel.send (`je suis suis l'utilisateur' ${message.author.tag}`);
    }
  
  if (message.content.startsWith(prefixcmd + "serveur")) {
    message.channel.send (`je suis sur le serveur ${message.guild.name}`);
    }
  
  if (message.content.startsWith(prefixcmd + "mr1")) {
    message.reply ("tu as activé la mission ressources 1, bonne chance!");
    }

  if (message.content.startsWith(prefixcmd + "cavaetretoutnoir")) {
    message.reply ("TA GUEULE!");
    }
  });

client.login(process.env.TOKEN);

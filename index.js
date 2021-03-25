const Discord = require('discord.js');
const client = new Discord.Client();
const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefixcmd + "cavaetretoutnoir")) {
    message.reply ("TA GUEULE!");
    }
  if (message.author.user.id(789215824912580648).startsWith(prefixcmd + "cavaetretoutrouge")) {
    message.reply ("Comme ton vaisseau, qui au passage est BADASS!");
    }  
  })

client.login(process.env.TOKEN);

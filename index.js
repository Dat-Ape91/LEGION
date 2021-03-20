const Discord = require('discord.js');
const client = new Discord.Client();
const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefixcmd)) return;

  if (message.content ===  prefixcmd + "cavaetretoutnoir") {
      message.reply("TA GUEULE!");
    }
  })

client.login(process.env.TOKEN);

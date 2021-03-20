const Discord = require('discord.js');
const client = new Discord.Client();
const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("message", message => {
  if(!message.content.startsWith(prefixcmd) || message.author.bot) return;

  const commandbody = message.content.slice(prefixcmd.lenght);
  const args = commandbody.split(' ');
  const command = args.shift().toLowerCase();

  if (message.content ===  prefixcmd + "ping") {
      message.channel.send("Pong.")
    }
  })

client.login(process.env.TOKEN);

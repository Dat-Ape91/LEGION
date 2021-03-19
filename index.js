const Discord = require('discord.js');
const client = new Discord.Client();
const token = ('ODIyMDgzNDU3MTM5NjA1NTI0.YFNG4Q.YPN5KyvkuJL4NlpoMfMjhtSK57Y');

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("message", message => {
    if (message.content === "!ping") {
      message.channel.send("Pong.")
    }
  })

client.login(process.env.TOKEN);

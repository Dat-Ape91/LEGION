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
    if (message.content.startsWith(prefixcmd + "cavaetretoutrouge")) {
      message.reply ("Comme le vaisseau de Joh BARD qui au passage est trop BADASS!");
      }
    if (message.content.startsWith(`${prefixcmd}mr1`)) {
        message.reply ("Mission Récolte 50k poussière de ferrite, Engagée. Dans l'/ombre nous agissons");
        client.channels("822880193545895976").send("Commande de l'utilisateur" + message.author.id + message.author.username);
        }

});

client.login(process.env.TOKEN);

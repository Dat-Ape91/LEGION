const Discord = require('discord.js');
const client = new Discord.Client();
const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefixcmd + "cavaetretoutnoir")) {
    message.reply ("\n**TA GUEULE!**");
  }
  if (message.content.startsWith(prefixcmd + "cavaetretoutrouge")) {
      message.reply ("\nComme le vaisseau de *Joh BARD*\nqui au passage,\nest trop **BADASS!**");
  }
  if (message.content.startsWith(prefixcmd + "quiveutunmeme")) {
    message.reply ("\nJuste un Doigt");
  }
  if (message.content.startsWith(prefixcmd + "tuveuxpasunmemedabord")) {
    message.reply ("\nOk\n*Wolf* est le dieu du meme,\nnous le vénérons.");
  } 
  if (message.content.startsWith(prefixcmd + "hellomother")) {
      message.reply ("\n*Ripley*, Planète **LV-426-Acheron** à proximitée,\n---*présence de parasites xenomorphes detectée*---\nMerci de vérifier combinaison et soute de ton vaisseau à ton retour.");
  }

});

client.on("message", message => {
 if (message.content.startsWith(`${prefixcmd}mr1`)) {
    client.channels(822127955370836018).send("\n**Mission Récolte**\n---*Initialisée*---\n**50k poussière de ferrite**\n---*En attente de validation*---\nDans l'ombre, nous agissons!" + message.author.username);
  } 

});

client.login(process.env.TOKEN);

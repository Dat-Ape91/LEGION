const Discord = require('discord.js');
const client = new Discord.Client();
const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on('guildMemberAdd', member => {
  bot.channels.cache.get(`821889905633394691`).send(`${member} + 'bienvenue au sein du Black Squadron!\n**Dans l\'ombre, nous agissons**'`);
  member.roles.add(`823570094461419591`);

});

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefixcmd + "clear")){
  message.delete();
    if(message.member.hasPermission('MANAGE_MESSAGES')){

      let args = message.content.trim().split(/ +/g);

      if(args[1]){
        if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

          message.channel.bulkDelete(args[1])

        }
      }
    }
  }

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
  if (message.content.startsWith(prefixcmd + "mr1")) {
    message.delete();
    client.channels.cache.get(`822127955370836018`).send(message.author.tag + "\n**Mission Récolte de ressources** \n---*Initialisée*--- \n**50 K poussière de ferrite**");
    client.channels.cache.get(`822880193545895976`).send(message.author.tag + "Mission 50 k ferrite en cours");
    
  }

});

client.login(process.env.TOKEN);

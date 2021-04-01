const Discord = require('discord.js');
const client = new Discord.Client();
const prefixcmd = "!";

client.once('ready', () => {
   console.log('félicitation, LEGION à vu le jour!');
});

client.on("guildMemberAdd", member => {
  member.guild.channels.cache.find(channel => channel.id === "821889905633394691").send(member.user + "\n**Soldat**, bienvenue dans le **Black squadron** !\nIci se trouve l'élite des mercenaires.\nPour intégrer les **Forces Spéciales Blacks**, tu devras prouver ta valeur et surtout ta motivation.\nMontre nous que tu es digne d'être ici, et tu seras récompensé au delà de tes attentes.\nCe sera difficile, et seuls les plus méritants pourrons intégrer l'élite et être appelés **Blacks** !");
  member.roles.add("823570094461419591");
  
});

client.on("guildMemberRemove", member => {
  member.guild.channels.cache.find(channel => channel.id === "821889905633394691").send(member.user + "\nAlors **bleubite**, tu roules des mécaniques devant tes potes, mais tu te caches derrière maman quand il faut se battre ?\n\n Et bien fais ton pactage et retournes dans ses jupons !");

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

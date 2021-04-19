// discord.js
const Discord = require('discord.js'),
 client = new Discord.Client({
      fetchAllMembers: true
  });
  config = require('./config.json');
  fs = require('fs');
  low = require('lowdb');
  FileSync = require('lowdb/adapters/FileSync');

  adapter = new FileSync('db.json')
  db = low(adapter);

  db.defaults({ Infos_membres: []}).write()


client.login(process.env.TOKEN)
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })

});

// connection
client.once('ready', () => {
    console.log('félicitation, LEGION à vu le jour!');
});
// nouveau membre
client.on("guildMemberAdd", member => {
   member.guild.channels.cache.get(config.prospect.channel).send(`${member}`, new Discord.MessageEmbed()
   .setDescription(`**Prospect**, \nbienvenue dans le **Black squadron** ! \nIci se trouve l'élite des mercenaires.\n\nPour intégrer les **Maîtres de l'ombre**, \ntu devras prouver ta valeur et surtout ta motivation.\nMontre nous que tu es digne d'être ici, \net tu seras récompensé au delà de tes attentes.\nCe sera difficile, et seuls les plus méritants pourrons \nintégrer l'élite et être appelés **Blacks** ! \n\nTu peux maintenant consulter <#827974952594571265> \n\n**Dans l'ombre, nous agissons !**`)
   .setColor('#01d758')
   .setThumbnail('https://i.ibb.co/dQT3gw7/Black-Rocket.png'))
   member.roles.add(config.prospect.role)
});
// départ
client.on("guildMemberRemove", member => {
   member.guild.channels.cache.get(config.prospect.channel).send(new Discord.MessageEmbed()
   .setDescription(`${member.user.tag}\n\nAlors **bleubite**, tu roules des mécaniques devant tes potes, mais tu te caches derrière maman quand il faut se battre ?\n\n Et bien fais ton pactage et retournes dans ses jupons !`)
   .setColor('#fe1b00')
   .setThumbnail('https://i.ibb.co/dQT3gw7/Black-Rocket.png'))
});

// commandes
client.on('message', message => {
    if(message.type !== 'DEFAULT' || message.author.bot) return
    if(message.channel.type === "dm") return message.channel.send("Pas le bon endroit pour discuter!")

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('cette commande ne peut être utilisée que dans un serveur')
    command.run(message, args)
    var msgauthor = message.author.id;
    if(!db.get("Infos_membres").find({user: msgauthor}).value()){
    db.get("Infos_membres").push({user: msgauthor, xp: 50,niveau: 1,xp_p_niveau: 200}).write();
    console.log("ça marche !")

}});
// message reaction pour assigner des XP
client.on('messageReactionAdd', async (messageReaction, user, message) => {
    const messageReact = messageReaction.message;
    const member = messageReact.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = messageReact.guild.channels.cache.find(c => c.id === '822127955370836018');

    const msgauthor = messageReact.author.id;
      let userxpdb = db.get("Infos_membres").filter({user: msgauthor}).find("xp").value();
      let userxp = Object.values(userxpdb);
      let userniveaudb = db.get("Infos_membres").filter({user: msgauthor}).find("niveau").value();
      let userniveau = Object.values(userniveaudb);
      let userpniveaudb = db.get("Infos_membres").filter({user: msgauthor}).find("xp_p_niveau").value();
      let userpniveau = Object.values(userpniveaudb);

    if (member.user.bot) return;
    if (member.roles.cache.has('825077748459372625')) {
        if (["valid", "unvalid"].includes(emoji) && messageReact.channel.id === channel.id) {
            //Choix valid unvalid
            switch (emoji) {
                case "valid":
                    // valeures en XP selon les missions
                    if(messageReact.content.startsWith("!r1")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 50}).write();
                    };
                    if(messageReact.content.startsWith("!r2")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 250}).write();
                    };
                    if(messageReact.content.startsWith("!r3")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 100}).write();
                    };
                    if(messageReact.content.startsWith("!r4")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 100}).write();
                    };
                    if(messageReact.content.startsWith("!r5")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 100}).write();
                    };
                    if(messageReact.content.startsWith("!r6")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 100}).write();
                    };
                    if(messageReact.content.startsWith("!r7")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 200}).write();
                    };
                    if(messageReact.content.startsWith("!r8")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 200}).write();
                    };
                    if(messageReact.content.startsWith("!r9")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 250}).write();
                    };
                    if(messageReact.content.startsWith("!f1")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 200}).write();
                    };
                    if(messageReact.content.startsWith("!f2")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 50}).write();
                    };
                    if(messageReact.content.startsWith("!f3")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 50}).write();
                    };
                    if(messageReact.content.startsWith("!f4")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 50}).write();
                    };
                    if(messageReact.content.startsWith("!f5")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 50}).write();
                    };
                    if(messageReact.content.startsWith("!f6")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 50}).write();
                    };
                    if(messageReact.content.startsWith("!c1")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 200}).write();
                    };
                    if(messageReact.content.startsWith("!c2")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 250}).write();
                    };
                    if(messageReact.content.startsWith("!c3")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 300}).write();
                    };
                    if(messageReact.content.startsWith("!cs")) {
                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 350}).write();
                    };
                        // ajout et retrait de role et niveaux =>
                        if(userxp[1] >= userpniveau[3]){
                            db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor,niveau: userniveau[2] += 1}).write();
                            db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor,xp_p_niveau: userpniveau[3] += 600}).write();
                            messageReact.channel.send(`**${messageReact.member.user.tag}**, tu viens de passer niveau ${userniveau[2]}, il te faut maintenant ${userpniveau[3]}XP pour level up à nouveau.`);
                        }
                        if(userniveau[2] >= 10){
                            messageReact.member.roles.remove(config.prospect.role)
                            messageReact.member.roles.add(config.soldat.role)
                            messageReact.channel.send(`**${messageReact.member.user.tag}**, tu viens de passer <@&823570094461419591>,\ntu vas pouvoir poser un ordinateur de base sur **Hippi**\net tu as maintenant accès aux missions <#832611774439751720> pour le Black Rocket.`);
                        }
                        if(userniveau[2] >= 15){
                            messageReact.member.roles.remove(config.soldat.role)
                            messageReact.member.roles.add(config.major.role)
                        }
                        if(userniveau[2] >= 21){
                            messageReact.member.roles.remove(config.major.role)
                            messageReact.member.roles.add(config.adjudant.role)
                        }
                        if(userniveau[2] >= 30){
                            messageReact.member.roles.remove(config.adjudant.role)
                            messageReact.member.roles.add(config.lieutenant.role)
                        }
                        if(userniveau[2] >= 40){
                            messageReact.member.roles.remove(config.lieutenant.role)
                            messageReact.member.roles.add(config.capitaine.role)
                        }
                        if(userniveau[2] >= 56){
                            messageReact.member.roles.remove(config.capitaine.role)
                            messageReact.member.roles.add(config.sergent.role)
                        }
                        if(userniveau[2] >= 71){
                            messageReact.member.roles.remove(config.sergent.role)
                            messageReact.member.roles.add(config.maitre.role)
                        }
            
                    messageReact.channel.send(`**${messageReact.member.user.tag}** Félicitations, ta récompense en XP a bien été créditée.`);
                    break;
                // ajout et retrait de role et niveaux <=
                case "unvalid":
                    if(userniveau[2] > 2){

                        db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] -= 50}).write();

                        if(userxp[1] < userpniveau[3]){
                            db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor,niveau: userniveau[2] -= 1}).write();
                            db.get("Infos_membres").find({user: msgauthor}).assign({user: msgauthor,xp_p_niveau: userpniveau[3] -= 600}).write();
                            messageReact.channel.send(`Tu dors **${messageReact.member.user.tag}**?, tu viens de redescendre au niveau ${userniveau[2]}, il te faut maintenant ${userpniveau[3]}XP pour level up à nouveau.`);
                        }
                        if(userxp[1] < 5000){
                            messageReact.member.roles.remove(config.soldat.role)
                            messageReact.member.roles.add(config.prospect.role)
                        }
                        else if(userxp[1] < 8000){
                            messageReact.member.roles.remove(config.major.role)
                            messageReact.member.roles.add(config.soldat.role)
                        }
                        else if(userxp[1] < 11600){
                            messageReact.member.roles.remove(config.adjudant.role)
                            messageReact.member.roles.add(config.major.role)
                        }
                        else if(userxp[1] < 16400){
                            messageReact.member.roles.remove(config.lieutenant.role)
                            messageReact.member.roles.add(config.adjudant.role)
                        }
                        else if(userxp[1] < 22400){
                            messageReact.member.roles.remove(config.capitaine.role)
                            messageReact.member.roles.add(config.lieutenant.role)
                        }
                        else if(userxp[1] < 33000){
                            messageReact.member.roles.remove(config.sergent.role)
                            messageReact.member.roles.add(config.capitaine.role)
                        }
                        else if(userxp[1] < 42200){
                            messageReact.member.roles.remove(config.maitre.role)
                            messageReact.member.roles.add(config.sergent.role)
                        }
                        messageReact.channel.send(`**${messageReact.member.user.tag}** 50 XP t'ont été retirés car tu n'as pas rempli ta mission.\nSors toi les doigts du cul!`);
                    };
                    
                    break;
            }    
    
        };
    
    };

});
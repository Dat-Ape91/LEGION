const Discord = require('discord.js')

module.exports = {
    run: async message => {
    
    const valid = message.guild.emojis.cache.get(`831196656434937856`)
    const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
        await message.react(valid);
        await message.react(unvalid);
        
    message.channel.send( new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag} \nMission fournisseur \n**Black Rocket Society**`)
        .setDescription('**20 Cerveaux de marcheur**')
        .setColor('#C9AE4B')
        .setThumbnail('https://static.wikia.nocookie.net/nomanssky/images/9/9e/Cerveau_de_marcheur.png/revision/latest?cb=20180909132145&path-prefix=fr')
        .addFields(
            { name: '---*initialisée*---', value: '---*En attente de livraison*---'},
            { name: '---*Récompense*---', value: '---*200 XP*---\n---*2000 Métal Corrompu*---'},
            
        )
        .setTimestamp());          

    },
    name: 'f1'
};
const Discord = require('discord.js')

module.exports = {
    run: async message => {
    
    const valid = message.guild.emojis.cache.get(`831196656434937856`)
    const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
        await message.react(valid);
        await message.react(unvalid);
        
    message.channel.send( new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag} \nMission fournisseur \n**Black Rocket Society**`)
        .setDescription('**6 modules Blindage de vaisseau S**')
        .setColor('#C9AE4B')
        .setThumbnail('https://i.ibb.co/YXkc4bG/Module-Bouclier-S.jpg')
        .addFields(
            { name: '---*initialisée*---', value: '---*En attente de livraison*---'},
            { name: '---*Récompense*---', value: '---*50 XP*---\n---*2000 Métal Corrompu*---'},
            
        )
        .setTimestamp());          

    },
    name: 'f4'
};
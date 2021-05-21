const Discord = require('discord.js')

module.exports = {
    run: async message => {
        const valid = message.guild.emojis.cache.get(`831196656434937856`)
        const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
            await message.react(valid);
            await message.react(unvalid);

        message.channel.send( new Discord.MessageEmbed()
            .setTitle(`${message.member.user.tag} \nÉvenement RP 1`)
            .setDescription('**Chapitre 1**')
            .setColor('#000')
            .setThumbnail('https://i.ibb.co/dQT3gw7/Black-Rocket.png')
            .addFields(
                { name: '---*initialisé*---', value: '---*En attente de confirmation*---'},
                { name: '---*Récompense*---', value: '---*600 XP*---\n---*2K Métal Corrompu*---'},
                
            )
            .setTimestamp())
    
        
    },
    name: 'B-Def'
}
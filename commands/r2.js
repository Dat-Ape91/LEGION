const Discord = require('discord.js')

module.exports = {
    run: async message => {
        const valid = message.guild.emojis.cache.get(`831196656434937856`)
        const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
            await message.react(valid);
            await message.react(unvalid);

        message.channel.send( new Discord.MessageEmbed()
            .setTitle(`${message.member.user.tag} \nMission Récolte de Ressources`)
            .setDescription('**50 K Oxygène**')
            .setColor('#6883F5')
            .setThumbnail('https://static.wikia.nocookie.net/nomanssky/images/4/4c/Oxyg%C3%A8ne.png/revision/latest?cb=20180727182334&path-prefix=fr')
            .addFields(
                { name: '---*initialisée*---', value: '---*En attente de livraison*---'},
                { name: '---*Récompense*---', value: '---*250 XP*---\n---*1000 Métal Corrompu*---'},
                
            )
            .setTimestamp())
    
        
    },
    name: 'r2'
}
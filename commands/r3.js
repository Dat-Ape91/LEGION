const Discord = require('discord.js')

module.exports = {
    run: async message => {
        const valid = message.guild.emojis.cache.get(`831196656434937856`)
        const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
            await message.react(valid);
            await message.react(unvalid);

        message.channel.send( new Discord.MessageEmbed()
            .setTitle(`${message.member.user.tag} \nMission Récolte de Ressources`)
            .setDescription('**50 K Argent**')
            .setColor('#6883F5')
            .setThumbnail('https://static.wikia.nocookie.net/nomanssky/images/1/1a/100px-Substance.Silver.png/revision/latest?cb=20190115175935&path-prefix=fr')
            .addFields(
                { name: '---*initialisée*---', value: '---*En attente de livraison*---'},
                { name: '---*Récompense*---', value: '---*100 XP*---\n---*600 Métal Corrompu*---'},
                
            )
            .setTimestamp())
    
        
    },
    name: 'r3'
}
const Discord = require('discord.js')

module.exports = {
    run: async message => {
    
    const valid = message.guild.emojis.cache.get(`831196656434937856`)
    const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
        await message.react(valid);
        await message.react(unvalid);
        
    message.channel.send( new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag} \n**Mission Cargo abandonné**\nClasse S`)
        .setDescription('**Module de cargo S demandé**')
        .setColor('#000000')
        .setThumbnail('https://i.ibb.co/TKZxq3z/cargo-abandonne-S.jpg')
        .addFields(
            { name: '---*initialisée*---', value: '---*En attente de livraison*---'},
            { name: '---*Récompense*---', value: '---*350 XP*---\n---*3500 Métal Corrompu*---'},
            
        )
        .setTimestamp());          

    },
    name: 'cs'
};
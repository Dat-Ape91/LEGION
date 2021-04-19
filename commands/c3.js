const Discord = require('discord.js')

module.exports = {
    run: async message => {
    
    const valid = message.guild.emojis.cache.get(`831196656434937856`)
    const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
        await message.react(valid);
        await message.react(unvalid);
        
    message.channel.send( new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag} \n**Mission Cargo abandonné**\nDéfense sentinelle et parasite`)
        .setDescription('**Métal Corrompu demandé**')
        .setColor('#000000')
        .setThumbnail('https://i.ibb.co/tXhbCfT/Cargo-defense-All.jpg')
        .addFields(
            { name: '---*initialisée*---', value: '---*En attente de livraison*---'},
            { name: '---*Récompense*---', value: '---*300 XP*---\n---*2 Dispositifs de Stase*---'},
            
        )
        .setTimestamp());          

    },
    name: 'c3'
};
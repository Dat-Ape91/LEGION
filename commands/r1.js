const Discord = require('discord.js')

module.exports = {
    run: async message => {
        const valid = message.guild.emojis.cache.get(`831196656434937856`)
        const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
            await message.react(valid);
            await message.react(unvalid);

        message.channel.send( new Discord.MessageEmbed()
            .setTitle(`${message.member.user.tag} \nMission Récolte de Ressources`)
            .setDescription('**150 K Poussière de ferrite**')
            .setColor('#6883F5')
            .setThumbnail('https://static.wikia.nocookie.net/nomanssky/images/d/d6/Poussi%C3%A8re_de_ferrite.png/revision/latest/scale-to-width-down/310?cb=20180727183223&path-prefix=fr')
            .addFields(
                { name: '---*initialisée*---', value: '---*En attente de livraison*---'},
                { name: '---*Récompense*---', value: '---*50 XP*---\n---*200 Métal Corrompu*---'},
                
            )
            .setTimestamp())
    
        
    },
    name: 'r1'
}
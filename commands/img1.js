const Discord = require('discord.js')

module.exports = {
    run: async message => {
        const valid = message.guild.emojis.cache.get(`831196656434937856`)
        const unvalid = message.guild.emojis.cache.get(`831197387153211462`)
            await message.react(valid);
            await message.react(unvalid);

        message.channel.send( new Discord.MessageEmbed()
            .setImage("https://drive.google.com/drive/u/2/folders/1GVi5zO__UjRWDxn_TNXmF2InLWgjbvTg")
            .setTimestamp())
    },
    name: 'img1'
}
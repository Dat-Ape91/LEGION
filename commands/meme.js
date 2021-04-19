const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES'));

        message.channel.send(`**Qui veut un MEME de notre dieu NEFAST ?**`).then(SentEmbed => {
            SentEmbed.react("👍")
        });
    },
    name: 'meme'
}
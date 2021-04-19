const Discord = require('discord.js')

module.exports = {
    run: message => {
        if(message.member.hasPermission('MANAGE_MESSAGES'))
        message.channel.send(`**Ta geule !**`)
    },
    name: 'cavaetretoutnoir'
}
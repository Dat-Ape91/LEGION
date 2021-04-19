const Discord = require('discord.js')

module.exports = {
    run: message => {
        if(message.member.hasPermission('MANAGE_MESSAGES'))
        message.channel.send(`Comme ton vaisseau,\nqui au passage est\n**Trop BADASS !**`)
    },
    name: 'cavaetretoutrouge'
}
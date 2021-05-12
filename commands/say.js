const Discord = require('discord.js')
const config = require('../config.json')

module.exports = {
    run: (message, args) => {
        if(message.member.hasPermission('MANAGE_MESSAGES'))
        if(!args[0]) return message.channel.send('Veuillez indiquer du texte à envoyer.')
        message.delete()
        message.channel.send(message.content.trim().slice(`${config.prefix}say`.length))
    },
    name: 'say'
}
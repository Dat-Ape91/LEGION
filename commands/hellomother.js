const Discord = require('discord.js')

module.exports = {
    run: message => {
        if(message.member.hasPermission('MANAGE_MESSAGES'))
        message.channel.send(`\n*Ripley*, Planète **LV-426-Acheron** à proximitée,\n---*présence de parasites xenomorphes detectée*---\nMerci de vérifier combinaison et soute de ton vaisseau à ton retour.`)
    },
    name: 'hellomother'
}
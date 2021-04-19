const { Message } = require("discord.js");

module.exports = {
    run: Message => Message.channel.send('Nous sommes **LEGION** !'),
    name: 'legion'
}
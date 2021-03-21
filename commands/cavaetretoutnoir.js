module.exports = {
    name: 'cavaetretoutnoir' ,
    description: 'répond ta gueule' ,
    execute(message) {
        if (message.content.startsWith(prefixcmd + "cavaetretoutnoir")) {
            message.reply ("TA GUEULE!");
            }
    }
   
}
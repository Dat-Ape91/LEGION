module.exports = {
    run: message => {
        message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES')){
      
            let args = message.content.trim().split(/ +/g);
      
            if(args[1]){
              if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){
      
                message.channel.bulkDelete(args[1])
              }
            }
        }
    },
    name: 'clear',
    guildOnly: true
}
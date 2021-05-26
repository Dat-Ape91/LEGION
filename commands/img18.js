const { createCanvas, loadImage } = require("canvas");
const { MessageAttachment } = require('discord.js');


module.exports = {
  run: async message => {
    message.delete()
    
    const canvas = createCanvas(1920, 1080);
    const ctx = canvas.getContext("2d");
    const background = await loadImage("./Assets/image 018.jpeg");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const attachment = new MessageAttachment(canvas.toBuffer(), "img18.png");
    message.channel.send(attachment)
  },
  name: 'img18'
}
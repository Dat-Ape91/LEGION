const { createCanvas, loadImage } = require("canvas");
const { MessageAttachment } = require('discord.js');


module.exports = {
  run: async message => {
    message.delete()
    
    const canvas = createCanvas(1932, 554);
    const ctx = canvas.getContext("2d");
    const background = await loadImage("./Assets/image 001.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const attachment = new MessageAttachment(canvas.toBuffer(), "rank.png");
    message.channel.send(attachment)
  },
  name: 'img1'
}
const { createCanvas, loadImage } = require("canvas");
const { MessageAttachment } = require('discord.js');


module.exports = {
  run: async message => {
    message.delete()
    let msgauthor = message.author.id;
      let userxpdb = db.get("Infos_membres").filter({user: msgauthor}).find("xp").value();
      let userxp = Object.values(userxpdb);
      let userniveaudb = db.get("Infos_membres").filter({user: msgauthor}).find("niveau").value();
      let userniveau = Object.values(userniveaudb);
      let userpniveaudb = db.get("Infos_membres").filter({user: msgauthor}).find("xp_p_niveau").value();
      let userpniveau = Object.values(userpniveaudb);

    const canvas = createCanvas(800, 333);
    const ctx = canvas.getContext("2d");
    const background = await loadImage("./Assets/fond.jpg");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#fff"
    ctx.globalAlpha = 0,4;
    ctx.fillStyle = "#000";
    ctx.fillRect(120, 200, 550, 55);
    ctx.globalAlpha = 1;
    ctx.strokeRect(70, 225, 550, 35);

    ctx.fillStyle = "#FFFFFF";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(72, 227, (100 / (`${userpniveau[3]}`) * `${userxp[1]}`) * 5.5, 31);

    ctx.globalAlpha = 1;
    ctx.font = "20px Arial"
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.fillText(`${userxp[1]} / ${userpniveau[3]} XP`, 670, 318);
    
    ctx.textAlign = "center"
    ctx.fillStyle = "#fff"
    ctx.fillText("ID Card Black Squadron", 400, 28);
    ctx.textAlign = "left"
    ctx.font = "30px Arial"
    ctx.fillText(message.member.user.tag, 70, 208);
    ctx.font = "20px Arial"
    ctx.fillText(`Niveau: ${userniveau[2]}`, 160, 318);

    ctx.arc(128, 110, 58, 0, Math.PI * 2, true);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const avatar = await loadImage(message.member.user.displayAvatarURL({ format: "jpg"}));
    ctx.drawImage(avatar, 70, 52, 120, 120);

    const attachment = new MessageAttachment(canvas.toBuffer(), "rank.png");
    message.channel.send(attachment)
  },
  name: 'rank'
}
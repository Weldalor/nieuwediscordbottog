const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let ree = new Discord.RichEmbed()
  .setTitle('Invite me')
  .setThumbnail('')
  .setColor("#0af0dd")
  .setDescription('Press"invite me" so you can invite the bot!') 
  .setURL('https://discord.com/oauth2/authorize?client_id=767754977140801537&scope=bot&permissions=8')
  
  message.channel.send(ree)
  
}
module.exports.help = {
  name: "invite",
}  
  
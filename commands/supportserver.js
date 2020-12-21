const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let ree = new Discord.RichEmbed()
  .setTitle('Supportserver')
  .setThumbnail('')
  .setColor("#0af0dd")
  .setDescription('Press"Support Server" that you can join our server!') 
  .setURL('https://discord.com/invite/EuYkyj9vfN')
  
  message.channel.send(ree)
  
}
module.exports.help = {
  name: "supportserver",
}  
  
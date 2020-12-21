const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#0af0dd")       
.setThumbnail('')
.setFooter('')
.addField('__Help__','__**GENERATOR COMMANDS**__\n\n`*disney` To Get A Disney Account.\n`*napster` To Get A napster Account .\n`*cod`To get a cod accounts\n`*Uplay` To Get A Uplay account .\n`*nordvpn` To Get A NordVPN Account .\n`*Crunchyroll` To Get A Crunchyroll Account .\n`*invite` To invite me to your server .\n `*supportserver` To join our server. \n  **✩** Made By Shanks#8802!');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}

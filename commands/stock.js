const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#0af0dd")
.setFooter('')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`*disney`: 158.\n`*napster`: 98 .\n`*UPlay`: 75 .\n`*nordvpn`: 268.\n`*Crunchyroll`: 158 .\n`*cod ` : 216\n **✩** Remember that you are using the free generator, some accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}

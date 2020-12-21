const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/uplay.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/uplay.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .addField('Support Server', `https://discord.com/invite/EuYkyj9vfN`)
            .addField('Uplay',`\n**${account}**`)
            .setThumbnail('')
            .setColor("#0af0dd")
            .setFooter('Bot made by Shanks#8802')
            .setTimestamp();

            msg.author.send(embed);

            msg.reply('I\'ve sent you the account! Please check your DM!')
              

            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 1 * 3600);
        });
    }
};

module.exports.help = {
    name: `origin`,
    description: `Sends you a Origin account!`
};
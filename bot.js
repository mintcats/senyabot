const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '!'

client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('Привет я БОТ!');
     }
});

client.login('NDQxOTc3MDI5MTMxNTAxNTY4.Dc4HsQ.90Lpo4xC3oPxF2aFNEtmVU0EmMo');

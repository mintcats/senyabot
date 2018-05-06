const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '!';
var peoples = ['Сеня', 'Лера', 'Владик', 'Влад', 'Джэ', 'Настя'];
var number = 0;

client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'add'))   {var message_split = message.content.split(' '); peoples.push(message_split[1]); message.channel.sendMessage(peoples);};
    if(message.content.startsWith(prefix + 'who'))   {message.channel.sendMessage(peoples[number]);};
    if(message.content.startsWith(prefix + 'list'))  {message.channel.sendMessage(peoples);};
    if(message.content.startsWith(prefix + 'next'))  {number = number+1; if(number > peoples.length){number = 0;}; message.channel.sendMessage(peoples[number]); };
    if(message.content.startsWith(prefix + 'remove')){var message_split = message.content.split(' '); var index = peoples.indexOf(message_split[1]); peoples.splice(index,1); message.channel.sendMessage(peoples);};
    });

client.login();

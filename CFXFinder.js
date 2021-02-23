
const Discord = require('discord.js')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const client = new Discord.Client();
const prefix = '-'

client.login('bottokken');

client.once('ready', () => {
    
});
var headers;
var name;

function request(url)
{
    var req = new XMLHttpRequest();
    req.open('GET', args, false);
    req.send(null);
    headers = req.getResponseHeader('x-citizenfx-url').toLowerCase();  
    name = req.getResponseHeader('x-citizenfx-join-token').toLowerCase();  
}

client.on("message", function(message) {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

    if (command === 'find') {

        const channel01 = client.channels.cache.find(channel => channel.id === 'channelid');

        if (!args.length) {
            return channel01.send(`You didn't provide any arguments, ${message.author}!`);
        }

        do {
            request(args)
        }while(headers.startsWith('h'))

        if(!headers.startsWith('h')){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
             .setTitle('Ultimate Rat CFX Finderino.')
     
       
             .addFields(
                { name: 'CFX', value: args },
                { name: 'Join token', value: name },
                { name: 'IP Address', value: headers },
              )
             .setTimestamp()
             .setFooter('Ultimate Rat CFX Finderino.');
            channel01.send(exampleEmbed);
        }
    

    }





});



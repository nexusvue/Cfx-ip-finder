
const Discord = require('discord.js')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const client = new Discord.Client();
const prefix = '-'

client.login('token');

client.once('ready', () => {
    
});
 

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
            var req = new XMLHttpRequest();
            req.open('GET', args, false); // open connection to selected cfx url
            req.send(null); 
            var headers = req.getResponseHeader('x-citizenfx-url').toLowerCase();  
            var name = req.getResponseHeader('x-citizenfx-join-token').toLowerCase();  
        }while(headers.startsWith('h'))  // sometimes result is url idk why but this makes sure that u don't get https address as result

        if(!headers.startsWith('h')){ // check if the isn't url
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



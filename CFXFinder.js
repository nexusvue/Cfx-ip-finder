
const Discord = require('discord.js')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const client = new Discord.Client();
const prefix = '-'
client.login('');

client.on('ready', () => {
	console.log(`bot, is ready for use.`, "ready");	
});

function Ipaddress(link, channel, user) {
	console.log('Trying to find ip for ' + user);
	try {
		const location = client.channels.cache.get(channel);
		const req = new XMLHttpRequest();
			req.open('GET', link, false);
			req.send(null); 
			const headers = req.getResponseHeader('x-citizenfx-url');
			if(headers.includes('https://')) {
				Ipaddress2(link)
			} else {
				const Message = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle('Ultimate Rat CFX Finderino.')
				.addFields(
				{ name: 'CFX', value: link },
				{ name: 'IP Address', value: headers },
				)
				.setTimestamp()
				.setFooter('Ultimate Rat CFX Finderino.');
				location.send(Message);
			}
	}catch (error) {
			Ipaddress2(link)
	}
}

function Ipaddress2(link) {
	 setTimeout(Ipaddress, link ,1000);
}
	
	
	function Main(url, channel) {
			try {
				do {
					var req = new XMLHttpRequest();
					req.open('GET', url, false);
					req.send(null);
					var headers = req.getResponseHeader('x-citizenfx-url');
				}while(headers.includes('https'))
				if(headers.includes('https://')) {				
				} else {
					const location = client.channels.cache.get(channel);
					const exampleEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Ultimate Rat CFX Finderino.')
					.addFields(
					{ name: 'CFX', value: url },
					{ name: 'IP Address', value: headers },
					)
					.setTimestamp()
					.setFooter('Ultimate Rat CFX Finderino.');
					location.send(exampleEmbed);
				}		
			} catch(err) {
			}
	}
	

client.on("message", function(message) {
		if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
    if (command === 'find') {
		const link = args[0];
			if (!args.length) {
				const exampleEmbed33 = new Discord.MessageEmbed()
					.setColor('#f00028')
					.setTitle('Error.')
					.setDescription(`You didn't provide any arguments, ${message.author}!`)
					.setTimestamp()
					.setFooter('Error.');
						message.channel.send(exampleEmbed33);
		} else if(link.includes('https://')) {
			const channel = message.channel.id;
			Main(link, channel);
		} else {
			const exampleEmbed33 = new Discord.MessageEmbed()
			.setColor('#f00028')
			.setTitle('Error.')
			.setDescription(`Invalid URL, ${message.author}!`)
			.setTimestamp()
			.setFooter('Error.');
			message.channel.send(exampleEmbed33);
		}
	}
});


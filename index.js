console.clear();
console.log('[INFO]: Loading...');
//auto-meme bot coded by Pushkar >:D
const { EmbedBuilder } = require('discord.js');
const { Client } = require('discord.js');
const Discord = require('discord.js');
const config = {
  token: process.env['top.secret.token'],
  channelID: process.env['secret.channelid'],
  time: 20, //Seconds After Another Meme Will Be Posted, Min 2
}
const got = require('got');
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});

const keepAlive = require('./server.js')
keepAlive()

const subReddits = [
	'meme',
	'dankmeme',
	'minecraft',
	'dankmemes',
	'MemeEconomy',
	'ComedyCemetery',
	'memes',
	'PrequelMemes',
	'terriblefacebookmemes',
	'funny'
];
const random = subReddits[Math.floor(Math.random() * subReddits.length)];

console.log('-------------------------------------');
console.log('Bot Made By Pushkar');
console.log('-------------------------------------');
client.on('ready', () => {
	console.log(`[INFO]: Ready on client (${client.user.tag})`);
	client.user.setActivity(`Playing MagicGames`);
	setInterval(() => {
		let channel = client.channels.cache.get(config.channelID);
		if (!channel) return console.log('[ERROR]: Channel Not Found');
		got(`https://www.reddit.com/r/${random}/random/.json`).then(response => {
			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			//let memeUrl = `https://reddit.com${permalink}`;
			let memeImage = content[0].data.children[0].data.url;
			let memeTitle = content[0].data.children[0].data.title;
			let memeUpvotes = content[0].data.children[0].data.ups;
			let memeDownvotes = content[0].data.children[0].data.downs;
			let memeNumComments = content[0].data.children[0].data.num_comments;
    	if (!memeImage) return console.log('[ERROR]: Image Not Found');
			const memeEmbed = new EmbedBuilder()
			.setColor('#ffc256')
    	.setTitle(`${memeTitle}`)
    	.setImage(memeImage)
	    .setFooter({ text: `👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`});
      channel.send({ embeds: [memeEmbed] });
			console.log('[INFO]: Meme Posted');
		});
	}, config.time*1000);
});

client.login(config.token).catch(err => {
	console.log('[ERROR]: Invalid Token Provided');
});

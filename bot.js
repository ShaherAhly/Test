const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

const Discord = require('discord.js');
const hero = new Discord.Client({disableEveryone: true});
const config = {
  enabled: 'true',
  prefix: '1#'
};
hero.login(".."); // process.env.DIV
hero.on('ready',async () => {
  console.log(`# Started Working.`);
    let guild = hero.guilds.get('501472885513256960');
    let c = guild.channels.get('501472951791779841');
    let x = 1;
    setInterval(() => {
    if(config.enabled !== 'true') return;
    c.send(`**، Farming Working - \`${x++}\`**`);
  }, 354)
});

hero.on('message',async message => {
  let args = message.content.split(' ');
  if(args[0] === config.prefix + "enable") {
    if(config.enabled === 'true') return message.channel.send(`**:white_small_square: The spammer is already enabled.**`);
    config.enabled = 'true';
    console.log(config.enabled);
    message.channel.send(`**:white_small_square: Successfully enabled the spammer.**`);
  } else if(args[0] === config.prefix + "disable") {
    if(config.enabled === 'false') return message.channel.send(`**:white_small_square: The spammer is already disabled.**`);
    config.enabled = 'false';
    console.log(config.enabled);
    message.channel.send(`**:white_small_square: Successfully disabled the spammer.**`);
  } else if(args[0] === config.prefix + "say") {
    if(!args[1]) return message.channel.send(`**:white_small_square: Argument is missing.**`);
    message.channel.send(args.slice(1).join(' '));
  }
});

client.login(process.env.BOT_TOKEN);

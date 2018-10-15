const config = {
  enabled: 'true',
  prefix: '1#'
};
client.login(process.env.BOT_TOKEN); // process.env.DIV
client.on('ready',async () => {
  console.log(`# Started Working.`);
    let guild = client.guilds.get('497083850959224834');
    let c = client.channels.get('500044819222233109');
    let x = 1;
    setInterval(() => {
    if(config.enabled !== 'true') return;
    c.send(`**، Farming Working - \`${x++}\`**`);
  }, 354)
});

client.on('message',async message => {
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

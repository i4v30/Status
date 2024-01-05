const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Riyadh',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('991014506958303243')
    .setType('PLAYING')
    //.setURL('https://www.twitch.tv/i4v30')  .
   // .setState(' ')
    .setName('طلال مداح 😴')
    // .setDetails(`Abdualziz [${formatTime()}]`)
    // .setDetails(` `)
    //.setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1157663705161531534/1176476627555856404/IMG_8713.gif')
    //.setAssetsLargeText(' ')
    // .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1157663705161531534/1188142989311217684/852984572392112188.gif')
    //.setAssetsSmallText('AL-Hilal')
    .addButton('instagram', 'https://www.instagram.com/5a7a1')
    .addButton('SnapChat', 'https://www.snapchat.com/add/i4v30')
    

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      //const newDetails = `UK time zone [${newTime}]`;
      const newDetails = ` `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
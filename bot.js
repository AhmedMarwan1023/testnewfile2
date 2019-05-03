const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "+"
 
client.on('ready', () => {
console.log(`Online.`);
 });
 
 const pics = JSON.parse(fs.readFileSync('./Avatars.json' , 'utf8'));
 client.on('message', message => {
         if (!message.channel.guild) return;
 
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find('name', `${room}`)
  if(message.content.startsWith(prefix + "setMedia")) {
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!room) return message.channel.send('Please Type The Channel Name')
      if(!findroom) return message.channel.send('Cant Find This Channel')
      let CodingAvatar = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setAuthor(message.author.username,message.author.avatarURL)
      .setTitle('**`{ تـــم تـحديد روم الصور }`**')
      .addField('➥ { روم الصور } :', `${room}`)
      .addField('➥ { بواسطة } :', `${message.author}`)
      .setColor('#36393e')
      .setTimestamp()
      .setFooter(message.guild.name, message.guild.iconURL)
      message.channel.sendEmbed(CodingAvatar)
      pics[message.guild.id] = {
      channel: room,
      onoff: 'On'
      },
      fs.writeFile("./Avatars.json", JSON.stringify(pics), (err) => {
      if (err) console.error(err)
     
      })
    }})
       
client.on('message', message => {
 
  if(message.content.startsWith(prefix + "toggleMedia")) {
          if (!message.channel.guild) return;
         
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
      if(pics[message.guild.id].onoff === 'On') return [message.channel.send(`**تــ ألغــاء شات الصــور ــم**`), pics[message.guild.id].onoff = 'Off']
      if(pics[message.guild.id].onoff === 'Off') return [message.channel.send(`**تـــ تفعـيل شات الصور ــم**`), pics[message.guild.id].onoff = 'On']
        fs.writeFile("./Avatars.json", JSON.stringify(pics), (err) => {
          if (err) console.error(err)
         
          })
        }
       
      })
     
             client.on('message', message => {
                       if (!message.channel.guild) return;
  if(message.author.bot) return;
 
        if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return;
 
  if(message.channel.name !== `${pics[message.guild.id].channel}`) return;
 
   let types = [
    'jpg',
    'jpeg',
    'png'
  ]
   if (message.attachments.size <= 0) {
    message.delete();
    let Cosing = new Discord.RichEmbed()
    .setDescription(`**{ هــذا الروم لــي الصرو فقـط } : ${message.author}**`)
    .setColor('#36393e')
     .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}
   if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
 
      let Cosing = new Discord.RichEmbed()
      .setDescription(`**{ هــذا الروم لــي الصرو فقـط } : ${message.author}**`)
      .setColor('#36393e')
 
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
      .catch(err => {
        console.error(err);
    });
    }
  }
 })
client.on('message', message => {
  if(message.content.startsWith(prefix + "infoMedia")) {
let CodingAvatar = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(message.author.username,message.author.avatarURL)
.addField('➥ { روم الصور مفعل او لا }', `${pics[message.guild.id].onoff}`)
.addField('➥ { روم الصور } :', `${room}`)
.addField('➥ { بواسطة } :', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setColor('#36393e')
.setTimestamp()
.setFooter(message.guild.name, message.guild.iconURL)
message.channel.sendEmbed(CodingAvatar)
  }})
  
  
 const ms = require('ms'); // npm i ms
const fs = require("fs")
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credits")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**Only Numbers | :x:**');
    if(mention.bot) return message.channel.send(`**Please Include Right name | :x:**`);
    if(mention.id === message.author.id) return message.channel.send('**You Cant Translate credits to youself**');
    if(credits[author].credits < balance) return message.channel.send('**Your balance is not enough for that | :x:**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**Write This Number \`${number}\`**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**You Translate \`${balance}\` Coins To ${mention} | :atm:**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`**Timed Out | :x:**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**Please Include Right name | :x:**`);
    message.channel.send(`${mention}'s Coins is $**${credits[mention.id].credits}**`);
  }
 
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**You need to wait a Day | :x:**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
 
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**Write This Number \`${number}\`**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
          message.channel.send(`**${message.author.username} Has Transalte \`${daily}\`  to ${args} Coins!**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
      message.channel.send(`**You Got \`${daily}\` Coins!**`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      console.log("Happy New Day!").catch();
    }, ms("1d"));
  }
});


client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js')
const bot = new Discord.Client()
const White = require('./commands/white')

bot.on('ready', function () {
    bot.user.setAvatar('if.jpg')
    .then( () => console.log('Succès'))
    .catch(console.error)
})

bot.on('message', function (message) {

    if (White.match(message)) {
        return White.action(message)
    }

    if (message.content === '!ping') {
        message.channel.send('pong')
    }
  
})

bot.login('NjExOTgyNTE0MTM0OTc0NDY0.XVbvVg.XV9J6SqFb3bQAYKEPB_BqQteLLQ')


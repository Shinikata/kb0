const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le server du Clan ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})

bot.on('message', function (message){
    if(message.content === 'ping'){
        message.reply("Tu crois que j'allais te répondre pong ?!")
    }
})

bot.login('NDUzMjA0ODE4OTkxNzc1NzYz.Dfbn2g.08jefqOCEaToZYRWiqAsAfaii4Y')


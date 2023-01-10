const Discord = require('discord.js')

const client = new Discord.Client()

const config = require('./config.json')

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`)
})

client.on('message', async message => {

    let args = message.content.slice(config.prefix.length).trim().split(/ +/)
    let command = args.shift().toLowerCase()







    const firstQuestion = new Discord.MessageEmbed()
    .setColor('#ffdb00')
    .setThumbnail('https://media2.giphy.com/media/LcPir60gH3sQ8uk30W/giphy.gif')
    .setDescription(`Nickname / Age`)
    .setFooter(" Bot System | MidNight Club ", "https://cdn.discordapp.com/attachments/830858135258267688/831090436000710726/nightnightclub.png")


    const secondQuestion = new Discord.MessageEmbed()
    .setColor('#ffdb00')
    .setThumbnail('https://media2.giphy.com/media/LcPir60gH3sQ8uk30W/giphy.gif')
    .setDescription(`Your personal Intresses`)
    .setFooter(" Bot System | MidNight Club ", "https://cdn.discordapp.com/attachments/830858135258267688/831090436000710726/nightnightclub.png")


    const thirdQuestion = new Discord.MessageEmbed()
    .setColor('#ffdb00')
    .setThumbnail('https://media2.giphy.com/media/LcPir60gH3sQ8uk30W/giphy.gif')
    .setDescription(`Your Nationality`)
    .setFooter(" Bot System | MidNight Club ", "https://cdn.discordapp.com/attachments/830858135258267688/831090436000710726/nightnightclub.png")

    const fourthQuestion = new Discord.MessageEmbed()
    .setColor('#ffdb00')
    .setThumbnail('https://media2.giphy.com/media/LcPir60gH3sQ8uk30W/giphy.gif')
    .setDescription(`You are currently a student or worker`)
    .setFooter(" Bot System | MidNight Club ", "https://cdn.discordapp.com/attachments/830858135258267688/831090436000710726/nightnightclub.png")


    if (!message.content.startsWith(config.prefix) || message.author.bot) return
    if (command === "verify") {
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`Hi** ${message.author.tag}.**`)
            .setColor('#ffdb00')
            .setThumbnail('https://media2.giphy.com/media/LcPir60gH3sQ8uk30W/giphy.gif')
            .setDescription(`Your form has just been sent!`)
            .setFooter(" If you have any doubts Get in touch with STAFF | On **Support Zone**", "https://media2.giphy.com/media/LcPir60gH3sQ8uk30W/giphy.gif")
            )
      
        
        message.author.send(firstQuestion).then(msg => {
            const filter1 = m => m.author.id === message.author.id
            msg.channel.awaitMessages(filter1, {
                time: 5 * 60000,
                max: 1
            }).then(messages => {
                let msg1 = messages.first().content
                if(msg1.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                message.author.send(secondQuestion).then(msg => {
                    const filter1 = m => m.author.id === message.author.id
                    msg.channel.awaitMessages(filter1, {
                        time: 5 * 60000,
                        max: 1
                    }).then(messages => {
                        let msg2 = messages.first().content
                        if(msg2.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                        message.author.send(thirdQuestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1
                            }).then(messages => {
                                let msg3 = messages.first().content
                                if(msg3.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                message.author.send(fourthQuestion).then(msg => {
                                    const filter1 = m => m.author.id === message.author.id
                                    msg.channel.awaitMessages(filter1, {
                                        time: 5 * 60000,
                                        max: 1
                                    }).then(messages => {
                                        let msg4 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                       
                                                message.author.send("Formulário Enviado!").then(msg => {
                                                    message.client.channels.cache.get(config.applicationChannel).send(
                                                        new Discord.MessageEmbed()
                                                            .setTitle('Novo Formulário')
                                                            .setDescription(`Este Formulário foi enviado por ** ${message.author.tag}.**`)
                                                            .addField(` <a:arrow:831095475012239410> Nickname / Age `, "Resposta: " + msg1)
                                                            .addField(`<a:arrow:831095475012239410> Your personal Intresses `, "Resposta: " + msg2)
                                                            .addField(`<a:arrow:831095475012239410> Your Nationality `, "Resposta: " + msg3)
                                                            .addField(`<a:arrow:831095475012239410> You are currently a student or worker `, "Resposta: " + msg4)
                                                    )
                                                
                                                    })
                                         })
                                            })
                                        })
                            
                        })
                    })
                })
            })
        })
    }
})

client.login(config.token)
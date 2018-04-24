const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity('Prefix: >');
});

client.on("message", async message => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const arguments = message.content.slice(config.prefix.length).trim().split(/ +/g);
  if (message.content.startsWith(">general")) {
    await message.delete(0);
    return message.channel.send("***Your overlord ***<:limera1n:432296862670651402> <@374206306912960512> <:limera1n:432296862670651402>***DEMANDS you use ***<#432577874675892227>");

  }else if (message.content.startsWith(">ai-general")) {
    await message.delete(0);
    return message.channel.send("***Your overlord ***<:limera1n:432296862670651402> <@374206306912960512> <:limera1n:432296862670651402>***DEMANDS you use ***<#433298308245749760>");
  } else if (message.content.startsWith(">kick")) {
    await message.delete(0);
    if(!message.member.roles.some(r=>["Founder", "Administrator", "Moderator"].includes(r.name)) )
      return message.channel.send({embed: {
        color: 16711680,
        description: "***Your not a high enough rank you inbred piece of shit.***"
      }})

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.channel.send({embed: {
        color: 16711680,
        description: "***Pick a member you fucking vegetable.***"
      }})
    if(!member.kickable)
      return message.channel.send({embed: {
        color: 16711680,
        description: "***Don't try to kick higher ranks fucknut.***"
      }})
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
      let user = message.mentions.users.first();
      await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      for (i = 0; i <= 1; i++){
        await message.channel.send({embed: {
          color: 1638655,
          title: "Member Kicked",
          thumbnail: {
            url: user.avatarURL
          },
          fields: [{
              name: "Member",
              value: arguments[1]
            },
            {
              name: "Moderator",
              value: `${message.author}`
            },
            {
              name: "Reason",
              value: arguments[2]
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "EOBot ModUtils"
          }
        }})
      }
  } else if (message.content.startsWith(">avatar")) {
    var messagez = ' '
    await message.delete(0);
    if (message.content.indexOf(' ') !== -1) {
      let user = message.mentions.users.first();
      let avtr = user.avatarURL;
      return message.reply(avtr);
    } else {
        let avtr = message.author.avatarURL;
        return message.channel.reply(avtr);
    }
  } else if (message.content.startsWith(">debug")){
    let user = message.mentions.users.first();
    return message.author.send({embed: {
    color: 1638655,
    title: "Henlo",
    description: arguments[1],
    image: {
      url: "https://cdn.discordapp.com/attachments/436681065437069324/437285570834726932/Mlady._Animated_-_Imgur.gif"
    },
    thumbnail: {
      url: user.avatarURL
    },
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    }
  }})
  } else if (message.content.startsWith(">lmgtfy")){
    await message.delete(0);
    let cntnt = args.slice(1).join(' ');
    let rplc = cntnt.replace(/ /g, "+");
    return message.reply("http://lmgtfy.com/?q=" + rplc);
  } else if(message.content.startsWith(">purge")) {
      const deleteCount = parseInt(arguments[1], 10);
      if(!deleteCount || deleteCount < 2 || deleteCount > 100){
        return message.channel.send({embed: {
          color: 16711680,
          description: "***Between 2 and 100 you fucking retard.***"
        }})
      } else {
        const fetched = await message.channel.fetchMessages({count: deleteCount});
        await message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`You completely fucked up here: ${error}`));
        return message.channel.send({embed: {
          color: 1638655,
          description: "***mk, deleted " + deleteCount*10 + " messages***"
        }})
    }
  } else if (message.content.startsWith(">help")){
      await message.delete(0);
      if (arguments[1] == "general"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>general```***"
        }})
      } else if (arguments[1] == "ai-general"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>ai-general```***"
        }})
      } else if (arguments[1] == "kick"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>kick [user] [reason]```***"
        }})
      } else if (arguments[1] == "avatar"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>avatar [user]```***"
        }})
      } else if (arguments[1] == "debug"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>debug```***"
        }})
      } else if (arguments[1] == "lmgtfy"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>lmgtfy [your query]```***"
        }})
      } else if (arguments[1] == "purge"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>purge [number between 2 and 100]```***"
        }})
      } else if (arguments[1] == "help"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>help [leave blank for list, or put in command]```***"
        }})
      } else if (arguments[1] == "ban"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>ban [username] [reason]```***"
        }})
      } else if (arguments[1] == "nou"){
        return message.channel.send({embed: {
          color: 1638655,
          description: "***Usage: ```>nou [username]```***"
        }})
      } else {
      return message.channel.send({embed: {
        color: 1638655,
        title: "EOBot -- created with hate by eobsite1",
        thumbnail: {
          url: client.user.avatarURL
        },
        fields: [{
         name: ">general",
         value: "posts a message about general."
       },
       {
         name: ">ai-general",
         value: "posts a message about apple internal general."
       },
       {
         name: ">kick",
         value: "fucks a member out of your server."
       },
       {
         name: ">avatar",
         value: "lets you get your avatar or steal someone elses."
       },
       {
         name: ">debug",
         value: "See what the newest feature im testing is."
       },
       {
         name: ">lmgtfy",
         value: "If your dealing with a fucktard who doesnt know how to google."
       },
       {
         name: ">purge",
         value: "purges your current channel."
       },
       {
         name: ">help",
         value: "displays this message."
       },
       {
         name: ">ban",
         value: "bans a person."
       },
       {
         name: ">nou",
         value: "lets you flex on someone with your no u."
       }
     ],
     timestamp: new Date(),
     footer: {
       icon_url: client.user.avatarURL,
       text: "EOBot ModUtils"
     }
    }})
  }
} else if (message.content.startsWith(">ban")) {
  await message.delete(0);
  if(!message.member.roles.some(r=>["Founder", "Administrator", "Moderator"].includes(r.name)) )
    return message.channel.send({embed: {
      color: 16711680,
      description: "***Your not a high enough rank you inbred piece of shit.***"
    }})

  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.channel.send({embed: {
      color: 16711680,
      description: "***Pick a member you fucking vegetable.***"
    }})
  if(!member.bannable)
    return message.channel.send({embed: {
      color: 16711680,
      description: "***Don't try to ban higher ranks fucknut.***"
    }})
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
    let user = message.mentions.users.first();
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    for (i = 0; i <= 1; i++){
      return message.channel.send({embed: {
        color: 1638655,
        title: "Member Banned",
        image: {
          url: user.avatarURL
        },
        fields: [{
            name: "Member",
            value: arguments[1]
          },
          {
            name: "Moderator",
            value: `${message.author}`
          },
          {
            name: "Reason",
            value: arguments[2]
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "EOBot ModUtils"
        }
      }})
    }

} else if (message.content.startsWith(">nou")) {
  await message.delete(0);
  let user = message.mentions.members.first()
  if(!user)
    return message.channel.send({embed: {
      color: 16711680,
      description: "***Pick a fucking member you gangreous whore.***"
    }})
  await message.author.send("you flexed on " + arguments[1])
  await user.send("You were flexed on by " + message.author)
  return message.channel.send({embed: {
    color: 1638655,
    description: arguments[1] + " no u."
  }})
} else if (message.content.startsWith(">")) {
      await message.delete(0);
      return message.reply("***Thats not a command you ignorant fuck.***");
  }
});
client.login("NDM1MTY1MDYzMzMxMTg0NjQw.Dbk1_g.WKfaqxuC-sQRsE968Cn06RYR69k");


const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`poolnetwork`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`poolnetwork`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`poolnetwork`);
});
client.on('message', message => {
 if (message.channel.id === "480095982328217601") {
      message.react("👍");
      message.react("👎");
  }
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  
  if(command === "ip") {
	var embed = new Discord.RichEmbed()
	   .setColor("4286f4")
	   .addField("IP:", ":question:")
	return 	message.channel.sendEmbed(embed);;
  }
  if(command === "staff") {
	var embed = new Discord.RichEmbed()
	   .setColor("4286f4")
	   .setDescription("<@&479958216512634891>")
	   .addField(":crown: Eigenaar:crown: :", "<@339129526082732032>")
	   .addField(":star:Admin:star:", "<@264402980026056704>")
	   .addField(":white_medium_small_square:Moderator:white_medium_small_square: ", "<@388731611631452174>")
	   .addField("Developer", "<@432052898432679936>")
	   .addField("Discord helper", "<@363739556450664489>")
	   .addField("Designer", "<@377125360053256192>")
	return message.channel.sendEmbed(embed);
  }
  if(command === "idee") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
	var embed = new Discord.RichEmbed()
		.addField("Idee van:", "<@user.id>")
		.addField("idee:", sayMessage)
    message.channel.sendEmbed(embed);

		
  }
    if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  if(command === "welkomplaatje") {
	message.channel.send({files: ["https://cdn.discordapp.com/attachments/438080530551013388/480394140576907264/20180818_170844.png"]});
  }

});

client.login(config.token);
           

000// Bot PGM

const Discord = require('discord.js');
const bot = new Discord.Client();
const http = require('http');
// Config
const config = require("./config.json");
const chat = require("./chat.json");
const announce = require("./announce.json");

//Dummy http server to avoid toggling state on Heroku. Can be useful later
const port = process.env.PORT || 1337

const requestHandler = (request, response) => {
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

// Demarrage
bot.on("ready", () => {
	console.log("INFO : Program "+config.bot.name+" has started !");

  //Back message
  bot.guilds.forEach((guild) => {
      if(guild.available){
        guild.channels.find('name', 'idle-ro_discussion').send(`I'm back bitches!`);
      }
  });
	// Back message
	// Messages automatiques
	const interval = bot.setInterval(function () {
		var channel;
		var target;
		var date = new Date();
		var day = date.getDay();
		var hour = date.getHours();
		var min = date.getMinutes();
		bot.guilds.forEach(function(guild) {
			if (guild.available) {
				announce.broadcasts.forEach(function(broadcast) {
					// Temps
					var isTime = false;
					broadcast.times.forEach(function(time) {
						if (time.days.indexOf(day) > -1 && time.hours.indexOf(hour) > -1 && time.mins.indexOf(min) > -1) {
							isTime = true;
						}
					});
					if (isTime) {
						channel = guild.channels.find("name", broadcast.channel);
						if (channel) {
							// Cible
							if (broadcast.role) { target = guild.roles.find("name", broadcast.role); }
							else if (broadcast.user) { target = guild.members.find("displayName", broadcast.user); }
							else { target = false; }
							// Message
							if (target) {
								channel.send(target + " : " + broadcast.msg);
							} else {
								channel.send(broadcast.msg);
							}
						}
					}
				});
			}
		});
	}, 60000);

});

// Pour chaque message
bot.on("message", async message => {

	const messageClean = message.content.trim().toLowerCase();
	const sender = message.author;
	const member = message.member;
	if (sender.bot) return; // Ignore les autres bots

	const jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
	const mois = new Array("janvier", "f�vrier", "mars", "avril", "mai", "juin", "juillet", "ao�t", "septembre", "octobre", "novembre", "d�cembre");

	// Chat
	if (message.channel.name === config.bot.canalflood) {
		chat.converse.forEach(function(converse) {
			if ((! converse.botname && messageClean.indexOf(config.bot.shortname) === -1) || (converse.botname && messageClean.indexOf(config.bot.shortname) > -1)) {
				var isTalk = true;
				converse.questions.forEach(function(question) {
					var isTalkQuestion = false;
					question.words.forEach(function(word) {
						if ((converse.lookup === "partial" && messageClean.indexOf(word) > -1) ||
            (converse.lookup === "specific" && messageClean === word) ||
            (converse.lookup === 'specific' && converse.botname && !!messageClean.match(new RegExp(word)))) {
							isTalkQuestion = true;
						}
					});
					if (! isTalkQuestion) {
						isTalk = false;
					}
				});
				if (isTalk) {
					message.reply(converse.answer);
				}
			}
		});
	}

	// Commandes du bot
	if (message.content.indexOf(config.bot.prefix) === 0) {
		const args = message.content.slice(config.bot.prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();

		// Commande help
		if (command === "help") {
			var m = "Commandes utilisateurs : !ping !time";
			if (member.roles.find("name", "Modo")) {
				m += "\nCommandes admin : !announce";
			}
			message.channel.send(m);
		}


		// Commande ping
		if (command === "ping") {
			const m = await message.channel.send("Ping ?");
			m.edit("Pong! Lattence de discord : "+(m.createdTimestamp-message.createdTimestamp)+"ms. Latence du bot : "+Math.round(bot.ping)+"ms");
		}

		// Commande time
		if (command === "time") {
			var date = new Date();
			var heures = date.getHours(); if (heures < 10) { heures = "0" + heures; }
			var minutes = date.getMinutes(); if (minutes < 10) { minutes = "0" + minutes; }
			var secondes = date.getSeconds(); if (secondes < 10) { secondes = "0" + secondes; }
			var m = "Nous sommes " + jours[date.getDay()] + " " + date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear() + ". ";
			m += "Il est : "+ heures + ":" + minutes + ":" + secondes +".";
			message.reply(m);
		}

		// Commande help
		if (command === "announce") {
			if (member.roles.find("name", "Modo")) {
				var isSent = false;
				var m = "";
				announce.broadcasts.forEach(function(broadcast) {
					if (broadcast.name === args[0]) {
						channel = message.guild.channels.find("name", broadcast.channel);
						if (channel) {
							// Cible
							if (broadcast.role) { target = message.guild.roles.find("name", broadcast.role); }
							else if (broadcast.user) { target = message.guild.members.find("displayName", broadcast.user); }
							else { target = false; }
							// Message
							if (target) {
								channel.send(target + " : " + broadcast.msg);
							} else {
								channel.send(broadcast.msg);
							}
							isSent = true;
						}
					} else {
						m += broadcast.name + " : A ";
						if (broadcast.role) { m += "@"+broadcast.role; }
						if (broadcast.user) { m += "@"+broadcast.user; }
						m += " dans #" + broadcast.channel;
						broadcast.times.forEach(function(time) {
							m += " : ";
							time.days.forEach(function(day) { m += jours[day] + " "; });
							time.hours.forEach(function(hour) { m += hour + "h "; });
							time.mins.forEach(function(min) { m += min + "min "; });
						});
						m += " \n";
					}
				});
				if (! isSent) {
					message.channel.send(m);
				}
			}
		}

	}

});

bot.login(config.bot.token);

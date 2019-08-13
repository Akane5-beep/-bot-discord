const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("je suis prêt");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`))
    msg.reply("Pong!");
});

client.login(TOKEN);

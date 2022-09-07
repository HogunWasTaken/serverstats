const { Client, Collection, MessageEmbed, DiscordAPIError, Channel } = require("discord.js");
const Discord = require('discord.js');

module.exports.config = {
    name: "ping",
    aliases: ["pong"] //// Change this to change your node's name ////
}

module.exports.run = async (client, message, args) => {
  message.channel.send(`**pc name or node** latency is ${Date.now() - message.createdTimestamp}ms. api latency is ${Math.round(client.ws.ping)}ms`);
}

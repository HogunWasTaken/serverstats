const { Client, Collection, MessageEmbed, DiscordAPIError, Channel } = require("discord.js");
const Discord = require('discord.js');
const osu = require('node-os-utils')
const mem = osu.mem
const drive = osu.drive
const cpu = osu.cpu
const os = osu.os

module.exports.config = {
    name: "all",
    aliases: ["arm"] //// Change this to change your node's name ////
}

module.exports.run = async (client, message, args) => {
    mem.info().then(Ram => {
      cpu.usage().then(Cpu => {
         let DeviceIP = os.ip();
         let time = os.uptime();
           let hours = secondsToHms(time);
                let embed = new Discord.MessageEmbed()
                  .setAuthor("denises raspberry pi 4b | 2")  //// Change this to change the title ////
                  .setFooter("privacy")
                  .setColor("FF7F00")  //// Change this to the colour you want | hex colour btw ////
                  .setDescription("----- **Node Info** ----```" + `Ram Usage: ${Math.round(Ram.usedMemMb / 1000)} GB / ${Math.round(Ram.totalMemMb / 1000)}GB\nCPU Usage: ${Cpu}%\nUptime: ${hours}`+"```----- **Physical Info** -----```" + `CPU: ${cpu.count()} Threads | ${cpu.model()}` + "```") 
                message.channel.send(embed);
         }) 
     })
function secondsToHms(seconds) {
  if (!seconds) return '';
    let duration = seconds;
      let hours = duration / 3600;
        duration = duration % (3600);
 
  let min = parseInt(duration / 60);
    duration = duration % (60);
      let sec = parseInt(duration);
 
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (parseInt(hours, 10) > 0) {
    return `${parseInt(hours, 10)}h ${min}m ${sec}s`
  } else if (min == 0) {
    return `${sec}s`
  } else {
    return `${min}m ${sec}s`
  }
}
}

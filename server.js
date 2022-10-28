const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`
          ██████╗░██╗░░░██╗░██████╗██╗░░██╗██╗░░██╗░█████╗░██████╗░
          ██╔══██╗██║░░░██║██╔════╝██║░░██║██║░██╔╝██╔══██╗██╔══██╗
          ██████╔╝██║░░░██║╚█████╗░███████║█████═╝░███████║██████╔╝
          ██╔═══╝░██║░░░██║░╚═══██╗██╔══██║██╔═██╗░██╔══██║██╔══██╗
          ██║░░░░░╚██████╔╝██████╔╝██║░░██║██║░╚██╗██║░░██║██║░░██║
          ╚═╝░░░░░░╚═════╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝
          Made By Pushkar
          discord.gg/magicgames
          If You Are Using Replit, You Can Copy Website Link And Put It Into Uptimerobot Website To Make This Bot 24/7 Working!
         `)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Bot and Website is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;

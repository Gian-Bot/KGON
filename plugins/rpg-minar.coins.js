let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Todo un conchesumare','Buena cerrano, obtienes','WOW!! eres un buen saca caca, digo, buen minero','Felicidades!! Ahora tienes mas caca, digo coins'])}`
let pp = 'https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg'

let gata = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += gata * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastcoins + 600000
if (new Date - global.db.data.users[m.sender].lastcoins < 600000) throw `*💟 Oe mongol, ya recogiste, vuelve en ${msToTime(time - new Date())} para seguir recogiendo coins, pobre!*`  

conn.sendHydrated(m.chat, `*${minar} ${gata} 𝘾𝙤𝙞𝙣𝙨*`, wm, pp, md, '𝗞𝗚𝗢𝗡-𝗚𝗜𝗔𝗡', null, null, [
['𝙈𝙞𝙣𝙖𝙧 𝙀𝙓𝙋 ⚡', `.minar`],
['𝙈𝙞𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 💎', `.minar3`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `.menu`]
], m,)
global.db.data.users[m.sender].lastcoins = new Date * 1  
  

//m.reply(`*${minar} *${hasil} 𝙓𝙋*`)

}
handler.help = ['minar2']
handler.tags = ['gata']
handler.command = ['minar2', 'miming2', 'mine2', 'minarcoins'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

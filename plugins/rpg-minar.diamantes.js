let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Trabaja vago!','Bien ahi mi rey!!','Para esto si eres bueno, no? MONGOL!','Felicidades!! OBTIENESπ₯°'])}`
let pp = 'https://previews.123rf.com/images/retouchman/retouchman1908/retouchman190800025/128554698-diamante-claro-grande.jpg?fj=1'

let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].limit += d * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `*π Vuelva en ${msToTime(time - new Date())} para continuar minando βοΈ*`  

conn.sendHydrated(m.chat, `*${minar} ${d} πΏπππ’ππ£π©ππ¨*`, wm, pp, md, 'πππ’π‘-ππππ‘', null, null, [
['πππ£ππ§ πππ β‘', `.minar`],
['πππ£ππ§ πΎπ€ππ£π¨ πΉ', `.minar2`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', `.menu`]
], m,)
global.db.data.users[m.sender].lastdiamantes = new Date * 1  
  

//m.reply(`*${minar} *${hasil} ππ*`)

}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
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

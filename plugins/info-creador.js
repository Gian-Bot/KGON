import fs from 'fs'
function handler(m, { conn }) {
let text = `
*πΎπ€π£π©πππ©π€* 
*Wa.me/51986380344 (BOT)*
*Wa.me/15067069727 (NOBOT)*
*https://www.instagram.com/gian_walter*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πππ’π‘-ππππ‘',
body: 'ππ«ππππ¨π«',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/51986380344`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `π₯ *Eso son los contactos para ti.`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/gian_walter', 'ππ£π¨π©πππ§ππ’', null, null, [
['πΉ ππ£ππ€π§π’πππΓ³π£', '.infobot'],
['π πΏπ€π£ππ§', '.donar'],
['β ππ§ ππ‘ ππ£ππππ€', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i
export default handler

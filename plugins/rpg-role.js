let handler = m => m

handler.before = function (m, text) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? '*NOVATO(A) III* 🤢'
        : ((user.level >= 3) && (user.level <= 6)) ? '*NOVATO(A) II* 🤢'
            : ((user.level >= 6) && (user.level <= 9)) ? '*NOVATO(A) I* 🤢'
                : ((user.level >= 9) && (user.level <= 12)) ? '*BAJITO III* 💩'
                    : ((user.level >= 12) && (user.level <= 15)) ? '*BAJITO II* 💩'
                        : ((user.level >= 15) && (user.level <= 18)) ? '*BAJITO I* 💩'
                            : ((user.level >= 18) && (user.level <= 21)) ? '*HEROICO III* 🥑'
                                : ((user.level >= 21) && (user.level <= 24)) ? '*HEROICO II* 🥑'
                                    : ((user.level >= 24) && (user.level <= 27)) ? '*HEROICO I* 🥑'
                                        : ((user.level >= 27) && (user.level <= 30)) ? '*MAESTRO(A) III* ⚒️'
                                            : ((user.level >= 30) && (user.level <= 33)) ? '*MAESTRO(A) II* ⚒️'
                                                : ((user.level >= 33) && (user.level <= 36)) ? '*MAESTRO(A) I* ⚒️'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? '*BRONCE III* 🔥'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? '*BRONCE II* 🔥'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? '*BRONCE I* 🔥'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? '*PLATA III* 🔮'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? '*PLATA II* 🔮'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? '*PLATA I* 🔮'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? '*ORO III* 🏅'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? '*ORO II* 🏅'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? '*ORO I* 🏅'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? '*DIAMANTE III* 💎'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? '*DIAMANTE II* 💎'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? '*DIAMANTE I* 💎'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? '*PRO III* 👹'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? '*PRO II* 👹'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? '*PRO I* 👹'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? '*SUPER PRO III* 🎩'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? '*SUPER PRO II* 🎩'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? '*SUPER PRO I* 🎩'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? '*LEGENDARIO(A) III* 🛡️'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? '*LEGENDARIO(A) II* 🛡️'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? '*LEGENDARIO(A) I* 🛡️'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? '*LEYENDA III* 🏆'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? '*LEYENDA II* 🏆'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 110)) ? '*LEYENDA I* 🏆'
                                                                                                                                                 : ((user.level >= 110) && (user.level <= 115)) ? '*CHOLO POWER III* ☄️'
                                                                                                                                                    : ((user.level >= 115) && (user.level <= 120)) ? '*CHOLO POWER II* ☄️'
                                                                                                                                                        : ((user.level >= 120) && (user.level <= 125)) ? '*CHOLO POWER I* ☄️'
                                                                                                                                                            : ((user.level >= 125) && (user.level <= 130)) ? '*LEDER III* ⚜️🔱'
                                                                                                                                                                : ((user.level >= 130) && (user.level <= 135)) ? '*LEDER II* ⚜️🔱'
                                                                                                                                                                    : ((user.level >= 135) && (user.level <= 140)) ? '*LEDER I* ⚜️🔱'
                                                                                                                                                                            : ((user.level >= 140) && (user.level <= 150)) ? '👑 *CACHERO* 🏁'
                                                                                                                                                                                : '👑 *∞ CACHERAZO PE* 💎🏁'


    user.role = role
    return true
}

export default handler

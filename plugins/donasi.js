let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl Axiata [087764684657]
│ • Telkomsel [083141454827]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana 083141454827
│ • Shoopepay 083141454827
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

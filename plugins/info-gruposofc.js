const handler = async (m, {conn, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/es.json`))
  const tradutor = _translate.plugins.info_groupsofc

  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `BIENVENIDO A LOS GRUPOS OFICIALES DE ${global.packname}
https://chat.whatsapp.com/LfJfgWkF25pIik8KW0QPU6

CANAL OFICIAL
https://whatsapp.com/channel/0029VaZ90V9EKyZGyqHKt61M`.trim();
  const buttonMessage= {
    'document': {url: md},
    'mimetype': `application/${document}`,
    'fileName': `${tradutor.texto2}`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': md,
        'mediaType': 2,
        'previewType': 'pdf',
        'title': wm,
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': md}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;

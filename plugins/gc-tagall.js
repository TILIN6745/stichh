

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/es.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `@𝖈𝖊𝖔𝖌𝖊𝖗𝖎𝖕𝖎𝖚𝖒.𝖉𝖟𝖓🫦 ${pesan}`;
  let teks = `*🙂‍↕𝙈𝙞𝙘𝙝𝙞𝘽𝙤𝙩 𝙡𝙤𝙨 𝙞𝙣𝙫𝙤𝙘𝙖 𝙥𝙡𝙖𝙣𝙩𝙖𝙨🙂‍↔*\n𝘔𝘪𝘤𝘩𝘪 𝘦𝘭 𝘮𝘦𝘫𝘰𝘳 𝘣𝘰𝘵🥇\n${oi}\n\n*🌤️𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`;
  for (const mem of participants) {
    teks += `☀️✨≋ @${mem.id.split('@')[0]}\n`;
  }
  teks += `MichiBot`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;

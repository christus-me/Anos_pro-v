 const axios = require('axios');
const UPoLPrefix = [
  'edu',
  'ai',
  'lovely,
  'bot',
  'ask'
]; 

  module.exports = {
  config: {
    name: 'ai',
    version: '1.2.1',
    role: 0,
    category: 'AI',
    author: 'Metoushela walker',
    shortDescription: '',
    longDescription: '',
  },
  
  onStart: async function () {},
  onChat: async function ({ message, event, args, api, threadID, messageID }) {
      
      const ahprefix = UPoLPrefix.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!ahprefix) {
        return; 
      } 
      
     const upol = event.body.substring(ahprefix.length).trim();
   if (!upol) {
        await message.reply('𝐥𝐨𝐯𝐞𝐥𝐲 𝐟𝐨𝐫𝐞𝐯𝐞𝐫 ✨\n━━━━━━━━━━━━━\n𝐒𝐚𝐥𝐮𝐭 𝐣𝐞 𝐩𝐞𝐮𝐱 𝐟𝐚𝐢𝐫𝐞 𝐪𝐮𝐨𝐢 𝐩𝐨𝐮𝐫 𝐯𝐨𝐮𝐬 ?);
        return;
      }
      
      const apply = ['Awww🥹, maybe you need my help', 'How can i help you?', 'How can i assist you today?', 'How can i help you?🙂'];
      
     const randomapply = apply[Math.floor(Math.random() * apply.length)];

     
      if (args[0] === 'hi') {
          message.reply(`${randomapply}`);
          return;
      }
      
    const encodedPrompt = encodeURIComponent(args.join(" "));

   await message.reply('thinking..');
  
    const response = await axios.get(`https://sandipbaruwal.onrender.com/gemini?prompt=${encodedPrompt}`);
 
     const UPoL = response.data.answer; 

      const upolres = `𝐥𝐨𝐯𝐞𝐥𝐲 𝐟𝐨𝐫𝐞𝐯𝐞𝐫 ✨\n━━━━━━━━━━━━━\n${UPoL}`;
      
        message.reply(upolres);
  }
};

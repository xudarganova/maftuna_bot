import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8521415936:AAHswX24cDRDhEPP9GuwDlNFhNfBOwK8z8U";
const bot = new TelegramBot (TOKEN, {polling:true});

const dressPhotoURL = ""
bot.on("message", async function (msg) {
    const chatId = msg.chat.id;
    const text = msg.text;
    const firstname = msg.chat.first_name;
    if(text == "/start") {
        bot.sendMessage(chatId,`assalomu alaykum, ${firstname}`),{
            
        }
    }
    
})
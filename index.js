const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

// Your Telegram bot token
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});

// Schedule a message every 1.5 hours
cron.schedule('0 */90 * * *', () => {
    bot.sendMessage('YOUR_CHAT_ID', 'This is an automated high-send message!');
});

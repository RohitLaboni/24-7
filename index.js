const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

// Your Telegram bot token
const token = '8665621150:AAE1AYh-ZNs0md9mvB3X8RxgUGpZbeef9XE';
const bot = new TelegramBot(token, {polling: true});

// Schedule a message every 1.5 hours
cron.schedule('0 */90 * * *', () => {
    bot.sendMessage('-1003718062610', 'This is an automated high-send message!');
});

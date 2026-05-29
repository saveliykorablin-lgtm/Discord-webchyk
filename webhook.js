const axios = require('axios');

// URL вебхука
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1510055137282887780/r7MRwpieCHUr2Il5gSTsliY6cKpQDGdemvCsNX70RIMekhoNBqQU0lbvlVvNyZS-746n';

// Сообщение для отправки
const message = {
  content: '# Проходи верификацию!\n\n> Забегайте в любую проходную комнату \n> <&@1510030760860450927>проведут вам верификацию \n\n- https://discord.com/channels/1510029178043498556/1510032692706672810\n- https://discord.com/channels/1510029178043498556/1510032894196973748\n- https://discord.com/channels/1510029178043498556/1510032973746147629\n- https://discord.com/channels/1510029178043498556/1510033250788311241\n- https://discord.com/channels/1510029178043498556/1510033318723321876\n\n> После **быстрой верификации**, вы получите досту��\n> к общению в **общих чатах и голосовых каналах!**'
};

// Функция для отправки сообщения
async function sendWebhook() {
  try {
    const response = await axios.post(WEBHOOK_URL, message);
    console.log('✅ Сообщение успешно отправлено!');
    console.log('Статус:', response.status);
  } catch (error) {
    console.error('❌ Ошибка при отправке сообщения:');
    console.error('Ошибка:', error.message);
    if (error.response) {
      console.error('Статус ответа:', error.response.status);
      console.error('Данные ошибки:', error.response.data);
    }
  }
}

// Запуск функции
sendWebhook();

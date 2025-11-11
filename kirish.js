const form = document.getElementById('telegramForm');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');

const TELEGRAM_BOT_TOKEN = '8346407605:AAGAaX1vWKfkFWDJoedY8ZNzw7H6UwsWufs';
const CHAT_ID = '5217150869';

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const message = messageInput.value.trim();
  const phone = phoneInput.value.trim();

  const fullMessage = `📩 Yangi so'rov:\n\n📃 Xabar: ${message}\n📞 Telefon: ${phone}`;

  

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const payload = {
    chat_id: CHAT_ID,
    text: fullMessage
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert('✅ Xabar muvaffaqiyatli yuborildi!');
      form.reset();
    } else {
      alert('⚠️ Xatolik yuz berdi.');
    }
  } catch (error) {
    console.error(error);
    alert('🚫 Xatolik yuz berdi!');
  }
});
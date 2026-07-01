const form = document.getElementById('answer-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const answer = document.getElementById('user-answer').value.trim();

  try {
    const res = await fetch('/.netlify/functions/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer })
    });
    const data = await res.json();

    if (res.ok) {
      resultDiv.textContent = data.message;
    } else {
      resultDiv.textContent = 'Ошибка: ' + (data.message || 'Неизвестная ошибка');
    }
  } catch (err) {
    resultDiv.textContent = 'Ошибка сети: ' + err.message;
  }
});

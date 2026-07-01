const baseQuestions = [
  {
    q: "ПОДТВЕРДИТЕ (сообщите, что вы получили и поняли это сообщение)",
    options: ["CONFIRM", "ACKNOWLEDGE", "ADVISE"],
    correctIndex: 1
  },
  {
    q: "ПОДТВЕРДИТЕ (прошу проверить правильность разрешения или указания, или действия, или информации)",
    options: ["ACKNOWLEDGE", "CONFIRM", "AFFIRM"],
    correctIndex: 1
  },
  {
    q: "ПОДТВЕРЖДАЮ (Да)",
    options: ["CONFIRM", "AFFIRM", "CORRECT"],
    correctIndex: 1
  },
  {
    q: "ОДОБРЕНО или РАЗРЕШЕНО (разрешение на предлагаемые действия выдано)",
    options: ["AFFIRMED", "APPROVED", "CONFIRMED"],
    correctIndex: 1
  },
  {
    q: "Укажите на промежуток между сообщениями, передаваемыми различным ВС, для ускорения потока воздушного движения",
    options: ["BREAK", "BREAK BREAK", "SPLIT"],
    correctIndex: 1
  },
  {
    q: "ОТМЕНЯЮ (переданное ранее разрешение аннулируется)",
    options: ["INVALIDATE", "CANCEL", "REVOKE"],
    correctIndex: 1
  },
  {
    q: "ПРОВЕРКА (проверка системы или процедуры)",
    options: ["VERIFY", "CHECK", "TEST"],
    correctIndex: 1
  },
  {
    q: "РАЗРЕШЕНО или РАЗРЕШАЮ выполнение действий в соответствии с оговоренными условиями",
    options: ["ALLOWED", "CLEARED", "PERMITTED"],
    correctIndex: 1
  },
  {
    q: "РАБОТАЙТЕ (установите радиосвязь)",
    options: ["ESTABLISH", "CONTACT", "DETERMINE"],
    correctIndex: 1
  },
  {
    q: "поняли ПРАВИЛЬНО или \"точно\"",
    options: ["PERFECT", "CORRECT", "RIGHT"],
    correctIndex: 1
  },
  {
    q: "ПОПРАВКА (в данной передаче или сообщении мною была сделана ошибка. Правильным вариантом является информация, которая передается в данной передаче или сообщении)",
    options: ["AMENDMENT", "CORRECTION", "CHANGE"],
    correctIndex: 1
  },
  {
    q: "НЕ ПРИНИМАЙТЕ ВО ВНИМАНИЕ или ОШИБОЧНО (игнорируйте сообщение)",
    options: ["NEGLECT", "DISREGARD", "WRONGLY"],
    correctIndex: 1
  },
  {
    q: "КАК СЛЫШИТЕ (каково качество моей передачи?)",
    options: ["HOW DO YOU HEAR", "HOW DO YOU READ", "HOW DO YOU READ ME?"],
    correctIndex: 1
  },
  {
    q: "ПОВТОРЯЮ (для ясности или уточнения)",
    options: ["I REPEAT IT ONE MORE TIME", "I SAY AGAIN", "I REPEAT FOR CLARIFICATION"],
    correctIndex: 1
  },
  {
    q: "ВЫДЕРЖИВАЙТЕ или СЛЕДУЙТЕ, или СОХРАНЯЙТЕ (продолжайте в соответствии с установленными условиями или в буквальном значении)",
    options: ["FOLLOW", "MAINTAIN", "PROVIDE"],
    correctIndex: 1
  },
  {
    q: "ПРОСЛУШИВАЙТЕ/ПРОСЛУШАЙТЕ на частоте",
    options: ["LISTEN ON FREQUENCY", "MONITOR", "SUPERVISE"],
    correctIndex: 1
  },
  {
    q: "НЕТ, НЕ РАЗРЕШАЮ, НЕ МОГУ ВЫПОЛНИТЬ",
    options: ["NOT ALLOWED", "NEGATIVE", "UNABLE TO PERFORM"],
    correctIndex: 1
  },
  {
    q: "КОНЕЦ СВЯЗИ (обмен сообщениями закончен и не жду ответа) (не используются при связи на ОВЧ)",
    options: ["COMMUNICATION IS OVER", "OUT", "OUT OF CONTACT"],
    correctIndex: 1
  },
  {
    q: "ПОВТОРИТЕ мне все или указанную часть этого сообщения в том виде, в каком вы ее приняли",
    options: ["SAY AGAIN", "READ BACK", "READ AGAIN"],
    correctIndex: 1
  },
  {
    q: "НОВОЕ РАЗРЕШЕНИЕ, ИЗМЕНЕНИЕ (в последнее разрешение внесены изменения, и данное новое разрешение заменяет выданное вам ранее разрешение или часть его)",
    options: ["NEW CLEARED", "RECLEARED", "NEW RESOLUTION"],
    correctIndex: 1
  },
  {
    q: "СООБЩИТЕ (передайте мне следующую информацию)",
    options: ["ADVISE", "REPORT", "INFORM"],
    correctIndex: 1
  },
  {
    q: "ПРОШУ: \"Я хотел бы получить\", \"Мне бы хотелось знать\"",
    options: ["ASK", "REQUEST", "REQUIRE"],
    correctIndex: 1
  },
  {
    q: "ПОНЯЛ (я принял всю вашу последнюю передачу)",
    options: ["UNDERSTAND", "ROGER", "COMPREHEND"],
    correctIndex: 1
  },
  {
    q: "ПОВТОРИТЕ (Повторите все или следующую часть вашей последней передачи)",
    options: ["REPEAT", "SAY AGAIN", "READ BACK"],
    correctIndex: 1
  },
  {
    q: "ГОВОРИТЕ МЕДЛЕННЕЕ (уменьшите скорость передачи)",
    options: ["SPEAK SLOWLY", "SPEAK SLOWER", "SPEAK MORE SLOWLY"],
    correctIndex: 1
  },
  {
    q: "ЖДИТЕ, я вас вызову",
    options: ["WAIT", "STAND BY", "STAY IN CONTACT"],
    correctIndex: 1
  },
  {
    q: "ВЫПОЛНИТЬ НЕ МОГУ (не могу выполнить вашу просьбу, указание или разрешение)",
    options: ["NOT ABLE", "UNABLE", "INCAPABLE"],
    correctIndex: 1
  },
  {
    q: "ВЫПОЛНЯЮ (ваше сообщение понял и буду выполнять)",
    options: ["EXECUTE", "WILCO", "COMPLY"],
    correctIndex: 1
  },
  {
    q: "ПРОДУБЛИРУЙТЕ СЛОВА: \"Связь плохая, прошу передавать каждое слово или группу слов дважды\"",
    options: ["WORDS DUPLICATE", "WORDS TWICE", "DUPLICATE WORDS"],
    correctIndex: 1
  },
  {
    q: "ДУБЛИРУЮ СЛОВА \"Поскольку связь плохая, каждое слово или группа слов в данном сообщении будут передаваться дважды\"",
    options: ["WORDS DUPLICATE", "WORDS TWICE", "DUPLICATE WORDS"],
    correctIndex: 1
  },
  {
    q: "ПЕРЕДАВАЙТЕ СВОЕ СООБЩЕНИЕ (продолжайте передавать ваше сообщение) (Относится к ВС, находящимся на земле)",
    options: ["GO AHEAD", "PASS YOUR MESSAGE", "SEND YOUR MESSAGE"],
    correctIndex: 1
  },
  {
    q: "МЕСТО (пилот: \"Я сейчас передам вам свое местонахождение, вы готовы к приему?\"",
    options: ["PLACE", "POSITION", "LOCATION"],
    correctIndex: 1
  },
  {
    q: "МЕСТО (диспетчер: \"Передаю ваше местонахождение\")",
    options: ["LOCATION", "POSITION", "PRESENCE"],
    correctIndex: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let quizQuestions = [];

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const retryBtn = document.getElementById('retry-btn');
const quizContainer = document.getElementById('quiz');
const currentQuestionEl = document.getElementById('current-question');
const resultArea = document.getElementById('result-area');
const scoreBox = document.getElementById('score');
const percentageBox = document.getElementById('percentage');
const errorsList = document.getElementById('errors');
const counterDisplay = document.getElementById('counter-display');

const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const fireworks = [];
const particles = [];
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8800', '#ffffff', '#ffaa00', '#aa00ff'];

let fireworksActive = false;
let fireworksTimer = null;

function createFirework(x, y) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  fireworks.push({
    x: x, y: y,
    vx: (Math.random() - 0.5) * 4,
    vy: -((Math.random() * 12) + 8),
    gravity: 0.12, decay: 0.96, alpha: 1,
    color: color, size: 4, exploded: false,
    life: 60 + Math.random() * 40
  });
}

function createExplosion(fx, fy, color) {
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: fx, y: fy,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.5) * 16,
      gravity: 0.08, decay: 0.97, alpha: 1,
      color: color, size: Math.random() * 3 + 2,
      life: 90 + Math.random() * 50
    });
  }
}

function updateFireworks() {
  if (!fireworksActive) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = fireworks.length - 1; i >= 0; i--) {
    const f = fireworks[i];
    f.x += f.vx;
    f.y += f.vy;
    f.vy += f.gravity;
    f.life--;

    if (f.life <= 0 || f.y <= 50) {
      f.exploded = true;
      createExplosion(f.x, f.y, f.color);
      fireworks.splice(i, 1);
    } else {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      const rgb = hexToRgb(f.color);
      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${f.alpha})`;
      ctx.fill();
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.alpha *= p.decay;
    p.life--;

    if (p.alpha <= 0.01 || p.life <= 0) {
      particles.splice(i, 1);
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      const rgb = hexToRgb(p.color);
      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.alpha})`;
      ctx.fill();
    }
  }

  requestAnimationFrame(updateFireworks);
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})\$/i.exec(hex);
  return result ? {
    r: parseInt(result, 16),
    g: parseInt(result, 16),
    b: parseInt(result, 16)
  } : { r: 0, g: 0, b: 0 };
}

function startFireworks() {
  fireworksActive = true;
  fireworks.length = 0;
  particles.length = 0;

  const totalBursts = 20;
  const intervalMs = 300;

  for (let i = 0; i < totalBursts; i++) {
    setTimeout(() => {
      if (!fireworksActive) return;
      const x = Math.random() * canvas.width;
      const y = canvas.height + 40;
      createFirework(x, y);
    }, i * intervalMs);
  }

  if (fireworksTimer) clearTimeout(fireworksTimer);
  fireworksTimer = setTimeout(() => {
    stopFireworks();
  }, 90000);

  updateFireworks();
}

function stopFireworks() {
  fireworksActive = false;
  fireworks.length = 0;
  particles.length = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (fireworksTimer) {
    clearTimeout(fireworksTimer);
    fireworksTimer = null;
  }
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function initQuiz() {
  stopFireworks();
  const shuffled = shuffleArray(baseQuestions);
  quizQuestions = shuffled.slice(0, 20);

  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = Array(quizQuestions.length).fill(undefined);

  quizContainer.style.display = 'block';
  resultArea.style.display = 'none';
  startBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  submitBtn.style.display = 'none';

  renderQuestion();
}

function renderQuestion() {
  counterDisplay.textContent = `${currentQuestionIndex + 1}/${quizQuestions.length}`;

  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
  }

  const q = quizQuestions[currentQuestionIndex];

  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

  let newCorrectIndex = -1;
  for (let i = 0; i < 3; i++) {
    if (shuffledOptions[i] === q.options[q.correctIndex]) {
      newCorrectIndex = i;
      break;
    }
  }

  currentQuestionEl.innerHTML = `
    <div class="question-block">
      <div class="question-text">\${q.q}</div>
      <label>
        <input type="radio" name="answer" value="0">
        A) \${shuffledOptions}
      </label>
      <label>
        <input type="radio" name="answer" value="1">
        B) \${shuffledOptions}
      </label>
      <label>
        <input type="radio" name="answer" value="2">
        C) \${shuffledOptions}
      </label>
    </div>
  `;

  quizQuestions[currentQuestionIndex].shuffledCorrectIndex = newCorrectIndex;
}

function handleNext() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert('Пожалуйста, выберите вариант ответа');
    return;
  }

  const answerValue = parseInt(selected.value);
  selectedAnswers[currentQuestionIndex] = answerValue;

  if (answerValue === quizQuestions[currentQuestionIndex].shuffledCorrectIndex) {
    score++;
  }

  currentQuestionIndex++;
  renderQuestion();
}

function finishQuiz() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert('Пожалуйста, выберите вариант ответа на последний вопрос');
    return;
  }

  const answerValue = parseInt(selected.value);
  selectedAnswers[currentQuestionIndex] = answerValue;

  if (answerValue === quizQuestions[currentQuestionIndex].shuffledCorrectIndex) {
    score++;
  }

  showResults();
}

function showResults() {
  quizContainer.style.display = 'none';
  resultArea.style.display = 'block';

  const total = quizQuestions.length;
  const percentage = ((score / total) * 100).toFixed(1);

  scoreBox.textContent = `Вы набрали: ${score} из ${total}`;
  percentageBox.textContent = `Процент правильных ответов: \${percentage}%`;

  errorsList.innerHTML = '';
  for (let i = 0; i < total; i++) {
    if (selectedAnswers[i] !== quizQuestions[i].shuffledCorrectIndex) {
      const item = document.createElement('div');
      item.className = 'error-item';
      item.innerHTML = `
        <div class="error-question">Вопрос ${i + 1}: ${quizQuestions[i].q}</div>
        <div>Ваш ответ: \${quizQuestions[i].options[selectedAnswers[i]]}</div>
        <div class="error-correct">Правильный ответ: \${quizQuestions[i].options[quizQuestions[i].correctIndex]}</div>
      `;
      errorsList.appendChild(item);
    }
  }

  if (score === total) {
    startFireworks();
  }
}

startBtn.addEventListener('click', initQuiz);
nextBtn.addEventListener('click', handleNext);
submitBtn.addEventListener('click', finishQuiz);
retryBtn.addEventListener('click', initQuiz);

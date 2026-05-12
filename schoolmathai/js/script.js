document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     Splash → Chat
     ========================= */
  const enterBtn = document.getElementById('enterBtn');
  const usernameInput = document.getElementById('usernameInput');

  if (enterBtn && usernameInput) {
    const goToChat = () => {
      if (usernameInput.value.trim() === '') {
        usernameInput.focus();
        return;
      }
      window.location.href = 'chat.html';
    };

    enterBtn.addEventListener('click', goToChat);
    usernameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') goToChat();
    });
  }

  /* =========================
     Settings Menu
     ========================= */
  const menuBtn = document.getElementById('menuBtn');
  const settingsDropdown = document.getElementById('settingsDropdown');

  if (menuBtn && settingsDropdown) {
    menuBtn.addEventListener('click', () => {
      settingsDropdown.style.display =
        settingsDropdown.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  /* =========================
     Dark Mode
     ========================= */
  const darkModeBtn = document.getElementById('darkModeBtn');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }

  /* =========================
     Chat + History
     ========================= */
  const askBtn = document.getElementById('askBtn');
  const questionInput = document.getElementById('questionInput');
  const chatWindow = document.getElementById('chatWindow');
  const historyList = document.getElementById('historyList');

  if (askBtn && questionInput && chatWindow && historyList) {
    askBtn.addEventListener('click', () => {
      const text = questionInput.value.trim();
      if (!text) return;

      const userMsg = document.createElement('div');
      userMsg.className = 'user-message';
      userMsg.textContent = text;
      chatWindow.appendChild(userMsg);

      const historyItem = document.createElement('li');
      historyItem.textContent = text;
      historyList.appendChild(historyItem);

      questionInput.value = '';
      chatWindow.scrollTop = chatWindow.scrollHeight;
    });
  }

});
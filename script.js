function updateTimer() {
  const now = new Date();
  // 設定下班時間：17:00:00
  const end = new Date();
  end.setHours(17, 0, 0, 0);

  // 如果已過今天 17:00，則倒數到明天
  if (now > end) {
    end.setDate(end.getDate() + 1);
  }

  let diff = end - now; // 差值 (毫秒)
  const h = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, '0');
  diff -= h * 3600 * 1000;
  const m = String(Math.floor(diff / 1000 / 60)).padStart(2, '0');
  diff -= m * 60 * 1000;
  const s = String(Math.floor(diff / 1000)).padStart(2, '0');

  document.getElementById('timer').textContent = `${h}:${m}:${s}`;
}

// 每秒更新一次
setInterval(updateTimer, 1000);
updateTimer();
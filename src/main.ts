/** 2 июля 2026, 20:00 — местное время устройства */
const CONCERT = new Date(2026, 6, 2, 20, 0, 0);

function $(id: string): HTMLElement {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Нет элемента #${id}`);
  return node;
}

const daysEl = $("days");
const hoursEl = $("hours");
const minutesEl = $("minutes");
const secondsEl = $("seconds");
const timerEl = $("timer");
const doneEl = $("done");

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function update(): void {
  const diff = CONCERT.getTime() - Date.now();

  if (diff <= 0) {
    timerEl.hidden = true;
    doneEl.hidden = false;
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days);
  hoursEl.textContent = pad2(hours);
  minutesEl.textContent = pad2(minutes);
  secondsEl.textContent = pad2(seconds);
}

update();
setInterval(update, 1000);

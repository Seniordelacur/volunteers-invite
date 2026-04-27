const guests = {
  nurislam: "Nurislam Nuraddinov",
  zhanat: "Zhanat Salimova",
  aiganym: "Aiganym Aitenova",
  aiym: "Aiym Shaimerden",
  default: "guest"
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "default";
document.getElementById("guestName").textContent = guests[id] || id;

const eventDate = new Date("2026-04-28T19:00:00+05:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.querySelector(".countdown").textContent = "Event started";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
window.addEventListener("load", () => {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });
});

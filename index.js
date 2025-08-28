let loveCounter = 0;
let copyCounter = 0;
let starCount = 100;

// ====== Call Function  *======
function makeCall(service, number) {
  const historyList = document.getElementById("historyList");

  const li = document.createElement("li");
  li.style.cssText =
    "border:1px solid gray;padding:6px;margin-bottom:4px;border-radius:6px";

  li.innerHTML = `
      <div style="display:flex;justify-content:space-between;font-weight:bold">
        <span>${service}</span>
        <span style="color:gray">${new Date().toLocaleTimeString()}</span>
      </div>
      <div>${number}</div>
    `;

  historyList.prepend(li);

  // ⭐  add
  addStars(20);

  alert(service + " এ কল করা হয়েছে ✅");
}

// ====== Call History Clear ======
function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}

// ====== Love Counter ======
function increaseLove() {
  loveCounter++;
  document.getElementById("loveCount").textContent = loveCounter;
}

// ====== Copy Counter ======
function copyNumber(num) {
  navigator.clipboard
    .writeText(num)
    .then(() => {
      copyCounter++;
      document.getElementById("copyCounter").textContent = copyCounter;
      alert(num + " কপি করা হয়েছে ✅");
    })
    .catch((err) => {
      console.error("কপি করতে সমস্যা হয়েছে:", err);
    });
}

// ====== ⭐ Star Function ======
function addStars(amount) {
  starCount -= amount;
  if (starCount < 0) starCount = 0;
  document.getElementById("starCount").innerText = starCount;
}

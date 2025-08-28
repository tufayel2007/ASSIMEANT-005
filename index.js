function copyNumber(number) {
  navigator.clipboard.writeText(number);
  alert(number + " কপি করা হয়েছে ✅");
}
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
}

function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}
// loveCounter
let loveCounter = 0;

function increaseLove() {
  loveCounter++;
  document.getElementById("loveCount").textContent = loveCounter;
}
// cpppy counter
let copyCounter = 0;

function copyNumber(number) {
  // Copy to clipboard
  navigator.clipboard.writeText(number);

  // Counter update
  copyCounter++;
  document.getElementById("copyCounter").textContent = copyCounter;
}

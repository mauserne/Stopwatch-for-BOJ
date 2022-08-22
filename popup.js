function open_newtab() {
  chrome.tabs.create({ url: "https://github.com/mauserne/Stopwatch-for-BOJ", selected: true, active: true });
}

document.querySelector(".button").addEventListener("click", open_newtab);

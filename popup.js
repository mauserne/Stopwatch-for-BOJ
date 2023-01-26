function open_newtab() {
  chrome.tabs.create({
    url: "https://github.com/mauserne/Stopwatch-for-BOJ",
    selected: true,
    active: true,
  });
}

document.querySelector(".github-button").addEventListener("click", open_newtab);

function zooming(params) {
  chrome.storage.sync.get(["zoom_scale"], function (result) {
    chrome.storage.sync.set({ zoom_scale: result.zoom_scale + params });
  });
  chrome.storage.sync.get(["zoom_scale"], function (result) {
    console.log(result.zoom_scale);
  });
}

document.querySelector(".zoom-out").addEventListener("click", function () {
  zooming(-0.15);
});
document.querySelector(".zoom-in").addEventListener("click", function () {
  zooming(0.15);
});

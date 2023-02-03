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
    let next_scale = result.zoom_scale + params;
    if (0.35 < next_scale && next_scale < 2) {
      chrome.storage.sync.set({
        zoom_scale: Math.round(next_scale * 100) / 100,
      });
    }
  });
}

document.querySelector(".zoom-out").addEventListener("click", function () {
  zooming(-0.15);
});
document.querySelector(".zoom-in").addEventListener("click", function () {
  zooming(0.15);
});

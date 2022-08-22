let timer_isActive = false;

var time = 0;

var hour = 0;
var min = 0;
var sec = 0;

var tm = min;
var ts = sec;

const starttimer = () => {
  timer = setInterval(() => {
    time++;

    min = Math.floor(time / 60);
    sec = time % 60;

    tm = min;
    ts = sec;
    if (tm < 10) {
      tm = "0" + min;
    }
    if (ts < 10) {
      ts = "0" + sec;
    }
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, { timetick: tm + ":" + ts });
      }
    });
  }, 1000);
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
  if (request.button === "play") {
    if (!timer_isActive) {
      starttimer();
      timer_isActive = true;
    }
  } else if (request.button === "pause") {
    timer_isActive = false;
    clearInterval(timer);
  } else if (request.button === "stop") {
    timer_isActive = false;
    clearInterval(timer);
    time = 0;
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, { timetick: "- - : - -" });
      }
    });
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, info) {
  if (info.status === "complete") {
    if (time) {
      chrome.tabs.sendMessage(tabId, { timetick: tm + ":" + ts });
    }
  }
});

chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "foo") return;
  port.onMessage.addListener(onMessage);
  port.onDisconnect.addListener(deleteTimer);
  port._timer = setTimeout(forceReconnect, 250e3, port);
});
function onMessage(msg, port) {
  console.log("received", msg, "from", port.sender);
}
function forceReconnect(port) {
  deleteTimer(port);
  port.disconnect();
}
function deleteTimer(port) {
  if (port._timer) {
    clearTimeout(port._timer);
    delete port._timer;
  }
}

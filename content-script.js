const d = document.createElement("div");
d.innerHTML = `
<div id='box' class="s4boj">
		<div id='timerBox' class="timerBox">
			<div id="time" class="s4bojtime">- - : - -</div>
		</div>
		<div class="btnBox">
			<i id="startbtn" class="fa fa-play" aria-hidden="true"></i>
			<i id="pausebtn" class="fa fa-pause" aria-hidden="true"></i>
			<i id="stopbtn" class="fa fa-stop" aria-hidden="true"></i>
		</div>
</div>
`;

document.body.appendChild(d);

const st = document.createElement("style");
st.innerText = `
.s4boj {
	text-align : center;
    position : fixed;
    bottom : 0;
    right : 10px;
    font-size : xx-large;
	background-color : orange;
	font-weight: bold;

}
.s4bojtime {
	font-size : xx-large;
}
`;

let port;
function connect() {
  port = chrome.runtime.connect({ name: "foo" });
  port.onDisconnect.addListener(connect);
  port.onMessage.addListener((msg) => {
    console.log("received", msg, "from bg");
  });
}
connect();

document.head.appendChild(st);

function handler(e) {
  const target = e.target.className;
  if (target === "fa fa-play") {
    chrome.runtime.sendMessage({ button: "play" });
  } else if (target === "fa fa-pause") {
    chrome.runtime.sendMessage({ button: "pause" });
  } else if (target === "fa fa-stop") {
    chrome.runtime.sendMessage({ button: "stop" });
  }
}

document.body.addEventListener("click", handler);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  document.body.querySelector(".s4bojtime").innerText = request.timetick;
});

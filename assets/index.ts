import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});
const btnPlayPause: HTMLElement = document.querySelector("#btnPlayPause");
const btnMuteUnmute: HTMLElement = document.querySelector("#btnMuteUnmute");

btnPlayPause.onclick = () => player.togglePlay();
btnMuteUnmute.onclick = () => player.toggleMute();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}

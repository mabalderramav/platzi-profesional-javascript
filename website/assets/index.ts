import MediaPlayer from "@sparragus/platzimediaplayer";
import AutoPlay from "@sparragus/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@sparragus/platzimediaplayer/lib/plugins/AutoPause";
import Ads from "@sparragus/platzimediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
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

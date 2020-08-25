import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video,
    plugins: [
        //  new AutoPlay()
    ]
});
const btnPlayPause = document.querySelector("#btnPlayPause");
const btnMuteUnmute = document.querySelector("#btnMuteUnmute");

btnPlayPause.onclick = () => player.togglePlay();
btnMuteUnmute.onclick = () => player.toggleMute();
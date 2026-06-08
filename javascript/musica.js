var el = document.getElementById("bg-music");

if (el && el.tagName === "AUDIO") {
    el.volume = 0.1;
} else if (el && el.tagName === "DIV") {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player("bg-music", {
            height: "1", width: "1",
            videoId: "X2BYmmTI04I",
            playerVars: { autoplay: 1, loop: 1, playlist: "X2BYmmTI04I", controls: 0 },
            events: { onReady: function (e) { e.target.setVolume(10); e.target.playVideo(); } }
        });
    }
}
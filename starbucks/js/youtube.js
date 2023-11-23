const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "uTuuz__8gUM",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "uTuuz__8gUM",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}

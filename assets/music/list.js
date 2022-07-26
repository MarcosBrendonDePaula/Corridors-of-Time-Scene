tracks = [
    "/assets/music/Corridors of Time [HQ].mp3",
    "/assets/music/Corridors of Time.mp3",
]

document.querySelector("body").addEventListener("click",()=>{
    document.querySelector("#audio_player").play()
    document.querySelector("#play_btn").classList.add("hidden")
})

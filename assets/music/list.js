let controll_image = document.querySelector("#theme_ico")

const update_theme = () => {
    let selected_theme = document.querySelector(".selected");
    controll_image.src = selected_theme.getAttribute("data-ico")
}

const get_scenes= ()=>{
    for(let i=0; i<scenes.length; i++) {
        if(scenes[i].classList.contains("selected")) {
            return i;
        }
    }
}

let scenes = document.querySelectorAll(".scene")
document.querySelector(".btn-back").addEventListener("click",()=>{
    let actual_scene = get_scenes()
    let changed = actual_scene - 1
    
    if(changed < 0) {
        changed = scenes.length - 1;
    }
    let cur_audio = document.querySelector(".scene.selected").querySelector(".audio_player")
    cur_audio.pause()
    cur_audio.currentTime = 0;

    scenes[actual_scene].classList.remove("selected");
    scenes[changed].classList.add("selected");
    document.querySelector(".scene.selected").querySelector(".audio_player").play()
    update_theme()
})

document.querySelector(".btn-prox").addEventListener("click",()=>{
    let actual_scene = get_scenes()
    let changed = actual_scene + 1
    
    if(changed > scenes.length - 1) {
        changed = 0;
    }
    let cur_audio = document.querySelector(".scene.selected").querySelector(".audio_player")
    cur_audio.pause()
    cur_audio.currentTime = 0;

    scenes[actual_scene].classList.remove("selected");
    scenes[changed].classList.add("selected");
    document.querySelector(".scene.selected").querySelector(".audio_player").play()
    update_theme()
})



document.querySelector("body").addEventListener("click",()=>{
    document.querySelector(".scene.selected").querySelector(".audio_player").play()
    document.querySelector("#play_btn").classList.add("hidden")
})

update_theme()
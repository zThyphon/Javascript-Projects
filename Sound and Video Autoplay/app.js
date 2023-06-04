const song = document.querySelector(".song");
const video = document.querySelector(".vid-container video");
const play_button = document.querySelector(".play");

const outline = document.querySelector(".moving-outline circle");
const outline_length = outline.getTotalLength();

const remaining_time_text = document.querySelector(".time-display");

outline.style.strokeDashoffset = outline_length;
outline.style.strokeDasharray = outline_length;

let total_time = 60;

const select_time = document.querySelectorAll(".time-select button");

const sounds = document.querySelectorAll(".sound-picker button");

select_time.forEach(option => {
  option.addEventListener("click", function () {
    total_time = this.getAttribute("data-time");
    let remaining_minutes = Math.floor(total_time / 60);
    let remaining_seconds = Math.floor(total_time % 60);
    remaining_time_text.textContent = remaining_minutes + ":" + remaining_seconds;
  });
});

sounds.forEach(sound=>
    {
        sound.addEventListener("click",function()
        {
            song.src=this.getAttribute("data-sound");
            video.src=this.getAttribute("data-video");
            play_control(song);
        })
    })

play_button.addEventListener("click", control);

function control() {
  play_control(song);
}

function play_control(song) {
  if (song.paused) {
    song.play();
    video.play();
    play_button.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play_button.src = "./svg/play.svg";
  }
}

song.ontimeupdate = () => {
  let current_time = song.currentTime;
  let remaining_time = total_time - current_time;
  let remaining_minutes = Math.floor(remaining_time / 60);
  let remaining_seconds = Math.floor(remaining_time % 60);
  let loop_operation = outline_length - (current_time / total_time) * outline_length;
  outline.style.strokeDashoffset = loop_operation;
  remaining_time_text.textContent = remaining_minutes + ":" + remaining_seconds;

  if (current_time >= total_time) {
    song.pause();
    video.pause();
    song.currentTime = 0;
    play_button.src = "./svg/play.svg";
  }
};

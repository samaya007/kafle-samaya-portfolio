//video-controls
(function() {
  // variables
  const player = document.querySelector("#player");
  const videoControls = document.querySelector("#video-controls");
  const playButton = document.querySelector("#play-videobutton");
  const pauseButton = document.querySelector("#pause-videobutton");
  const stopButton = document.querySelector("#stop-videobutton");
  const muteButton = document.querySelector("#mute-videobutton");
  const volumeSlider = document.querySelector("#change-videovol");

  // functions
  player.controls = false;
  videoControls.classList.remove("hidden");

  function playVideo() {
    player.play();
  }

  function pauseVideo() {
    player.pause();
  }

  function stopVideo() {
    player.pause();
    player.currentTime = 0;
  }

  function toggleMute() {
    player.muted = !player.muted;
    muteButton.innerHTML = player.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
  }

  function changeVolume() {
    player.volume = volumeSlider.value;
  }

  // event Listeners
  playButton.addEventListener("click", playVideo);
  pauseButton.addEventListener("click", pauseVideo);
  stopButton.addEventListener("click", stopVideo);
  muteButton.addEventListener("click", toggleMute);
  volumeSlider.addEventListener("input", changeVolume); 

// this sets the inital video to mute
  player.muted = true;
  muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
})();


/*
(() => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".sevenimage-casestudy", {
      opacity: 0,
  }, {
      opacity: 1,
      duration: 3,
      scrollTrigger: {
          trigger: ".seventextimage-casestudy",
          toggleActions: "restart none none none",
      },
  });

  gsap.from('.codeimages', {
      duration: 1,
      y: '-1vw',
      opacity: 0,
      ease: 'power2.in',
      scrollTrigger: {
          trigger: ".skill",
          toggleActions: "restart none none none",
      },
  });

  gsap.from('.designimages', {
      duration: 1,
      y: '-1vw',
      opacity: 0,
      ease: 'power2.in',
      scrollTrigger: {
          trigger: ".skill",
          toggleActions: "restart none none none",
      },
  });

})(); */




/*
In the above commented code gsap was used to animated two diferent class in two differen pages
because of that in colse it kept showing issue gsap (class) not found error
in this new code it checks if the element with the provided class exist or not and if it does
it doesnot trigger. 

*/

(() => {
  gsap.registerPlugin(ScrollTrigger);

  const sevenImageCasestudy = document.querySelector(".sevenimage-casestudy");
  if (sevenImageCasestudy) {
    gsap.fromTo(sevenImageCasestudy, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: ".seventextimage-casestudy",
        toggleActions: "restart none none none",
      },
    });
  }

  const codeImages = document.querySelector(".codeimages");
  if (codeImages) {
    gsap.from('.codeimages', {
      duration: 1,
      y: '-1vw',
      opacity: 0,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: ".skill",
        toggleActions: "restart none none none",
      },
    });
  }

  const designImages = document.querySelector(".designimages");
  if (designImages) {
    gsap.from('.designimages', {
      duration: 1,
      y: '-1vw',
      opacity: 0,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: ".skill",
        toggleActions: "restart none none none",
      },
    });
  }
})();










 (() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 140;
    const images = [];

    
  
    const buds = {
      frame: 0,
    };
  
    for (let i = 0; i < frameCount; i++) {
      // console.log(i);
      const img = new Image();
      img.src = `image/animation_${(i + 1000).toString().padStart(4, "0")}.jpg`;
      images.push(img);
    }
  
  
    gsap.to(buds, {
      frame: 139,
      snap: "frame",
      scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        scrub: 1,
        markers: false,
        start: "top top",
      },
      onUpdate: render,
    });
  
    images[0].addEventListener("onload", render);
  
    function render() {
   
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
    }
  window.addEventListener("resize", () => {
    if (isMobile) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    }
});
})();





// watched this tuitorial for gsap
// https://www.youtube.com/watch?v=If_Yp4TCt9c&ab_channel=TheCodeCreative

// for video controls
// https://www.youtube.com/watch?v=V8_wEZD160g&ab_channel=AdamKhoury
// class file, used class provided library but had some trouble in responsiveness and styling
// CHAT GPT Prompt: here i want the volume default mute 

// scroll animation  for earbuds
// used class code

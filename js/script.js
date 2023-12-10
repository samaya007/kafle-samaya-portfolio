(function() {
  // Variables
  const player = document.querySelector("#player");
  const videoControls = document.querySelector("#video-controls");
  const playButton = document.querySelector("#play-button");
  const pauseButton = document.querySelector("#pause-button");
  const stopButton = document.querySelector("#stop-button");
  const muteButton = document.querySelector("#mute-button");
  const volumeSlider = document.querySelector("#change-vol");

  // Functions
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

  // Event Listeners
  playButton.addEventListener("click", playVideo);
  pauseButton.addEventListener("click", pauseVideo);
  stopButton.addEventListener("click", stopVideo);
  muteButton.addEventListener("click", toggleMute);
  volumeSlider.addEventListener("change", changeVolume);
})();


// https://www.youtube.com/watch?v=If_Yp4TCt9c&ab_channel=TheCodeCreative
//
(() => {

  gsap.registerPlugin(ScrollTrigger);

  // Animation for ".sevenimage-casestudy"
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

  // Animation for '.codeimages'
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

  // Animation for '.designimages'
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

})();










//scroll animation earbuds

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
  
    // console.log(images);
  
    //we are not animating a DOM element, but rather an object
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
      // console.log(buds.frame);
      // console.log(images[buds.frame]);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
    }
  // Update canvas size on window resize (for mobile responsiveness)
  window.addEventListener("resize", () => {
    if (isMobile) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    }
});
})();






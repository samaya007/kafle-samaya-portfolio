
// https://www.youtube.com/watch?v=If_Yp4TCt9c&ab_channel=TheCodeCreative
//



 gsap.registerPlugin(ScrollTrigger);

 gsap.fromTo(    //target element to animate
   ".sevenimage-casestudy",
   {
     opacity: 0, // start with 0 opacity
   },
   {
     opacity: 1, // end with full opacity
     duration: 3,
     scrollTrigger: {   //trigger for animation
       trigger: ".seventextimage-casestudy",
       toggleActions: "restart none none none",
     },
   }
 );
 

 




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
  })();
  


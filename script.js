function loco (){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();


function topup(){
  document.querySelectorAll(".effect").forEach(function(val){
  var clutter="";
  val.textContent.split("").forEach(function(letter){
    clutter += `<span class="inline-block" >${letter}</span>`
  })
  val.innerHTML = clutter;
 })
 
 var tl =gsap.timeline();
 tl.
 from("#first span",{
  y:30,
  opacity:0,
  stagger:0.3,
  duration:1,
 })
 .to("#first span",{
  y:-30,
  opacity:0,
  stagger:0.3,
  duration:1
 })
 .from("#second span",{
  y:30,
  opacity:0,
  stagger:0.3,
  duration:1,
 })
 .to("#second span",{
  y:-30,
  opacity:0,
  stagger:0.3,
  duration:1
 })
 .from("#third span",{
  y:30,
  opacity:0,
  stagger:0.3,
  duration:1,
 })
 .to("#third span",{
  y:-30,
  opacity:0,
  stagger:0.3,
  duration:1
 })
 .from("#fourth span",{
  y:20,
  opacity:0,
  stagger:0.3,
  duration:1,
 })
 .to("#fourth span",{
  y:-20,
  opacity:0,
  stagger:0.3,
  duration:1
 })
 .to("#top",{
  y:-1000,
  yoyo:true,

  // opacity:.1,
  duration:1.5
 })
}
topup();

function cursorAnimation(){
var main = document.querySelector("#main");
main.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x +"px"
  cursor.style.top = dets.y +"px"
})
}
cursorAnimation();

function navAnimation(){
  var menu = document.querySelector("nav #menu");
  var navMenu = document.querySelector("#nav-menu");
  var close = document.querySelector("#nav-close")
  menu.addEventListener("click",function(){
    navMenu.style.display = "block"
    var tl = gsap.timeline();
    tl
    .from("#nav-menu",{
      x:"10%",
      opacity:0,
      duration:.8,
      delay:.5
    })
    .from("#content a",{
      y:10,
      opacity:0,
      stagger:0.2,
     })
     .from("#nav-menu button",{
      y:10,
      opacity:0,
      stagger:0.5,
     })

  })
  close.addEventListener("click",function(){
    gsap.to("#nav-menu",{
      x:900,
      duration:.9,
      delay:.3
    })
  })
}
navAnimation();

function page1Animation(){
   gsap.from("#page1 #h1-text h1  ",{
   y:"140%",
   duration:1,
  //  opacity:0,
   scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 0%",
    end:"top -100%",
    
   }
  })
  gsap.from("#page1 #h1-text2 h1  ",{
    y:"140%",
    duration:1,
    // opacity:0,
    scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      start:"top 0%",
      end:"top -100%"
     }
   })
   gsap.from("#page1-img img  ",{
    y:"140%",
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      start:"top 0%",
      end:"top -100%"
     }
   })
   gsap.from("nav h1 , nav span ",{
    y:"40%",
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      start:"top 0%",
      end:"top -100%"
     }
   })
}
page1Animation();

function page3Animation(){
  var para3 = document.querySelector("#page3-two #first-h")
  var para3Text = para3.textContent
  var para3SpillitedText = para3Text.split("");
  var clutter = ""
  para3SpillitedText.forEach(function(elem){
  clutter += `<span>${elem}</span>`
  })
  para3.innerHTML = clutter;

  gsap.to("#page3-two #first-h span",{
    color:"black",
    // duration:3,
    stagger:0.9,
    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      // markers:true,
      start:"top 90%",
      end:"top -50%",
      scrub:2,
      
    }
  })


 
}
page3Animation();

function page5Animation(){
gsap.to("#page5-two img",{
  height:"100vh",
  y:"-20%",
  scrollTrigger:{
    trigger:"#page5 ",
    scroller:"#main",
    start:"top 0",
    end:"top -100%",
    scrub:2,
    pin:true
  }
})
gsap.from("#page5-one h1 span",{
    y:"-20%",
    stagger:"0.1",
    opacity:0,
    scrollTrigger:{
      trigger:"#page5 ",
      scroller:"#main",
      // markers:true, 
      start:"top 44%",
      end:"top -60%",
      // scrub:2,
    }
})
}
page5Animation();


function page6Animation(){
  
  gsap.to("#page6-two img",{
    height:"100vh",
    y:"-30%",
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"top 0",
      end:"top -100%",
      scrub:2,
      pin:true
    }
  })
  gsap.from("#page6-one h1 span",{
    y:"-30%",
    stagger:"0.1",
    opacity:0,
    scrollTrigger:{
      trigger:"#page6 ",
      scroller:"#main",
      start:"top 44%",
      end:"top -60%",
      // scrub:2,
    }
})
  }
  page6Animation();
  
  
function page5Cursor(){
   var pageimg = document.querySelector("#page5");
   var cursor = document.querySelector("#page5-cursor")
   pageimg.addEventListener("mousemove",function(dets){

    cursor.style.display = "block"
    gsap.to("#page5-cursor",{
      left:dets.x + "px",
      top:dets.y + "px",
    })
   })
   pageimg.addEventListener("mouseleave",function(dets){
    
    cursor.style.display = "none"
    })
  
}
page5Cursor();
function page6Cursor(){
  var pageimg = document.querySelector("#page6");
  var cursor = document.querySelector("#page6-cursor")
  pageimg.addEventListener("mousemove",function(dets){
   cursor.style.display = "block"
   gsap.to("#page6-cursor",{
     left:dets.x + "px",
     top:dets.y + "px",
     opacity:0.8
   })
  })
  pageimg.addEventListener("mouseleave",function(dets){
   // cursor.style.left = dets.x + "px"
   // cursor.style.top = dets.y + "px"
   cursor.style.display = "none"
   })
 
}
page6Cursor();

function page7Animation(){
  gsap.to("#page7 h1",{
  
    transform:"translateX(-55%)",
    fontWeight:"100",
    color:"#8d8989",
    ease:"ease.inOut",
    scrollTrigger:{
      trigger:"#page7",
      scroller:"#main",
      start:"top 0",
      end:"top -100%",
      scrub:5,
      pin:true
    }
  })

}
page7Animation();

function page8Animation(){
  gsap.from("#page8 img",{
   width:0,
   scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    start:"top 50%",
    end:"top -100%"
   }
  })
  gsap.from("#inside h5",{
    opacity:0.5,
    y:10,
    scrollTrigger:{
     trigger:"#page8",
     scroller:"#main",
    //  markers:true,
     start:"top 30%",
     end:"top -100%"
    }
   })
   gsap.from("#creation",{
    // opacity:0,
    scale:0,
    y:10,
    scrollTrigger:{
     trigger:"#page8",
     scroller:"#main",
    //  markers:true,
     start:"top 30%",
     end:"top -100%"
    }
   })
   
  var img = document.querySelector("#page8 img");
  img.addEventListener("mousemove",function(){
    gsap.to("#page8 img",{
      y:"30%",
      scrollTrigger:{
        trigger:"#page8",
        scroller:"#main",
        // markers:true,
        start:"top 30%",
        end:"top -100%",
        scrub:2
      }
    })
  })
  var creation = document.querySelector("#creation");
  creation.addEventListener("mouseenter",function(){
    gsap.to("#page8-line",{
      width:"100%",
      duration:0.6,
      ease:"ease.inOUt"
    })
    var tl = gsap.timeline();
    tl
    .to("#creation1",{
      stagger:1,
      opacity:0.5,
      y:"-85%",
      duration:0.9,
      delay:0.5
    })
    .to("#creation2",{
      y:"-85%",
      opacity:0.9,
      duration:0.9,
      delay:-0.6,
      // scale:0
    })
  })
  creation.addEventListener("mouseleave",function(){
    gsap.to("#page8-line",{
      width:"0%",
      duration:0.3,
      ease:"ease.inOUt"
    })
    var tl = gsap.timeline();
    tl
    .to("#creation2",{
      y:"30%",
      opacity:1,
      duration:0.9,
      delay:0.5
    })
    .to("#creation1",{
      y:"30%",
      duration:0.9,
      opacity:1,
      delay:-0.6,
      // scale:0
    })
  })
  
}
page8Animation();
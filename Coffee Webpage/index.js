
let tl1=gsap.timeline();
tl1.from("#coffee-can",{
    y:800,
    scale: 2,
    duration: 1
})


tl1.from(".background .half1:not(#coffee-can)",{
    x:1000,
    y: 1000,
    scale:1.5,
    duration:2,
   
   
    
})
tl1.from(".background .half2:not(#coffee-can)",{
    x:1000,
    y: 1000,
    scale:1.5,
    duration:2,
   
   
    
})

tl1.to("#coffee-can",{
    
    scale: 0.8,
    duration: 2
})
tl1.to("#coffee-can",{
    
    scale: 0.85,
    duration:1
})

let tl2 = gsap.timeline({
     scrollTrigger:{
        trigger: "#about",
        scroller: "body",
        scrub: 2, //reverse animation bhi chalna chahiye
        markers: true,
        start: "0% 50%",
        end: "50% 50%"

    }
});

tl2.to("#coffee-can",{
    top: 620,
    left: 69,
    scale: 0.6,
    duration: 1
},"hi")

tl2.to("#coffee-bean6",{
    top: 800,
    left: 259,
    scale: 0.6,
    duration: 1
},"hi")
tl2.to("#coffee-bean7",{
    top: 1000,
    left: 59,
    scale: 0.6,
    duration: 1
},"hi")
tl2.to("#coffee-bean5",{
    top: 1000,
    left: 300,
    scale: 0.6,
    duration: 1
},"hi")

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#menu",
        scroller: "body",
        scrub: 2,
        markers: true,
        start: "0% 50%",
        end: "30% 50%"
    }
});

tl3.to("#coffee-can",{
    x: 470,
    y: 600,
   duration:1
},"hii")

tl3.to("#coffee-bean5",{
    x:400,
    y:300,
    duration: 1,
},"hii")
tl3.to("#coffee-bean7",{
    x:550,
    y:750,
    duration: 1,
},"hii")
tl3.to("#coffee-bean6",{
    x:230,
    y:850,
    duration: 1,
},"hii")

tl3.from("#coffee-can1",{
    x:-1800,
    duration: 0.8
},"hii")
tl3.from("#coffee-can3",{
    x:1800,
    duration: 0.8
   
},"hii")





let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#contact",
        scroller: "body",
        scrub: 2,
        markers: true,
        start: "0% 50%",
        end: "30% 50%"
    }
});

tl4.to("#coffee-can",{
    x: 900,
    y: 1300,
   duration:1
},"hiii")


tl4.to("#can1",{
    x:800,
    opacity:1,
    rotate:-20,
    y:-100,
    duration: 1
},"hiii")
tl4.to("#can3",{
    x:700,
    opacity:1,
    rotate: 20,
    y:-100,
    duration: 1
   
},"hiii")
// tl4.to("#can1",{
//     x:600,
//     opacity:1,
//     rotate:-20,
//     y:700,
//     duration: 1
// },"hiii")
// tl4.to("#can3",{
//     x:200,
//     opacity:1,
//     rotate: 20,
//     y:700,
//     duration: 1
   
// },"hiii")








// // tl4.to("#coffee-bean5",{
// //     x:400,
// //     y:300,
// //     duration: 1,
// // },"hii")
// // tl4.to("#coffee-bean7",{
// //     x:550,
// //     y:750,
// //     duration: 1,
// // },"hii")
// // tl4.to("#coffee-bean6",{
// //     x:230,
// //     y:850,
// //     duration: 1,
// // },"hii")


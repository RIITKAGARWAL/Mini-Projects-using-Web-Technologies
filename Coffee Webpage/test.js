gsap.from("#F",{
    rotate: 20,
    duration: 2,
    delay:2,
    repeat: -1
})

gsap.from(".page1",{
    y: 1000,
    duration: 2,
    delay: 1
})

gsap.from("div span",{

    y: -100,
    opacity: 0,
    duration: 1,
    delay:1,
    stagger: 1

})
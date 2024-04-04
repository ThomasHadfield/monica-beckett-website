// PAGE LOADER

gsap.to(".loader-block", { 
    duration: 0.8,
    height: 0,
    delay: 0.1,
    ease: "power4.in",
    stagger: { amount: 0.06,}
});




// NAV

gsap.from(".top-nav p", { 
    opacity: 0, 
    y: 40,
    ease: "power4.inOut",
    duration: 1,
    delay: 0.6,
    stagger: { amount: 0.4,}
});

gsap.from(".project-item-wrap", { 
    opacity: 0,
    ease: "power4.inOut",
    duration: 2,
    delay: 0.8,
    stagger: { amount: 0.4,}
});
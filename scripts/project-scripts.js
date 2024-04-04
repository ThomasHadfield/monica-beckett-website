// PAGE LOADER

gsap.to(".loader-block", { 
    duration: 0.8,
    height: 0,
    delay: 0.1,
    ease: "power4.in",
    stagger: { amount: 0.06,}
});




// GSAP

gsap.from(".top-nav p", { 
    opacity: 0, 
    y: 40,
    ease: "power4.inOut",
    duration: 1,
    delay: 0.6,
    stagger: { amount: 0.4,}
});

gsap.from(".project-intro", { 
    opacity: 0,
    ease: "power4.inOut",
    duration: 2,
    delay: 0.6,
});

gsap.from(".project-images-wrap", { 
    y: 40,
    ease: "power4.inOut",
    duration: 1.4,
    delay: 1,
    opacity: 0
});
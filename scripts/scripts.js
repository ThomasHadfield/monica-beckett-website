// PRE LOADER

function startLoader(){
    let counterElement = document.querySelector(".counter-text");
    let currentValue = 0;

    function updateCounter(){
        if (currentValue === 100){
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100){
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 50) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();


gsap.to(".counter-text", {
    delay: 1.3,
    opacity: 0,
    duration: 1.2,
    ease: "power4.inOut"
});

gsap.to(".loader-block", { 
    delay: 1.3,
    duration: 0.8,
    height: 0,
    ease: "power4.in",
    stagger: { amount: 0.06,}
});



// GSAP

gsap.from(".top-nav p", { 
    opacity: 0, 
    y: 40,
    ease: "power4.inOut",
    duration: 2,
    delay: 1.4,
    stagger: { amount: 0.5,}
});

gsap.from("header", { 
    opacity: 0, 
    y: 80,
    ease: "power4.inOut",
    duration: 2,
    delay: 1.8
});
// GSAP
// gsap.from('body', {opacity:0, duration:1, y:50, ease: 'elastic(1, 0.3)'})

const tl = gsap.timeline({defaults:{duration:1, opacity:0, ease:'elastic(1, 0.3)'}});

tl.from("img, h1", {y:-200, ease:'bounce(1, 0.3)'})
    .from("#inputEmail", {x:100}, "-=.8")
    .from("#inputPassword", {x:-100}, "-=.8")
    .from(".checkbox, .d-grid", {y:30}, "-=.8");

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
    tl.timeScale(1.5);
    tl.reversed() ? tl.play() : tl.reverse();
})
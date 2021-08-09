const intro = document.querySelector('.intro');
const video = intro.querySelector('img');
const text1 = intro.querySelector('.gotovideo');
const text3 = intro.querySelector('.toptext');
const links = intro.querySelector('.introlinks');
const line = intro.querySelector('.topline');
const text2 = intro.querySelector('h1');



const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0,
})
    .addTo(controller);



    
    
    //TEXT ANIMATION
    const text2Anim = TweenMax.fromTo(text2, 3, { opacity: 1 }, { opacity: 0 });
    
    let scene3 = new ScrollMagic.Scene({
        duration: 100,
        triggerElement: intro,
        triggerHook: 0,
    })
    // .setPin(intro)
    .setTween(text2Anim)
    .addTo(controller)

    //viewphotos
    //TEXT ANIMATION
    const text3Anim = TweenMax.fromTo(text3, 3, { opacity: 0 }, { opacity: 1 });
    
    let scene4 = new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0,
    })
    // .setPin(intro)
    .setTween(text3Anim)
    .addTo(controller)
    
    //gotovideo
    //TEXT ANIMATION
    const text1Anim = TweenMax.fromTo(text1, 3, { opacity: 0 }, { opacity: 1 });
    
    let scene2 = new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0,
    })
    // .addIndicators(controller)
    .setTween(text1Anim)
    .addTo(controller)


    const linksAnim = TweenMax.fromTo(links, 3, { opacity: 0 }, { opacity: 1 });
    
    let scene5 = new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0,
    })
    // .addIndicators(controller)
    .setPin(intro)
    .setTween(linksAnim)
    .addTo(controller)

    const lineAnim = TweenMax.fromTo(line, 3, { height: "0%" }, { height: "100%" });
    
    let scene6= new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0,
    })
    // .addIndicators(controller)
    .setTween(lineAnim)
    .addTo(controller)

    const lineAnim2 = TweenMax.fromTo(line, 3, { opacity: "0" }, { opacity: "1" });
    
    let scene7= new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0,
    })
    // .addIndicators(controller)
    .setTween(lineAnim2)
    .addTo(controller)
    
    
//ONLOAD PAUSE
// function loadFrame() {
//     window.scroll(0, 5000)
// };
// window.onload = setTimeout(loadFrame, 3500);

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
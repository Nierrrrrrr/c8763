window.addEventListener('load', () => {
  for(const edge of document.querySelectorAll('.edge')) {
    edge.setAttribute('stroke-dashoffset', anime.setDashoffset(edge));
  }

  animate();
})

function animate() {
  const timeline = anime.timeline();

  timeline.add({ delay: 1000 }).add({
    targets: '.line',
    translateX: (target) => {
      let x = 600;
      let translate = 0;
      if (target.classList.contains('hori')) translate = anime.random(0, 1) ? x : -x;
      if (target.classList.contains('diag-right') || target.classList.contains('diag-left')) translate = x / 3;
      return [translate, 0];
    },
    translateY: (target) => {
      let y = 600;
      let translate = 0;
      if (target.classList.contains('vert')) translate = anime.random(0, 1) ? y : -y;
      if (target.classList.contains('diag-right')) translate = -y / 3;
      if (target.classList.contains('diag-left')) translate = y / 3;
      return [translate, 0];
    },
    scale: {
      value: [6, 1],
      duration: 500,
    },
    stroke: '#F9C100',
    opacity: {
      value: [0, 1],
      duration: 100,
    },
    delay: (t, i) => (i * 25),
    duration: 500,
    easing: 'easeOutQuart'
  }).add({
    targets: '.square',
    d: (el) => el.getAttribute('data-d'),
    opacity: {
      value: [0, 1],
      duration: 100
    },
    color: '#F9C100',
    duration: 1200,
    easing: 'easeOutCirc',
    delay: (el, i) => i * 120,
    offset: "-=300"
  }).add({
    targets: '.stripes',
    opacity: {
      value: 1,
      duration: 100
    },
    translateX: [-1000, 0],
    color: '#F9C100',
    delay: (el, i) => i * 75,
    duration: 400,
    easing: 'easeOutExpo',
    offset: "-=2200"
  }).add({
    targets: '.fill-ex',
    opacity: [1, 1],
    duration: 1000,
    offset: "-=1000"
  }).add({
    targets: '.fill',
    opacity: [0, 1],
    color: {
      value: '#F9C100',
      easing: 'easeOutExpo',
      delay: (t, i) => anime.random(0, 400),
      duration: 500
    },
    offset: "-=1000"
  }).add({
    targets: '.fill-ex',
    opacity: [0, 0],
    duration: 1,
    offset: "+=2000"
  }).add({
    targets: ['.fill', '.line'],
    opacity: [1, 0],
    duration: 1000
  }).add({
    targets: '.edge',
    strokeDashoffset: [0, 0],
    duration: 500,
    offset: "-=1000"
  }).add({
    targets: '.edge',
    strokeDashoffset: [0, anime.setDashoffset],
    delay: (el, i) => i * 250,
    easing: 'easeInOutSine',
    duration: 1000
  }).add({
    targets: '.square',
    d: (el) => [el.getAttribute('data-d'), el.getAttribute('data-od')],
    opacity: [1, 0],
    color: ['#F9C100', '#FFF'],
    duration: 1200,
    easing: 'easeInCirc',
    delay: (el, i) => i * 120,
    offset: "-=2500"
  }).add({
    targets: '.stripes',
    opacity: [1, 0],
    translateX: [0, 1000],
    color: ['#F9C100', '#FFF'],
    delay: (el, i) => i * 75,
    duration: 500,
    easing: 'easeInExpo',
    offset: '-=1200'
  }).add({
    targets: '.text-1',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: (el, i) => i * 100,
    duration: 200,
    easing: 'easeOutBack',
    offset: '+=200'
  }).add({
    targets: '.text-1',
    opacity: [1, 0],
    translateY: [0, -20],
    delay: (el, i) => i * 100,
    duration: 500,
    easing: 'easeOutQuart',
    offset: '+=1000'
  }).add({
    targets: '.text-2',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: (el, i) => i * 100,
    duration: 200,
    easing: 'easeOutBack'
  }).add({
    targets: '.text-2',
    opacity: [1, 0],
    translateY: [0, -20],
    delay: (el, i) => i * 100,
    duration: 500,
    easing: 'easeOutQuart',
    offset: '+=1500'
  }).add({
    targets: '#container',
    opacity: [0, 1],
    duration: 5000,
    easing: 'linear'
  });
}
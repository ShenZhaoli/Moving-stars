var star_num = 75;
var $container = $(".container");
var $containerWidth = $container.width();
var $containerHeight = $container.height();

for (var i = 0; i < star_num; i++) {
  var star = $('<div class="particle_star"></div>');
  TweenLite.set(star, {
    x: Math.random() * $containerWidth,
    y: Math.random() * $containerHeight
  });
  $container.append(star);
  star_fly(star);
}

function star_fly(elm) {
  var fly = new TimelineMax();
  var twinkle = new TimelineMax({
    delay: Math.floor(Math.random() * 2) + 1,
    repeatDelay: Math.floor(Math.random() * 6) + 1,
    repeat: -1
  });

  twinkle.to(
    [elm],
    0.25,
    { opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true },
    Math.floor(Math.random() * 6) + 1
  );
  
  fly
    .set(elm, {scale: Math.random() * 1.75 + 0.5})
    .to(elm, Math.random() * 100 + 100, {
    bezier: {
      values: [
        {
          x: Math.random() * $containerWidth,
          y: Math.random() * $containerHeight
        },
        {
          x: Math.random() * $containerWidth,
          y: Math.random() * $containerHeight
        }
      ]
    },
    onComplete: star_fly,
    onCompleteParams: [elm]
  });
}
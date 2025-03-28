AOS.init({
  duration: 1200,
  once: true,
});

// Preloader //
$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');

    // setInterval(function () {
    //     if($('#decentralized-img').attr('src')==''){
    //         $('#decentralized-img').attr('src',$('#decentralized-img').data('img'))
    //     }else{
    //         $('#decentralized-img').attr('src','')
    //     }
    // }, 3000);
})


$(function() {
    $(".r-menu").on("click", function(a) {
        $("body").addClass("show-menu");
        a.stopPropagation()
    });
    $(document).on("click", function(a) {
        if ($(a.target).is("body") === false) {
            $("body").removeClass("show-menu");
        }
    });
});


// FAQ //
$(".faq-box-list > a").on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
            .siblings(".content")
            .slideUp(200);
    } else {
        $(".faq-box-list > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
            .siblings(".content")
            .slideDown(200);
    }
});

// Crad Hover Animation //
const $card = document.querySelectorAll('.canvas-card, .exponentially-card');
let bounds;

function rotateToMouse(e,ele) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    ele.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;

  //   $card.querySelector('.glow').style.backgroundImage = `
  //   radial-gradient(
  //     circle at
  //     ${center.x * 2 + bounds.width/2}px
  //     ${center.y * 2 + bounds.height/2}px,
  //     #ffffff55,
  //     #0000000f
  //   )
  // `;
}

$card.forEach((element)=>{

    element.addEventListener('mouseenter', () => {
        bounds = element.getBoundingClientRect();
        rotateToMouse(event, element);
    });

    element.addEventListener('mouseleave', () => {
        rotateToMouse(event, element);
        element.style.transform = '';
        element.style.background = '';
    });

    element.addEventListener('mousemove', () => {
        rotateToMouse(event, element);
    });
})



// Bottom To Top //
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


var counted = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
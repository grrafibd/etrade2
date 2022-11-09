// hide event after click outside: 01

window.addEventListener('mouseup',function(event){
    var pol = document.getElementById('pol');
    if(event.target != pol && event.target.parentNode != pol){
        pol.style.display = 'none';
    }
});  


// ==============

// ======== click to hide/ open 
const targetDiv = document.getElementById("close_item");
const btn = document.getElementById("toggle_button");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

// ===========
// SLICK SLIDER
$('.slick_slider_1').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 2, 
 
  prevArrow:".arrow_left",
  easing:'easeInSine',
  // variableWidth: true,
  centerPadding: '500px',

  nextArrow:".arrow_right", 
  touchMove: true,
  responsive: [

    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
    },

    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }

]
});

// end slider 1


// SLICK SLIDER 2
$('.slick_slider_2').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 2, 
 
  prevArrow:".arrow_left",
  easing:'easeInSine',
  // variableWidth: true,
  centerPadding: '500px',

  nextArrow:".arrow_right", 
  touchMove: true,
  responsive: [

    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
    },

    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }

]
});

// slick slider 3


$('.slick_slider_3').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1, 
 
  prevArrow:".arrow_left",
  easing:'easeInSine',
  // variableWidth: true,
  centerPadding: '500px',

  nextArrow:".arrow_right", 
  touchMove: true,
  responsive: [

    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
    },

    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }

]
});



//  COUNTDOWN

$('#count_down1').countdown({
  date: '12/24/2023 23:59:59'
  }, function () {
    alert('Merry Christmas!');
  });

  //  button active class

  // 
var header = document.getElementById("img_button");
var btns = header.getElementsByClassName("btnx");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activex");
  current[0].className = current[0].className.replace(" activex", "");
  this.className += " activex";
  });
}

// bootstrap input form validation

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// ==============

// scrollspy



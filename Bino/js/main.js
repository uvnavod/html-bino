$(function($) {
  var time = 2000;

  $(window).scroll(function () {
    tourstart();
  });

  // var run = false;
  var check = 0;

  function tourstart() {
    var height = 4500;
    var scroll = $(window).scrollTop();
    if (scroll > height && check == 0) {
      run();
      check = 1;
    }
  }

  function run() {
    $('#user').animateNumber({ number: 3891 }, time);
    $('#post').animateNumber({ number: 281 }, time);
    $('#total').animateNumber({ number: 681 }, time);
    $('#campaign').animateNumber({ number: 168 }, time);
    $('#feature').animateNumber({ number: 298 }, time);
  }
});

function activeWorkItem(element) {
  var active = 'work-list__item--active';
  var list = $(".work-list__item");
  for (var i=0; i < list.length; i++) {
    list[i].classList.remove(active);
  }
  element.classList.add(active);
}

function activeDotItem(num) {
  var active = 'study-box-slide-dot__item--active';
  var list = $(".study-box-slide-dot__item");
  for (var i=0; i < list.length; i++) {
    list[i].classList.remove(active);
  }
  list[num-1].classList.add(active);
}

function showSlide(num) {
  active = "study-box-slide-list-item--active";
  var list = $(".study-box-slide-list-item");
  for (i = 0; i < list.length; i++) {
    list[i].classList.remove(active);
  }
  list[num-1].classList.add(active);
  activeDotItem(num);
}

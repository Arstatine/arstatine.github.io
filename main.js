$(document).ready(function () {
  $('#menu-btn').click(function () {
    var menu = $('#menu-icon').attr('name');

    if (menu === 'menu') {
      $('#menu-icon').attr('name', 'close');
      $('#menu-item').removeClass('opacity-0').addClass('opacity-100');
      $('#menu-item').removeClass('left-[100vw]').addClass('left-0');
    } else if (menu === 'close') {
      $('#menu-icon').attr('name', 'menu');
      $('#menu-item').removeClass('opacity-100').addClass('opacity-0');
      $('#menu-item').removeClass('left-0').addClass('left-[100vw]');
    }
  });
});

// fire if the projects reach the top of the screen
$(document).ready(function () {
  var distance = $('#projects').offset().top,
    $window = $(window);

  $window.scroll(function () {
    if ($window.scrollTop() >= distance - $('#menu-item').height()) {
      $('#nav-projects').addClass('border-b-2 text-slate-400 border-slate-400');
      $('#nav-home').removeClass('border-b-2 text-slate-400 border-slate-400');
      $('#nav-services').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-contact').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-about').removeClass('border-b-2 text-slate-400 border-slate-400');
    } else {
      $('#nav-projects').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-home').addClass('border-b-2 text-slate-400 border-slate-400');
    }
  });
});

// fire if the services reach the top of the screen
$(document).ready(function () {
  var distance = $('#services').offset().top,
    $window = $(window);

  $window.scroll(function () {
    if ($window.scrollTop() >= distance - $('#menu-item').height()) {
      $('#nav-services').addClass('border-b-2 text-slate-400 border-slate-400');
      $('#nav-home').removeClass('border-b-2 text-slate-400 border-slate-400');
      $('#nav-projects').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-contact').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-about').removeClass('border-b-2 text-slate-400 border-slate-400');
    }
  });
});

// fire if the about reach the top of the screen
$(document).ready(function () {
  var distance = $('#about').offset().top,
    $window = $(window);

  $window.scroll(function () {
    if ($window.scrollTop() >= distance - $('#menu-item').height()) {
      $('#nav-about').addClass('border-b-2 text-slate-400 border-slate-400');
      $('#nav-home').removeClass('border-b-2 text-slate-400 border-slate-400');
      $('#nav-projects').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-services').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-contact').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
    }
  });
});

// fire if the contact reach the top of the screen
$(document).ready(function () {
  var distance = $('#contact').offset().top,
    $window = $(window);

  $window.scroll(function () {
    if ($window.scrollTop() >= distance - $('#menu-item').height()) {
      $('#nav-contact').addClass('border-b-2 text-slate-400 border-slate-400');
      $('#nav-home').removeClass('border-b-2 text-slate-400 border-slate-400');
      $('#nav-projects').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-services').removeClass(
        'border-b-2 text-slate-400 border-slate-400'
      );
      $('#nav-about').removeClass('border-b-2 text-slate-400 border-slate-400');
    }
  });
});

// onclick menu list close menu
function closeMenu() {
  $(document).ready(function () {
    $('#menu-icon').attr('name', 'menu');
    $('#menu-item').removeClass('opacity-100').addClass('opacity-0');
    $('#menu-item').removeClass('left-0').addClass('left-[100vw]');
    window.history.replaceState(null, 'Link', '/web-portfolio/');
  });
}

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
      $('#btt').addClass('opacity-100');
      $('#btt').removeClass('opacity-0');
    } else {
      $('#btt').removeClass('opacity-100');
      $('#btt').addClass('opacity-0');
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
      $('#btt').addClass('opacity-100');
      $('#btt').removeClass('opacity-0');
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
      $('#btt').addClass('opacity-100');
      $('#btt').removeClass('opacity-0');
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
      $('#btt').addClass('opacity-100');
      $('#btt').removeClass('opacity-0');
    }
  });
});

// onclick menu list close menu
function closeMenu() {
  $(document).ready(function () {
    $('#menu-icon').attr('name', 'menu');
    $('#menu-item').removeClass('opacity-100').addClass('opacity-0');
    $('#menu-item').removeClass('left-0').addClass('left-[100vw]');
    window.history.replaceState(null, 'Link', '/');
  });
}

// onclick scrlol to contact
// onclick menu list close menu
function openContact() {
  $(document).ready(function () {
    window.location = '/#contact';
    window.history.replaceState(null, 'Link', '/');
  });
}

// onclick hi button open modal
function openModal() {
  $(document).ready(function () {
    $('#menu-icon').attr('name', 'menu');
    $('#menu-item').removeClass('opacity-100').addClass('opacity-0');
    $('#menu-item').removeClass('left-0').addClass('left-[100vw]');
    $('#myModal').css('display', 'flex');

    $('#close').click(function () {
      $('#myModal').css('display', 'none');
    });
  });
}

// onclick hi button open modal
function openResume() {
  $(document).ready(function () {
    $('#menu-icon').attr('name', 'menu');
    $('#menu-item').removeClass('opacity-100').addClass('opacity-0');
    $('#menu-item').removeClass('left-0').addClass('left-[100vw]');
    $('#resumeModal').css('display', 'flex');
    window.history.replaceState(null, 'Link', '/');

    $('#close1').click(function () {
      $('#resumeModal').css('display', 'none');
    });
  });
}

const details = document.querySelectorAll('details');

details.forEach((targetDetail) => {
  targetDetail.addEventListener('click', () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open');
      }
    });
  });
});

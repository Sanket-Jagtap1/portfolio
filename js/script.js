var words = ['FrontEnd Developer...', 'UI/UX Developer...', 'Freelancer...'],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 70;
var wordflick = function () {
setInterval(function () {
if (forwards) {
  if (offset >= words[i].length) {
    ++skip_count;
    if (skip_count == skip_delay) {
      forwards = false;
      skip_count = 0;
    }
  }
}
else {
  if (offset == 0) {
    forwards = true;
    i++;
    offset = 0;
    if (i >= len) {
      i = 0;
    }
  }
}
part = words[i].substr(0, offset);
if (skip_count == 0) {
  if (forwards) {
    offset++;
  }
  else {
    offset--;
  }
}
$('.word').text(part);
},speed);
};

$(document).ready(function () {
wordflick();
});

// skills

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
  $(this).animate({
     "width": $(this).parent().attr("data-bar") + "%"
  }, 1000);
  $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function() {
  $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);

// header

$(document).ready(function(){
  $('#header').html(`
  <nav class="navbar navbar-expand-lg ">
            <div class="container">
              <a class="navbar-brand logo" href="#"><img src="images/mylogo.png" width="11%" class="m-0 p-0"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link " href="index.html"> Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="education.html">Education</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="skills.html">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="work.html">Work</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>`)
});



(function($){
  $(window).on("load",function(){
      $(".content").mCustomScrollbar();
  });
})(jQuery);

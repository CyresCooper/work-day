var currentDay = moment().format("dddd, MMMM DD, YYYY  h:mm a");
$("#currentDay").text(currentDay);
var hour = parseInt(moment().format('H'));
var time = $(".time");
var saveBtn = $(".saveBtn");

//changes the backgroun as the time changes
function timeTracker() {
  time.each(function () {
    var block = $(this);
    var blockHr = parseInt(block.attr("data-hr"));

    if (blockHr === hour) {
      block.addClass("present").removeClass("past future");
    }
    if (blockHr < hour) {
      block.addClass("past").removeClass("present future");
    }
    if (blockHr > hour) {
      block.addClass("future").removeClass("past present");
    }
  });
}
timeTracker();
//save local storage
saveBtn.click(function () {
  plan = $(this).prev().val();
  block = $(this).prev().attr("id");
  localStorage.setItem(block, plan);
});
//clear local storage
$("#clearDay").on("click", function () {
  localStorage.clear();
  initPage()
});

$(document).ready(function () {
  for (var i = 9; i < 18; i++) {
    var savedPlan = document.getElementById(i)
    $(savedPlan).text(localStorage.getItem(i));
    console.log('savedPlan:', savedPlan)
  }
});





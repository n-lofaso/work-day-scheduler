// Waits for the page to be loaded 
$(document).ready(function () {
// Gets the current hour using Day.js
var currentHour = dayjs().hour();
console.log(currentHour);
// Sets the current date and formats it to Day of week, Month and Date and adds it to the page
var currentDay = dayjs().format('dddd, MMMM MM');
$('#current-day').append(currentDay);

// Click save button to save the time and users input to local storage
// "This" refers to the button element
$('.saveBtn').click(function (event) {

  event.preventDefault();

  var userInput = $(this).siblings('.description').val();
  var hour = $(this).parent().attr('id');

  localStorage.setItem(hour, userInput);
});
// Compares the current hour to the hour on the time block 
//and adds/removes a class depending if its past, present or future
//"this" refers to the time-block div
// uses .each to loop through every time block
  $('.time-block').each(function () {

    var setHour = $(this).attr('id');

    if (currentHour == setHour) {
      $(this).addClass('present');

    } else if (currentHour < setHour) {
      $(this).removeClass('present');
      $(this).addClass('future');

    } else if (currentHour > setHour) {
      $(this).removeClass('future');
      $(this).addClass('past');
    }
  });
//  Gets the users input from local storage and in the key corresponding to the hour
  $('#09 .description').val(localStorage.getItem('09'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));
});

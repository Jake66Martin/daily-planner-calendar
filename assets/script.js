// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  var hour = parseInt(dayjs().format('H'));


  hourArray = []


  var hour9 = $("#9").attr("id")
  var hour10 = $("#10").attr("id")
  var hour11 = $("#11").attr("id")
  var hour12 = $("#12").attr("id")
  var hour13 = $("#13").attr("id")
  var hour14 = $("#14").attr("id")
  var hour15 = $("#15").attr("id")
  var hour16 = $("#16").attr("id")
  var hour17 = $("#17").attr("id")

  var hour9N = parseInt(hour9)
  var hour10N = parseInt(hour10)
  var hour11N = parseInt(hour11)
  var hour12N = parseInt(hour12)
  var hour13N = parseInt(hour13)
  var hour14N = parseInt(hour14)
  var hour15N = parseInt(hour15)
  var hour16N = parseInt(hour16)
  var hour17N = parseInt(hour17)

  hourArray.push(hour9N)
  hourArray.push(hour10N)
  hourArray.push(hour11N)
  hourArray.push(hour12N)
  hourArray.push(hour13N)
  hourArray.push(hour14N)
  hourArray.push(hour15N)
  hourArray.push(hour16N)
  hourArray.push(hour17N)

  for (i = 0; i < hourArray.length; i++) {

    if (hourArray[i] === hour) {

      
      $(hourArray[i]).removeClass("row time-block")

      $(hourArray[i]).addClass("row time-block present")

    } else if (hourArray[i] >= 9 && hourArray[i] < hour) {

     console.log("hello")

      $(hourArray[i]).removeClass("row time-block")

      $(hourArray[i]).addClass("row time-block past")

    } else {

   

    }}




  












  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var today = dayjs().format('dddd, MMMM D[th]');

  $("#currentDay").text(today)


});


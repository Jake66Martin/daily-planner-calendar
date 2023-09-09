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
  

  hourArray = [
    hour9 = parseInt($("#9").attr("id")),
    hour10 = parseInt($("#10").attr("id")),
    hour11 = parseInt($("#11").attr("id")),
    hour12 = parseInt($("#12").attr("id")),
    hour13 = parseInt($("#13").attr("id")),
    hour14 = parseInt($("#14").attr("id")),
    hour15 = parseInt($("#15").attr("id")),
    hour16 = parseInt($("#16").attr("id")),
    hour17 = parseInt($("#17").attr("id"))
  ]

  for (i = 0; i < hourArray.length; i++) {
    
  }

  console.log(typeof hourArray[0])

  // hourArray.push(hour9.attr("id"))
  // hourArray.push(hour10.attr("id"))
  // hourArray.push(hour11.attr("id"))
  // hourArray.push(hour12.attr("id"))
  // hourArray.push(hour13.attr("id"))
  // hourArray.push(hour14.attr("id"))
  // hourArray.push(hour15.attr("id"))
  // hourArray.push(hour16.attr("id"))
  // hourArray.push(hour17.attr("id"))

  
 
  

  

  




 
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


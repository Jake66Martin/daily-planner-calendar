
$(function () {
// This code retrieves the time from dayjs and parses it into a number
  var hour = parseInt(dayjs().format('H'));



  var buttons = $("button");



  hourArray = []

// This code grabs the id value of the associated elements
  var hour9 = $("#9").attr("id");
  var hour10 = $("#10").attr("id");
  var hour11 = $("#11").attr("id");
  var hour12 = $("#12").attr("id");
  var hour13 = $("#13").attr("id");
  var hour14 = $("#14").attr("id");
  var hour15 = $("#15").attr("id");
  var hour16 = $("#16").attr("id");
  var hour17 = $("#17").attr("id");


// This code parses the id values and turns them into numbers
  var hour9N = parseInt(hour9);
  var hour10N = parseInt(hour10);
  var hour11N = parseInt(hour11);
  var hour12N = parseInt(hour12);
  var hour13N = parseInt(hour13);
  var hour14N = parseInt(hour14);
  var hour15N = parseInt(hour15);
  var hour16N = parseInt(hour16);
  var hour17N = parseInt(hour17);

// This code pushes the parsed values into the created array
  hourArray.push(hour9N);
  hourArray.push(hour10N);
  hourArray.push(hour11N);
  hourArray.push(hour12N);
  hourArray.push(hour13N);
  hourArray.push(hour14N);
  hourArray.push(hour15N);
  hourArray.push(hour16N);
  hourArray.push(hour17N);

  
// This code loops through the time blocks in the array and compares them to the time in order to give them their color codes
  for (i = 0; i < hourArray.length; i++) {

    if (hourArray[i] === hour) {

      var color = $("#" + hourArray[i]);

      color.removeClass("past");

      color.removeClass("future");

      color.addClass("present");


    } else if (hourArray[i] < hour) {

      var color = $("#" + hourArray[i]);

      color.removeClass("present");

      color.removeClass("future");

      color.addClass("past");

    } else {

      var color = $("#" + hourArray[i]);

      color.removeClass("past");

      color.removeClass("present");

      color.addClass("future");

    }
  }


// This code delegates an event listener to the buttons in order to save the content to the local storage for each button and associated textarea
  $(".btn").on("click", function (event) {

  
    var box = $(this).parent().attr("id");
  
    var text = $(this).siblings("textarea").val()

    localStorage.setItem(box, text);
   
   
    
  })


// This code retrieves the saved data in order to persist on the screen
  $("#hour9").val(localStorage.getItem("9"));
  $("#hour10").val(localStorage.getItem("10"));
  $("#hour11").val(localStorage.getItem("11"));
  $("#hour12").val(localStorage.getItem("12"));
  $("#hour13").val(localStorage.getItem("13"));
  $("#hour14").val(localStorage.getItem("14"));
  $("#hour15").val(localStorage.getItem("15"));
  $("#hour16").val(localStorage.getItem("16"));
  $("#hour17").val(localStorage.getItem("17"));



 


















  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var today = dayjs().format('dddd, MMMM D[th]');

  $("#currentDay").text(today);

 



});


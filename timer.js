var break_num;
var session_num;
var interval;
var counter;
var tag = "Session";

$(document).ready(function() {

  break_num = 5;
  session_num = 25;
  $("#break").html(break_num);
  $("#session").html(session_num);
  $("#tag").html(tag);
  $("#time").html(session_num + ":00");


  $("#break-minus").click(function() {
    $("#start").prop("disabled",false);
    clearInterval(interval);
    $(".timer").css("background", "linear-gradient(#333333 100%, #99CC00 0%)");
    break_num = Math.round(break_num);
    if (break_num > 1) {
      break_num --; 
    }
    $("#break").html(break_num);
    tag = "Break";
    $("#tag").html(tag);
    $("#time").html(break_num + ":00");
  });
  $("#break-plus").click(function() {
    $("#start").prop("disabled",false);
    clearInterval(interval);
    $(".timer").css("background", "linear-gradient(#333333 100%, #99CC00 0%)");
    break_num = Math.round(break_num);
    break_num ++;
    $("#break").html(break_num);
    tag = "Break";
    $("#tag").html(tag);
    $("#time").html(break_num + ":00");    
  });
  
  $("#session-minus").click(function() {
    $("#start").prop("disabled",false);
    clearInterval(interval);
    $(".timer").css("background", "linear-gradient(#333333 100%, #99CC00 0%)");
    session_num = Math.round(session_num);
    if (session_num > 1) {
      session_num --; 
    }
    $("#session").html(session_num);
    tag = "Session";
    $("#tag").html(tag);
    $("#time").html(session_num + ":00");
  });
  $("#session-plus").click(function() {
    $("#start").prop("disabled",false);
    clearInterval(interval);
    $(".timer").css("background", "linear-gradient(#333333 100%, #99CC00 0%)");
    session_num = Math.round(session_num); 
    session_num ++;
    $("#session").html(session_num);
    tag = "Session";
    $("#tag").html(tag);
    $("#time").html(session_num + ":00");
  });


 
$("#start").click(function() {
  $("#start").prop("disabled",true);
  if (tag === "Session") {
    counter = session_num * 60;
  } else {
    counter = break_num * 60;
  }
  interval = setInterval(function() {
    
    $("#time").html(Math.floor(counter/60) + ":" + ("0" + counter % 60).slice(-2));
    counter--;
    if (counter < 0 && tag === "Session") {
      $(".timer").css("background", "linear-gradient(#333333 100%, #99CC00 0%)");
      tag = "Break";
      $("#tag").html(tag);
      counter = break_num * 60;
    };
    if (counter < 0 && tag === "Break") {
      $(".timer").css("background", "linear-gradient(#333333 100%, #99CC00 0%)");
      tag = "Session";
      $("#tag").html(tag);
      counter = session_num * 60;
    };
    if (counter <= 60) {
      pct = counter/60 *100;
      $(".timer").css("background", "linear-gradient(#333333 " + pct + "%, #99CC00 0%)");
    }

  }, 1000);
});

$("#pause").click(function() {
  $("#start").prop("disabled",false);
  if (tag === "Session") {
    session_num = counter / 60;  
  } else {
    break_num = counter / 60;
  }
  clearInterval(interval);
});

$("#reset").click(function() {
  $("#start").prop("disabled",false);
  break_num = 5;
  session_num = 25;
  $("#break").html(break_num);
  $("#session").html(session_num);
  $("#time").html(session_num + ":00");
  tag = "Session";
  $("#tag").html(tag);
  clearInterval(interval);
  $(".timer").css("background", "linear-gradient(#333333 100%, #99CC00 0%)");
});


});


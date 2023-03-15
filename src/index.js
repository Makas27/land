showGreeting();
function getDateTime() {
  let today = new Date();
  let dayNum = today.getUTCDay();
  let date = today.getDate();
  let day;
  let monthNum = today.getMonth();
  let month;

  function getTime() {
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let postTime;
    let time;

    if (hours >= 12) {
      hours -= 12;
      postTime = "pm";
    } else {
      postTime = "am";
    }

    if (hours == "0") {
      hours = "12";
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    time =
      hours +
      ":" +
      "</div>" +
      '<div id="dateTime">' +
      minutes +
      " " +
      postTime +
      "</div>";

    return time;
  }

  time = getTime();

  let dayMap = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    0: "Sun",
  };

  day = dayMap[dayNum];

  let monthMap = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  month = monthMap[monthNum];

  let greeting =
    "It's " +
    '<div id="dateTime">' +
    time +
    " on " +
    '<div id="dateTime">' +
    day +
    ", " +
    date +
    " " +
    month +
    "</div>";
  return greeting;
}

function showGreeting() {
  document.getElementById("greeting").innerHTML = getDateTime();
  setTimeout(showGreeting, 2000);
}

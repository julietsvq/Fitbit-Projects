import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from "power";

clock.granularity = "minutes";

const timeLabel = document.getElementById("timeLabel");
const dateLabel = document.getElementById("dateLabel");
const batteryLabel = document.getElementById("batteryLabel");
const weatherLabel = document.getElementById("weatherLabel");

clock.ontick = (evt) => {
  var today = evt.date;
  var hours = today.getHours();
  
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var wd = days[today.getDay()];
  var d = today.getDate();
  var m = months[today.getMonth()];
  var y = today.getFullYear();
  
  if (preferences.clockDisplay === "12h") {
    hours = hours % 12 || 12;
  } else {
    hours = util.zeroPad(hours);
  }
  
  var mins = util.zeroPad(today.getMinutes());
  var bat = Math.floor(battery.chargeLevel);
  
  if(bat < 16)
    batteryLabel.style.fill = "red";
  else if (bat < 30)
    batteryLabel.style.fill = "yellow"; 
  else
    batteryLabel.style.fill = "green"; 
  
  batteryLabel.text = bat + "%";
  timeLabel.text = hours + ":" + mins;
  dateLabel.text = wd + ' ' + d + ' ' + m + ' ' + y;
  weatherLabel.text = 27;
}

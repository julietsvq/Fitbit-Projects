## Main clock face

1. 	Let's start with the [Basic clock face](https://github.com/julietsvq/Fitbit_MainClock/tree/master/BasicClock).

2. 	Go to the /resources/ folder and modify these files: 

> index.gui, so that we add a new label and name each label accordingly: 
```
		<svg class="background">
		  <text id="timeLabel" />
		  <text id="batteryLabel" />
		</svg>
```
> styles.css, so that we update the time label name and customize the battery label appearance:
```
		#timeLabel {
		  font-size: 80;
		  font-family: System-Bold;
		  text-length: 32;
		  text-anchor: middle;
		  x: 50%;
		  y: 50%+40;
		  fill: white;
		}
		
		#batteryLabel {
		  font-size: 20;
		  font-family: System-Bold;
		  text-length: 32;
		  text-anchor: middle;
		  x: 70%;
		  y: 80%;
		  fill: grey;
		}
```

3. Now go to the /app/ folder and modify the index.js file:

> Add a new import to use the Power API: 
```	
		import { battery } from "power";
```	
> Update the time label reference and retrieve the battery label: 
```			
		const timeLabel = document.getElementById("timeLabel");
		const batteryLabel = document.getElementById("batteryLabel");
```	
> Update the time label and battery label texts:
```	
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
```

4. Run, you should now see the time and battery level on your FitBit device: 

[Clock face](https://github.com/julietsvq/Fitbit-Projects/tree/master/MainClock/readme_images/clockface.png)

5. In a similar way you can add date and other info to your clock face, check out the MainClock repo for further ideas.

/*morning routine if I wake up early

	
Alarm goes off at 6:30. Do you feel rested?
	Yes - Alright then, put your robe and slippers on and get Nikki up to go outside.

	No - hit the snooze button and 15 minutes later the alarm goes off again.
		do you feel rested now?
			No - hit the snooze again
			yes - okay your up now. You might have time to work out before heading to school so get up and get going.
				No - after another 15 minutes the alarm goes off and it's now 7Am.
					you no longer have time to work out so you missed out */ 
var snooze = prompt("It's 6:30am and the Alarm is going off. Are you feeling rested or should I hit snooze?")

if (snooze === "rested") {
	alert("Alright then, put your robe and slippers on and get Nikki up to go outside.")
	alert("You now have enought time before you need to leave to work out and get a good start on the day.")
	alert("Good Job!") } else {
	if (snooze === "snooze") { 
		var tired = confirm("Alarm goes off again. Are you still tired and hit the snooze again?")
			if (tired === true) {
				var snooze2 = confirm("You know you stayed up too late doing homework, just hit snooze again!")
			} else {
				alert("You just might have enought time to get a workout in so lets get the dog outside, warm up that tea and get your butt in the workout room!")
			}	
			if (snooze2 === true){
				alert("Alarm goes off 15min later and now it's 7AM. you now have no time to work out.")
				alert("You really need to go to sleep earlier so you can work out in the morning.")
				} 
	  }
}

 
	
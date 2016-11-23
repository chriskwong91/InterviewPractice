/*
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with attributes startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

  {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function condenseMeetingTimes() that takes an array of meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]
*/

// Init condensed array;
// sort the input array based on start time
// set new var current block to the first element in sorted array
// iterate from elem 2 to end of array
	// if start time of elem is lessthan or equal to end time of current block
		// if the end time of elem is greater than end time of current block
			// change current block end time to elem end time

	// else
		// push current block to condensed array
		// set current block to current elem

// return condensed array

const condensedMeetingTimes = (arrayOfTimes) => {
    let condensedTimes = [];
 	arrayOfTimes.sort((a,b) => {
       return a.startTime - b.startTime;
    }); 
    let currBlock = arrayOfTimes[0];
    for(var i = 1; i < arrayOfTimes.length; i++) {
    	if (arrayOfTimes[i].startTime <= currBlock.endTime) {
        	if (arrayOfTimes[i].endTime > currBlock.endTime) {
            	currBlock.endTime = arrayOfTimes[i].endTime;   
            }
        } else {
        	condensedTimes.push(currBlock);
            currBlock = arrayOfTimes[i];
        }     
    }
    condensedTimes.push(currBlock);
    return condensedTimes;
};

let times =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];
console.log(condensedMeetingTimes(times));
console.log(condensedMeetingTimes([{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}]));
console.log(condensedMeetingTimes(  [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}]));
console.log(condensedMeetingTimes(  [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
]));
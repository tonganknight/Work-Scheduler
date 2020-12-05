var timenow = moment().format("dddd, MMMM Do YYYY, h a");


//adding current time to page
$("#currentDay").html(timenow);


//getting  hour date month year from current time  
var currenthour = moment().format("HH");
console.log(currenthour);

var currentday = moment().format("D")
console.log(currentday);

var currentmonth =moment().format("M");
console.log(currentmonth);

var currentyear = moment().format("YYYY");
console.log(currentyear);

var daystart = moment().startOf('date');

//declaring to start of day from currenttime  





//time blocks 

//9AM
var nineblock = moment(daystart).add(9,'hours');
nineblock =moment(nineblock).format("dddd, MMMM Do YYYY, h a");




//color logic
if(timenow < nineblock){
   document.getElementById("9").classList.add("past")
}





//5AM

var fiveblock =moment(daystart).add(17, 'hours')
fiveblock = moment(fiveblock).format("dddd, MMMM Do YYYY, h a");
    
console.log(fiveblock)
console.log(timenow)



if(timenow < fiveblock){
    document.getElementById("5").classList.remove("present")
    document.getElementById("5").classList.add("past")
 }
 
 if(timenow == fiveblock){
    document.getElementById("5").classList.remove("future")
    document.getElementById("5").classList.add("present")
 }

 if(timenow > fiveblock){
    document.getElementById("5").classList.remove("present")
    document.getElementById("5").classList.add("past")
 }
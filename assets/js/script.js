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
    document.getElementById("9").classList.remove("present")
    document.getElementById("9").classList.add("past")
}

if(timenow == fiveblock){
    document.getElementById("9").classList.remove("future")
    document.getElementById("9").classList.add("present")
 }

 if(timenow > fiveblock){
    document.getElementById("9").classList.remove("present")
    document.getElementById("9").classList.add("past")
 }

//10AM
var tenblock = moment(daystart).add(10,'hours');
 tenblock =moment(tenblock).format("dddd, MMMM Do YYYY, h a");

//color logic
if(timenow < tenblock){
    document.getElementById("10").classList.remove("present")
    document.getElementById("10").classList.add("past")
}

if(timenow == tenblock){
    document.getElementById("10").classList.remove("future")
    document.getElementById("10").classList.add("present")
 }

 if(timenow > tenblock){
    document.getElementById("10").classList.remove("present")
    document.getElementById("10").classList.add("past")
 }

 //11AM
 var elevenblock = moment(daystart).add(11,'hours');
 elevenblock =moment(elevenblock).format("dddd, MMMM Do YYYY, h a");

 //color logic
if(timenow < elevenblock){
    document.getElementById("11").classList.remove("present")
    document.getElementById("11").classList.add("past")
}

if(timenow == elevenblock){
    document.getElementById("11").classList.remove("future")
    document.getElementById("11").classList.add("present")
 }

 if(timenow > elevenblock){
    document.getElementById("11").classList.remove("present")
    document.getElementById("11").classList.add("past")
 }

 //12PM
 var noonblock = moment(daystart).add(12,'hours');
 noonblock =moment(noonblock).format("dddd, MMMM Do YYYY, h a");

 //color logic
    if(timenow < noonblock){
    document.getElementById("12").classList.remove("present")
    document.getElementById("12").classList.add("past")
    }

    if(timenow == noonblock){
    document.getElementById("12").classList.remove("future")
    document.getElementById("12").classList.add("present")
 }

    if(timenow > noonblock){
    document.getElementById("12").classList.remove("present")
    document.getElementById("12").classList.add("past")
    }

 //1pm
 var oneblock = moment(daystart).add(13,'hours');
 oneblock =moment(oneblock).format("dddd, MMMM Do YYYY, h a");

 //color logic
    if(timenow < oneblock){
    document.getElementById("1").classList.remove("present")
    document.getElementById("1").classList.add("past")
    }

    if(timenow == oneblock){
    document.getElementById("1").classList.remove("future")
    document.getElementById("1").classList.add("present")
 }

    if(timenow > oneblock){
    document.getElementById("1").classList.remove("present")
    document.getElementById("1").classList.add("past")
    }

    //2pm
    var twoblock = moment(daystart).add(14,'hours');
    twoblock =moment(twoblock).format("dddd, MMMM Do YYYY, h a");

    //color logic
    if(timenow < twoblock){
    document.getElementById("2").classList.remove("present")
    document.getElementById("2").classList.add("past")
    }

    if(timenow == twoblock){
    document.getElementById("2").classList.remove("future")
    document.getElementById("2").classList.add("present")
    }

    if(timenow > twoblock){
        document.getElementById("2").classList.remove("present")
        document.getElementById("2").classList.add("past")
    }

    //3PM
    var threeblock = moment(daystart).add(15,'hours');
    threeblock =moment(threeblock).format("dddd, MMMM Do YYYY, h a");

        //color logic
        if(timenow < threeblock){
        document.getElementById("3").classList.remove("present")
        document.getElementById("3").classList.add("past")
        }
    
        if(timenow == threeblock){
        document.getElementById("3").classList.remove("future")
        document.getElementById("3").classList.add("present")
        }
    
        if(timenow > threeblock){
            document.getElementById("3").classList.remove("present")
            document.getElementById("3").classList.add("past")
        }

    //4PM
    var fourblock = moment(daystart).add(16,'hours');
    fourblock =moment(fourblock).format("dddd, MMMM Do YYYY, h a");

      //color logic
      if(timenow < fourblock){
        document.getElementById("4").classList.remove("present")
        document.getElementById("4").classList.add("past")
        }
    
        if(timenow == fourblock){
        document.getElementById("4").classList.remove("future")
        document.getElementById("4").classList.add("present")
        }
    
        if(timenow > fourblock){
            document.getElementById("4").classList.remove("present")
            document.getElementById("4").classList.add("past")
        }


//5PM

var fiveblock =moment(daystart).add(17, 'hours')
fiveblock = moment(fiveblock).format("dddd, MMMM Do YYYY, h a");
    

    //color logic
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

 //6PM
 var sixblock =moment(daystart).add(18, 'hours')
 sixblock = moment(sixblock).format("dddd, MMMM Do YYYY, h a");

 //color logic
 if(timenow < sixblock){
    document.getElementById("6").classList.remove("present")
    document.getElementById("6").classList.add("past")
 }

 if(timenow == sixblock){
    document.getElementById("6").classList.remove("future")
    document.getElementById("6").classList.add("present")
 }

 if(timenow > sixblock){
    document.getElementById("6").classList.remove("present")
    document.getElementById("6").classList.add("past")
 }








 
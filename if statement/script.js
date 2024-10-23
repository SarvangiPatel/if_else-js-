

// Code 1:  Check whether Rahul passed or not

var subject = "english";
var passing_marks = 70;
var rahul_marks = 75;
var rahul_subject = "english";
if (rahul_subject == subject && rahul_marks >= passing_marks) {
  console.log("Rahul Passed");
} else {
  console.log("Rahul not passed");
}


// Code 2: Marriage Problem

var gender = "male";
var age = 21;
if ((gender == "male") && (age >= 21)) {
  console.log("Male : Can Marry");
} else if ((gender == "female") && (age >= 18)) {
  console.log("Female : Can Marry");
} else {
  console.log(gender, "Can't get Marry");
}


// Code 3 : Check which number is greater

var a = 3;
var b = 20;
if (a > b) {
    console.log("a is greater");
} else {
    console.log("a is not greater");
}



// Code 4 : Check which number is greater among 3 numbers

var num1 = 30;
var num2 = 20;
var num3 = 15;
if (num1 > num2 && num1 > num3) {
    console.log("num1 is greater");
} 
else if(num1 < num2 && num2 > num3) {
    console.log("num2 is greater");
}

else{
    console.log("num3 is not greater");
}



/*********************************************Chapter 01*******************************************/
//Task 01
alert("Hello visitor have a good day.");
//Task 02
alert("Error! Please enter a valid password.");
//Task 03
alert("Wellcome to JS land.\n Happy coding" );
//Task 04
alert("Wellcome to JS land." );
alert("Happy coding!" );
//Task 05
alert("Hello I can run Js through my web browser's console.");
//Task 6 and 7 done in html file
/*********************************************Chapter 02*******************************************/
// Task 01. Declare a variable called username.
var username;
// Task 02. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Mehwish";
// Task 03 Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.
var message;
message = "Hello World";
alert(message);
//Task 04 Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
var name = "Jhone Doe";
var age = 15;
var course = "Certified Mobile Application Development."
alert(name);
alert(age + " years old.");
alert(course);
//Task 05 Write a script to display the following alert using one JS variable: 
var x = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(x);
//Task 06 Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 
var email = "mehwishnizam01@gmail.com"
alert("My email address is " + email);
// Task 07 Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn javascript from the Book"+ book);
//Task 08 A smarter way to learn JavaScript
document.write("Yah! I can write html content through javascript");
//Task 09 
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);
/*********************************************Chapter 03*******************************************/
// Task 01 Declare a variable called age & assign to it your age. Show your age in an alert box.
var age =18;
alert("I am " + age + " years old.");
//Task 02  Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page
var n = 1;
alert("You have visited this page " +n + " time");
//Task 03 Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
var birthYear = 2001;
document.write("<br>My birth year is " + birthYear + "<br> Data type of my declared variable is " + typeof(birthYear));
//Task 04 
var Visitors_name = "John Doe";
var  Product_title = "T-shirts";
var Quantity = 5;
document.write("<br>" + Visitors_name + " ordered " +Quantity+ Product_title+ "(s) on XYZ Clothing store");
/*********************************************Chapter 04*******************************************/
//Task 01 Declare 3 variables in one statement. 
var x,y,z;
//Task 02  Declare 5 legal & 5 illegal variable names.
//Legal
var x,x1,Visitors_name,name,$abc;
//Illegal
//var 1c,Visitors-name,x 1,!x,6t;






//Task 03
document.write(
    "<br><h1>Rules for naming JS variables</h1>\n<p>Variable names can only contain number, $and _. For example $my_1stVariable </p>\n<p>Variables must begin with a letter, $ or _. For example $name, _name or name </p>\n<p> Variable names are case sensitive.</p>\n<p> Variable names should not be JS keyw0rds</p>\n"
)
/*********************************************Chapter 05*******************************************/
//Task 01  Write a program that take two numbers & add them in a new variable. Show the result in your browser. 
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
document.write("<br>Sum of " + num1 +" and " +num2 + "is"+(num1+num2));
//Task 02  Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
document.write("<br>Product of " + num1 +" and " +num2 + "is"+(num1*num2));
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
document.write("<br>Difference of " + num1 +" and " +num2 + "is"+(num1-num2));
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
document.write("<br>Ratio of " + num1 +" and " +num2 + "is"+(num1/num2));
//Task 03 
var num;
document.write("<br>Value after variable declaration is" +num);
num = 5;
document.write("<br>Initial value: " +num);
num++;
document.write("<br>Value after increment is: " +num);
num = num + 7;
document.write("<br>Value after addition is:  " +num);
num--;
document.write("<br>Value after decrement is: " +num);
num = num%3;
document.write("<br>Remainder value: " +num);
//Task 04 
var quantity = 5;
var cost = 600;
document.write("<br>Total cost of buying " + quantity + "tickets is " +(quantity*cost));
//Task 05
document.write("<br>Table of 4<br>");
for (var i =1; i<=10; i++){
    document.write("<br> 4 * " +i+ "  = " +(4*i));
}
//Task 6
var C = 75;
document.write("<br>" + C + "¤C is "+((C-32)*(5/9)) + " ¤F");
var F = 37;
document.write("<br>" + F + "¤F is " + ((F*9/5)+32) +  " ¤C");
//Task 07 Write a program to implement checkout process of a shopping cart system for an e-commerce website.
var p1 = 650;
var p2 = 100;
var q1 = 3;
var q2 = 7;
var shippingCharges = 100;
document.write("<br> Price of Item 1 is " +p1+ "<br> Quantity of item 1 is " +q1+ "<br> Price of Item 2 is " +p2+ "<br> Quantity of item 2 is " +q2+ "<br> Shipping charges " +shippingCharges+"<br><br> Total Cost of your order is " +((p1*q1)+(p2*q2)+shippingCharges));
//Task 08 
var totalmarks = 980;
var obtainmarks = 804;
document.write("<br><h1>Mark Sheet</h1> <br><br> Total marks " + totalmarks + "<br> Obtain Marks " +obtainmarks+ "<br> Percentage " + (obtainmarks/totalmarks)*100);
 //Task 09
 var USD = 10;
 var SR = 25;
 var PKR = (10*104.8)+(25*28);
 document.write("<br><h1>Currency in Pkr</h1> <br><br> " + PKR);
 //Task 10
 var m = 6;
 var t = ((6+5)*10)/2;
 //Task 11;
 var currentyear = 2020;
 var birthyear = 2001;
 document.write("<br><h1>Age Calculator</h1> <br> Current Year " + currentyear + "<br> Birth Year " + birthYear + "<br> Your age is " +(currentyear-birthYear));
 //Task 12
 var radius = 20;
 document.write("<br><h1>The Geometrizer</h1> <br> Radius of Circle is " + radius +"<br> Circumference of circle si "+ (2*3.142*radius) + "<br> Area of Circle is " + (3.142*radius*radius));
 // Task 13
 var snack = "Chocolate chip";
 currentAge = 15;
 maxAge = 65;
 AmountPerDay = 3;
 document.write("<br> Favourite Snack " + snack + "<br> Current Age " +currentAge + "<br> Estimated maximum age " +maxAge+ "<br>Amount Per day " + AmountPerDay + "<br><br> You will need " +(maxAge-currentAge)*365*AmountPerDay +" to last you until the ripe oold age of " +maxAge);
/***************************************************Chapter 6-9************************************************* */
//Task 01
var a = 10;
document.write("Result: <br> The value of a is " +a+"<br> The value of ++a is "+ (++a) +"<br>Now the value of a is " + a+ "<br>The value of a++ is " +(a++)+ "<br>Now the value of a is " + a+ "<br> The value of a-- is "+ (a--) +"<br>Now the value of a is " + a+ "<br>The value of --a is " +(--a)+"<br>Now the value of a is " + a);
//Task 02
var A = 2, B = 1;
var result = --A - --B + ++B + B--;
//--A = 1
// --A - --B =  1 - 0 = 2
// --A - --B  + ++B = 1-0+1 = 2
// --A - --B + ++B + B-- = 1-0+1+1 = 3
document.write("<br> Value of a = " + A + "<br>Value of b = "  + B + "Result  = "  +result);
//Task 03
var name = prompt("Enter your name", "Your name");
document.write("Hello " +name + "Wellcome to our page");
//Task 05
var table;
table = +prompt("Enter a number to print table",5);
for (var i = 1; i<=10 ; i++){
    document.write("<br>" +table + " * " +i+ " = " + (table*i) );
}
//Task 06
var s1 = prompt("Enter first subject");
var s2 = prompt("Enter second subject"); 
var s3 = +prompt("Enter third subject");
var totalEach = 100;
var o1 = +prompt("Enter obtained marks infirst subject");
var o2 = +prompt("Enter obtained marks in second subject"); 
var o3 = +prompt("Enter obtained marks in third subject");

document.write("<br>'<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtain Marks</th><th>Percenatge</th></tr><tr><td>" +s1+ "</td><td> 100 </td><td> " +o1 + "</td><td> "+(o1)+"%</td></tr><tr><td>" +s2+ "</td><td> 100 </td><td> " +o2 + "</td><td> "+(o2)+"%</td></tr><tr><td>" +s3+ "</td><td> 100 </td><td> " +o3 + "</td><td> "+(o3)+"%</td></tr></table>'");
/***************************************Chaåter 9-11********************************************* */
//Task 01 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
var city = prompt("Enter city name ");
city = city.toLocaleLowerCase();
if(city === "karachi" ){
    document.write("<br>Wellcome to city of lights");
}
//Task 02 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
var gender = prompt("Enter your gender male or female");
gender = gender.toLowerCase();
if(gender === "male"){
    document.write("<br>Good Morning Sir");
}
else if(gender === "female"){
    document.write("<br>Good Morning Ma'am");
}
//Task 03 Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color = prompt("Enter color of traffic light");
if(color === "red" || color === "RED" || color === "Red"){
    document.write("<br> Must Stop");
}
else if(color === "green" || color === "GREEN" || color === "Green"){
    document.write("<br> Move");
}
else if(color === "yellow" || color === "YELLOW" || color === "Yellow"){
    document.write("<br> Ready to MOve");
}
else{
    document.write("<br>Wrong input");
}
//Task 03 Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car
var fuelamount = prompt("Enter the amount of fuel left in the car in litres");
if(fuelamount <=0.25){
    document.write("<br> Please refill the fuel in your car");
}
// Task 05 
var an = 4;
if (++an === 5){
    alert("given condition for variable a is true");// Output: alert will be run
}
var bn = 82; if (bn++ === 83){ alert("given condition for variable b is true"); } // Output: alert will not be run
var cn = 12; if (cn++ === 13){ alert("condition 1 is true"); }
if (cn === 13){ alert("condition 2 is true"); } 
if (++cn < 14){ alert("condition 3 is true"); } 
if(cn === 14){ alert("condition 4 is true"); } //Output: alert 'condition 2 is true' and 'condition 4 is true' will be run
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  // alert will be run
if (true){ alert("True"); } if (false){ alert("False"); } //Output: alert True will be run
if("car" < "cat"){ alert("car is smaller than cat"); } // Output: alert will be run
 // Task 06

var ob1 = +prompt("Enter obtained marks in first subject");
var ob2 = +prompt("Enter obtained marks in second subject"); 
var ob3 = +prompt("Enter obtained marks in third subject");
var tm1 = +prompt("Enter total marks in first subject");
var tm2 = +prompt("Enter total marks in second subject"); 
var tm3 = +prompt("Enter total marks in third subject");
per = ((o1+o2+o3)/(tm1+tm2+tm3))*100
document.write("<br><h1>Marks Sheet</h1> <br> Total Marks = " +(tm1+tm2+tm3)+"<br> Marks Obtained = " +(o1+o2+o3)+ "<br> Percentage = "+per);
if(per>=80){
    document.write("<br>Grade = " +" A-one <br> Excellent");

}
else if(per>=70){
    document.write("<br>Grade = " +" B <br> Good");

}else if(per>=60){
    document.write("<br>Grade = " +" C <br> You need to improve");

}else if(per<60&&per>0){
    document.write("<br>Grade = " +" Fail <br> Sorry");

}
else{
    document.write("<br> Wrong input");
}
//Task 07 Guess game
var secretnum = 5;
guesstnum = +prompt("Guess the number between 1 to 10");
if(secretnum === guesstnum){
    document.write("“Bingo! Correct answer");
}
else{
    document.write("Close enough to the correct answer");
}
// Task 08 Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3
var num = +prompt("Enter a number to check whether it is divisible by 3 or not");
if((num%3)===0){
    document.write("<br> " +num + "is divisible by 3");
}
else{
    document.write("<br> " +num + "is not divisible by 3");
}
//Task 09 Write a program that checks whether the given input is an even number or an odd number. 
var newnum = prompt("Enter a number to check whether it is odd  or even number");
if(newnum%2 === 0){
    document.write("<br> " +newnum + "is even number");
}
else{
    document.write("<br> " +newnum + "is odd number");
}
 //Task 10
 var temperature = prompt("Enter the temperature");
if(temperature >40){
    document.write("<br> It is too hot outside " );
}
else if(temperature>30){
    document.write("<br> The Weather today is Normal");
}
else if(temperature>20){
    document.write("<br> Today’s Weather is cool");
}
else if(temperature>10){
    document.write("<br> OMG! Today’s weather is so Cool");
}
//Task 11
var firstnum = +prompt("Enter first number" ,5);
var secondnum = +prompt("Enter second number" ,4);
var operator = prompt("Enter opeartor", "+" );
if(operator === "+"){
    document.write("<br>" +firstnum+" " + operator + " " + secondnum + " = " +(firstnum+secondnum));
}
else if(operator === "-"){
    document.write("<br>" +firstnum+" " + opeartor + " " + secondnum + " = " +(firstnum-secondnum));
}
else if(opertaor === "*"){
    document.write("<br>" +firstnum+" " + operator + " " + secondnum + " = " +(firstnum*secondnum));
}
else if(opertaor === "/"){
    document.write("<br>" +firstnum+" " + operator + " " + secondnum + " = " +(firstnumsecondnum));
}
else if(opertaor === "%"){
    document.write("<br>" +firstnum+" " + operator + " " + secondnum + " = " +((firstnum/secondnum)*100));
}
/******************************************Chapter 12 -13 **************************************/
//Task 01
var ch = prompt("Enter string or a number");
if((ch >= 'A'&& ch <='Z')){
    alert("You have entered an upppercase letter");
}
else if(ch >= 'a' && ch <= 'z'){
    alert("You have entered a lowercase letter");
}
else if(ch >= '1' && ch<= '9'){
    alert("You have entered number");
}
//Task 02
var n1 = +prompt("Enter first number");
var n2 = +prompt("Enter second number");
if(n1===n2){
    document.write("<br> Both numbers are equal");
}
else if(n1>n2){
    document.write("<br> Larger integer between " +n1 +" and " +n2 +" is " +n1);
}
else{
    document.write("<br> Larger integer between " +n1 +" and " +n2 +" is " +n2);

}
//Task 03
var n = +prompt("Enter a number to check it is positive, negative or zero");
if(n === 0){
    alert("You have entered zero");
}
else if(n > 0){
    alert("You have entered a positive number");
}
else if(n < 0){
        alert("You have entered negative number");   
}
//Task 04
var char = prompt("Enter a character to check it is vowel or not");
if((char >= 'A'&& char <= 'a')||(char >= 'a'&& char <= 'z')){
    if(char == 'a'|| char =='e'||char =='i'||char == 'o'||char =='u'||char =='A'||char=='E'||char=='I'||char=='O'||char=='U'){
        alert("You have entered a vowel");
    }
    else{
        alert("You have not entered a vowel");
    }
}
//Task 06
var correctPassword = "123"
var enterpassword = prompt("Enter your password: ");
if(enterpassword == ""){
    alert("Please enter your password");
}
else if(correctPassword === enterpassword){
  alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect Password");
}
//Task 07
var greeting; var hour = 13; 
if (hour < 18) { greeting = "Good day"; }else {greeting = "Good evening"; } //Corrected placements of brackets

//Task 08
var time = prompt("Enter time in 24 hours format");

    if(time >=0000&& time <1200){
    alert("Good Morning");}
    else if(time >=1200 && time < 1700){
    alert("Good Afternoon");
    }
    else if(time>=1700 && time <2100){
    alert("Good Evening");
    }
    else if(time >=2100 && time <2400)
    alert("Goog Night");

/* ****************************************Chapter 14-16**************************************/
//Task 01
var literalArray = [];
//Task 02
var objectArray = new Array();
//Task 3
var myArray = ["Mehwish", "Asif", "Areeba", "Malaika"];
//Task 04
var myArray2 = [1,2,3,4,5];
//Task 05
var myArray3 = [true,false,true,false];
//Task 06
var myArray4 = [1,"Mehwish", true];
//Task 07
var education = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<br><h1>Qualification</h1>");
for(var j = 0; j<education.length; j++){
    document.write("<br> " +j+") " +education[j]+ "<br>");
}
//Task 08
var studentName = ["Michael", "John", "Tony"];
var score = [320,230,480];
for(var k = 0; k<3; k++){
    document.write("<br>Score of " +studentName[k] + " is " + score[k]+". Percentage: " +(score[k]/500*100));
}

//Task 09
var colorName = ["Red", "Yellow", "Green"];
document.write("<br>Original array : " +colorName);
var color1 = prompt("<Enter the color to be added in the beginning of the array ", "Blue");
colorName.unshift(color1);
document.write("<br> " +color1+" is added in the beginning. <br>Updated Array : " +colorName);
var color2 = prompt("Enter the color to be added in the last of the array " , "Purple");
colorName.push(color2);
document.write("<br> " +color2+" is added in last.<br>Updated Array : " +colorName);
document.write("<br>Adding two more colors in the beginning of the array");
colorName.unshift("Maroon", "Golden");
document.write("<br>Updated Array : " +colorName);
document.write("<br>Deleting first element of the array");
colorName.shift();
document.write("<br>Updated Array : " +colorName);
document.write("<br>Deleting last element of the array");
colorName.pop();
document.write("<br>Updated Array : " +colorName);

document.write("<br>Write the color and index of the color you want to add in the array ");
var color3 = prompt("Enter the color to be added ");
var Index = prompt("Enter at which index you want " +color3 + "to be added" );
colorName.splice(Index,0,color3);
document.write("<br>Updated Array : " +colorName);

var Index1 =  prompt("From whixh index you want to delete elments from the array ",1);

var Numbers = prompt("How many elements you want to delete",1 );
colorName.splice(Index1,Numbers);
document.write("<br>Updated Array : " +colorName);


//Task 10
var arr = [320,230,480,120]
var arr2 = arr.sort();
document.write("<br>Scores of student: " +arr);
document.write("<br>Sorted scores of student: " +arr2);

//Task 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
var selectedCities = cities.push(cities[0],cities[3],cities[4]);
document.write("<br> Cities list : " +cities +"<br><br> Selected Cities: " +selectedCities);
 //Task 12
 var Arr = ["This", "Is", "my", "Cat"];
 var stringFromArray = Arr.join();
 document.write("<br> Array: " +Arr +"<br><br> String " +stringFromArray);

 //Task 13
 var Devices = ["Keybord", "Mouse", "Printer", "Monitor"];
 document.write("<br> Devices: " +Devices);
 for (var l = 0; l<Devices.length; l++){
     document.write("<br> Out: "+Devices[l]);
 }

 //Task 14

 var Devices = ["Keybord", "Mouse", "Printer", "Monitor"];
 document.write("<br> Devices: " +Devices);
 for (var i = Devices.length-1; i>=0; i++){
     document.write("<br> Out: "+Devices[i]);
 }

 //Task 15

 var PhoneManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<br>Select one Phone Manufacturer from the background");
 document.write("<select>");
 for (var i =0; i <PhoneManufacturer.length; i++){
 document.write("<option>" +PhoneManufacturer[i]+ "</option>" );
}
document.write("</select>");

/************************************Chapter 17-20****************************************** */
//Task 01
var multiArray = [[]];

//Task 02
multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// Task 03
for(var i = 1; i<=10; i++){
    document.write("<br>"+i);
}

//Task 04

var  TableToPrint = +prompt("Enter a number to show its multiplication table", 5);
var TableLength = +prompt("Enter length of multiplication table", 10);
document.write("<br> Multiplication of " +TableToPrint+ "<br> Length of table " +TableLength);
for(var i = 1; i<=TableLength; i++){
    document.write(TableToPrint + " * " +i+ " = " +(TableToPrint*i)+"<br>");
}

//Task 05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0; i<fruits.length; i++){
    document.write("<br>"+fruits[i]);
} 
for(var i = 0; i<fruits.length; i++){
    document.write("<br> Element at index " +i+ " is " +fruits[i]);
} 

//Task 06
document.write("<br> Counting: <br><br>");
for(var i =1; i<=15; i++){
    document.write(i+ ",");
}

document.write("<br> Reverse Counting: <br><br>");
for(var i =10; i>=1; i++){
    document.write(i+ ",");
}

document.write("<br> Even: <br><br>");
for(var i =0; i<=20; i=i+2){
    document.write(i+ ",");
}

document.write("<br> Odd: <br><br>");
for(var i =1; i<=20; i=i+2){
    document.write(i+ ",");
}

document.write("<br> Series: <br><br>");
for(var i =2; i<=20; i=i+2){
    document.write(i+ ",");
}
 //Task 07
 var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
 var itemToSearch = prompt("Wellcome to ABC Bakery. What do you want to order sir/ma'am");
 itemToSearch = itemToSearch.toLowerCase();
 for (var i = 0; i<bakery.length ; i++){
    if(itemToSearch === bakery[i]){
        break;
    }
 }
 if(i===bakery.length){
     document.write("<br> We are sorry! "+itemToSearch+ " is not available in our bakery.");
 }
 else{
    document.write("<br>" + itemToSearch+ "is present at index " +i);
 }

 //Task 08
 var X = [24,53,78,91,12];
 var max = X[0];
 document.write("<br> Array Elements: "+X + "<br> The largest number is ");
 for(var i =0; i<X.length; i++){
    if(X[i]>max){
        max = X[i];
    }
 }
 document.write(max);

//Task 09
var Y = [24,53,78,91,12];
var min = Y[0];
document.write("<br> Array Elements: "+ Y + "<br> The Smallest number is ");
for(var i =0; i<Y.length; i++){
   if(Y[i]<min){
       min = Y[i];
   }
}
document.write(min +"<br>");

//Task 10

for (var i =1; i<100; i++){
    if(i%5 === 0){
        document.write(i);
    }
}
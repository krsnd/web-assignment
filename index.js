myFunction1();
function myFunction1() {
let carName1 = "Volvo";
document.getElementById("demo1").innerHTML = typeof carName1 + " " + carName1;
}

document.getElementById("demo2").innerHTML = typeof carName1;
let carName2 = "Nano";
myFunction2();

function myFunction2() {
  document.getElementById("demo3").innerHTML = " myFunction2 can display  " + carName2+"  [carName2 can be displayed by function 2 as it is declared globally]";
}
{
        let x = 2; 
        document.getElementById("demo4").innerHTML="Inside the block it can display x as:"+x;
}
document.getElementById("demo5").innerHTML="type of x is:"+typeof x+"     "+"as x cant be accessed outside block ;view page souce for seeing block code";
function lengthFunction() {
    let x =document.getElementById("length").value;
    document.getElementById("demo").innerHTML= x.length;
} 

function replaceFunction() {
    let y = document.getElementById("replace").value;
    document.getElementById("demo1").innerHTML =
    y.replace("India","France");
}

function uppercaseFunction(){
  let a=document.getElementById("fname").value;
  document.getElementById("demo2").innerHTML= 
  a.toUpperCase();
}

  function lowercaseFunction() {
    let z = document.getElementById("sname").value;
    document.getElementById("demo3").innerHTML =
    z.toLowerCase();
  }

  function concate(){
   let a=document.getElementById("firstname").value;
   let b=document.getElementById("secondname").value;
    let c=a.concat(b);
    document.getElementById("demo4").innerHTML=c;
 }

  function trim(){
    let text1 = document.getElementById("ftname").value;
    let text2 = text1.trim();
    document.getElementById("demo5").innerHTML = text2;
   

}

function split(){

let text = document.getElementById("name1").value;
let myArray = text.split(" ");

document.getElementById("demo6").innerHTML = myArray[2];
}

// ------------------------------------------------------------------------------------------


    function multiply(){
      a=Number(document.my_cal.first.value);
      b=Number(document.my_cal.second.value);
      c=a*b;
      document.my_cal.total.value=c;
    }

    function addition(){
      a=Number(document.my_cal.first.value);
      b=Number(document.my_cal.second.value);
      c=a+b;
      document.my_cal.total.value=c;
    }


    function subtraction(){
      a=Number(document.my_cal.first.value);
      b=Number(document.my_cal.second.value);
      c=a-b;
      document.my_cal.total.value=c;
    }


    function division(){
      a=Number(document.my_cal.first.value);
      b=Number(document.my_cal.second.value);
      c=a/b;
      document.my_cal.total.value=c;
    }

    function modulus(){
      a=Number(document.my_cal.first.value);
      b=Number(document.my_cal.second.value);
      c=a%b;
      document.my_cal.total.value=c;
    }


function ifelseFunction()
{
var a=document.getElementById("text_a1").value;

if (a==1234)
  {
document.getElementById("answer1").innerText="Pin number is valid";
  }
else
  {
document.getElementById("answer1").innerHTML="Invalid pin number";
  }
}


function ifFunction()
{
var a=document.getElementById("text_a2").value;
if (a>=18)
  {
document.getElementById("answer").innerText="Major!";
  }
}


function ifelseifFunction()
{
var a=document.getElementById("text_a3").value;

if (a<50)
  {
document.getElementById("answer2").innerText="Fail";
  }
else if (a>=50) {
  document.getElementById("answer2").innerHTML="B Grade";
}
else
  {
document.getElementById("answer2").innerHTML="With held";
  }
}

function switchFunction() {
      var text;
      switch (new Date().getDay()) {
        case 1:
        case 2:
        case 3:
        default:
          text = "Looking forward to the Weekend";
          break;
        case 4:
        case 5:
          text = "Soon it is Weekend";
          break;
        case 0:
        case 6:
          text = "It is Weekend";
      }
      document.getElementById("answer3").innerHTML = text;
    }

    function compequal(){
      let x1=document.getElementById("text_a4").value;
      let y1=document.getElementById("text_a5").value;
      let result=(x1==y1);
      document.getElementById("answer4").innerHTML=result;
    }

    function compnotequal(){
      let x3=document.getElementById("text_a8").value;
      let y3=document.getElementById("text_a9").value;
      let result=(x3!==y3);
      document.getElementById("answer6").innerHTML=result;
    }

    function compgreaterthan(){
      let x4=document.getElementById("text_a10").value;
      let y4=document.getElementById("text_a11").value;
      let result=(x4>y4);
      document.getElementById("answer7").innerHTML=result;
    }

    function complessthan(){
      let x5=document.getElementById("text_a12").value;
      let y5=document.getElementById("text_a13").value;
      let result=(x5<y5);
      document.getElementById("answer8").innerHTML=result;
    }

    function compgreaterorequal(){
      let x6=document.getElementById("text_a14").value;
      let y6=document.getElementById("text_a15").value;
      let result=(x6>=y6);
      document.getElementById("answer9").innerHTML=result;
    }

    function complessorequal(){
      let x7=document.getElementById("text_a16").value;
      let y7=document.getElementById("text_a17").value;
      let result=(x7<=y7);
      document.getElementById("answer10").innerHTML=result;
    }

 
 var a = 10;
 var b = 20;
 var c = 30;
 // show to console
 console.log(a)
 // show to DOM (document object Model)
 document.write(a)
 // data pass by id 
 // if(a < 10)
 // {
 //     console.log('false');
 // }else{
 //     console.log('true');
 // }

 // const d = (a < 10) ? 'number is less than 10':'number is greater than 10';
 // console.log(d);

 // tarnary operator 
 console.log((b >=18) ? 'true' : 'false');


//  11/16/2022

//  var nam = 'Asif b';
//  console.log(nam);

//  template String 
var age = 25;
// var nam = 'Age is ' + age;
var nam = `Age is ${age} ${a+b}` // 1->bactreack->string->variable(${variable})
console.log(nam);

// null 
var xyz = null;
console.log(xyz);

// undefine
var y
console.log(a+xyz)
console.log(y+a)


document.getElementById('demo').innerHTML = nam;



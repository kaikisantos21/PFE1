 //exe1

 sayHello();
    print("Hello, World!")

sayHello()

//exe2

function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(5, 7)); 

  //exe3
  function localExample() {
    let message = "Variável local";
    console.log(message); 
  }
  
  localExample();
  console.log(message); 
  
  //exe4
  
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet("kaiki");  
  greet("santos");    
  greet("silva"); 


  //exe5
  
function calculateArea(radius) {
    return Math.PI * radius * radius;
  }
  
  console.log(calculateArea(2));

  //exe6
   global
x = 10

 shadowExample(x);
    print("Parâmetro x:", x)  
    print("Variável global x:", globals()['x']) global x

shadowExample(20)

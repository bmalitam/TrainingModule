'use strict';
var  x = 10;
// Here x is 10

{  
var x = 2;
// Here x is 2
}

let  y = 10;
// Here x is 10

try{

  {  
    let y = 2;
    // Here x is 2
  }
}
catch(err)
{
  y = err.message;
}

const  z = 100;
// Here x is 10

{  
  const z = 22;
  // Here x is 2
}
function redeclare() {
    document.getElementById("demo10").innerHTML = ["var",x,"let", y, "const",z];
}

redeclare();

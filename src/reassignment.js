'use strict';
var  x = 10;
x = 2;

let  y = 10;
y = 2;

const  z = 100;

try{const z = 22;}
catch(err){z = 9999999999;}

const w =["a","b","c"];
try{w=["w"];}
catch(err){w[0]="w";}

function assign() {
    document.getElementById("demo9").innerHTML = ["var",x,"let", y, "const",z,"const array",w];
}
//without running the code write down which variable can be reassigned which cannot be

assign();

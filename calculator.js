function run1(){    
    document.case.display.value += "1"
};
function run2(){
    document.case.display.value += "2"
};
function run3(){
    document.case.display.value += "3"
};
function run4(){
    document.case.display.value += "4"
};
function run5(){
    document.case.display.value += "5"
};
function run6(){
    document.case.display.value += "6"
};
function run7(){
    document.case.display.value += "7"
};
function run8(){
    document.case.display.value += "8"
};
function run9(){
    document.case.display.value += "9"
};
function run0(){
    document.case.display.value += "0"
};
function runPlus(){
    document.case.display.value += "+"
};
function runMinus(){
    document.case.display.value += "-"
};
function runDivide(){
    document.case.display.value += "/"
};
function runMultiply(){
    document.case.display.value += "*"
};
function runC(){
    document.case.display.value = ""
};
function runsqrt(){
    document.case.display.value = Math.sqrt(document.case.display.value)
   
}
function plsmin(){
    document.case.display.value = -1*document.case.display.value;
}
function runpow3(){
    document.case.display.value = Math.pow(document.case.display.value, 3);}
function rundivx(){
    var divx= 1 / document.case.display.value
    document.case.display.value = divx;
}
function runEquals() {
    var equals = eval(document.case.display.value)
    document.case.display.value = equals;
}
// programming calculator
function runbin(){
    document.case.display.value = (document.case.display.value >>> 0).toString(2);
}
function rundec(){
    document.case.display.value = parseInt(document.case.display.value,2);
}
function runoct(){
    document.case.display.value = (document.case.display.value >>> 0).toString(8);
}
function runhex(){
    document.case.display.value = (document.case.display.value >>> 0).toString(16);
}
//Length calculator
function runmilm(){
    document.case.display.value = 1000*document.case.display.value+"mm"; 
}
function runcenm(){
    document.case.display.value = 100*document.case.display.value+"cm";
}
function rundecm(){
    document.case.display.value = 10*document.case.display.value+"dm";
}
function runkilm(){
    document.case.display.value = document.case.display.value/10+"km";
}
//Math function calculator
function runsin(){
    document.case.display.value = Math.sin(document.case.display.value);
}
function runcos(){
    document.case.display.value = Math.cos(document.case.display.value);
}
function runtg(){
    document.case.display.value = Math.tan(document.case.display.value);
}
function runcotg(){
    document.case.display.value = 1/Math.tan(document.case.display.value);
}
function runasin(){
    document.case.display.value = Math.asin(document.case.display.value);
}
function runacos(){
    document.case.display.value = Math.acos(document.case.display.value);
}
function runatg(){
    document.case.display.value = Math.atan(document.case.display.value);
}
function runacotg(){
    document.case.display.value = 1/Math.atan(document.case.display.value);
}
function runDeg(){
    document.case.display.value = document.case.display.value * (180/Math.PI);
}
function runRad(){
    document.case.display.value = (document.case.display.value*Math.PI)/180;
}
function runAbs(){
    document.case.display.value = Math.abs(document.case.display.value);
}
function runPI(){
    document.case.display.value = Math.PI;
}
function runE(){
    document.case.display.value = Math.E;
}
function runExp(){
    document.case.display.value = Math.exp(document.case.display.value);
}
function runln(){
    document.case.display.value = Math.log(document.case.display.value);
}
function runlog(){
    document.case.display.value = Math.log10(document.case.display.value);
}
function run1ln(){
    document.case.display.value = 1/Math.log(document.case.display.value);
}
function run1e(){
    document.case.display.value = 1/Math.E;
}
function run1pi(){
    document.case.display.value = 1/Math.PI;
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#navbar')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// shows the calculator buttons
function show(id,sec_id) {
    const main = document.getElementById('demo');
    const div = document.getElementById(id);
    const clone = div.cloneNode(true);

    while (main.firstChild) main.firstChild.remove();

    main.appendChild(clone);
    //shows the calculator button
    const main2 = document.getElementById('demo2');
    const div2 = document.getElementById(sec_id);
    const clone2 = div2.cloneNode(true);

    while (main2.firstChild) main2.firstChild.remove();

    main2.appendChild(clone2);
}
/*jslint plusplus:true evil:true */
/*global console, alert ,pronpt */

var is1 = 0, is2 = 0, is3 = 0, is4 = 0;

function fun1() {
    
    "use strict";
    var one = document.getElementById("one"),
        Width = 0,
        elem;
    
    if (is1 === 0) {
        one.style.width = Width + "%";
        function frame() {

            if (Width === 25) {

                clearInterval(elem);
            } else {

                Width++;
                one.style.width = Width + "%";
            }
        }
        elem = setInterval(frame, 20);
    }
    is1 = 1;

}
function fun2() {
    
    "use strict";
    var one = document.getElementById("two"),
        Width = 0,
        elem;
    
    if (is2 === 0) {
        one.style.width = Width + "%";
        function frame() {
            
            if (Width === 80) {

                clearInterval(elem);
            } else {

                Width++;
                one.style.width = Width + "%";
            }
        }

        elem = setInterval(frame, 20);

    }
    is2 = 1;
}
function fun3() {
    
    "use strict";
    var one = document.getElementById("three"),
        Width = 0,
        elem;
    if (is3 === 0) {
        one.style.width = Width + "%";

        function frame() {

            if (Width === 90) {

                clearInterval(elem);
            } else {

                Width++;
                one.style.width = Width + "%";
            }
        }

        elem = setInterval(frame, 20);
    }
    is3 = 1;

}
function fun4() {
    
    "use strict";
    var one = document.getElementById("four"),
        Width = 0,
        elem;
    
    if (is4 === 0) {
        one.style.width = Width + "%";

        function frame() {

            if (Width === 70) {

                clearInterval(elem);
            } else {

                Width++;
                one.style.width = Width + "%";
            }
        }

        elem = setInterval(frame, 20);
    }
    is4 = 1;

}

////////////////////////////////////////////////////////


var array =
        ["slider_1", "slider_2", "slider_3", "slider_4"],
    random_value,
    slider = document.getElementById("slide");
    
    
function change() {
    "use strict";
    random_value =
        Math.floor(Math.random() * array.length);
    slider.setAttribute("class", array[random_value]);
    
}
setInterval(change, 2500);


/////////////////////////////////////////////////////////





var word = "web&graphic designer",
    elem = document.getElementById("moveTheWord"),
    i = 1,
    interval;
    
function move_right() {

    "use strict";

    if (i < word.length) {

        elem.textContent += word[i];
        i += 1;
    }
    if (i === word.length) {

        clearInterval(interval);
    }
}
interval = setInterval(move_right, 400);






////////////////////////////////////////////////////////




var name = "Beshoy Akram ",
    element = document.getElementById("by"),
    c = 0,
    interval;
    
function move_right_name() {

    "use strict";

    if (c < name.length) {

        element.textContent += name[c];
        c += 1;
    }
    if (c === name.length) {

        clearInterval(interval);
    }
}
interval = setInterval(move_right_name, 400);












          
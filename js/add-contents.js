
function giveTimelyGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = "Good morning!";
    } else {
        greeting = 'Welcome!';
    }

    return greeting;
}

function giveLiking() {
    var txt;

    var r = confirm("Do you like vegan ice cream?");
    if (r == true) {
        txt = "We have vegan ice cream!";
    } else {
        txt = "We have non-vegan ice cream!";
    }

        return txt; 
}

function giveName() {
    var name = prompt('What\' your name?')
    return name; 
}


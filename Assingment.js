// Convert kilometer to Meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log('Give Valid Input');
        return -1;
    } else {
        var meter = kilometer * 1000;
        return meter;
    }
}

//var calculate = kilometerToMeter(15);
//console.log(calculate);



// Calculate Budget of Watch, Phone, Laptop.
function budgetCalculator(watch, phone, laptop) {

    if (watch < 0 || phone < 0 || laptop < 0) {
        console.log('Give Valid Input');
        return -1;
    } else {
        var watchValue = watch * 50;
        var phoneValue = phone * 100;
        var laptopValue = laptop * 500;
        var totalBudget = watchValue + phoneValue + laptopValue;
        return totalBudget;
    }
}

// var calculateTotalBudget = budgetCalculator(13, 17, 10);
// console.log(calculateTotalBudget);



// Calculate the Hotel cost.
function hotelCost(day) {
    var totalCost = 0;
    if (day < 0) {
        console.log('Give Valid Input');
        return -1;
    } else if (day <= 10) {
        totalCost = day * 100;
        return totalCost;
    } else if (day <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
        return totalCost;
    } else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 20;
        var lastDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + lastDays;
        return totalCost;
    }
}

// var getHoltelCost = hotelCost(26);
// console.log(getHoltelCost);



// Find the largest name from Array.
function megaFriend(friendName) {
    var largestName = friendName[0];
    var check = 0;
    for (var i = 0; i < friendName.length; i++) {
        var name = typeof(friendName[i]);
        var compare = typeof("Iftakher");
        var emptyString = '';
        var blankSpace = ' ';
        if (friendName.length < 1 || name != compare || friendName[i] == emptyString || friendName[i] == blankSpace) {
            check = "Give Valid Input";
        }
    }
    if (check != 0) {
        console.log("Give Valid Input");
        return -1;
    }
    for (var i = 0; i < friendName.length; i++) {
        if (largestName.length < friendName[i].length) {
            largestName = friendName[i];
        }
    }
    return largestName;
}

// var friendsArray = ['Iftakher Uddin', 'Shahariar', 'Rasel', 'Elias', 'Dalwer'];
// var Output = megaFriend(friendsArray);
// console.log(Output);
"use strict";

let mileage = { totalMileage: 100};

let timeRemaining = function(milesPerHour, traveledMileage) {
    var remainingMileage = (this.totalMileage - traveledMileage);
    return (remainingMileage/milesPerHour);
}

//call
console.log("Remaining Commute Time: " + timeRemaining.call(mileage, 60, 10) + " hr");
//apply (difference: passing args; supposedly arrays)
console.log("Remaining Commute Time: " + timeRemaining.apply(mileage, [60,10]) + " hr");
//bind (difference: returns the function; function (timeRemaining) binds to the context object (mileage))
console.log("Remaining Commute Time: " + (timeRemaining.bind(mileage) (60, 10)) + " hr");


//const is immutable
const secondConst = 'sec!';
function countDown() {

    var numOfTimes = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
    //let only works inside this scope enclosed in loop
    for(let i = 0; i < numOfTimes.length; i++) {
        console.log(numOfTimes[i] + " " + secondConst);
    }

    for(var j = 0; j < 1; j++) {
        console.log("Firework Starting...");
    }

    //let i will produce an error outside of scope
    //console.log(i);

    //var j is accessible even outside of the for block
    console.log(">" + j + "<");
    console.log("Happy New Year!");
}
countDown();

const vehicleQueue = ['Car1', 'Car2', 'Car3'];

//callback
function waitCallBack(nextCar, callback) {
    setTimeout(() => {
        console.log("Green light! " + nextCar + " may proceed.");
        callback();
    }, 3000);
}

function proceedCall() {
    waitCallBack(vehicleQueue[0], () => {
        waitCallBack(vehicleQueue[1], () => {
            waitCallBack(vehicleQueue[2], () => {}) 
            })
        })
}
proceedCall();

//promises (eliminate callback hell)
function waitPromise(nextCar) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Green light! " + nextCar + " may proceed.");

            (nextCar != vehicleQueue[3]) ? resolve() : reject("Queue is empty!");
        }, 3000)
    })
}

function proceedPromise() {
    waitPromise(vehicleQueue[0])
    .then(() => waitPromise(vehicleQueue[1]))
    .then(() => waitPromise(vehicleQueue[2]))
}
proceedPromise();

//async and await
async function proceedAsyncAwait() {
    await waitPromise(vehicleQueue[0]);
    await waitPromise(vehicleQueue[1]);
    await waitPromise(vehicleQueue[2]);
}
proceedAsyncAwait();
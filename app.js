document.getElementById("submit").addEventListener("click", function () {
    const date = document.getElementById("date").value;
    let firstPrizecount = document.getElementById('firstPrize').value;
    let secondPrizecount = document.getElementById('secondPrize').value;
    let thirdPrizecount = document.getElementById('thirdPrize').value;
    let fourthPrizecount = document.getElementById('fourthPrize').value;
    let fivePrizecount = document.getElementById('fivePrize').value;
    let sixPrizecount = document.getElementById('sixPrize').value;
    let sevenPrizecount = document.getElementById('sevenPrize').value;
    
    let firstPrize = parseInt(firstPrizecount) + 1;

    let secondPrize = parseInt(secondPrizecount) + 1;
    let thirdPrize = parseInt(thirdPrizecount) + 1;
    let fourthPrize = parseInt(fourthPrizecount) + 1;
    let fivePrize = parseInt(fivePrizecount) + 1;
    let sixPrize = parseInt(sixPrizecount);
    let sevenPrize = parseInt(sevenPrizecount) + 1;
    document.getElementById('firstPrize').value = firstPrize;
    document.getElementById('secondPrize').value = secondPrize;
    document.getElementById('thirdPrize').value = thirdPrize;
    document.getElementById('fourthPrize').value = fourthPrize;
    document.getElementById('fivePrize').value = fivePrize;
    document.getElementById('sixPrize').value = sixPrize;
    document.getElementById('sevenPrize').value = sevenPrize;
    
    
    console.log(sevenPrize);
    const subtotal = firstPrize + secondPrize + thirdPrize + fourthPrize + fivePrize + sixPrize + sevenPrize;

    let subTotalResult = parseFloat(subtotal.toFixed(2));
    const tax1 = (subtotal * 7.950) / 100;
    const tax2 = (subtotal * 1.650) / 100;
    // let taxresult = parseFloat(tax1.toFixed(2) + parseFloat(tax2.toFixed(2)));
    const tax1f =  parseFloat(tax1.toFixed(2))
    const tax2f =  parseFloat(tax2.toFixed(2))
    let taxresult = tax1f+tax2f;
    const total = subTotalResult + taxresult;
    let totalResult = total;
  

    document.getElementById('secoundPrizeChange').innerText = secondPrize;
    document.getElementById("firstPrizeChange").innerText = firstPrize;
    document.getElementById("thirdPrizeChange").innerText = thirdPrize;
    document.getElementById("fourthPrizeChange").innerText = fourthPrize;
    document.getElementById("fivePrizeChange").innerText = fivePrize;
    document.getElementById("sixPrizeChange").innerText = sixPrize;
    document.getElementById("sevenPrizeChange").innerText = sevenPrize;
    document.getElementById("dateChange").innerText = date;
    //   document.getElementById("exDateChange").innerText = exDate;
    document.getElementById("subtotalChange").innerText = subTotalResult;
    document.getElementById("taxoneChange").innerText = tax1f;
    document.getElementById("taxtwoChange").innerText = tax2f;
    document.getElementById("totalChange").innerText = totalResult;
    document.getElementById("tendChange").innerText = totalResult;
    // document.getElementById("cashUpdate").innerText = cashPrize;
    // document.getElementById("changeUpdate").innerText = ChangePrizeRound;
    // document.getElementById("randomOrder").innerText = randomOrder;
    

});
function updateNewTime(newTime) {
    document.getElementById("timeChange").innerText = newTime;
}

// Function to add minutes to a given time
function addMinutesToTime(timeString, minutesToAdd) {
    let [hours, minutes] = timeString.split(':').map(Number);
    minutes += minutesToAdd;
    hours += Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 24;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// Event listener for input field value change
// document.getElementById('timepress').addEventListener('change', function() {
//     let userTime = document.getElementById("time").value;
//     updateNewTime(userTime);
// });

// Event listener for submit button click
document.getElementById('submit').addEventListener('click', function() {
    let userTime = document.getElementById("time").value;
    
    function formatTime(newTime) {
        // Assuming inputTime is in the format HH:MM (24-hour format)
        let [hours, minutes] = newTime.split(':').map(Number);
    
        // Check if hours is greater than or equal to 12
        if (hours >= 12) {
            // If hours is 12 or more, it's PM
            if (hours > 12) {
                hours -= 12; // Convert to 12-hour format
            }
            return `${hours}:${minutes} PM`;
        } else {
            // If hours is less than 12, it's AM
            if (hours === 0) {
                hours = 12; // Convert 0 to 12 for 12 AM
            }
            return `${hours}:${minutes} AM`;
        }
    }
    let formateTime = formatTime(userTime);
    updateNewTime(formateTime);
});

// Event listener for updating time by adding 3 minutes
document.getElementById('timepress').addEventListener('click', function() {
    let currentTime = document.getElementById("time").value;
    let updatedTime = addMinutesToTime(currentTime, 2); // Add 3 minutes
   
        function formatTime(newTime) {
        // Assuming inputTime is in the format HH:MM (24-hour format)
        let [hours, minutes] = newTime.split(':').map(Number);
    
        // Check if hours is greater than or equal to 12
        if (hours >= 12) {
            // If hours is 12 or more, it's PM
            if (hours > 12) {
                hours -= 12; // Convert to 12-hour format
            }
            return `${hours}:${minutes} PM`;
        } else {
            // If hours is less than 12, it's AM
            if (hours === 0) {
                hours = 12; // Convert 0 to 12 for 12 AM
            }
            return `${hours}:${minutes} AM`;
        }
    }
    let formateTime = formatTime(updatedTime);
    updateNewTime(formateTime);
document.getElementById("time").value = updatedTime;

});





    


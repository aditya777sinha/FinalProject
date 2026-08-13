function confirmBooking() {

    var start = document.getElementById("startDate").value;
    var end = document.getElementById("endDate").value;

    if (start == "" || end == "") {

        document.getElementById("message").innerHTML =
            "Please select both dates.";

        return;
    }


    var days =
        (new Date(end) - new Date(start))
        / (1000 * 60 * 60 * 24);


    var price =
        Number(document.getElementById("dailyPrice").value);


    if (days <= 0) {

        document.getElementById("message").innerHTML =
            "Please select a valid date.";

        return;
    }


    var total = days * price;


    document.getElementById("total").innerHTML =
        "$" + total;


    document.getElementById("message").innerHTML =
        "✓ Rental booking confirmed successfully!";

}

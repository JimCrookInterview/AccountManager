$(document).ready(function () {
    var totalBalance = 0;
    var onClickData = '';

    // Fills table with data
    var urlAge = 'https://api.myjson.com/bins/1eyqeh';
    $.ajax({
        url: urlAge,
        async: false,
        type: 'GET',
        dataType: "json",
        complete: function (response) {
            // Deletes loading message
            $('.loadingMessage').css("display", "none");

            // Fill Table
            for (i = 0; i < response.responseJSON.length; i++) {
                //  Predefined values
                var btnText = "No action";
                var btnType = "btn btn-secondary";
                var btnTooltip = 'Currently no action possible.';
                var btnDisabled = 'disabled';
                var rowStatus = 'normal';

                var value = parseInt((response.responseJSON[i].balance).replace(",", ""));
                totalBalance += value;

                // Check if balance is negative
                if (parseInt(response.responseJSON[i].balance) < 0) {
                    btnText = "Request money";
                    btnType = 'btn btn-danger';
                    btnTooltip = 'Send instant message to the customer.';
                    btnDisabled = '';
                    rowStatus = 'negative';
                    onClickData = 'Customer is in debt : ' + response.responseJSON[i].balance;

                }
                // Check if user is inactive longer than 12 months
                if (!(response.responseJSON[i].isActive)) {
                    btnText = "Make an offer !";
                    btnType = 'btn btn-warning';
                    btnTooltip = '10 % discount automatically counted.';
                    btnDisabled = '';
                    rowStatus = 'offline';
                    onClickData = '10% Discounted price : ' + parseInt((response.responseJSON[i].balance).replace(",", "")) * 0.9;
                }
                // Creating table row
                $('<tr class="' + rowStatus + '">').append(
                    $('<td class="index">').text(response.responseJSON[i].index),
                    $('<td class="name bold">').text(response.responseJSON[i].name),
                    $('<td class="age">').text(response.responseJSON[i].age),
                    $('<td class="gender">').text(response.responseJSON[i].gender),
                    $('<td class="company bold">').text(response.responseJSON[i].company),
                    $('<td class="email">').text(response.responseJSON[i].email),
                    $('<td class="phone">').text(response.responseJSON[i].phone),
                    $('<td class="address">').text(response.responseJSON[i].address),
                    $('<td class="registered">').text(response.responseJSON[i].registered),
                    $('<td class="balance bold">').text(response.responseJSON[i].balance),
                    $('<td class="isActive">').text(response.responseJSON[i].isActive),
                    $('<td class="eventID">').text(response.responseJSON[i].eventID),
                    $('<button type="button" onclick="ModalTest( \'' + onClickData + '\')" data-toggle="tooltip" title="' + btnTooltip + '" class=" ' + btnType + ' " ' + btnDisabled + '>').text(btnText)
                ).appendTo('#customersTable');
            }
            $('#totalBalance').text('Total balance : ' + totalBalance);
        },
        error: function () {
            alert('There was an error loading table data.');
        }
    });
    return false;
});

function ModalTest(balance) {
    $('#customerDetailsModal').modal('show');
    $('#balanceModal').text(balance);
}

function ModalTest2() {
    $('#legendModal').modal('show');
}


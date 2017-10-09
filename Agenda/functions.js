function getRow(firstName, lastName, phone) {
    return '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>';
}

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
}

$.ajax('date/contacte.json').done(function (contacte) {
        contacte.forEach(createRow);
        $('#contacts-list tbody').html(tableContent);
    }

);
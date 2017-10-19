function getRow(contact) {
    var id = contact.id;
    var phone= contact.phone || '';
    var firstName = contact.firstName || '';
    var lastName = contact.lastName || '';
    return '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td>' + '<td>[<a href="date/remove.html?id=' + id + '">x</a>]</td></tr>';
}

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact);
}

$.ajax('date/contacte.json').done(function (contacte) {
        contacte.forEach(createRow);
        $('#contacts-list tbody').html(tableContent);
    }

);
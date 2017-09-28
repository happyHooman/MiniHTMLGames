function getRow(firstName, lastName, phone) {
    var row = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>';
    return row;
}

var contacte = [

];

$('#contacts-list tbody').html(getRow('Tornea', 'Alexandru', '069000001'));
function getRow(firstName, lastName, phone) {
    return '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>';
}

var contacte = [
    ['Matei', 'Nicolae', '01'],
    ['Tornea', 'Alexandru', '02'],
    ['Bond', 'James', '03']
];
var tableContent = '';

contacte.forEach(function (contact) {
    tableContent += getRow(contact[0], contact[1], contact[2]);
}
);

$('#contacts-list tbody').html(tableContent);
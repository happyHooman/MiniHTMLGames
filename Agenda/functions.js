function getRow(contact) {
    var id = contact.id;
    var phone = contact.phone || '';
    var firstName = contact.firstName || '';
    var lastName = contact.lastName || '';
    return '<tr>' +
        '<td>' + firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + phone + '</td>' +
        '<td class="actions">' +
        '<span><a class="remove" href="date/remove.php?id=' + id + '">&#x2716</a></span> ' +
        '<span><a class="edit" href="#" data-id="' + id + '">&#x270E</a></span>' +
        '</td></tr>';
}

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact);
}

$.ajax('date/contacte.json', {
    cache: false,
    dataType: 'json'
}).done(function (contacte) {
        contacte.forEach(createRow);
        $('#contacts-list tbody').html(tableContent);
        $('#contacts-list a.edit').click(function () {
            $('#submit').html('Save');
            var id = $(this).data('id');
            var contact = contacte.find(function (c) {
                return c.id == id;
            });
            editContacts(contact);
        });
    }
);

function editContacts(contact) {
    $('input[name=firstName]').val(contact.firstName);
    $('input[name=lastName]').val(contact.lastName);
    $('input[name=phone]').val(contact.phone);
    $('input[name=id]').val(contact.id);
}

$('#contacts-list a.remove').click(function (link) {

})
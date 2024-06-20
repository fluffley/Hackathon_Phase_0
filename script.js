let contacts = [
    { name: 'Fajri Prawira', phone: '6281389396859' },
    { name: 'Muhammad Dicky Taruna', phone: '6282122854496' },
    { name: 'Gabriel Cyrus', phone: '6287878370048' },
    { name: 'Akmalini Sumsun', phone: '6281285970207' },
    { name: 'M. Fadhil Husaini', phone: '6281279231822' },
    { name: 'Athif Lanang', phone: '6281281265254' },
    { name: 'Imam A', phone: '6282295358747' },
];

// Fungsi untuk menampilkan semua kontak //Displaying contact list
function displayContacts() {
    const contactList = document.getElementById('contactList'); //Display basic contact list
    contactList.innerHTML = ''; // Clear existing contacts
    contacts.forEach((contact, index) => { //forEach disini soalnya dia baca array kontak dan index yg diinsert nanti
        const contactDiv = document.createElement('div'); //ini buat kita bikin kontaknya pake div baru lagi nambahin kata2nya
        contactDiv.className = 'contact'; //ini buat bikin div baru
        contactDiv.innerHTML = `
            <div class="profile">
                <div class="name">
                    ${contact.name}
                </div>
                <div class="phone">
                    ${contact.phone}
                </div>
            </div>
            <div class ="actions">
            <button onclick="editContactPrompt(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button onclick="deleteContact(${index})"><i class="fa-solid fa-trash"></i></button>
            <a href = 'https://wa.me/${contact.phone}' target="_blank" > <button><i class="fa-brands fa-whatsapp"></i></button></a>
            </div>
        `;
        contactList.appendChild(contactDiv); //CRUD updatenya dari sini 
        //kita make appendChild buat diisi ketika diappend
    });
}

// Fungsi untuk menambahkan kontak baru
function addContact(name, phone) {
    contacts.unshift({ name: name, phone: phone });
    displayContacts();
}

function addContactPrompt() {
    const newName = prompt("Enter Name:")
    const newPhone = prompt("Enter phone number:");
    if (!newName || !newPhone) {
        return 
    }
    if (contacts.find((item) => item.phone === newPhone)) {
        alert('phone Number is already exist')
    } else {
        addContact(newName, newPhone)
    }
}



// Fungsi untuk menghapus kontak berdasarkan indeks
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

// Fungsi untuk mengedit kontak berdasarkan indeks
function editContact(index, newPhone, newName) {
    contacts[index].phone = newPhone;
    contacts[index].name = newName;
    displayContacts();
}

// Prompt untuk mengedit kontak
function editContactPrompt(index) {
    const newName = prompt("Enter new Name:", contacts[index].name);
    const newPhone = prompt("Enter new phone number:", contacts[index].phone);
    if (!newName || !newPhone) {
        return 
    }
    if (contacts.find((item) => item.phone === newPhone )&& newPhone !== contacts[index].phone) {
        alert('phone is already exist')
    }else {
        editContact(index, newPhone, newName);
    }
    
}



// Event listener untuk form submit
document.getElementById('addContactForm').addEventListener('click', function (event) {
    addContactPrompt()
});


// this is to Display initial contacts
displayContacts();
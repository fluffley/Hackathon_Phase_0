// // Inisialisasi database kontak
// let contacts = [
//     { name: 'Fajri Prawira', phone: '081389396859' },
//     { name: 'Muhammad Dicky Taruna', phone: '082122854496' },
//     { name: 'Gabriel Cycrus', phone: '087878370048' },
//     { name: 'Akmalini Sumsun', phone: '081285970207'},
//     { name: 'M. Fadhil Husaini', phone: '081279231822'},
//     { name: 'Athif Lanang', phone: '081281265254'},
//     { name: 'Imam A', phone: '082295358747'},
// ];

// // Fungsi untuk menampilkan semua kontak

// const display = (contact) => {
//     console.log('daftar contact')
//     contact.forEach(contact => {
//         console.log(`${contact.name}: ${contact.phone}`)
//     })
// }
// function displayContacts(contacts) {
//     console.log("Daftar Kontak:");
//     contacts.forEach(contact => {
//         console.log(`${contact.name}: ${contact.phone}`);
//     });
// }

// // Fungsi untuk menambahkan kontak baru
// function addContact(name, phone) {
//     contacts.push({ name: name, phone: phone });
//     console.log(`Kontak ${name} berhasil ditambahkan.`);
// }

// // Fungsi untuk mencari kontak berdasarkan nama
// function searchContact(name) {
//     let foundContacts = contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
//     if (foundContacts.length > 0) {
//         console.log(`Kontak yang ditemukan:`);
//         foundContacts.forEach(contact => {
//             console.log(`${contact.name}: ${contact.phone}`);
//         });
//     } else {
//         console.log(`Kontak dengan nama '${name}' tidak ditemukan.`);
//     }
// }
// //function untuk menghapus kontak berdasarkan nama dan no telepon
// function deletedContact(name , phone){
//     const initialLength = contacts.length;
//     contacts = contacts.filter(contact => !(contact.name === name && contact.phone === phone));
//     if (contacts.length < initialLength) {
//         console.log(`Kontak ${name} dengan nomor telepon ${phone} berhasil dihapus.`);
//     } else {
//         console.log(`Kontak ${name} dengan nomor telepon ${phone} tidak ditemukan.`);
//     }
// }

// //function untuk mengedit kontak nama dan no telepon
// function editContact (name, newPhone) {
//     let found = false
//     for (let i = 0; i < contacts.length; i++ ){
//         let contact = contacts[i]
//         if ( contact.name.toLowerCase() === name.toLowerCase()) {
//             contact.phone =  newPhone;
//             console.log(`Kontak ${name} berhasil diubah nomor telponnya`);
//             found = true;
//             break
//         }
//     }
//     if (!found) {
//         console.log (`Kontak dengan nama '${name}' tidak ditemukan.`)
//     }
// }

// // Contoh penggunaan
// display(contacts); // Menampilkan semua kontak
// addContact('Sarah Johnson', '111-222-3333'); // Menambahkan kontak baru
// searchContact('john'); // Mencari kontak dengan nama 'john'
// deletedContact('Jane Smith', '987-654-3210'); // Menghapus kontak
// // displayContacts(); // Menampilkan semua kontak setelah penghapusan
// editContact('John Doe', '999-999-9999')//mengedit kontak jhon doe


// Inisialisasi database kontak //BASE CONTACTS
let contacts = [
    { name: 'Fajri Prawira', phone: '081389396859' },
    { name: 'Muhammad Dicky Taruna', phone: '082122854496' },
    { name: 'Gabriel Cyrus', phone: '087878370048' },
    { name: 'Akmalini Sumsun', phone: '081285970207'},
    { name: 'M. Fadhil Husaini', phone: '081279231822'},
    { name: 'Athif Lanang', phone: '081281265254'},
    { name: 'Imam A', phone: '082295358747'},
];

// Fungsi untuk menampilkan semua kontak //Displaying contact list
function displayContacts() {
    const contactList = document.getElementById('contactList'); //Display basic contact list
    contactList.innerHTML = ''; // Clear existing contacts
    contacts.forEach((contact, index) => { //forEach disini soalnya dia baca array kontak dan index yg diinsert nanti
        const contactDiv = document.createElement('div'); //ini buat kita bikin kontaknya pake div baru lagi nambahin kata2nya
        contactDiv.className = 'contact'; //ini buat bikin div baru
        contactDiv.innerHTML = `
            ${contact.name}: ${contact.phone}
            <button onclick="deleteContact(${index})">Delete</button>
            <button onclick="editContactPrompt(${index})">Edit</button>
        `;
        contactList.appendChild(contactDiv); //CRUD updatenya dari sini 
        //kita make appendChild buat diisi ketika diappend
    });
}

// Fungsi untuk menambahkan kontak baru
function addContact(name, phone) {
    contacts.push({ name: name, phone: phone }); 
    displayContacts(); 
}

// Fungsi untuk mencari kontak berdasarkan nama
function searchContact() {
    const searchName = document.getElementById('searchName').value;
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
    let foundContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchName.toLowerCase()));//Biar ga case sensitive jadi pake apa aja bisa buat searchnya
    //tergantung inputnya apa, nanti disaring pake function filter
    if (foundContacts.length > 0) {
        foundContacts.forEach(contact => {
            searchResults.innerHTML += `<div>${contact.name}: ${contact.phone}</div>`; 
        });
    } else {
        searchResults.innerHTML = `Kontak dengan nama '${searchName}' tidak ditemukan.`;
    }
}

// Fungsi untuk menghapus kontak berdasarkan indeks
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

// Fungsi untuk mengedit kontak berdasarkan indeks
function editContact(index, newPhone) {
    contacts[index].phone = newPhone;
    displayContacts();
}

// Prompt untuk mengedit kontak
function editContactPrompt(index) {
    const newPhone = prompt("Enter new phone number:", contacts[index].phone);
    if (newPhone) {
        editContact(index, newPhone);
    }
}

// Event listener untuk form submit
document.getElementById('addContactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    addContact(name, phone);
    this.reset(); // 
});

// this is to Display initial contacts
displayContacts();
// Inisialisasi database kontak
let contacts = [
    { name: 'Fajri Prawira', phone: '081389396859' },
    { name: 'Muhammad Dicky Taruna', phone: '082122854496' },
    { name: 'Gabriel Cycrus', phone: '087878370048' },
    { name: 'Akmalini Sumsun', phone: '081285970207'},
    { name: 'M. Fadhil Husaini', phone: '081279231822'},
    { name: 'Athif Lanang', phone: '081281265254'},
    { name: 'Imam A', phone: '082295358747'},
];

// Fungsi untuk menampilkan semua kontak

const display = (contact) => {
    console.log('daftar contact')
    contact.forEach(contact => {
        console.log(`${contact.name}: ${contact.phone}`)
    })
}
function displayContacts(contacts) {
    console.log("Daftar Kontak:");
    contacts.forEach(contact => {
        console.log(`${contact.name}: ${contact.phone}`);
    });
}

// Fungsi untuk menambahkan kontak baru
function addContact(name, phone) {
    contacts.push({ name: name, phone: phone });
    console.log(`Kontak ${name} berhasil ditambahkan.`);
}

// Fungsi untuk mencari kontak berdasarkan nama
function searchContact(name) {
    let foundContacts = contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
    if (foundContacts.length > 0) {
        console.log(`Kontak yang ditemukan:`);
        foundContacts.forEach(contact => {
            console.log(`${contact.name}: ${contact.phone}`);
        });
    } else {
        console.log(`Kontak dengan nama '${name}' tidak ditemukan.`);
    }
}
//function untuk menghapus kontak berdasarkan nama dan no telepon
function deletedContact(name , phone){
    const initialLength = contacts.length;
    contacts = contacts.filter(contact => !(contact.name === name && contact.phone === phone));
    if (contacts.length < initialLength) {
        console.log(`Kontak ${name} dengan nomor telepon ${phone} berhasil dihapus.`);
    } else {
        console.log(`Kontak ${name} dengan nomor telepon ${phone} tidak ditemukan.`);
    }
}

//function untuk mengedit kontak nama dan no telepon
function editContact (name, newPhone) {
    let found = false
    for (let i = 0; i < contacts.length; i++ ){
        let contact = contacts[i]
        if ( contact.name.toLowerCase() === name.toLowerCase()) {
            contact.phone =  newPhone;
            console.log(`Kontak ${name} berhasil diubah nomor telponnya`);
            found = true;
            break
        }
    }
    if (!found) {
        console.log (`Kontak dengan nama '${name}' tidak ditemukan.`)
    }
}

// Contoh penggunaan
display(contacts); // Menampilkan semua kontak
addContact('Sarah Johnson', '111-222-3333'); // Menambahkan kontak baru
searchContact('john'); // Mencari kontak dengan nama 'john'
deletedContact('Jane Smith', '987-654-3210'); // Menghapus kontak
// displayContacts(); // Menampilkan semua kontak setelah penghapusan
editContact('John Doe', '999-999-9999')//mengedit kontak jhon doe
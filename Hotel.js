document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomtype = document.getElementById('roomtype').value;
    const guests = document.getElementById('guests').value;
    const requests = document.getElementById('requests').value;

    // Display retrieved values (for demonstration purposes)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Check-in Date:', checkin);
    console.log('Check-out Date:', checkout);
    console.log('Room Type:', roomtype);
    console.log('Number of Guests:', guests);
    console.log('Special Requests:', requests);

    // You can also display the values on the webpage or process them further
    alert(`Thank you for your booking, ${name}!\nWe have received your details as follows:\nEmail: ${email}\nPhone: ${phone}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nRoom Type: ${roomtype}\nNumber of Guests: ${guests}\nSpecial Requests: ${requests}`);
});

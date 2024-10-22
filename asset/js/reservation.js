async function submitBooking(event) {
    event.preventDefault(); 
  
    // Fetching the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const specialRequests = document.getElementById("message").value;
  
    const reservationData = {
      name: name,
      email: email,
      phone: phone,
      date: date,
      time: time,
      guests: parseInt(guests),
      special_requests: specialRequests,
    };
  
    try {
      const response = await fetch(
        "https://restaurant-booking-app-332799487776.herokuapp.com/api/reservations/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData),
        }
      );
  
 
      if (response.ok) {
        // Hide the form and display success message
        document.getElementById("booking-form").style.display = "none";
        document.getElementById("success-message").style.display = "block";
      } else {
    
        const errorData = await response.json();
        alert(
          `Failed to make a reservation: ${
            errorData.message || "Please try again later."
          }`
        );
      }
    } catch (error) {
      alert('An erroroccurred: ${error.message}');
    }
  }

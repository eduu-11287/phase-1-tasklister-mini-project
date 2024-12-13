document.addEventListener("DOMContentLoaded"), (event) => {
  // your code her
  const form = document.getElementById('myForm');
      // Prevent the form's default behavior (which is to submit and reload the page)
      event.preventDefault();
      
      // You can now handle the form data or display a message
      alert('Form submission prevented!');
}


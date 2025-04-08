// Wait for the DOM to load
window.onload = function() {
  const form = document.getElementById('smoothieForm');
  const result = document.getElementById('result');

  form.onsubmit = function(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const ingredient = document.getElementById('ingredient').value;
    const topping = document.getElementById('topping').value;
    const sweetness = document.getElementById('sweetness').value;

    // Simple pricing
    const price = 5 + 1.20 + 0.99; // base + ingredient/topping fee/Taxes

    // Show the final message twice : alert and result
    alert(`Thank you, ${name}, for ordering a ${type} smoothie!, The price would be $${price}.`);
    result.innerHTML = `${name}, you ordered a ${type} smoothie with ${ingredient}, ${topping}, and sweetness level ${sweetness}.<br>Total Price: $${price}. Enjoy!`;
  }

}

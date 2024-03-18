function calculateTotal() {
    let total = 0;
    let deliveryFee = 150;
    let discount = 0;

    // Check if each product is checked and add its price to total if selected
    if (document.getElementById('product1').checked) {
      total +=parseInt(document.getElementById('product1').value);
    }
  
    if (document.getElementById('product2').checked) {
      total +=parseInt(document.getElementById('product2').value);
    }
  
    if (document.getElementById('product3').checked) {
      total +=parseInt(document.getElementById('product3').value);
    }
  
    // Apply discount and delivery fee based on total amount
    if (total > 1500) {
        deliveryFee = 0;
        discount = total * 0.1;
    } else {
      deliveryFee = 150;
    }

    total += deliveryFee;
    total -=discount;

    
  
  
    document.getElementById('totalAmount').innerText = "Total Amount: " + total;
  }
  
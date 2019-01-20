document.querySelector("#button1").addEventListener("click", loadCustomer);
document.querySelector("#button2").addEventListener("click", loadCustomers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);
  xhr.onload = function() {
    const customer = JSON.parse(xhr.responseText);
    console.log(customer);
    const output = ` <ul>
    <li> ID: ${customer.id} </li>
    <li> Name: ${customer.name} </li>
    <li> City: ${customer.city} </li>
    <li> Grade: ${customer.grade} </li>
    </ul>`;
    document.getElementById("customer").innerHTML = output;
  };

  xhr.send();
}
function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);
  xhr.onload = function() {
    const customers = JSON.parse(xhr.responseText);
    // console.log(customer);
    let output = "";
    customers.forEach(function(customer) {
      output += ` <ul>
    <li> ID: ${customer.id} </li>
    <li> Name: ${customer.name} </li>
    <li> City: ${customer.city} </li>
    <li> Grade: ${customer.grade} </li>
    </ul>`;
      document.getElementById("customer").innerHTML = output;
    });
  };

  xhr.send();
}

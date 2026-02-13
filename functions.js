// List Function
const list = (clients) =>
  clients.map((client, index) => `
    <li class="list-group-item d-flex justify-content-between" data-index="${index}">
      ${client.name}
      <strong>$ ${client.balance}</strong>
    </li>
  `).join("");


// Order Function
const order = (clients, property) =>
  clients.sort((a, b) =>
    a[property] > b[property] ? 1 :
    a[property] < b[property] ? -1 : 0
  );


// Total Function
const total = (clients) =>
  clients.reduce((sum, client) => sum + client.balance, 0);


// Info Function
const info = (index) =>
  clients.find((client, i) => i === index);


// Search Function
const search = (query) =>
  clients.filter(client =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );

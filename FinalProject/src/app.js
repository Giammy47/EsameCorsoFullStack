fetch('https://62aae044371180affbdc214a.mockapi.io/Employees?_=1655571798441')
  .then((res) => res.json())
  .then((data) => showEmployees(data));

fetch(
  'https://62aae044371180affbdc214a.mockapi.io/organizations?_=1655574123542'
)
  .then((res) => res.json())
  .then((data) => showOrganizzations(data));

function showEmployees(data) {
  let tab = ` `;
  // Loop to access all rows

  for (let i = 1; i < data.length; i++) {
    const {
      name,
      surname,
      fiscalcode,
      email,
      workingposition,
      assumption,
      hoursmonth,
    } = data[i];
    tab += ` <tr>
    <th scope="row">${i}</th>
    <td>${name}</td>
    <td>${surname}</td>
    <td>${fiscalcode}</td>
    <td>${email}</td>
    <td>${workingposition}</td>
    <td>${assumption}</td>
    <td>${hoursmonth}</td>
  </tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById('employees').innerHTML = tab;
}

function showOrganizzations(data) {
  let tab = ` `;
  // Loop to access all rows
  console.log(data);
  for (let i = 1; i < data.length; i++) {
    const { name, addresses, contacts, ndipendenti } = data[i];
    tab += ` <tr>
      <th scope="row">${i}</th>
      <td>${name}</td>
      <td>${addresses}</td>
      <td>${contacts}</td>
      <td>${ndipendenti}</td>
    </tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById('organizations').innerHTML = tab;
}

$('.carousel').carousel({
  interval: 2000,
});

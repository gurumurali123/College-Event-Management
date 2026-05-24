let tableBody =
document.getElementById("tableBody");


let registrationData =
JSON.parse(
    localStorage.getItem("registrationData")
) || [];


/* Loop Through Users */

registrationData.forEach(function(user){

    /* Create Row */

    let row = document.createElement("tr");


    row.innerHTML = `

        <td>${user.Id}</td>

        <td>${user.fullName}</td>

        <td>${user.email}</td>

        <td>${user.phone}</td>

        <td>${user.college}</td>

        <td>${user.year}</td>

        <td>${user.TeamMembers}</td>

    `;


    /* Append Row */

    tableBody.appendChild(row);

});
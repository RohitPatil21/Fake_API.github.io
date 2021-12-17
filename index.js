fetch('https://randomuser.me/api/?results=500')
.then(res=>res.json())
    .then(data => {
        let results = data.results;
       
        for (let i = 0; i < results.length; i++){
            let url = results[i].picture.medium;
            let name = results[i].name.first;
            let email = results[i].email;
            let dob = results[i].dob.date;
            let gender = results[i].gender;
            let contact= results[i].phone;

            let location = results[i].location.country;
            let pincode= results[i].location.postcode;


            

            let table = document.querySelector('table');
            let tableRow = document.createElement('tr');
            tableRow.innerHTML = '<td>' + "<img src='" + url + "' class='image'>" + '</td>'+'<td>' + name+ '</td>' + '<td>' + email + '</td>'+'<td>' + dob+ '</td>' +'<td>' + gender + '</td>'+'<td>' + contact + '</td>'+'<td>' + pincode + '</td>' +'<td>' + location + '</td>' ;
            table.appendChild(tableRow);
        }
})
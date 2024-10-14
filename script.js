let table = document.getElementById("customers");
async function GetRe(){
  //await fetch("http://localhost:8070/greet")
  await fetch("http://192.168.0.102:8070/greet")
    .then((res) => {
        if (!res.ok) {
            throw new Error
                (`HTTP error! Status: ${res.status}`);
        }

        return res.json();
    })
    .then((data) =>{ 
      for(let i = 0; i < data.length; i++){
        //console.log(data[i]['id'] +" "+ data[i]['name']);
        //
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(1);
        cell1.innerHTML = data[i]['name']
        cell2.innerHTML = "0";
        cell3.innerHTML = "0";
      }

    })
}
GetRe();

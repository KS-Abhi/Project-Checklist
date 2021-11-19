
    var xhttp = new XMLHttpRequest();  //creating XHR object

    // Event listener
    xhttp.onreadystatechange = function(){ 
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var list = "";
            list = `<tr>
            <th scope="col">Sl.No.</th>
            <th>Status</th>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Unit</th>
            <th scope="col">Dept.</th>
            <th scope="col">Notes</th>
            </tr>`;

            var Jshop = response.items;
            console.log(Jshop);
            var output = "";
            for (let i = 0; i <Jshop.length; i++) {
                console.log(Jshop[i].it)
                output += `<tr>
                <td class="sel1">${Jshop[i].serialNumber}</td>
                <td class="sel2"><input class="check" type="checkbox"></td>
                <td class="sel3">${Jshop[i].item}</td>
                <td class="sel4">${Jshop[i].quantity}</td>
                <td class="sel5">${Jshop[i].unit}</td>
                <td class="sel6">${Jshop[i].department}</td>
                <td class="sel7">${Jshop[i].notes}</td>
                </tr>`;
            }
            document.getElementById("heading").innerHTML = list;
            document.getElementById("listElements").innerHTML = output;
        }
    }

    xhttp.open("GET", "data.json", true);
    xhttp.send();

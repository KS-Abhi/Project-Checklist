
    var xhttp = new XMLHttpRequest();  //creating XHR object
    // Event listener
    xhttp.onreadystatechange = function(){ 
        if(this.readyState==4&&this.setRequestHeader==200){
            var response = JSON.parse(this.responseText);
            var list = "";
            list = <tr>
            <th scope="col">Sl.No.</th>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Unit</th>
            <th scope="col">Dept.</th>
            <th scope="col">Notes</th>
            </tr>;

            var Jshop = response.shopping;
            var output = "";
            for (let i = 0; i <Jshop.length; i++) {
                output += <tr>
                <td class="sel1">${Jshop[i].Sl.No}</td>
                <td class="sel3">${Jshop[i].Item}</td>
                <td class="sel4">${Jshop[i].Qty}</td>
                <td class="sel5">${Jshop[i].Unit}</td>
                <td class="sel6">${Jshop[i].Dept}</td>
                <td class="sel7">${Jshop[i].Notes}</td>
                </tr>;
            }
            document.getElementById("heading").innerHTML = list;
            document.getElementById("listElements").innerHTML = output;
        }
    }
    xhttp.open("GET", "data.json", true);
    xhttp.send();

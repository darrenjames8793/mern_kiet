function fetchAPI(){

    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=ZWMDKK78S7S4JVVJWN24XDWCH';
  fetch(url).then((res)=>res.json())
  .then((data)=> {
    renderUI(data);
  }).catch((err) => {
    console.log(err);
  });
}

fetchAPI();

const root = document.getElementById('root');

function FtoC(fahrenheit) {
  // Convert Fahrenheit to Celsius using the formula: (Fahrenheit - 32) * 5/9
  var celsius = (fahrenheit - 32) * 5 / 9;
  
  return Number(celsius.toFixed(0));
}







function renderUI(data){
    
    const days = data.days;
    console.log(data);

    
  
    const row = document.createElement("tr");
    let cell1 = document.createElement("th");
    cell1.innerText = 'Date';
    row.appendChild(cell1);
 
    let cell2 = document.createElement("th");
    cell2.innerText = 'Maximum Temperature';
    row.appendChild(cell2);
 
    let cell3 = document.createElement("th");
    cell3.innerText = 'Minimum Temperature';
    row.appendChild(cell3);

    let cell4 = document.createElement("th");
    cell4.innerText = 'Weather Condition';
    row.appendChild(cell4);
    
    
    root.append(row);
    for(let i=0; i<days.length; i++)
   {

     //make heading row
     
     
     
     
     //make child row
     
     const childRow = document.createElement("tr");
     const c1 = document.createElement("td");
     c1.innerText = days[i].datetime;
     childRow.appendChild(c1);
     
     const c2 = document.createElement("td");
     c2.innerHTML = FtoC(days[i].tempmax)+"&#176C";
     childRow.appendChild(c2);
     
     const c3 = document.createElement("td");
     c3.innerHTML = FtoC(days[i].tempmin)+"&#176C";
     childRow.appendChild(c3);

     const c4 = document.createElement("td");
     c4.innerText = days[i].conditions;
     childRow.appendChild(c4);
     
     
     root.append(childRow);
    }

    



}



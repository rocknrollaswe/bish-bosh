//Loads the current numbers in the labels beside the range input
function PresentNumbers()
{
    var numbers_amount = document.getElementById("numbers_amount"); 
    numbers_amount.innerHTML = numbers.value;
    var bish_amount = document.getElementById("bish_amount"); 
    bish_amount.innerHTML = bish.value;
    var bosh_amount = document.getElementById("bosh_amount");
    bosh_amount.innerHTML = bosh.value;
    console.log("Present numbers done");
}

//Controls all inputs
numbers.oninput = function(){
    
    var numbers_amount = document.getElementById("numbers_amount"); 
    numbers_amount.innerHTML = numbers.value;
    console.log("numbers set after range");

    Reset();
    Go(); 
}

bish.oninput = function(){
    var bish_amount = document.getElementById("bish_amount"); 
    bish_amount.innerHTML = bish.value;

    Reset();
    Go(); 
}

bosh.oninput = function(){
    var bosh_amount = document.getElementById("bosh_amount");
    bosh_amount.innerHTML = bosh.value;

    Reset();
    Go(); 
}


//Clears all elements in the presentation-area section
function Reset(){

    var parentElement = document.getElementById("area");
    parentElement.innerHTML='';
}

//Loads and presents all elements in the presentation-area section
function Go(){
    let numbers = document.getElementById("numbers");
    let area = document.getElementById("area");
    let bish = document.getElementById("bish");
    let bosh = document.getElementById("bosh");


    /*var section = document.createElement("section");

    section.id = "area";

    document.body.appendChild(section);*/

    for (let index = 1; index <= numbers.value; index++) {
        
        if(index % bish.value == 0 && index % bosh.value == 0){
            let textnode = document.createTextNode("Bish-Bosh");
            let p = document.createElement("p");
            p.appendChild(textnode);
            p.className="bish-bosh";
            area.appendChild(p); 
            continue;
        }
        else if(index % bish.value == 0){
            let textnode = document.createTextNode("Bish");
            let p = document.createElement("p");
            p.appendChild(textnode);
            p.className="bish";
            area.appendChild(p); 
            continue;
        }
        else if(index%bosh.value == 0){
            let textnode = document.createTextNode("Bosh");
            let p = document.createElement("p");
            p.appendChild(textnode);
            p.className="bosh";
            area.appendChild(p); 
            continue;
        }
        else{
            let textnode = document.createTextNode(index);
            let p = document.createElement("p");
            p.appendChild(textnode);
           
            area.appendChild(p); 
            continue;
        } 
    }
}



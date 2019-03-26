let inputCount = 0;

let mainBody = document.getElementById('main');
let addInputAndButton;
let removeInputAndButton;
let showAllInputValues;
let addToDeletedQueue;
let checkAvailability;
let deletedQueue = [];

let spanFirst = document.createElement('span');
spanFirst.innerHTML = '<input id="inputBox'+ inputCount +'" />'+
                 '<button id="cancelBtn' + inputCount +'" onclick="addInputAndButton()"> Add </button>';
spanFirst.id = "span"+inputCount;
mainBody.prepend(spanFirst);


removeInputAndButton = function(){
    console.log("inside remove " + inputCount);

    console.log('inputBox' + inputCount);
    console.log('cancelBtn' + inputCount);
    let rInput = 'inputBox' + inputCount;
    let rButton = 'cancelBtn' + inputCount;
    let rSpan = 'span' + inputCount;
    
    document.getElementById(rSpan).remove();
    // document.getElementById(rInput).remove();
    // document.getElementById(rButton).remove();
    
    inputCount = inputCount - 1;
    console.log(inputCount);
    
    showAllInputValues();
    addToDeletedQueue(rSpan);
  
};




addInputAndButton = function (){
    
        if(checkAvailability('span'+(inputCount+1))){
            alert('found');
        }else{
            alert('not found');

            inputCount = inputCount + 1;    
            let span = document.createElement('span');
            span.innerHTML = '<input id="inputBox'+ inputCount +'" />'+
                                '<button id="cancelBtn' + inputCount +'" onclick="removeInputAndButton('+ inputCount +')"> Remove </button><br>';
            span.id = "span"+inputCount;
            mainBody.prepend(span);
        }

    
};



showAllInputValues = function () {

    if (document.body.contains(document.getElementById("spanTable1"))) {
        document.getElementById("spanTable1").remove();
    }

    let table = document.createElement('TABLE');
    table.id = "tableInputs";

    let spanTable = document.createElement('span');
    spanTable.innerHTML = '<table id="spanTable1" style="border: 2px solid black;"></table>';
    // spanTable.id = "spanTable1";
    mainBody.append(spanTable);

    for(let i=0; i <= inputCount; i++){
        if(document.getElementById('inputBox'+i) != null){
            if( document.getElementById('inputBox'+i).value != "" 
                    && document.getElementById('inputBox'+i).value != null
                    && document.getElementById('inputBox'+i).value != undefined ){

                        let tr =  document.createElement('tr');
            
                        let td = document.createElement('td');
            
                        let data = document.createTextNode(document.getElementById('inputBox'+i).value);
            
                        td.appendChild(data);
                        tr.appendChild(td);
                        document.getElementById('spanTable1').appendChild(tr);
                        // table.appendChild(tr);
            }
        }
    }
};

addToDeletedQueue = function (rSpan) {
    
    deletedQueue.push(rSpan);

    console.log("deletedQueue");
    console.log(deletedQueue);

}

checkAvailability = function(newSpanID){
    for (let i = 0; i < deletedQueue.length; i++) {

        if( deletedQueue[i] == newSpanID){
            return true;
        }
    }
    return false;
}
let inputCount = 0;

let mainBody = document.getElementById('main');
let addInputAndButton;
let addSpan;
let removeInputAndButton;
let showAllInputValues;
let addToDeletedQueue;
let deleteFromDeletedQueue;
let checkAvailability;
let deletedQueue = [];
let deletedQueueSpanIDs = [];

let spanFirst = document.createElement('span');
spanFirst.innerHTML = '<input id="inputBox'+ inputCount +'" />'+
                 '<button id="cancelBtn' + inputCount +'" onclick="addInputAndButton()"> Add </button>';
spanFirst.id = "span"+inputCount;
mainBody.prepend(spanFirst);


removeInputAndButton = function(e){
    // let tempVar = inputCount;
    console.log(e);
    console.log(e.target.parentNode.id);
    let parentNodeSpan = e.target.parentNode.id;

    
    document.getElementById(parentNodeSpan).remove();
  
    inputCount = inputCount - 1;
    console.log(inputCount);
    
    showAllInputValues();
    addToDeletedQueue(parentNodeSpan);
  
};


let getNumberOutOfStringArray = function () {
    for (let i = 0; i < deletedQueue.length; i++) {
        let element = deletedQueue[i];
        deletedQueueSpanIDs.push(parseInt(element.match(/\d+/g)[0]));
    }
    return deletedQueueSpanIDs;
}



addInputAndButton = function (){
        let tempdeletedQueueSpanIDs = getNumberOutOfStringArray();
        if(tempdeletedQueueSpanIDs.length > 0){
            alert("max = " + Math.max(...tempdeletedQueueSpanIDs));
            alert("min = " + Math.min(...tempdeletedQueueSpanIDs));
        }

        let avalaibleID = checkAvailability('span'+(inputCount+1));
        if(avalaibleID !== null){
            alert('found');

            deletedQueueItem = deletedQueue[avalaibleID];
            deletedQueueItemID = deletedQueueItem.match(/\d+/g).map(Number)[0];

            alert(deletedQueueItemID);

            inputCount = inputCount + 1;
            let span = document.createElement('span');
            span.id = "span" + deletedQueueItemID;
            span.innerHTML = '<input id="inputBox'+ deletedQueueItemID +'" />'+
                                '<button id="cancelBtn' + deletedQueueItemID +'" onclick="removeInputAndButton(event)"> Remove </button><br>';
            mainBody.prepend(span);


            deletedQueue.splice(avalaibleID, 1);

        }else{
            inputCount = inputCount + 1;
            let span = document.createElement('span');
            span.id = "span"+inputCount;
            span.innerHTML = '<input id="inputBox'+ inputCount +'" />'+
                                '<button id="cancelBtn' + inputCount +'" onclick="removeInputAndButton(event)"> Remove </button><br>';
            mainBody.prepend(span);

            // addSpan();
        }
};

// addSpan = function (newID) {
    
   
// };


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

addToDeletedQueue = function (parentNodeSpan) {
    
    deletedQueue.push(parentNodeSpan);

    console.log("deletedQueue");
    console.log(deletedQueue);

};

deleteFromDeletedQueue = function (parentNodeSpan) {
    
    deletedQueue.push(parentNodeSpan);
    console.log("deletedQueue");
    console.log(deletedQueue);

};

checkAvailability = function(newSpanID){
    for (let i = 0; i < deletedQueue.length; i++) {

        if( deletedQueue[i] == newSpanID ){
            return i;
        }
    }
    return null;
};
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
    deletedQueueSpanIDs = [];
    for (let i = 0; i < deletedQueue.length; i++) {
        let element = deletedQueue[i];
        deletedQueueSpanIDs.push(parseInt(element.match(/\d+/g)[0]));
    }
    return deletedQueueSpanIDs;
}



addInputAndButton = function (){
        let tempdeletedQueueSpanIDs = getNumberOutOfStringArray();
        if(tempdeletedQueueSpanIDs.length > 0){

            inputCount = inputCount + 1;
            let minDeleted = Math.min(...tempdeletedQueueSpanIDs);
            let span = document.createElement('span');
            span.id = "span" + minDeleted;
            span.innerHTML = '<input id="inputBox'+ minDeleted +'" />'+
                                '<button id="cancelBtn' + minDeleted +'" onclick="removeInputAndButton(event)"> Remove </button><br>';
            mainBody.prepend(span);


            deletedQueue.splice(deletedQueue.indexOf("span"+minDeleted), 1);
            deletedQueueSpanIDs.splice(deletedQueueSpanIDs.indexOf(minDeleted), 1);
            console.log("ADDDDDDDDDDDD"); 
            console.log("deletedQueue"); 
            console.log(deletedQueue); 
            console.log("deletedQueueSpanIDs"); 
            console.log(deletedQueueSpanIDs); 

        }else{

            console.log("mainBody.childrens");
            let childrens = mainBody.children;
            console.log(childrens);
            let childrensSpan = 0;
            let spanArray = [];
            for (let i = 0; i < childrens.length; i++) {
                if(childrens[i].tagName == "SPAN"){
                    childrensSpan += 1;
                }
            }

            console.log(childrensSpan);
            
            inputCount = inputCount + 1;
            let span = document.createElement('span');
            span.id = "span"+inputCount;
            span.innerHTML = '<input id="inputBox'+ inputCount +'" />'+
                                '<button id="cancelBtn' + inputCount +'" onclick="removeInputAndButton(event)"> Remove </button><br>';
            mainBody.prepend(span);

        }
};

showAllInputValues = function () {

    if (document.body.contains(document.getElementById("tableInputs"))) {
        document.getElementById("tableInputs").remove();
    }

    let table = document.createElement('TABLE');
    table.id = "tableInputs";
    table.style.border = "2px solid black";

    mainBody.append(table);

    for(let k=0; k < mainBody.children.length; k++){
        if(mainBody.children[k].tagName == 'SPAN'){
            let spanElement = mainBody.children[k];
            let inputBoxValue = spanElement.firstChild.value;

            if(spanElement != null){
                
                if( inputBoxValue != "" && inputBoxValue != null && inputBoxValue != undefined ){
    
                            let tr =  document.createElement('tr');
                
                            let td = document.createElement('td');
                
                            let data = document.createTextNode(inputBoxValue);
                
                            td.appendChild(data);
                            tr.appendChild(td);
                            document.getElementById('tableInputs').appendChild(tr);
                            // table.appendChild(tr);
                }
            }

        }
    }
};

addToDeletedQueue = function (parentNodeSpan) {
    
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
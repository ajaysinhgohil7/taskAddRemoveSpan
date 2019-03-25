let inputCount = 0;

let mainBody = document.getElementById('main');

let spanFirst = document.createElement('span');
spanFirst.innerHTML = '<input id="inputBox'+ inputCount +'" />'+
                 '<button id="cancelBtn' + inputCount +'" onclick="addInputAndButton()"> Add </button>';
spanFirst.id = "span"+inputCount;
mainBody.prepend(spanFirst);


let removeInputAndButton = function(inputCount){
    console.log("inside remove " + inputCount);

    console.log('inputBox' + inputCount);
    console.log('cancelBtn' + inputCount);
    let rInput = 'inputBox' + inputCount;
    let rButton = 'cancelBtn' + inputCount;
    let rSpan = 'span' + inputCount;
    // console.log(mainBody.children.length);
    
    document.getElementById(rSpan).remove();
    // document.getElementById(rInput).remove();
    // document.getElementById(rButton).remove();

    inputCount = inputCount - 1;
};




let addInputAndButton = function (){
    
    inputCount = inputCount + 1;    
    
    let span = document.createElement('span');
    span.innerHTML = '<input id="inputBox'+ inputCount +'" />'+
                     '<button id="cancelBtn' + inputCount +'" onclick="removeInputAndButton('+ inputCount +')"> Remove </button><br>';
    span.id = "span"+inputCount;
    mainBody.prepend(span);
    
};
 
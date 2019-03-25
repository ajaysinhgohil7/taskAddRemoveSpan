let inputCount = 1;

let mainBody = document.getElementById('main');

let removeInputAndButton = function(inputCount){
    console.log("inside remove " + inputCount);

    console.log('inputBox' + inputCount);
    console.log('cancelBtn' + inputCount);
    let rInput = 'inputBox' + inputCount;
    let rButton = 'cancelBtn' + inputCount;
    // console.log(mainBody.children.length);
    
    document.getElementById(rInput).remove();
    document.getElementById(rButton).remove();
    inputCount = inputCount - 1;
};


let addInputAndButton = function (){
    
    // var cancelBtn = document.createElement("BUTTON");
    
    // cancelBtn.innerHTML="cancelBtn";
    
    // cancelBtn.id="cancelBtn"+inputCount;
    
    // // cancelBtn.onclick = "";
    // cancelBtn.setAttribute('onclick', removeInputAndButton(inputCount));
    
    // document.body.prepend(cancelBtn);
    
    // var textBox = document.createElement("INPUT");
    // document.body.prepend(textBox);
    // textBox.id="inputBox"+inputCount;
    
    
    var span = document.createElement('span');
    span.innerHTML = '<input id="inputBox'+ inputCount +'" />'+
                     '<button id="cancelBtn' + inputCount +'" onclick="removeInputAndButton('+ inputCount +')"> Remove </button>';
    span.id = "span"+inputCount;
    mainBody.prepend(span);
    
    inputCount = inputCount + 1;
};
 
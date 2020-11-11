var searchBox=document.querySelector("#searchBox");

function apiCall(params) {
    
    var apiCallCount=document.querySelector("#debounceCount");

    console.log(apiCallCount.innerHTML);

    var count = apiCallCount.innerHTML || 0;
    count=parseInt(count)+1;
    apiCallCount.innerHTML=count;

}

var timerId;

function deBounceFunction(apiCallFun,delay) {

    clearTimeout(timerId);


     timerId = setTimeout(()=>
     {
         apiCall();

     },delay)

}

searchBox.addEventListener("input",function () {

    var apiCallCount=document.querySelector("#callCount");

    console.log(apiCallCount.innerHTML);

    var count = apiCallCount.innerHTML || 0;

    console.log(count);

    count=parseInt(count)+1;
    apiCallCount.innerHTML=count;

    //deBounce Function 

    deBounceFunction(apiCall,2000);

},false)
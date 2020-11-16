var searchBox=document.querySelector("#searchBox");


function apiCall() {
    
    var apiCallCount=document.querySelector("#debounceCount");
    console.log(apiCallCount.innerHTML);

    
    var count = apiCallCount.innerHTML || 0;
    count=parseInt(count)+1;
    apiCallCount.innerHTML=count;
}

var timerId;

function throatleFunction(apiCallFun,delay) {

    if(timerId)
    {
        return;
    }


     timerId = setTimeout(()=>
     {
         apiCall();
         timerId=undefined;

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

    throatleFunction(apiCall,2000);

},false)
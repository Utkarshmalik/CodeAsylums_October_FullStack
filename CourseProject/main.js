var divBody=document.querySelector("#divBody");

function apiCall(params) {
    
    var apiCallCount=document.querySelector("#debounceCount");

    console.log(apiCallCount.innerHTML);

    var count = apiCallCount.innerHTML || 0;
    count=parseInt(count)+1;
    apiCallCount.innerHTML=count;

}

var timerId;

function throttleFunction(apiCallFun,delay) {

    //no api call is made

    if(timerId)
    {
        return;
    }

     timerId = setTimeout(()=>
    {
        apiCallFun();
        timerId=undefined;

    },delay)

}

window.addEventListener("scroll",function () {

    var apiCallCount=document.querySelector("#callCount");

    console.log(apiCallCount.innerHTML);

    var count = apiCallCount.innerHTML || 0;

    console.log(count);

    count=parseInt(count)+1;
    apiCallCount.innerHTML=count;

    //throttle Function 

    throttleFunction(apiCall,2000);

},false)
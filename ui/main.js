//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    //create a requst object
    var request=new XMLHttpRequest();
    //captur the request and stores it n variable
   request.onreadystatechange= function(){
   
    if(request.readyStat === XMLHttprequest.DONE){
        //take some action
        if(request.status === 200){
            var counter=request.reaponseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    }
};
//make the request
request.open('GET','http://agnayan.2012.imad.hasura-app.io/counter',true);
request.send(null);
};
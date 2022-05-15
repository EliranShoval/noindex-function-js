function noIndexTag(){
    var setTag = document.body.querySelector('p').innerText;
    //console.log(setTag);

    if(setTag.length >0){
        let createElemIndex = document.createElement('meta');
        createElemIndex.setAttribute('name','robots');
        createElemIndex.setAttribute('content','index,follow');
        document.head.append(createElemIndex);
    }
    else{
        let createElemNoIndex = document.createElement('meta');
        createElemNoIndex.setAttribute('name','robots');
        createElemNoIndex.setAttribute('content','noindex,follow');
        document.head.append(createElemNoIndex);
    }
}
noIndexTag();



//Copy this function with script tags - <script></script>
//Feel free to try it! good luck :)
function setNoIndex(){

  var headNoIndex = document.getElementsByTagName('head')[0];
  var noIndexTag = document.createElement('meta');
  noIndexTag.setAttribute('name','robots');
  noIndexTag.setAttribute('content','noindex, follow');
  headNoIndex.appendChild(noIndexTag);
}

setNoIndex();


let n = 1
setInterval(()=>{
  makeLeave(getImageN(n))
    .one('transitionend',(e)=>{
      makeEnter($(e.currentTarget))
    })
  makeCurrent(getImageN(n + 1))
  n += 1;
},2500)

function Range(n){
  if (n > 5){
    n %= 5;
    if (0 === n){
      n = 5
    }  
  } 
  return n;
}


function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter')
}

function getImageN(n){
  return $(`.images>img:nth-Child(${Range(n)}`)
}
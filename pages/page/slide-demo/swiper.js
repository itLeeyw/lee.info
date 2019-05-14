
let n
init()
setInterval(()=>{
  makeLeave($(`.images > img:nth-child(${Range(n)})`))
    .one('transitionend',(e)=>{
      makeEnter($(e.currentTarget))
    })
  makeCurrent($(`.images > img:nth-child(${Range(n+1)})`))
  n += 1;
},1000)

function Range(n){
  if (n > 5){
    n %= 5;
    if (0 === n){
      n = 5
    }  
  } 
  return n;
}

function init(){
  n = 1;
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
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
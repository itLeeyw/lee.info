test1()
function test1(){
  let n = 1
  let timer = setSlide();
  
  //若页面离开则保存当前状态，阻止bug
  //CPU会认为不被Client理解的行为是浪费资源，所以会“偷懒”
  document.addEventListener('visibilitychange',function(e){
    console.log(document.hidden)
    if (document.hidden){
      window.clearInterval(timer)
    }else{
      timer = setSlide();
    }
  })
  
  function setSlide(){//设置轮播逻辑
    return setInterval(()=>{
      makeLeave(getImageN(n))
        .one('transitionend',(e)=>{
          makeEnter($(e.currentTarget))
        })
      makeCurrent(getImageN(n + 1))
      n += 1;
    },2500)
  }
  
  
  function Range(n){//判断number是否在合法区域中
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
  
}

// test2()
// function test2(){
//   let $buttons = $('#buttonWarpper > button')
//   let $slides = $('#slides')
//   let $images = $slides.children('img')
//   let $firstCopy = $images.eq(0).clone(true)
//   let $lastCopy = $images.eq(-1).clone(true)
//   $slides.append($firstCopy)
//   $slides.prepend($lastCopy)
//   $slides.css({transform:'translateX(-400px)'})
//   console.log($slides)
//   let current = 0
// }


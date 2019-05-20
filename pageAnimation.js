setTimeout(function(){//页面缓冲
    siteWelcome.classList.remove('action')
},
    100
)
let specialTags = document.querySelectorAll('[data-x]')
for(let i = 0; i < specialTags.length; i++){
    specialTags[i].classList.add('offset')
}//给所有具有[data-x]的标签添加offset属性
setTimeout(function(){yyy()},500)
window.onscroll = function(x){//如果滑动页面会发生那些效果
    window.scrollY > 0 ? topNav.classList.add('sticky') : topNav.classList.remove('sticky')
    yyy()
}
function yyy(){
    let specialTags = document.querySelectorAll('[data-x]')
    let speciLen = specialTags.length
    let minIndex = 0
    for (let i = 1; i < speciLen; i++){
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i 
        }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++){
        brothersAndMe[i].classList.remove('highlight')
    }

    li.classList.add('highlight')
}

//给所有的li添加active动画
let liTags = document.querySelectorAll('nav.menu > ul > li')
menuLen = liTags.length;	
for(let i = 0; i < menuLen; i++){
    liTags[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
    }
}

//使用tween js第三方包进行动画的过渡
aTags = document.querySelectorAll('.menu > ul > li > a')
aLen = aTags.length
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
for (let i = 0; i < aLen; i++){
    aTags[i].onclick = function(x){
        //阻止默认跳转
        x.preventDefault()
        let a = x.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href)
        let top = element.offsetTop
        //window.scrollTo(0,top - 80)//到视口顶部
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        let t = Math.abs( s / 1000 * 300 ) //1000/s  300/t 交叉相乘
        console.log(t)
        let coords = { x:0 , y: currentTop }; // Start
        let tween = new TWEEN.Tween(coords)
            .to({ x: 0,y: targetTop }, t) // Move to (targettop) in t ms.
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                window.scrollTo(0, coords.y)
            })
            .start(); // Start the tween immediately.

    }
}
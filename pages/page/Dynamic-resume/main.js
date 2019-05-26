/* “写”code */
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#Code')
    domCode.innerHTML = prefix || ''
    let domStyle = document.querySelector('#Style')
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        domCode.innerHTML = 
           Prism.highlight( prefix + code.substring(0,n),Prism.languages.css,'css');
        domStyle.innerHTML =  prefix + code.substring(0,n)
        if( n >= code.length){
            window.clearInterval(id)
            fn.call()
        }
    })
}


var r = `/*“我是如来佛祖玉皇大帝观音菩萨指定取西经特派使者花果山水帘洞美猴王齐天大圣孙悟空啊！”*/

*{ 
    transition: all 1s; 
}

html{
    background:rgb(222,222,222);
}

#Code{
    border: 1px solid red; 
    font-size:18px;
}

/* 加一点HighLight~ */

.token.selector{
    color: #690;
}
.token.punctuation{
    color: #999;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/* 加点3D效果 */
#Code{
    transform: rotate(360deg)
}

/* 自我介绍 */
/* 首先需要一张白纸 */
`
var r2 = `
#paper{
    width: 100px; height: 100px;
    background: red;
}
    `

writeCode('',r2,()=>{
    // console.log("你执行完了 运行我")
    createPaper(()=>{
        writeCode(r,r2)
    })
})

function createPaper(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function f3(prer){

    var  n = 0;
    var id = setInterval(()=>{
        n += 1
        code.innerHTML = prer + r2.substring(0,n)
        code.innerHTML =  Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
        if( n >= r2.length){
            window.clearInterval(id)
        } 
    },10)
}
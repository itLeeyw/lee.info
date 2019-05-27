


var r = `/*“我是如来佛祖玉皇大帝观音菩萨指定取西经特派使者花果山水帘洞美猴王齐天大圣孙悟空啊！”*/

*{ 
    transition: all 1s; 
}

html{
    background:rgb(222,222,222);
}

#Code{
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
    transform: rotate(360deg);
}

/* 自我介绍 */
/* 首先需要一张白纸 */
#Code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position:fixed;
    right: 0;
    width: 50%;
    height:100%;
    background: black;
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 16px;
}
#paper > .content{
    background:white;
    width:100%;
    height:100%;
}
`
var r2 = `
#paper{
}
/* 下面把MarkDown转换成HTML */
    `
var md = `
# 自我介绍
 我叫Leeyw
 生于1999年
 于2021年毕业
 软件工程专业

 ----

 ## 项目介绍

 ----

 ## 联系方式
QQ：2621847675
TEL:1537*****39

---

`
/* “写”code */
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#Code')
    // domCode.innerHTML = prefix || ''
    let domStyle = document.querySelector('#Style')
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        domCode.innerHTML = 
           Prism.highlight( prefix + code.substring(0,n),Prism.languages.css,'css');
        domStyle.innerHTML =  prefix + code.substring(0,n)
        domCode.scrollTop = domCode.scrollHeight
        if( n >= code.length){
            window.clearInterval(id)
            fn.call()
        }
    },50)
}

function writeMarkDown(markDown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        domPaper.innerHTML = marked(markDown.substring(0,n))
        domPaper.scrollTop = domPaper.scrollHeight
        if( n >= markDown.length){
            window.clearInterval(id)
            fn.call()
        }
    },50)
}


writeCode('',r,()=>{
    // console.log("你执行完了 运行我")
    createPaper(()=>{
        writeCode(r,r2,()=>{
            writeMarkDown(md,()=>{
                resumeStyle()
            })
        })
    })
})

function resumeStyle(){
    //这里写content的样式
}

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}


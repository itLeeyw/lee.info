var APP_ID = '7pp9hNxP5KSSuq5RMAFc2Fcq-gzGzoHsz';
var APP_KEY = 'POxVDL86RVWQm7OHPJFjAmcv';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('LeavingAMessage');
  query.find().then(function (Messages) {
    let arr = Messages.map((item) => item['attributes'])
    arr.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = `${item['name']}:${item['content']}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        
    })
  }, function (error) {
      alert('请稍后再试试，试试就逝世')
    // 异常处理
  })

let myForm = document.querySelector('#PostMessageForm') 

myForm.addEventListener('submit',function(e){
    e.preventDefault()//阻止默认(刷新)事件
    let content = myForm.querySelector('input[name=content]').value//获取input中的值
    let name = myForm.querySelector('input[name=name]').value
    var LeavingAMessage = AV.Object.extend('LeavingAMessage');
    var message = new LeavingAMessage()
    message.save({
        'name':name,
        'content':content
    }).then((object) => {
      let li = document.createElement('li')
      li.innerText = `${object.attributes['name']}:${object.attributes['content']}`
      let messageList = document.querySelector('#messageList')
      myForm.querySelector('input[name=content]').value = ''
      messageList.append(li) 
    })
})

// Test-Code
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
  
// })
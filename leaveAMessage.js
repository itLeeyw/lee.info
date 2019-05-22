!function(){
  var view = document.querySelector('section.messageList')
  var controller = {
    view:null,
    messageList:null,
    init:function(view){
      this.view = view
      this.messageList = view.querySelector('#messageList')
      this.form= view.querySelector('form')
      this.initAV()
      this.loadMessages()
      this.bindEvents()
    },
    initAV:function(){
      var APP_ID = '7pp9hNxP5KSSuq5RMAFc2Fcq-gzGzoHsz';
      var APP_KEY = 'POxVDL86RVWQm7OHPJFjAmcv';
      
      AV.init({  appId: APP_ID, appKey: APP_KEY });
    },
    loadMessages:function(){
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
    },
    bindEvents:function(){
      let myForm = this.form
      this.form.addEventListener('submit',function(e){
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
    },
    saveMessage:function(){
      
      
    }
  }      

  controller.init(view)  

  // Test-Code
  // var TestObject = AV.Object.extend('TestObject');
  // var testObject = new TestObject();
  // testObject.save({
  //   words: 'Hello World!'
  // }).then(function(object) {
    
  // })
}.call()


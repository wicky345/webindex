//本案例使用了一个监听器
var events=require('events');
var EventEmitter= events.EventEmitter;

//实例化EventEmitter对象
var event= new EventEmitter();

//绑定未命名函数与some_Event
event.on('some_Event',function(){
    console.log('some_Event时间被触发');
});
setTimeout(function(){
//触发事件
  event.emit('some_Event');
},3000);
var events=require('events');
var eventEmitter=new events.EventEmitter();

//监听器 #1
var listener1=function listener1(){
    console.log('监听器 listen1 执行');
}
//监听器 #2
var listener2=function listener2(){
    console.log('监听器 listen2 执行');
}
//绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection',listener1);

//绑定connection事件，处理函数为listener2
eventEmitter.on('connection',listener2);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
var eventListeners=eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听器连接事件。")

eventEmitter.emit('connection');
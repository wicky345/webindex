//本案例含有两个监听器
//on用来绑定事件函数。emit用来触发事件
var events=require('events');

var EventEmitter=events.EventEmitter;
var Emitter=new EventEmitter();

Emitter.on('someEvent',function(arg1,arg2){
    console.log('listen1',arg1,arg2);
});
Emitter.on('someEvent',function(arg1,arg2){
    console.log('listen2',arg1,arg2);
});
Emitter.emit('someEvent','参数1','参数2');
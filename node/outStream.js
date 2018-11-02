var fs=require('fs');
var data="hello world!";

var writerStream=fs.createWriteStream('output.txt');

writerStream.write(data,'utf8');

writerStream.on('finish',function(){
    console.log('写入完成');
});
writerStream.on('error',function(err){
    console.log(err.stack);
});
console.log('程序执行完成');
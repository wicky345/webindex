const buf=Buffer.alloc(26);
for(var i=0;i<26;i++)
{
    buf[i]=i+97;
}
console.log(buf.toString('ASCII',0));
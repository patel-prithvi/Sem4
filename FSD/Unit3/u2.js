// write program to fentch query from url and give avg
u= require("url");
process.noDeprecation=true;
var addr= "http://localhost:8080/test?m1=50&m2=60&m3=70"
var q = u.parse(addr,true)
console.log(q);
m1= parseInt(q.query.m1);
m2= parseInt(q.query.m2);
m3= parseInt(q.query.m3);
avg=(m1+m2+m3)/3
console.log(avg);
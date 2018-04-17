document.write('<h1>Hello World</h1>');
var o = {
    a:10,
    b:{
        a:12,
        fn: () => console.log(this.a)
        // fn:function(){
        //     console.log(this.a); //undefined
        // }
    }
}
o.b.fn();

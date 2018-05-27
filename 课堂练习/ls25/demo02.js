window.onload = function (e) {
    //console.log("window onload");
    //console.log("e:", e);
    //console.log(e.target);
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // 测试0
        //console.log(e.type);
        //console.log(e.target);//思考target和this此时是否一样？
        //所有情况都一样么?有没有某种情况不一样呢？后边讲事件流时再告诉你

        // 测试1（事件对象的属性）
        //console.log(e.clientX,e.clientY);
        //console.log(this, "-----", e.target.id);

        // 测试2（事件对象之间的继承关系）
       //console.log(e);    MouseEvent{isTrusted:true,screenX:100,screenY:232,clientX:,clientY:}
       //console.log(e.__proto__);  UIEvent{}
       //console.log(e.__proto__.__proto__);    Event{}   
       //console.log(e.__proto__.__proto__.__proto__);  Object{}
       //console.log(e.__proto__.__proto__.__proto__.__proto__);    Object{}

        // 测试3（遍历出事件的原型数组中每个值）
     for(var k in e){
         console.log(k,e[k]);
     }
     for(var k in e.__proto__){
         console.log(k);
     }
     for(var k in e.__proto__.__proto__){
         console.log(k);
     }
     for(var k in e.__proto__.__proto__.__proto__){
         console.log(k);
     }
        
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;

    //自定义事件监听、事件分发
    // document.addEventListener("xx",function(){console.log("11")});
    // document.dispatchEvent(new Event("xx"));
}

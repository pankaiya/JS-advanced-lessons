//
window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    //思考：将下述7到11行代码写在window.onload回调函数外会怎样
    div2.onclick = function () {
        console.log("div2 click");
    }
    // div2.onmouseover = function () {
    //     console.log("div2 mouseover");
    // }(如果写到window.onload的外面，这个事件将不会执行，会报错显示div2没有被定义)
}
function div1click() {
    console.log("div1 click");
    //console.log("this:", this);
}

/*
 * @Author: your name
 * @Date: 2022-03-14 10:08:20
 * @LastEditTime: 2022-03-14 11:02:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \QDtest\NodeExpress\node\mianshi.js
 */


//padding与margin有什么不同？

// 作用对象不通（padding是针对与自身的内部的，margin是作用于外部对象的与其他元素的）

//vw和百分比的区别
// vw是只和设备的宽度有关系，基于窗口的宽度，百分比有继承关系是基于父元素的宽度

//行内元素（不被宽高设置）和块级元素（只会继承父元素，必须设置宽高）

//让浏览器支持小字体
// 最小是12px，再小需要可以transfrom:scale(0.8)//通过缩放变更大小


//var 1、声明提升2、没有局部作用域3、声明覆盖


//深拷贝和浅拷贝（只是拷贝了栈里的指针，对于堆里面的数据没有改变）
//引用数据类型（数组和对象）的赋值都是浅拷贝，对原有数据会有影响
let arr1 = [1,2,3]
let newArr1 = arr1
newArr1.push(4)
console.log(arr1,newArr1)
//解构赋值是不会影响的,针对一维数组和对象是深拷贝，多维的不行
let arr2 = [1, 2, 3];
let newArr2 = [...arr2];
newArr2.push(4);
console.log(arr2, newArr2);
//初始化 patch(container,vnode)
//更新 updata(vnode,newVnode)


//初始化构建虚拟dom
function creatElement(vnode){
    let tag = vnode.tag //目标元素
    let attrs = vnode.attrs || {} //属性
    let children = vnode.children || {} //字节点

    if(vnode.tag){
        return null
    }

    //创建对应的dom对象
    let elem = document.creatElement(tag)

    //遍历对象的class属性
    let attrName 
    for(attrName in attrs){//遍历对象会返回属性名，遍历数组会返回下标
        if(attrs.hasOwnProperty(attrName)){
            elem.setAttribute(attrName, attrs[attrName]);
        }
    }

    //遍历子节点,将子元素加到目标上

    children.forEach(element => {
        elem.appendChild(creatElement(element));
    });

    return elem;
}


//更新数据
function updataChildren(vnode , newVnode){
    let children = vnode.children || [] //现有节点
    let newChildren = newVnode.children || [] //新节点

    children.forEach(function(childrenVnode , index){
        //循环虚拟dom每一项
        let newChildrenVnode = newChildren[index]
        //第一层没有变化

        if (childrenVnode.tag === newChildrenVnode.tag) {
            //第一层一样，继续调用方法进入下一层 =》{递归}
            updataChildren(childrenVnode, newChildrenVnode);
        }else{
            //不一样就替换
            replaceNode(childrenVnode, newChildrenVnode);
        }
    })
}
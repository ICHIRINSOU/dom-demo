window.dom = {
    find(selector,scope){
        return (scope || document).querySelectorAll(selector);
    },
    style(node,name,value){
        if (arguments.length === 3){
            return node.style[name] = value;
        }else if (arguments.length === 2){
            if (typeof name === "string"){
                return node.style = name;
            }else if (name instanceof Object) {
                const obj = name;
                for (let key in obj){
                    name.style[key] = obj[key];
                }
            }
        }
    },
    each(list,fn){
        for (let i = 0;i<list.length;i++){
            fn.call(null,list[i])
        }
    }
}
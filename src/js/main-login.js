requirejs.config({
    paths : {
        //新名字：旧名字
        //所有依赖
         "jquery": "../lib/jquery-1.10.1.min",
         "common": "../lib/common",
         "login": "login",
    },
    // 设置依赖关系
    shim: {
    'login': {
        deps: ["jquery"]
    },
    'login': {
        deps: ["common"]
    }
}
});

//main.js-----
requirejs(['jquery','common','login'],function($){
    //这里的代码等common，moduleA，moduleB，moduleC模块都加载完成后执行
    //但不保证以上模块的加载顺序
    
    //比如：黄武超 整合代码
    //list：渣渣辉
    //now：陈裕
    //新功能：需要用到子模块：list和now
    
});
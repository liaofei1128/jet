Jet.$define('Query',function(){
    var map=[{
        name:'Jet简介',
        url:'/intro',
        intro:'Jet是一个前端的轻量级的js框架，不依赖任何第三方库。Jet采用数据双向绑定，以数据驱动视图。',
        des:''
    },{
        name:'安装使用',
        url:'/intro/install',
        intro:'以script标签引入或者在lite-server中使用',

    },{
        name:'目录结构',
        url:'/intro/contents',
        intro:'介绍Jet项目的目录结构。',
        des:''
    },{
        name:'HTML模板',
        url:'/intro/html',
        intro:'Jet的HTML模板使用的html后缀的文件，语法与普通的html一样。',
        des:''
    },{
        name:'图片',
        url:'/intro/html',
        intro:'src只需要指定图片的名称即可',
        des:'img'
    },{
        name:'scoped',
        url:'/intro/html',
        intro:'css样式是否只在当前页面中生效',
        des:'scoped'
    },{
        name:'Jet语法',
        url:'/intro/grammer',
        intro:'Jet 使用 new Jet() 来创建一个Jet组件',
        des:''
    },{
        name:'局部渲染',
        url:'/intro/grammer',
        intro:'通过给 new Jet() 参数增加一个 ele 属性（值是一个id值或者是一个dom元素）。可以局部渲染html元素',
        des:'part'
    },{
        name:'name参数',
        url:'/intro/grammer',
        intro:'设置name参数后可以通过 Jet.name 获取到Jet元素',
        des:'name'
    },{
        name:'par参数',
        url:'/intro/grammer',
        intro:'用于父组件与子组件的状态共享',
        des:'par'
    },{
        name:'Jet生命周期',
        url:'/intro/life',
        intro:'Jet 有8个生命周期函数',
    },{
        name:'ondatachange',
        url:'/intro/life',
        intro:'为Jet数据添加一个数据变化的监听事件',
        des:'ondatachange'
    },{
        name:'beforeinitawait',
        url:'/intro/life',
        intro:'用于在渲染之前保证一些异步操作执行完毕',
        des:'beforeinitawait'
    },{
        name:'资源管理',
        url:'/intro/res',
        intro:'Jet.res.define()：统一定义资源文件',
    },{
        name:'api目录',
        url:'/intro/api',
        intro:'api汇总',
    },{
        name:'关于',
        url:'/intro/about',
        intro:'作者信息，版本信息',
    },{
        name:'赞助',
        url:'/intro/about',
        intro:'赞助与支持',
        des:'donate'
    },{
        name:'数据绑定',
        url:'/bind',
        intro:'Jet中的UI是由数据驱动，所有动态的html内容都与Jet的数据绑定，当数据改变时，对应的UI内容会自动更新',
    },{
        name:'绑定(属性J)',
        url:'/bind/j',
        intro:'Jet中使用属性J将Jet中的数据和UI绑定',
        des:''
    },{
        name:'$init',
        url:'/bind/init',
        intro:'初始化动态添加的Jet元素',
    },{
        name:'绑定的分类',
        url:'/bind/type',
        intro:'bind,for,text和input',
        des:''
    },{
        name:'bind',
        url:'/bind/grammer',
        intro:'当绑定的数据是json时，就会使用 new Jet.Bind() 生成一个bind类型的Jet元素。',
        des:'bind'
    },{
        name:'for',
        url:'/bind/grammer',
        intro:'当绑定的数据是数组时，就会使用 new Jet.For() 生成一个for类型的Jet元素。',
        des:'for'
    },{
        name:'$each',
        url:'/bind/grammer',
        intro:'$each 是与数组中的每一个数组元素对应。',
        des:'for-$each'
    },{
        name:'for-switch',
        url:'/bind/grammer',
        intro:'for 中根据不同的数据来使用不同的html内容。',
        des:'for-$each'
    },{
        name:'$index',
        url:'/bind/grammer',
        intro:'$index 指的是数组元素的索引，也可用于多层嵌套。',
        des:'for-$index'
    },{
        name:'$value',
        url:'/bind/grammer',
        intro:'$value 的使用场景当 for 数组中的元素是指类型。',
        des:'for-$value'
    },{
        name:'for-inline',
        url:'/bind/grammer',
        intro:'使用 jfor-inline 可以使 each 为一个行内元素。',
        des:'for-inline'
    },{
        name:'text',
        url:'/bind/grammer',
        intro:'当绑定的数据是boolean，number，string类型（值类型）时，并且对应的html元素不是输入元素',
        des:'text'
    },{
        name:'input',
        url:'/bind/grammer',
        intro:'当绑定的数据是boolean，number，string类型（值类型）时，并且对应的html元素是输入元素',
        des:'input'
    },{
        name:'原生数组方法',
        url:'/bind/array',
        intro:'对原生的数组方法进行了重写，使支持双向数据绑定。',
        des:'o-array'
    },{
        name:'Jet数组方法',
        url:'/bind/array',
        intro:'循环类型的for元素的绑定值是一个数组，Jet 对for元素的数组定义了一些操作方法，来代替原生js的数组操作方法。',
        des:'jet-array'
    },{
        name:'$push方法',
        url:'/bind/array',
        intro:'使用 .$push() 向数组尾部插入一个元素',
        des:'push'
    },{
        name:'$pushArray方法',
        url:'/bind/array',
        intro:'使用 .$pushArray() 向数组尾部插入多个元素',
        des:'pushArray'
    },{
        name:'$prep方法',
        url:'/bind/array',
        intro:'使用 .$prep() 向数组头部插入一个元素',
        des:'prep'
    },{
        name:'$prepArray方法',
        url:'/bind/array',
        intro:'使用 .$prepArray方法() 向数组头部插入多个元素',
        des:'prepArray'
    },{
        name:'$insert方法',
        url:'/bind/array',
        intro:'使用 .$insert() 向数组任意位置插入一个元素',
        des:'insert'
    },{
        name:'$insertArray方法',
        url:'/bind/array',
        intro:'使用 .$insertArray() 向数组任意位置插入多个元素',
        des:'insertArray'
    },{
        name:'$remove方法',
        url:'/bind/array',
        intro:'使用 .$remove() 删除数组中的一个或多个元素',
        des:'remove'
    },{
        name:'$removeByIndex方法',
        url:'/bind/array',
        intro:'使用 .$removeByIndex() 删除数组中的一个或多个元素',
        des:'removeByIndex'
    },{
        name:'$clear方法',
        url:'/bind/array',
        intro:'使用 .$clear() 可以清空一个数组',
        des:'clear'
    },{
        name:'$replace方法',
        url:'/bind/array',
        intro:'使用 .$replace() 可以对当前数组赋一个新的值',
        des:'replace'
    },{
        name:'属性样式事件',
        url:'/attr',
        intro:'本章中将介绍Jet中的属性，样式和事件的绑定',
    },{
        name:'$.$par()',
        url:'/attr',
        intro:'使用父元素的数据',
        des:'par'
    },{
        name:'$parData()',
        url:'/attr',
        intro:'使用父元素的数据',
        des:'parData'
    },{
        name:'jif:条件判断',
        url:'/attr/if',
        intro:'可以根据给定的布尔值或布尔表达式的结果对元素进行两种不同的操作',
    },{
        name:'jshow:选择展示',
        url:'/attr/show',
        intro:'可以根据一个布尔值或者布尔表达式来显示或者隐藏绑定的html元素',
    },{
        name:'jattr:绑定属性',
        url:'/attr/attr',
        intro:'可以给html元素绑定属性',
    },{
        name:'jstyle:绑定样式',
        url:'/attr/style',
        intro:'可以给html元素绑定样式',
    },{
        name:'jrun:执行回调',
        url:'/attr/run',
        intro:'可以给html元素添加一个或者多个加载之后的回调函数',
    },{
        name:'jon:绑定事件',
        url:'/attr/on',
        intro:'可以给html元素添加一个加载之后的回调函数',
    },{
        name:'jload:组件',
        url:'/attr/load',
        intro:'可以在某个元素之内加载其他组件',
    },{
        name:'父子组件通信',
        url:'/attr/load',
        intro:'介绍Jet中父子组件通信方式',
        des:'par-child'
    },,{
        name:'Jpar',
        url:'/attr/load',
        intro:'设置子组件中Jet元素的父元素',
        des:'jpar'
    },{
        name:'jroot:根数据',
        url:'/attr/root',
        intro:'可以将html元素绑定到Jet根元素上',
    },{
        name:'$r',
        url:'/attr/root',
        intro:'使用 $r 来调用Jet数据',
        des:'r'
    },{
        name:'jdom:操作DOM',
        url:'/attr/dom',
        intro:'生成一个可以使用Jet特殊语法操作的类dom元素',
    },{
        name:'jhtml:渲染HTML',
        url:'/attr/html',
        intro:'将绑定的内容设置成为innerHTML',
    },{
        name:'表单验证',
        url:'/valid',
        intro:'Jet中的自带一套表单验证的方案',
    },{
        name:'Jvalid',
        url:'/valid/valid',
        intro:'对输入元素设置验证的规则',
    },{
        name:'预定义的验证规则',
        url:'/valid/valid',
        intro:'Jet中预定义的验证规则有以下几种',
        des:'regExp'
    },{
        name:'Jform',
        url:'/valid/form',
        intro:'使用 Jform 属性来指定一个表单',
    },{
        name:'Jet.valid',
        url:'/valid/method',
        intro:'valid对象中含有很多可以定制的属性',
    },{
        name:'Jet.valid.language',
        url:'/valid/method',
        intro:'设置验证提示信息语言',
        des:'language'
    },{
        name:'Jet.valid.useDefaultStyle',
        url:'/valid/method',
        intro:'设置使用默认的错误提示样式',
        des:'useDefaultStyle'
    },{
        name:'Jet.valid.useOnInput',
        url:'/valid/method',
        intro:'设置使用oninput触发验证',
        des:'useOnInput'
    },{
        name:'Jet.valid.showInPlaceHolder',
        url:'/valid/method',
        intro:'设置是否将格式要求使用 placeholder 显示',
        des:'showInPlaceHolder'
    },{
        name:'Jet.valid.useAlert',
        url:'/valid/method',
        intro:'设置是否使用alert方法打印出验证失败信息',
        des:'useAlert'
    },{
        name:'Jet.valid.useJUI',
        url:'/valid/method',
        intro:'设置是否使用JUI的消息框打印出验证失败信息',
        des:'useJUI'
    },{
        name:'Jet.valid.init',
        url:'/valid/method',
        intro:'初始化验证元素',
        des:'init'
    },{
        name:'Jet.valid.validate',
        url:'/valid/method',
        intro:'代码调用验证表单',
        des:'validate'
    },{
        name:'Jet.valid.validInput',
        url:'/valid/method',
        intro:'代码调用验证单个输入元素',
        des:'validInput'
    },{
        name:'Jet.valid.addRegExp',
        url:'/valid/method',
        intro:'修改或者添加验证的正则表达式',
        des:'addRegExp'
    },{
        name:'Jet.valid.addValidText',
        url:'/valid/method',
        intro:'修改或者添加验证的错误提示文字',
        des:'addValidText'
    },{
        name:'Jet.valid.onOnePass',
        url:'/valid/method',
        intro:'设置单个输入元素验证成功的回调函数',
        des:'onOnePass'
    },{
        name:'Jet.valid.onOneFail',
        url:'/valid/method',
        intro:'设置单个输入元素验证失败的回调函数',
        des:'onOneFail'
    },{
        name:'Jet.valid.addValid',
        url:'/valid/method',
        intro:'添加验证',
        des:'addValid'
    },{
        name:'Jet.valid.resetValid',
        url:'/valid/method',
        intro:'重置验证样式',
        des:'resetValid'
    },{
        name:'Jet.valid.clearValid',
        url:'/valid/method',
        intro:'清除验证',
        des:'clearValid'
    },{
        name:'自定义验证样式',
        url:'/valid/custom',
        intro:'定制验证成功或者失败的提示信息',
    },{
        name:'国际化语言',
        url:'/lang',
        intro:'支持国际化语言',
    },{
        name:'Jet.lang.use',
        url:'/lang/use',
        intro:'启用国际化语言，设置支持的语种',
    },{
        name:'静态国际化语言',
        url:'/lang/static',
        intro:'渲染静态的dom元素',
    },{
        name:'动态国际化语言',
        url:'/lang/dynamic',
        intro:'支持国际化语言的动态的Jet数据',
    },{
        name:'Jet.lang.list',
        url:'/lang/list',
        intro:'查看可用的语言列表',
    },{
        name:'Jet.lang.type',
        url:'/lang/type',
        intro:'获取当前的语言，设置语言',
    },{
        name:'Jet.lang.init',
        url:'/lang/init',
        intro:'动态初始化新增的需要国际化的静态html元素',
    },{
        name:'路由',
        url:'/router/',
        intro:'开发单页web应用',
    },{
        name:'Jet.router.use',
        url:'/router/use',
        intro:'启用路由模块',
    },{
        name:'jrouter&jout',
        url:'/router/ele',
        intro:'指定路由的点击元素和出口',
    },{
        name:'路由事件',
        url:'/router/on',
        intro:'路由事件有onroute和onrouted',
    },{
        name:'Jet.router.route',
        url:'/router/route',
        intro:'使用代码进行路由跳转',
    },{
        name:'Jet.router中的方法',
        url:'/router/func',
        intro:'介绍Jet.router中的其他一些方法',
    },{
        name:'路由属性',
        url:'/router/prop',
        intro:'许多与路由相关的属性',
    },{
        name:'js模块规范',
        url:'/module',
        intro:'js异步模块加载规范',
    },{
        name:'$define',
        url:'/module/define',
        intro:'定义模块',
    },{
        name:'$export',
        url:'/module/export',
        intro:'输出模块',
    },{
        name:'$import',
        url:'/module/import',
        intro:'引入模块',
    },{
        name:'$module',
        url:'/module/module',
        intro:'已引入的模块集合',
    },{
        name:'$get',
        url:'/module/get',
        intro:'使用模块',
    },{
        name:'css配置文件',
        url:'/css/',
        intro:'名为css.conf的配置文件',
    },{
        name:'css变量',
        url:'/css/var',
        intro:'variable属性中以键值对的方式定义css变量',
        des:'var'
    },{
        name:'css函数',
        url:'/css/var',
        intro:'variable属性同样可以定义css函数',
        des:'func'
    },{
        name:'路由页面公共样式',
        url:'/css/common',
        intro:'定义部分路由页面的公有样式',
    },{
        name:'工具方法',
        url:'/tool/',
        intro:'封装了一些常用的函数以及操作dom元素的方法',
    },{
        name:'$ajax',
        url:'/tool/ajax',
        intro:'与服务器交互数据或是请求文件',
    },{
        name:'$cookie',
        url:'/tool/cookie',
        intro:'操作cookie',
    },{
        name:'$storage',
        url:'/tool/storage',
        intro:'操作storage',
    },{
        name:'Jet.$',
        url:'/tool/tool',
        intro:'常用的功能的函数以及对dom操作的方法',
    },{
        name:'prototype扩展',
        url:'/tool/prototype',
        intro:'dom元素，数组和字符串的prototype进行了扩展',
    },{
        name:'JUI',
        url:'/jui/',
        intro:'JUI 是针对 Jet 开发的一套前端 UI 框架',
    },{
        name:'jui-bind',
        url:'/jui/',
        intro:'与Jet数据进行绑定',
        des:'jui-bind'
    },{
        name:'jui-change',
        url:'/jui/',
        intro:'指定一个数据改变以后的回调函数',
        des:'jui-change'
    },{
        name:'$jui',
        url:'/jui/',
        intro:'获取JUI对象',
        des:'jui'
    },{
        name:'jui-type',
        url:'/jui/',
        intro:'指定绑定数据的JUI元素最终使用数据类型',
        des:'jui-type'
    },{
        name:'jui-onload',
        url:'/jui/',
        intro:'在JUI组件绑定完成时触发一个事件',
        des:'jui-onload'
    },{
        name:'jui工具方法',
        url:'/jui/',
        intro:'扩展了Jet工具方法',
        des:'jui-tool'
    },{
        name:'基础样式类',
        url:'/jui/base',
        intro:'一套基础样式类',
    },{
        name:'图标icon',
        url:'/jui/icon',
        intro:'JUI采用开源web图标字体 Font Awesome',
    },{
        name:'栅格grid',
        url:'/jui/grid',
        intro:'最多将一行分为24列',
    },{
        name:'按钮btn',
        url:'/jui/btn',
        intro:'定义一个按钮',
    },{
        name:'输入框input',
        url:'/jui/input',
        intro:'定义一个输入框',
    },{
        name:'单选框radio',
        url:'/jui/radio',
        intro:'定义一个单选框',
    },{
        name:'单选框组radioGroup',
        url:'/jui/radio',
        intro:'定义一个单选框组',
        des:'radioGroup'
    },{
        name:'复选框与复选框组check',
        url:'/jui/check',
        intro:'定义复选框和复选框组',
    },{
        name:'下拉框select',
        url:'/jui/select',
        intro:'定义一个下拉框',
    },{
        name:'切换按钮switch',
        url:'/jui/switch',
        intro:'定义一个切换按钮',
    },{
        name:'时间选择器date',
        url:'/jui/date',
        intro:'时间选择器',
    },{
        name:'颜色选择器color',
        url:'/jui/color',
        intro:'颜色选择器',
    },{
        name:'代码编辑器code',
        url:'/jui/code',
        intro:'代码编辑器',
    },{
        name:'滑动选择器slider',
        url:'/jui/slider',
        intro:'滑动选择器',
    },{
        name:'进度条progress',
        url:'/jui/progress',
        intro:'进度条',
    },{
        name:'提示框msg',
        url:'/jui/msg',
        intro:'弹出一个消息提示框',
    },{
        name:'确认框confirm',
        url:'/jui/confirm',
        intro:'弹出一个确认框',
    },{
        name:'对话框dialog',
        url:'/jui/dialog',
        intro:'弹出一个对话框',
    },{
        name:'拖拽drag',
        url:'/jui/drag',
        intro:'可拖拽组件',
    },{
        name:'分页器page',
        url:'/jui/page',
        intro:'数据分页器',
    },{
        name:'选项卡tab',
        url:'/jui/tab',
        intro:'选项卡tab',
    },{
        name:'在线使用',
        url:'/code',
        intro:'在线使用和调试Jet',
    }]
    Jet.$export({
        search:function(s){
            return map.filter(function(item){
                return item.name.toLowerCase().has(s.toString().toLowerCase());
            })
        },getData:function(){
            return map;
        }
    })
});



//'https://www.theajack.com/cnchar/cnchar.min.js',
//Jet.use('/src/js/cnchar.js')
// Jet.use.define({
//     lib:{
//         cnchar:'src/js/cnchar.js',
//         a:'src/js/a.js',
//     },
//     depend:{
//         cnchar:['tool','a'],
//     }
// })
// Jet.use('cnchar',function(){
//     debugger;
// })

// Jet.use.define({
//     lib:{
//         a:'src/js/a.js',
//         b:'src/js/b',//.js后缀可以省略
//         c:'src/js/c',
//     },
//     depend:{
//         a:['b','c'],
//         b:['c','tool']//也可以依赖官方库
//     }
// })

// //声明库之后，就可以通过 库名来使用库
// Jet.use('a',function(){
    
// })

Jet.use.all(
    //'cnchar',
    //'/src/js/cnchar.js',
    function (times) {
        Jet.router.setBase('/jet',true);
        Jet.lang.use(['cn', 'en']);
        Jet.res.define({
            image: {
                wechat: 'wechat.png',
                alipay: 'alipay',
                wechatpay: 'wechatpay',
                logo: 'logo'
            },
            html: {
                forLoad: '/attr/for_load',
                pageInstall: 'intro/install',
                routerMenu: 'comp/router-menu',
                header: 'comp/header',
                footer: 'comp/footer',
            },
            js: {
                content: 'module/contents',
                scroll: 'module/scroll',
                api: 'module/queryApi'
            }
        })
        Jet.router.use({
            history: false,
            index: '/',
            oninit: function () {
                //Jet.import('queryApi');
            },
            router: {
                '/': '/intro/index',
                '/intro': {
                    name: '/intro/index',
                    children: {
                        '/img': '/intro/img',
                        '/install': '@pageInstall',
                        '/contents': '/intro/contents',
                        '/html': '/intro/html',
                        '/grammer': '/intro/grammer',
                        '/res': '/intro/res',
                        '/life': '/intro/life',
                        '/api': '/intro/api',
                        '/update': '/intro/update',
                        '/about': '/intro/about',
                    }
                },
                '/bind': {
                    name: '/bind/index',
                    children: {
                        '/j': '/bind/j',
                        '/init': '/bind/init',
                        '/type': '/bind/type',
                        '/array': '/bind/array',
                        '/grammer': '/bind/grammer',
                    }
                },
                '/attr': {
                    name: '/attr/index',
                    children: {
                        '/if': '/attr/if',
                        '/show': '/attr/show',
                        '/attr': '/attr/attr',
                        '/style': '/attr/style',
                        '/run': '/attr/run',
                        '/on': '/attr/on',
                        '/load': '/attr/load',
                        '/root': '/attr/root',
                        '/dom': '/attr/dom',
                        '/html': '/attr/html',
                        '/path': '/attr/path',
                    }
                },
                '/lib': {
                    name: '/lib/index',
                    children: {
                        '/part': '/lib/part',
                        '/use': '/lib/use',
                        '/define': '/lib/define'
                    }
                },
                '/valid': {
                    name: '/valid/index',
                    children: {
                        '/form': '/valid/form',
                        '/method': '/valid/method',
                        '/valid': '/valid/valid',
                        '/custom': '/valid/custom',
                    }
                },
                '/lang': {
                    name: '/language/index',
                    children: {
                        '/use': '/language/use',
                        '/static': '/language/static',
                        '/dynamic': '/language/dynamic',
                        '/list': '/language/list',
                        '/type': '/language/type',
                        '/init': '/language/init',
                    }
                },
                '/router': {
                    name: '/router/index',
                    children: {
                        '/use': '/router/use',
                        '/ele': '/router/ele',
                        '/on': '/router/on',
                        '/route': '/router/route',
                        '/func': '/router/func',
                        '/prop': '/router/prop',
                    }
                },
                '/module': {
                    name: '/module/index',
                    children: {
                        '/define': '/module/define',
                        '/export': '/module/export',
                        '/import': '/module/import',
                        '/module': '/module/module',
                        '/get': '/module/get',
                    }
                },
                '/css': {
                    name: '/css/index',
                    children: {
                        '/var': '/css/var',
                        '/common': '/css/common',
                    }
                },
                '/tool': {
                    name: '/tool/index',
                    children: {
                        '/ajax': '/tool/ajax',
                        '/cookie': '/tool/cookie',
                        '/storage': '/tool/storage',
                        '/tool': '/tool/tool',
                        '/prototype': '/tool/prototype'
                    }
                },
                '/jui': {
                    name: '/jui/index',
                    children: {
                        '/base': '/jui/base',
                        '/icon': '/jui/icon',
                        '/grid': '/jui/grid',
                        '/btn': '/jui/btn',
                        '/input': '/jui/input',
                        '/radio': '/jui/radio',
                        '/check': '/jui/check',
                        '/select': '/jui/select',
                        '/switch': '/jui/switch',
                        '/date': '/jui/date',
                        '/color': '/jui/color',
                        '/code': '/jui/code',
                        '/slider': '/jui/slider',
                        '/progress': '/jui/progress',
                        '/msg': '/jui/msg',
                        '/confirm': '/jui/confirm',
                        '/dialog': '/jui/dialog',
                        '/drag': '/jui/drag',
                        '/page': '/jui/page',
                        '/tab': '/jui/tab',
                    }
                },
                '/test': 'test',
                '/code': 'code'
            }
        });
    });

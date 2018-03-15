Jet.lang.use(['cn','en']);
Jet.global=new Jet({
  onload:function(){
    this.needUseRouted=true;
    this.routeFunc();
  },
  onrouted:function(){
    //console.log('onrouted');
    this.routeFunc();
    document.documentElement.scrollTop=0;
    $J.body().scrollTop=0;
    $J.attr('jump-to').each(function(item){
        $J.attr('jump-des="'+item.attr('jump-to')+'"').exist(function(ele){
            item.clk(function(){
                $J.scrollTo(ele.offsetTop-60);
            });
        });
    });
  },
  onmounted:function(){
    //console.log('onmounted');
    var _this=this;
    var max;
    window._checkScrol=function(){
      max=$J.id('menuScroll').hei()+40-$J.id('menu').hei();
      if(max<=0){
        menuScroll=0;
        $J.id('menuScroll').css('top','0px')
      }else if(menuScroll<=-max){
        menuScroll=-max;
        $J.id('menuScroll').css('top',menuScroll+'px')
      }
    };
    var isLock=false;
    $J.cls('menu-main-item').on('click',function(e){
      if(!isLock){
        isLock=true;
        this.next().slideToggle(function(){
          _checkScrol();
          isLock=false;
        },200,"ease");
        this.child(1).toggleClass('active');
      }
    },true);
    var menuScroll=0;
    $J.id('menu').onmousewheel=function(e){
      //stopPro(e);
      if(!_this.bodyFix)_this.bodyFix=true;
      if(max>0){
        var _top=menuScroll+$J.sign(e.wheelDelta)*80;
        if(e.wheelDelta<0){
          if(_top<-max){_top=-max;}
        }else{
          if(_top>0){_top=0;}
        }
        menuScroll=_top;
        $J.id('menuScroll').css('top',_top+'px')
      }
    };
    $J.id('routerOut').onmousewheel=function(){
      if(_this.bodyFix)_this.bodyFix=false;
    }
    window.onresize=_checkScrol;
  },
  data:{
    dshow:false,
    needUseRouted:false,
    last:'',
    lastUrl:'',
    next:'安装使用',
    nextUrl:'/intro/install',
    showMenu:false,
    queryList:[],
    showResult:false,
    queryString:'',
    bodyFix:false,
    number:0
  },
  ondatachange:{
    queryString:function(v){
      var arr=Query.query(v);
      this.queryList.$replace(arr);
      this.number=arr.length;
    }
  },
  func:{
    stopPro:function(event){
      var e=arguments.callee.caller.arguments[0]||event;
      if (e && e.stopPropagation) {
          e.stopPropagation();
      } else if (window.event) {
          window.event.cancelBubble = true;
      }
    },
    routeFunc:function(){
      if(this.needUseRouted){
        $J.attr('jrouter-active').exist(function(item){
          if(item.hasClass('menu-s-item')){
            var _i=item.parent().prev();
            _i.next().slideDown(function(){
              window._checkScrol();
            },200,"ease");
            _i.child(1).addClass('active');
          }
        });
        this.needUseRouted=false
      }
    },
    nextApi:function(){
      var _this=this;
      this.needUseRouted=true;
      Jet.router.route(this.nextUrl);
    },lastApi:function(){
      var _this=this;
      this.needUseRouted=true;
      Jet.router.route(this.lastUrl);
    },setLink:function(opt){
      this.last=opt.last||'';
      this.lastUrl=opt.lastUrl;
      this.next=opt.next||'';
      this.nextUrl=opt.nextUrl;
    },a1:function(){
      alert(1)
    },a2:function(){
      alert(2)
    },toQueryResult:function(opt){
      var _this=this;
      this.showResult=false;
      this.needUseRouted=true;
      Jet.router.route(opt.data.url,null,function(){
        setTimeout(function(){
          var top=0;
          if(opt.data.des!=''){
            top=$J.attr('jump-des='+opt.data.des).offsetTop-55;
          }
          document.documentElement.scrollTop=top;
          $J.body().scrollTop=top;
          _this.needUseRouted=false;
        },0);
      });
    },shapeQueryName:function(s){
      var si=s.toLowerCase().indexOf(this.queryString.toLowerCase());
      var ei=si+this.queryString.length;
      return s.substring(0,si)+'<span class="__red">'+s.substring(si,ei)+'</span>'+s.substring(ei);
    }
  }
})
Jet.router.use({
  history:false,
  base:"/jet",
  index:'/',
  trueBase:true,
  router:{
    '/':'/intro/index',
    '/intro':{
      name:'/intro/index',
      children:{
        '/install':'/intro/install',
        '/contents':'/intro/contents',
        '/html':'/intro/html',
        '/grammer':'/intro/grammer',
        '/about':'/intro/about',
      }
    },
    '/bind':{
      name:'/bind/index',
      children:{
        '/j':'/bind/j',
        '/type':'/bind/type',
        '/array':'/bind/array',
        '/grammer':'/bind/grammer',
      }
    },
    '/attr':{
      name:'/attr/index',
      children:{
        '/if':'/attr/if',
        '/show':'/attr/show',
        '/attr':'/attr/attr',
        '/style':'/attr/style',
        '/run':'/attr/run',
        '/on':'/attr/on',
        '/load':'/attr/load',
        '/root':'/attr/root',
        '/dom':'/attr/dom',
        '/html':'/attr/html',
      }
    },
    '/valid':{
      name:'/valid/index',
      children:{
        '/form':'/valid/form',
        '/method':'/valid/method',
        '/valid':'/valid/valid',
        '/custom':'/valid/custom',
      }
    },
    '/lang':{
      name:'/language/index',
      children:{
        '/use':'/language/use',
        '/static':'/language/static',
        '/dynamic':'/language/dynamic',
        '/list':'/language/list',
        '/type':'/language/type',
        '/init':'/language/init',
      }
    },
    '/router':{
      name:'/router/index',
      children:{
        '/use':'/router/use',
        '/ele':'/router/ele',
        '/on':'/router/on',
        '/route':'/router/route',
        '/prop':'/router/prop',
      }
    },
    '/tool':{
      name:'/tool/index',
      children:{
        '/tool':'/tool/tool',
        '/prototype':'/tool/prototype'
      }
    },
    '/jui':{
      name:'/jui/index',
      children:{
        '/base':'/jui/base',
        '/icon':'/jui/icon',
        '/grid':'/jui/grid',
        '/btn':'/jui/btn',
        '/input':'/jui/input',
        '/radio':'/jui/radio',
        '/check':'/jui/check',
        '/select':'/jui/select',
        '/switch':'/jui/switch',
        '/date':'/jui/date',
        '/color':'/jui/color',
        '/slider':'/jui/slider',
        '/msg':'/jui/msg',
        '/confirm':'/jui/confirm',
        '/dialog':'/jui/dialog',
      }
    },
    '/test':'test'
  }
});
      
window.addEventListener('load',function(){
    var arrow_r = document.querySelector('.arrow-r');
    var arrow_l = document.querySelector('.arrow-l');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = "block"; 
        arrow_r.style.display = "block"; 
        clearInterval(timer);
        timer = null;/*清除定时器变量 */
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none'; 
        arrow_r.style.display = 'none'; 
        timer = setInterval(function(){
            arrow_l.click();/* 手动调用点击事件*/
        },2000);
    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for(var i = 0; i < ul.children.length; i++){
        var li = document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            // 干掉所有人，留下我自己
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('index');

        num = circle = index;
        
        animate(ul,-index * focusWidth);
    })
    }   
    
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    arrow_r.addEventListener('click',function(){
        if(num == ul.children.length - 1){
            ul.style.left = 0;
            num = 0;
        }
        num ++;
        animate(ul, - num * focusWidth);
        circle++;
        if(circle == ol.children.length){
            circle = 0;
        }
        circleChange();/*调用函数*/
    })
    arrow_l.addEventListener('click',function(){
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';

        }
        num--;
        animate(ul, - num * focusWidth);
        circle--;
        circle = circle < 0 ? ol.children.length - 1 :circle;/*三行表达式，两种写法 */
        // if(circle <0){
        //     circle = ol.children.length - 1;
        // }
            circleChange();
        })
        function circleChange(){
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = "";
            }
            ol.children[circle].className = "current";
        }
        var timer = etInterval(function(){
            arrow_l.click();/* 手动调用点击事件*/
        },2000);
    
})

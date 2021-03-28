        var eye = document.getElementById('open-eye');
        var pwd = document.getElementById('ver_code');
        var flag = 0;               //定义标识变量，记录眼睛状态
        eye.onclick = function () {
            if (flag == 0) {
                pwd.type = 'text';
                eye.src = './images/open.png';
                flag = 1;
            }
            else {
                pwd.type = 'password';
                eye.src = './images/close.png';
                flag = 0;
            }

        }

        // var send = document.getElementById('btn_Code');
        // console.log(send);
        // send.onclick = function sendMassage(){
        //     var second = 60;
        //     var timer = null;
        //     timer = setInterval(function(){
        //         second -= 1;
        //         if(second >0){
        //             send.attr('disabled',true);
        //             send.text(second + "秒后获取验证码");
        //         }else{
        //             clearInterval(timer);
        //             send.attr('disabled',false);
        //             send.text("发送短信验证码");
        //         }
        //     },1000);
        // }

        function fn(){
            var oBtn = document.getElementsByTagName('button')[0];
            var time = 120;
            var timer = null;
            oBtn.innerHTML = time + '秒后重新发送';
            oBtn.setAttribute('disabled', 'disabled');  // 禁用按钮
            oBtn.setAttribute('class', 'disabled');   // 添加class 按钮样式变灰
            timer = setInterval(function(){
              // 定时器到底了
              if(time == 1){
                clearInterval(timer);       
                oBtn.innerHTML = '获取验证码';  
                oBtn.removeAttribute('disabled'); 
                oBtn.removeAttribute('class');  
              }else{
                time--;
                oBtn.innerHTML = time + '秒后重新发送';
              }
            }, 1000)
          }
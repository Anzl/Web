// 轮播特效
var count = 0;
var mytime;
function showimg(id) {
    count++;
    if (id > 0) {
        clearInterval(mytime);
        count = id;
    }
    if (count > 5) {
        count = 1;
    }
    document.getElementById("pic1").src = "images/轮播图0" + count + ".webp";
    for (var i = 1; i <= 5; i++) {
        if (i == count) {
            document.getElementById("num" + i).style.backgroundColor = "#f63";
        }
        else {
            document.getElementById("num" + i).style.backgroundColor = "#ccc";
        }

    }
}
function showout() {
    mytime = setInterval("showimg(0)", 1000);
}
mytime = setInterval("showimg(0)", 2000);

// 侧边栏显示与隐藏
var mm = document.getElementById("cotegrolist").getElementsByClassName("hidden_cote");
function show(id) {
    for (var i = 0; i < mm.length; i++) {
        if (i == id)
            mm[i].style.display = "block";
    }
}
function out() {
    for (var i = 0; i < mm.length; i++) {
        mm[i].style.display = "none";
    }
}

// =============================购物车显示与隐藏====================================
var car = document.getElementsByClassName("car_hidden");
function show_shop() {
            car.style.display = "block";
}
function out_shop() {
        car.style.display = "none";
}
// ===========================================================================

//小米闪购倒计时
function countTime() {
    //获取当前时间  
    var date = new Date();
    var now = date.getTime();
    //设置截止时间  
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var endDate = new Date(year, month, day + 1, 0, 0, 0);
    var end = endDate.getTime();
    //时间差  
    var leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间  
    var h, m, s;
    if (leftTime >= 0) {
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
        if (h <= 9) h = '0' + h;
        if (m <= 9) m = '0' + m;
        if (s <= 9) s = '0' + s;
    }
    //将倒计时赋值到div中  
    document.getElementsByClassName("flashPurchase_h")[0].innerHTML = h
    document.getElementsByClassName("flashPurchase_m")[0].innerHTML = m
    document.getElementsByClassName("flashPurchase_s")[0].innerHTML = s
    //递归每秒调用countTime方法，显示动态时间效果  
    setTimeout(countTime, 1000);
}
countTime();
// ==========================================图片切换
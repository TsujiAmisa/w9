function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function sunday(num){
    if(num==0){
        return "今日は日曜日！";
    }else{
        return "日曜日まであと" + (7-num) + "日"
    }
}
function showClock2() {
    var nowTime = new Date();
    var nowYear = set2fig( nowTime.getFullYear() );
    var nowMonth = set2fig( nowTime.getMonth()+1 );
    var nowDate = set2fig( nowTime.getDate() );
    var nowHour = set2fig( nowTime.getHours() );
    var nowMin  = set2fig( nowTime.getMinutes() );
    var nowSec  = set2fig( nowTime.getSeconds() );
    var week = nowTime.getDay();
    var weekchars = new Array( "日", "月", "火", "水", "木", "金", "土" );
    var todayweek = weekchars[ week ];
    var msg = "今日は" + nowYear + "年" + nowMonth + "月"+ nowDate + "日(" + todayweek + ")、現在時刻は" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
    document.getElementById("RealtimeClockArea2").innerHTML = msg;
    var msg2 = sunday(week)
    document.getElementById("CountSunday").innerHTML = msg2;
}
setInterval('showClock2()',1000);
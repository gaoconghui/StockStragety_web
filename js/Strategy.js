/**
 * Created by apple on 15/3/17.
 */

var stragety_select=new Array(
    {time:'2015-111',time1:"9:11",name:"好使集团",id:11111,getprice:1.2,nowprice:1.2,stragey:["策略一号","策略二号","策略三好"]},
    {time:"2015-1",time1:"9:11",name:"好使集团",id:000123,getprice:1.3,nowprice:3.3,stragey:["策略一号","策略二号","策略三好"]},
    {time:"2015-2",time1:"9:11",name:"好使集团",id:000123,getprice:1.4,nowprice:1.3,stragey:["策略一号","策略二号","策略三好"]},
    {time:"2015-2",time1:"9:11",name:"好使集团",id:000123,getprice:1.5,nowprice:2.2,stragey:["策略一号","策略二号","策略三好"]},
    {time:"2015-2",time1:"9:11",name:"好使集团",id:000123,getprice:1.6,nowprice:3.4,stragey:["策略一号","策略二号","策略三好"]},
    {time:"2015-2",time1:"9:11",name:"好使集团",id:000123,getprice:1.7,nowprice:2.5,stragey:["策略一号","策略二号","策略三好"]},
    {time:"2015-3",time1:"9:11",name:"好使集团",id:000123,getprice:1.8,nowprice:0.1,stragey:["策略一号","策略二号","策略三好"]},
    {time:"2015-3",time1:"9:11",name:"好使集团",id:000123,getprice:1.9,nowprice:2.7,stragey:["策略一号","策略二号","策略三好"]},
    {time:"2015-3",time1:"9:11",name:"好使集团",id:000123,getprice:1.1,nowprice:2.9,stragey:["策略一号","策略二号","策略三好"]}
);


$(document).ready(function () {


    var h1=getpos($("#jj")[0]).t;
    var h2=getpos($("#bb")[0]).t;
    var h3=getpos($("#ls")[0]).t;
    window.onscroll = function (event) {
        var top = $(document).scrollTop();
        var cc = $("#navmove");
        var s = $(".container_body_left ul li");
        s.removeClass("active");

        if (top > h1) {
            cc.css({
                "position": "fixed",
                "top": "0px"
                //"background-color":"#cccccc"
            });
        } else {
            cc.css({
                "position": "absolute",
                "top": h1
            });
        }

        console.log(h1);
        if (top > h3+50) {
            s.eq(2).addClass("active");
        } else if (top > h2+50) {
            s.eq(1).addClass("active");
        } else if (top > h1+100) {
            s.eq(0).addClass("active");

        }
    }

    setSelectStrategy();
})

function setSelectStrategy(){
    var time=stragety_select[0].time;
    var p=((stragety_select[0].nowprice-stragety_select[0].getprice)/stragety_select[0].getprice*100).toFixed(1);
    var str="<div class='selectstockbox'><label>"+time+"</label><table class='table table-hover'><tr><th>股票名称</th><th>选股时间/价格</th><th>现价/收益</th><th>所属策略</th></tr>";
    var i=0;
    str+="<tr><td>"+stragety_select[i].name+stragety_select[i].id+"</td><td>"+stragety_select[i].time1+"/"+stragety_select[i].getprice+"</td><td>"+stragety_select[i].nowprice+"/";
    if(p>=0){
        str=str+ p+"%<span class='glyphicon glyphicon-arrow-up' aria-hidden='true'></span>";
    }else{
        str=str+p+"%<span class='glyphicon glyphicon-arrow-down' aria-hidden='true'></span>";
    }
    str+="</td><td>"+stragetyToString(stragety_select[0].stragey)+"</td></tr>";

    for(i=1;i<stragety_select.length;i++){
        if(stragety_select[i].time==time){
        }else{
            str+="</table></div>";
            time=stragety_select[i].time;
            str+="<div class='selectstockbox'><label>"+time+"</label><table class='table table-hover'><tr><th>股票名称</th><th>选股时间/价格</th><th>现价/收益</th><th>所属策略</th></tr>";
        }
        p=((stragety_select[i].nowprice-stragety_select[i].getprice)/stragety_select[i].getprice*100).toFixed(1);
        str+="<tr><td>"+stragety_select[i].name+stragety_select[i].id+"</td><td>"+stragety_select[i].time1+"/"+stragety_select[i].getprice+"</td><td>"+stragety_select[i].nowprice+"/";
        if(p>=0){
            str=str+ p+"%<span class='glyphicon glyphicon-arrow-up' aria-hidden='true'></span>";
        }else{
            str=str+p+"%<span class='glyphicon glyphicon-arrow-down' aria-hidden='true'></span>";
        }
        str+="</td><td>"+stragetyToString(stragety_select[0].stragey)+"</td></tr>";

    }
    str+="</table></div>";
    $("#lsxg").after(str);


    function stragetyToString(array){
        var str="";
        for(var i in array){
            str+=array[i];
            if(i !=array.length-1){
                str=str+",";
            }
        }
        return str;
    }
//<div class="selectstockbox">
//    <label>2015.1.1</label>
//    <table class="table table-hover">
//    <tr>
//    <th>股票名称</th>
//    <th>选股时间</th>
//    <th>价格/收益</th>
//    <th>所属策略</th>
//    </tr>
//    <tr>
//    <th>锆石集团</th>
//    <th>16：22</th>
//    <th>3.34</th>
//    <th>锆石集团</th>
//    </tr>
//    <tr>
//    <th>锆石集团</th>
//    <th>16：22</th>
//    <th>3.34</th>
//    <th>锆石集团</th>
//    </tr>
//    </table>
//    </div>
}
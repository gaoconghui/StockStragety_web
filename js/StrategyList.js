/**
 * Created by apple on 15/3/18.
 */
var Stragetylist=new Array(
    {name:"长江一号",sumprofit:0.1,monthprofit:0.2,weekprofit:0.4,dayprofit:0.1,time:"2015年2月32日",person:"tom",victory:0.98},
    {name:"长江二号",sumprofit:0.3,monthprofit:0.5,weekprofit:0.4,dayprofit:0.1,time:"2015年2月32日",person:"tom",victory:0.98},
    {name:"长江三号",sumprofit:0.1,monthprofit:0.5,weekprofit:0.4,dayprofit:0.1,time:"2015年2月32日",person:"tom",victory:0.98},
    {name:"长江四号",sumprofit:0.4,monthprofit:0.5,weekprofit:0.4,dayprofit:0.1,time:"2015年2月32日",person:"tom",victory:0.98},
    {name:"长江五号",sumprofit:1.7,monthprofit:0.5,weekprofit:0.4,dayprofit:0.1,time:"2015年2月32日",person:"tom",victory:0.98}
);
$(document).ready(function () {
    creatpart(Stragetylist);

    console.log($("#st").val());
})
function creatpart(array){
    var str="";
    for(var i in array){
        str=str+"<div class='col-sm-6 col-md-4'>";
        str+="<div class='thumbnail'>";
        str+="<img src='pic/bg.jpg' alt='...'>";
        str+="<div class='caption'>";
        str=str+"<h3>"+Stragetylist[i].name+"</h3>";
        str+="<p><table class='table'>";
        str=str+"<tr><td>总收益率</td><td>"+Stragetylist[i].sumprofit*100+"%</td><td>月收益率</td><td>"+Stragetylist[i].monthprofit*100+"%</td></tr>";
        str=str+"<tr><td>周收益率</td><td>"+Stragetylist[i].weekprofit*100+"%</td><td>日收益率</td><td>"+Stragetylist[i].dayprofit*100+"%</td></tr>";
        str=str+"<tr><td colspan='2'>发起时间</td><td colspan='2'>"+Stragetylist[i].time+"</td>";
        str=str+"<tr><td>发起人</td><td>"+Stragetylist[i].person+"</td><td>策略胜率</td><td>"+Stragetylist[i].victory*100+"%</td></tr>";
        str+="</table></p><p>";
        str+="<a href='#' class='btn btn-primary' role='button'>详细信息</a> <a href='#' class='btn btn-default' role='button'>加入收藏</a></p></div></div></div>";
    }
    $("#cllist").append(str);
}

//<div class="col-sm-6 col-md-4">
//<div class="thumbnail">
//<img src="pic/bg.jpg" alt="...">
//<div class="caption">
//<h3>长江一号</h3>
//<p>
//<table class="table">
//<tr>
//<td>总收益率</td>
//<td>50%</td>
//<td>月收益率</td>
//<td>30%</td>
//</tr>
//<tr>
//<td>周收益率</td>
//<td>10%</td>
//<td>日收益率</td>
//<td>100%</td>
//</tr>
//<tr>
//<td colspan="2">发起时间</td>
//<td colspan="2">2015年6月33日</td>
//</tr>
//<tr>
//<td >发起人</td>
//<td >高聪慧</td>
//<td >策略胜率</td>
//<td >98%</td>
//</tr>
//</table>
//</p>
//<p><a href="#" class="btn btn-primary" role="button">详细信息</a> <a href="#" class="btn btn-default" role="button">加入收藏</a></p>
//</div>
//</div>
//</div>
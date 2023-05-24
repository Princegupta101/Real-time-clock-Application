function updateClock(){
    var clock=new Date();
    var day=clock.getDate()
    var month=clock.getMonth()
    var year =clock.getFullYear()
    var hour=clock.getHours()
    var minutes=clock.getMinutes()
    var second= clock.getSeconds()
  var  pe= "AM";
  Number.prototype.pad = function(digits){
    for(var n=this.toString(); n.length<digits; n=0+n);
    return n;
  }
  if(hour==0){
    hour=12;
}
if(hour>12){
    hour=hour-12;
    pe="PM";
}

  var months =["January" ,"February","March","April",
  "May","June","July","Augest","September","October","Noverber","December"]
  var ids=["monthdate","month","year","hour","minute","second"]
  var values =[ day, months[month],year,hour.pad(2) ,minutes.pad(2),second.pad(2),pe]
  for(var i=0;i<ids.length;i++){
document.getElementById(ids[i]).firstChild.nodeValue=values[i];
  }

}
function  mainClock(){
    updateClock();
    window.setInterval("updateClock()",1)
}
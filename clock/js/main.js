function clock(){
   
  let date= new Date();  
  
  let  h=date.getHours()
  let  m=date.getMinutes()
  let  s=date.getSeconds()
  let  mi=date.getMilliseconds()
  let  zone="AM"
    
  if(h==0){h=12}
  if(h>12){h=h-12;zone="PM"}
  
  let y=date.getFullYear()
  let d= date.getDate()
  let mo=date.getMonth()
  
  let w=date.getDay()
  let mon=date.getMonth()
 
        if(w==0){w="Sunday"}
   else if(w==1){w="Monday"}
   else if(w==2){w="Tuesday"}
   else if(w==3){w="Wednesday"}
   else if(w==4){w="Thursday"}
   else if(w==5){w="Friday"}
   else if(w==6){w="Saturday"}
   
        if(mon==0){mon="January"}
   else if(mon==1){mon="Feburary"}
   else if(mon==2){mon="March"}
   else if(mon==3){mon="April"}
   else if(mon==4){mon="May"}
   else if(mon==5){mon="June"}
   else if(mon==6){mon="July"}
   else if(mon==7){mon="Augest"}
   else if(mon==8){mon="September"}
   else if(mon==9){mon="October"}
   else if(mon==10){mon="November"}
   else if(mon==11){mon="December"}
  
 const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone 
   
 document.getElementById("time").innerText = `${("0"+h).slice(-2)} : ${("0"+m).slice(-2)} : ${("0"+s).slice(-2)} : ${zone} `     
   
 document.getElementById("date").innerText =  `${d} / ${mo} / ${y}`
   
 document.getElementById("dates").innerText =  `Today is ${w}, ${mon} ${d}, ${y}  `
   
 document.getElementById("zone").innerText =  `Timezone: ${timezone}`
  
 setTimeout(clock, 100);  

}

clock();


































































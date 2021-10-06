
 var arr = ["junaid","Jamal","aman","jibran","saad","khalid"];

 for(var i = 0; i < arr.length; i++){
   var str = arr[i].charAt(0);
   if(str.toLowerCase() == "j"){
     console.log("Good By "+ arr[i])
   }else{
     
     console.log("Hello "+ arr[i])
   }
 }
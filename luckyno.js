let button=document.querySelector("button");
let date=document.querySelector("#date");
let number=document.querySelector("#number");
let outputDiv=document.querySelector(".output-div");




const clickHandler=()=>{
let dob =date.value
let no=number.value
let ans=checkValHasEnterd(dob,no);
if(ans===true){
    let sum=sumOfDate(dob)
    checkLuckyNo(sum,no);
    // date.value="";
    // number.value="";
}else{
    outputDiv.innerHTML="Please Enter The  Input values"
}

}


// return sum of dob
let sumOfDate=(dob)=>{
 dob=dob.replaceAll("-","");
 let sum=0;
 for(let i=0;i<dob.length;i++){
     sum=sum+Number(dob.charAt(i));

 }

 return sum;

}

  const checkLuckyNo=(sum,no)=>{
      if(sum%no===0){
          outputDiv.innerHTML=`Your No ${no}  is lucky`
      }else{
          outputDiv.innerHTML=`Your No  ${no} is not lucky`
      }
       
 }
 let checkValHasEnterd=(dob,no)=>{
     if(dob ==="" && no===""){
         return false;
     }else{
         return true;
     }

 }

button.addEventListener("click",clickHandler)
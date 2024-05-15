const qrinput=document.querySelector("#qr-input")
const qrbutton= document.querySelector("#qr-button")
const qrimg= document.querySelector("#qr-img")
console.log(qrinput,qrbutton,qrimg)

 qrbutton.addEventListener("click",function(){
    const inputValue =qrinput.value;
    console.log(inputValue)
    if(!inputValue){
        alert('please enter a vaild url')
        return
    }else{
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt=`QR code for ${inputValue}`;
    }
 })


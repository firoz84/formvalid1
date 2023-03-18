const formvad= document.querySelector('.formdbt');
const msg= document.querySelector('.msg');
const msglong= document.querySelector('.msg-long');




formvad.onsubmit= (e)=>{
    e.preventDefault();

    let name= document.querySelector('input[name="name"]');
    let age= document.querySelector('input[name="age"]');
    let gander= document.querySelectorAll('input[name="gander"]');

    //get the gander name;
    let gander_name= '';
        gander.forEach(item=>{

            if(item.checked){
                gander_name= item.value;
            }

        console.log(gander_name);
        });


        //formvalidation on form validation


        if(name.value=='' || age.value=='' || gander_name==''){ 

            msg.innerHTML= setAlert('Please enter a name and age and  gander name')
        }else if(numberCheck(age.value)==false){
            msg.innerHTML= setAlert('age is number','warning');
        }else{

            //get the marrage are 

            let marrage_age= gander_name== 'Male' ? 21 :18;
            
            if(gander_name=='Male'){
                    //nested
                    if(age.value >= marrage_age){
                        msglong.innerHTML=`Hi ${name.value} you have marrage age is okay`;
                    }else{
                        msglong.innerHTML=`Hi ${name.value} you have marrage age is not  okay you have to wait for ${marrage_age- age.value} years`;
                    }
            }else{
                    
                    if(age.value >= marrage_age){
                        msglong.innerHTML=`Hi ${name.value} Apu  you have marrage age is okay`;
                    }else{
                        msglong.innerHTML=`Hi ${name.value} Apu you have marrage age is not  okay you have to wait for ${marrage_age- age.value} years`;
                    }
            }

        }


   
}
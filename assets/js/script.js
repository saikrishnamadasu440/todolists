// this in responsible for making  making cross line when the idem is  checked for deleting
function checkedOrNot(){ 
    let cb = document.querySelectorAll('.delechack'); // getting all the check-box class 
    let descdisp = document.querySelectorAll('.dispdsc'); // gettong all the class where descripting of TODO is defined
    let ddsp = document.querySelectorAll('.dueDate'); // getting all the class for dueDate
    for(let i=0;i<descdisp.length;i++){
        //console.log(descdisp[i]);
        //console.log(ddsp[i]);
        //console.log([i]);
        let dueDate = ddsp[i].innerHTML;
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
            if(cb[i].checked == true){ 
              //  console.log(cb[i].getAttribute('uid'));
              //getting the element by uid same and crossing it
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through'
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
        }
       
    } 
   
}



// this addEventListener  come into action when we clicked on delete button after we checked which list of items need to be deleted
document.getElementById('delete-btn').addEventListener('click',function(){
    let checedvaluew = document.querySelectorAll('.delechack:checked') // getting only checked vale
    let arrcheck = []  // creating the lsit of checked array
    for(let i of checedvaluew){
     //   console.log(i);
        let gg=''
       gg= i.getAttribute('uid')    // getting uniue id from and pushing into array
       // console.log(gg)
        arrcheck.push(gg);
    }
    if(arrcheck.length===0){ // checking if array is null the 
        console.log('no item is checked')
        
        return;
    }
    //here we are making delete request with the help of Ajax request 
    $.ajax({
        type: 'post',
            url: '/delete_todo/?id='+arrcheck,
            success: function(){ // on ajax sunnces i.e when data is delete
                console.log("sent delete request successfully") //  to show the data is delete
                window.location = '/';
            },
            error: function(err){ 
                console.log(err);
            }
    });
    

});
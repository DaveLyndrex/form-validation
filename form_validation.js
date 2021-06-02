
// validates firstname and last name.

function text_validate(inputText) {
    var letters = /^[A-Za-z- -.-II-III]+$/;
    if (inputText.value && !inputText.value.match(letters)) {
        alert('Please enter alphabet characters.');
        inputText.value = inputText.value.replace(/[^a-zA-Z- -.-II-III]+/g, '');
        inputText.focus();
        return false;
    }else{
        return true;
}
}


 


//validate date of birth
$('btn').click(function(){
    var mydate= $('#birthdate').val();
    var bodslice= (Number(mydate.slice(0,4)));
    var myAge= 2021 -(Number(bodslice));

    if(myAge < 18){
        alert("18 years old and above.");
        return false;
    }else{
        return true
    }
})


// Validate phone

$('#btn').click(function(){
    var pnum=$('#phone').val();
    var pchar= /^[0-9-+]+$/;

    if (pnum == ""){
        alert("Please input a valid number");
    }
    var slice= pnum.slice(0,3)
    if(pnum){
        if (/[A-z/]/.test(pnum)){
            alert("Please enter a valid number");
            return false;
        }
        if (slice!='+63'){
            alert("your number is not on PH Origin.");
            return false;
        }
        if(pnum.match(pchar)){
            return true;
        }else{
            alert("Please input a valid number.");
            return false;
        }
    }
})





    // email validate
$('#btn').click(function () {
    var apChar = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    var email = $("#email").val();
    if (email.match(apChar) == null) {
        alert("Please enter a valid email");
        return false
       

    }

})
 //validates password. 



    $('#btn').click(function(){
        var pass1= $('#pass1').val();
        var pass2=$('#pass2').val();
        var validPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(pass2!=pass1){
            alert("Your password did not match!");
            
        }
        if (pass1.match(validPass)==null){
            alert("Your password must contain atleast one special character ");
            return false;
        }else{
            return true;
        }
    
    });




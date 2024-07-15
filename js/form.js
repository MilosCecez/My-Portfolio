jQuery(document).ready(function ($){

$("#submit").click(function (e) {
    e.preventDefault();
              
    var name= $("#name").val();
    var lastName= $("#surname").val();
    var email= $("#email").val();
    var message= $("#message").val();

    if(name== '' ||  lastName == '' ||  email == '' ||  message == '' ) {

         swal ({
                 title: "Empty fields!",
                 text: "You must fill in the given fields",
                 icon: "warning",
                 button: "Ok",
});
}

   else {
         swal ({
                 title: "Sent successfully!",
                 icon: "success",
                 button: "Ok",
}); 
}

   
   });
});
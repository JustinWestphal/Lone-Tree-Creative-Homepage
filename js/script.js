/*=======================*/
/*        CONTACT        */
/*=======================*/

$(document).ready(function() {                  	

	//FORM (CONTACT & COMMENTS) SCRIPTS

		//set variables
		var nameVal = $("#form_name").val();
		var emailVal = $("#form_email").val();
		var websiteVal = $("#form_website").val();
		var messageVal = $("#form_message").val();
				

/*
		//if name field is empty, show label in it
		if(nameVal == '') {
		$("#form_name").parent().find('label').css('display', 'block');	
		}
		
		//if email field is empty, show label in it
		if(emailVal == '') {
		$("#form_email").parent().find('label').css('display', 'block');	
		}
		
		//if website field is empty, show label in it
		if(websiteVal == '') {
		$("#form_website").parent().find('label').css('display', 'block');	
		}
					
		
		//if message field is empty, show label in it
		if(messageVal == '') {
		$("#form_message").parent().find('label').css('display', 'block');	
		}

				
		//hide labels on focus		
		$('form input, form textarea').focus(function(){
			$(this).parent().find('label').fadeOut('fast');		
		});		
		
		//show labels when field is not focused - only if there are no text
		$('form input, form textarea').blur(function(){
			var currentInput = 	$(this);	
			if (currentInput.val() == ""){
   			 $(this).parent().find('label').fadeIn('fast');
 			 }
		});		
*/
	
	  $('.success').hide();    	
	
		
	// CONTACT FORM HANDLING SCRIPT - WHEN USER CLICKS "SUBMIT"
	$("#contact_form #form_submit").click(function(){		
				   				 		
		// hide all error messages
		$(".error").hide();
		
		// remove "error" class from text fields
		$("form input, form textarea").focus(function() {
 			$(this).removeClass('error_input');
			});
		
		// remove error messages when user starts typing		
		$("form input, form textarea").keypress(function() {
 			$(this).parent().find('span').fadeOut();	
		});
		
				
		// set variables
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		
		// validate "name" field
		var nameVal = $("#form_name").val();
		if(nameVal == '') {
			$("#form_name")
			.after('<span class="error">Please enter your name</span>')
			.addClass('error_input')				  
			hasError = true;
		}
		
	
	
		// validate "e-mail" field - andd error message and animate border to red color on error
		var emailVal = $("#form_email").val();
		if(emailVal == '') {
			$("#form_email")
			.after('<span class="error">Please enter your e-mail</span>')
			.addClass('error_input')
			hasError = true; 
				
		} else if(!emailReg.test(emailVal)) {	
			$("#form_email")
			.after('<span class="error">Please provide a valid e-mail</span>')
			.addClass('error_input')
			hasError = true;
		}
		
				
		// validate "message" field
		var messageVal = $("#form_message").val();
		if(messageVal == '') {
			
			$("#form_message")
/*
			.animate({ 
  			  	width: "250px"
 			 }, 100 )
*/
			.after('<span class="error comment_error">Please enter your message</span>')
			.addClass('error_input')
			hasError = true;
		}
		
                // if the are errors - return false
                if(hasError == true) { return false; }
            
		// if no errors are found - submit the form with AJAX
		if(hasError == false) {
			
		var dataString = $('#contact_form').serialize();

			//hide the submit button and show the loader image	
			$("#form_submit").fadeOut('fast', function () {
			$('#contact_form').append('<span id="loader"></span>'); 
			});
			       
			
		// make an Ajax request
        $.ajax({
            type: "POST",
            url: "../php/contact-send.php",
            data: dataString,
            success: function(){ 
           
          // on success fade out the form and show the success message
          $('#loader').remove();
          $('#contact_form').children().fadeOut('fast');
          $('.contact_info').fadeOut('fast');
           $('.success').fadeIn();    	
            }
        }); // end ajax

		 return false;  
		} 	
		
	});		
	
}); //document.ready function ends here



        
           /*   ( "#datapicker" ).datepicker({
              showOn: "button",
                buttonImage: "./image.calendar.jpg",
                buttonImageOnly: true
            });
        */
		
		
				
		$(function() {
			$( "#datapicker" ).datepicker({
				showOn: 'focus', 
			//	buttonImageOnly: true, //
			//	buttonImage: './images/calendar.png' //
			});
			$("#open-navigation").click(function(){
			$('nav').addClass('navmobile');
			});
			$("#close-navigation").click(function(){
			$('nav').removeClass('navmobile');
			});
		  }); 
		  
		  
		  
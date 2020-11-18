$(document).ready(function(){
    $(".ButtonHover").hover(function(){
      $(".ButtonHover").css("background-color","blue");
      $(".ButtonHover").css("cursor", "pointer");

    },
        function(){
            $(".ButtonHover").css("background-color","white");
            
        } );    
});
//console.log("Your index.js file is loaded correctly!");


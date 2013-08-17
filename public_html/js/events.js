function addNavbarEvents() {
    $("#navigationBar li").each(function(key,value) {
        $(this).bind("click",function(event) {
           var classToSelect = $(this).attr("class");
           $("#navigationBar li").removeClass("active");
           $(this).addClass("active");
           $(".descriptionContainer:visible").slideUp("fast").delay(1000);
           $("."+classToSelect+":last").hide().delay(400).slideDown("slow");
           
        });
    }); 
}

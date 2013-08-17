/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
    
    $('#socialContent').share({
                    networks: ['facebook','googleplus',
                        'twitter','linkedin','tumblr','email','stumbleupon']
     });
    
    
    //add active class to the clicked nav item.
    $("ul.nav li").bind("click",function(event) {
        $("ul.nav li").removeClass("active");
        $(this).addClass("active"); 
    });
});
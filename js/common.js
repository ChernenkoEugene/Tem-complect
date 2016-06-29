$(document).ready(function() {


//---submenu---
$('.ul_level_1').hide();
	$('.catalog_part_level_1').on('click', function() {
		     $(this).children('ul').slideToggle(300);
	   });
	$('.ul_level_2').hide();
	$('.catalog_part').on('click', function() {
		     $(this).children('ul').slideToggle(300);
	   });

// header
if($( window ).width() < 640) {
     $('.mob_big').removeClass('col-xs-4').addClass('col-xs-8');
  }

  if($( window ).width() > 639) {
     $('.mob_big').removeClass('col-xs-8').addClass('col-xs-4');
  }

$( window ).resize(function() {
  if($( window ).width() < 640) {
     $('.mob_big').removeClass('col-xs-4').addClass('col-xs-8');
   }

  if($( window ).width() > 639) {
    $('.mob_big').removeClass('col-xs-8').addClass('col-xs-4');
  }
});

// left menu


$('.catalog_link .mobile_mn').click(function () {
          $('.mob_wrap').toggle(  
        function() {  
            $("#slide").hide("slide", { direction: "right" }, 1000);  
        },  
        function() {  
            $("#slide").show("slide", { direction: "right" }, 500);  
        }  
    );
    });

$('.mobile_close_menu').on('click', function () {
	 $('.mob_wrap').hide(300);
 	});

$( window ).resize(function() {
	if($( window ).width() > 639) {
 			$('.mob_wrap').show();
 			}
});

// table button
	$('.show_table_but').on('click', function () {
	 $('.table table.tg').show();
 	});
// menu button
	$('.mobile_menu_btn').on('click', function () {
	 $('.main_menu .mobile_nav').fadeToggle(200);
	 
	 });
	$('.mobile_menu_btn_opn').on('click', function () {
	 $('.main_menu .mobile_nav').fadeToggle(200);
	
	 });

// telephone button
$('.mobile_tel_icon').on('click', function () {
	 $('.mobile_tel_popup').fadeToggle(300);
	 });
$('.mobile_tel_popup .close_but').on('click', function () {
	 $('.mobile_tel_popup').fadeToggle(300);
	 });

// mail button
	$('.mobile_mail_icon').on('click', function () {
	 $('.mobile_mail_popup').fadeToggle(300);
	 });
	$('.mobile_mail_popup .close_but').on('click', function () {
	 $('.mobile_mail_popup').fadeToggle(300);
	 });




});
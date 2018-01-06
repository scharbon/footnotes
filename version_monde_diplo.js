$('.notes div').clone().appendTo($('.notebox'));
var notesauto=function(){
	var noteoff=$(this).offset();
	var notesoff=$('.notes').offset();
	var idnote=$(this).attr('href').replace(/^.*#/,'#');
	var iidnote=$('.notebox '+idnote+'');
	var ide=$(idnote).attr('id');
	var niveau=($(window).height())/1.5;
	var nivhaut=($(window).height())/10;
		$(window).scroll(function(){
		if(noteoff
		&&$(this).scrollTop()>noteoff.top-niveau
		&&$(this).scrollTop()<noteoff.top-nivhaut
		&&$(this).scrollTop()<notesoff.top-niveau){
			$(iidnote).addClass('visible')
		}
		else{
			$(iidnote).removeClass('visible')
		}
		if($('.notebox').children().hasClass('visible')){
			$('.notebox').addClass('plein')
		}
		else{
			$('.notebox.plein').removeClass('plein')
		}
	})
}

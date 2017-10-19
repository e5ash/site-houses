$(document).ready(function($) {

	$('.gallery__list, .pop-wrap__slider').slick({
		slidesToShow: 3,
	});

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('checkbox');
	

	$('.form__input-phone').mask("+7 (999) 999-99-99");
});
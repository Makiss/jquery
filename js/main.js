(function($) {
	'use strict';

	$('document').ready(function() {
		/*
		Нужно добавлять элемент списка с ссылкой внутри
		в список при нажатии на кнопку
		*/
		// 1. Нужно найти кнопку
		var button = $('button');

		var deleteListItem = function(evt) {
			evt.preventDefault();

			var clickTargetElement = evt.target;
			var listItem;

			if (clickTargetElement.classList.contains('list__link')) {
				listItem = clickTargetElement.parentNode;
				listItem.remove();
			}
		};

		var list = $('.list');
		list.on('click', deleteListItem);

		button.on('click', function(evt) {
			evt.preventDefault();

			// 2. При клике на кнопку:
			//  - нужно найти список
			var list = $(this).prev();
			//  - нужно создать элемент списка с ссылкой внутри
			var newListItem = $('<li></li>');
			var newLink = $('<a></a>');
			newLink.attr('href', '#');
			newLink.text('Link' + (list.children().length + 1));
			newListItem.css('border', '2px dotted red');

			newListItem.append(newLink);
			//  - нужно прикрепить элемент к списку
			newListItem.appendTo(list);
		});

		button = 'button';



		// var list = $('.list');
		// list.addClass('list--red');

		// var listLinks = $('.list--red .list__link');
		// listLinks.each(function(index) {
		// 	if (index === 2) {
		// 		$(this).text('asdgfkljagfj');
		// 	}
		// });

		// var newListItem = $('<li></li>');
		// newListItem.on('mouseover', function(evt) {
		// 	evt.preventDefault();
		// 	var listItem = $(this);

		// 	listItem
		// 		.css('borderStyle', 'dashed')
		// 		.text('Mouse over!');
		// });


		// newListItem.on('mouseout', function(evt) {
		// 	evt.preventDefault();
		// 	var listItem = $(this);

		// 	listItem
		// 		.css({
		// 			'borderStyle': 'dotted',
		// 			'color': 'green'
		// 		})
		// 		.text('Link' + (listLinks.length + 1));
		// });

		// var newLink = $('<a></a>');
		// newLink.attr('href', '#');
		// newLink.text('Link' + (listLinks.length + 1));
		// newListItem.css('border', '2px dotted red');

		// newListItem.append(newLink);
		// list.prepend(newListItem);
	});
})($)
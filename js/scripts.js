$(document).ready(function() {


	$(".service-type-box").index();

	for(var countServices = 0; countServices <= $(".service-photo").length - 1; ++countServices) {

		$(".service-name:eq("+ countServices +")").css({"top": ( ($(".service-photo:eq("+ countServices +")").height() - $(".service-name:eq("+ countServices +")").outerHeight() ) / 2 ) + "px"});
		// console..log($(".service-name:eq("+ countServices +")").css({"top"}) );
		console.log(countServices);
		console.log($(".service-photo:eq("+ countServices +")").height() +"   "+$(".service-name:eq("+ countServices +")").height());
	}	console.log($(".service-photo:eq("+ countServices +")").height() - $(".service-name:eq("+ countServices +")").height());

	console.log($(".service-name:eq(1)").index());


	var rowWidth = $(".row").width();
	var aboutarticleWidth = $(".service-type-box").outerWidth();
	// var articlesLenght = $(".service-type-box").length - 1;

	var countArticles;
	var countRowsArticles = $(".service-type-box").length / countArticles;

	var counterFor = 0;
	var countRows;

	// delRightBorder();

	function delRightBorder() {

		rowWidth = $(".row").width();
		aboutarticleWidth = $(".service-type-box").outerWidth();
		countArticles = Math.round(rowWidth / aboutarticleWidth);
		countRows = $(".service-type-box").length / countArticles;

		for(counterFor = 1; counterFor <= countRows; counterFor++) {

			$(".service-type-box:eq("+ ( counterFor * countArticles - 1 ) +")").css({
				"padding-right": 0
			});

			$(".service-type-box:eq("+ ( ( counterFor * countArticles - 1 ) - (countArticles - 1) ) +")").css({
				"padding-left": 0
			});

		}


		if((countRows ^ 0) !== countRows) {
			$(".service-type-box:eq("+ ( $(".service-type-box").length - 1 ) +")").css({
				"padding-right": 0,
				"padding-left": 0,
			});
		}

	}	



});
(function($){

	var css = window.document.styleSheets;

	function getCSS( css, a ){

		$.when($ .get( css ) )
		.done(function(response) {

			/*** CHECK IF CHILD THEME IS ACTIVATED ***/
			var isChild = response.match(/Template:(.*)/);
			if ( isChild !== null ){

				console.log("CHILD FOUND. PARENT: " + isChild[1] );
				var parent = isChild[1].trim();

				var parentPathname = a.pathname.split("themes");

				getCSS( a.protocol + "//" + a.hostname + "/" +  parentPathname[0] + "/themes/" + parent + "/style.css" );

				return;

			}

			var themeName = response.match(/Theme Name:(.*)/);

			if ( themeName !== null ){
				var themeVersion = response.match(/Version:(.*)/);

				themeVersion = themeVersion[1];
				themeName    = themeName[1];

				alert("Current WP Theme: " + themeName + " " + themeVersion );

			}

		});
	}

	[].slice.apply(css).forEach(function(c){
		var a = document.createElement("a");
			a.setAttribute("href",c.href);
		var styleCSS = a.pathname.split("/")[a.pathname.split("/").length-1];

		if ( styleCSS.match(/style.css/) ){
			/*** TEST IF THIS IS OUR MAIN THEME'S style.css ***/
			var themeStyleCSS = a.href.split("/wp-content/themes/")[1];
			if ( themeStyleCSS.split("/").length === 2 ){
				console.log( a.href );
				getCSS( a.href, a );
			};
		}

	});

})(jQuery);

/*jQuery functions fit here*/

jQuery (document).ready(function() {

	
	jQuery(".breadcrumb a:nth-child(3)").attr("id", "third-crumb-child");
	jQuery(".breadcrumb a:nth-child(4)").attr("id", "fourth-crumb-child");
	jQuery(brandFunction);
	jQuery(directoryButton);

	jQuery("#breadcrumb").insertBefore("#block-block-25");
	jQuery(".islandora-large-image-metadata").insertAfter(".islandora-large-image-content-wrapper");
	jQuery(".fieldset-wrapper").insertAfter(".islandora-large-image-content-wrapper");
	jQuery(".islandora-solr-metadata-sidebar").hide();


	
					
	jQuery(".umsl-2632").parent().insertBefore(".umsl-2633");
	
	jQuery("#messages").insertAfter("#featured");




	jQuery(gridviewHide);			
	





	});


/*branding conditional function*/

function brandFunction () {
	    
	    

	    var crumbOwner = document.getElementById("third-crumb-child").textContent;
            if (crumbOwner == "St. Louis Mercantile Library") {
		            	        jQuery("#block-block-25").append("<div class='banner'><h1>St. Louis Mercantile Library</h1></div>");
		            	}
	        else if (crumbOwner == "Herman T. Pott National Inland Waterways Library") {
								jQuery("#block-block-25").append("<div class='banner'><h1>Herman T. Pott National Inland Waterways Library</h1></div>");
	        			}	
	        else if (crumbOwner == "John W. Barriger III National Railroad Library")  { 
		            	        jQuery("#block-block-25").append("<div class='banner'><h1>John W. Barriger III National Railroad Library</h1></div>");
	        			}
	        else if (crumbOwner == "Thomas Jefferson Library") {
	        					jQuery("#page-title").append("(from the Thomas Jefferson Library)");
	        			}
	        else if (crumbOwner == "UMSL University Archives") {
	        					jQuery("#page-title").append("(from the UMSL University Archives)");
	        			}
       	    else {
		            	       
		            	}	
            	}
	    

function gridviewHide () {
			if (location.href != "http://dl.mospace.umsystem.edu/umsl/islandora/object/umsl%3Aroot"){
					jQuery(".islandora-basic-collection-display-switch").css("display", "inline");
				}
			else {
				
				}}

function directoryButton () {
			var crumbCollection = document.getElementById("fourth-crumb-child").textContent;
			
			if (crumbCollection == "St. Louis Mercantile Library Special Collections") {	
				jQuery("#mercdirectory").css("display", "none");
				jQuery("#block-block-1").show();
				jQuery("#block-block-1").click(function() {jQuery("#mercdirectory").slideToggle(); });	
				}
			else if (crumbCollection == "Pott Library Special Collections") {
				jQuery("#pottdirectory").css("display", "none");
				jQuery("#block-block-2").show();
				jQuery("#block-block-2").click(function() {jQuery("#pottdirectory").slideToggle(); });	
				}
			else if (crumbCollection == "Barriger Library Special Collections") {
				jQuery("#barrigerdirectory").css("display", "none");
				jQuery("#block-block-3").show();
				jQuery("#block-block-3").click(function() {jQuery("#barrigerdirectory").slideToggle(); });	
				}
			else {



				}}



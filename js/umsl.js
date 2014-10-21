/*jQuery functions fit here*/

jQuery (document).ready(function() {

	

	jQuery(".breadcrumb a:nth-child(2)").attr("id", "second-crumb-child");
	jQuery(".breadcrumb a:nth-child(3)").attr("id", "third-crumb-child");
	jQuery(".breadcrumb a:nth-child(4)").attr("id", "fourth-crumb-child");
	jQuery(brandFunction);
	jQuery(directoryButton);

	jQuery("#breadcrumb").insertBefore("#block-block-25");
	jQuery("#breadcrumb").css("display","inline");
	jQuery(".islandora-large-image-metadata").insertAfter(".islandora-large-image-content-wrapper");
	jQuery(".fieldset-wrapper").insertAfter(".islandora-large-image-content-wrapper");
	jQuery(".islandora-solr-metadata-sidebar").hide();


	
					
	jQuery(".umsl-2632").parent().insertBefore(".umsl-2633");
	
	jQuery("#messages").insertAfter("#featured");






	jQuery(gridviewShow);			
	





	jQuery( '#darken').click(function () {
		    jQuery(".directory").css("display", "none");  jQuery("#darken").css("display", "none");jQuery(".close").css("display", "none");jQuery(".close").insertAfter("section"); 
		        });  
	jQuery( '.close').click(function () {
		     jQuery(".directory").css("display", "none");  jQuery("#darken").css("display", "inline"); jQuery(".close").fadeToggle(); jQuery(".close").insertAfter("#directory h3");
	}); 



	jQuery( ".directory" ).draggable();
	





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
	    

function gridviewShow () {
	
		var gridshowCrumb = document.getElementById("second-crumb-child").textContent;
			if (gridshowCrumb == "Collections") {
						jQuery(".islandora-basic-collection-display-switch").css("display", "inline");
				}
			else {
				
				}}

function directoryButton () {
			var crumbCollection = document.getElementById("fourth-crumb-child").textContent;
			
			if (crumbCollection == "St. Louis Mercantile Library Special Collections") {	
				jQuery("#block-block-1").css("display","inline");
				jQuery("#block-block-2").css("display","none"); jQuery("#block-block-3").css("display","none");
				jQuery("#block-block-1").click(function() {jQuery("#mercdirectory").css("display", "inline");  jQuery("#darken").css("display", "inline"); jQuery(".close").fadeToggle(); jQuery(".close").insertAfter("#mercdirectory h3");
				});
				}
			else if (crumbCollection == "Pott Library Special Collections") {
				jQuery("#block-block-2").css("display","inline");
				jQuery("#block-block-1").css("display","none"); jQuery("#block-block-3").css("display","none");
				jQuery("#block-block-2").click(function() {jQuery("#pottdirectory").css("display", "inline");  jQuery("#darken").css("display", "inline"); jQuery(".close").fadeToggle(); jQuery(".close").insertAfter("#pottdirectory h3");
				});
				}
			else if (crumbCollection == "Barriger Library Special Collections") {
				jQuery("#block-block-3").css("display","inline");
				jQuery("#block-block-1").css("display","none"); jQuery("#block-block-2").css("display","none");
				jQuery("#block-block-3").click(function() {jQuery("#barrigerdirectory").css("display", "inline");  jQuery("#darken").css("display", "inline"); jQuery(".close").fadeToggle(); jQuery(".close").insertAfter("#barrigerdirectory h3");
				});
				}
			else {





				}}



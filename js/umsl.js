


/*jQuery functions fit here*/

jQuery (document).ready(function() {

	jQuery(newBrandFunction);
	jQuery("#breadcrumb").insertBefore("#block-block-25");
	jQuery("#breadcrumb").css("display","inline");
	jQuery(".islandora-large-image-metadata").insertAfter(".islandora-large-image-content-wrapper");
	jQuery(".fieldset-wrapper").insertAfter(".islandora-large-image-content-wrapper");
	jQuery(".islandora-solr-metadata-sidebar").hide();		
	jQuery(".umsl-2632").parent().insertBefore(".umsl-2633");
	jQuery("#messages").insertAfter("#featured");



	});

function newBrandFunction () {
var modsOwner = document.getElementById("mods-owner").textContent;
if  (modsOwner.indexOf("Missouri")>=0) { jQuery("#block-block-25").append("<div class='banner'><h1>St. Louis Mercantile Library</h1></div>"); }
else if  (modsOwner.indexOf("Pott")>=0) { jQuery("#block-block-25").append("<div class='banner'><h1>Herman T. Pott National Inland Waterways Library</h1></div>"); }
else if  (modsOwner.indexOf("Barriger")>=0) { jQuery("#block-block-25").append("<div class='banner'><h1>John W. Barriger III National Railroad Library</h1></div>"); }
else if  (modsOwner.indexOf("Art")>=0) { jQuery("#block-block-25").append("<div class='banner'><h1>St. Louis Mercantile Library Art Museum</h1></div>");}
else if  (modsOwner.indexOf("Jefferson")>=0) { jQuery("#block-block-25").append("<div class='banner'><h1>Thomas Jefferson Library</h1></div>"); }
else if  (modsOwner.indexOf("Archives")>=0) { jQuery("block-block-25").append("<div class='banner'><h1>University Archives</h1></div>"); }
else{}
};

	    

function gridviewShow () {
	
		var gridshowCrumb = document.getElementById("second-crumb-child").textContent;
			if (gridshowCrumb == "Collections") {
						jQuery(".islandora-basic-collection-display-switch").css("display", "inline");
				}
			else {
				
				}}



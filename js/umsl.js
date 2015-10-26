


/*jQuery functions fit here*/

jQuery (document).ready(function() {

	jQuery(newBrandFunction);
	jQuery("#breadcrumb").insertBefore("#block-block-25");
	jQuery("#breadcrumb").css("display","inline");
	jQuery(".islandora-large-image-metadata").insertAfter(".islandora-large-image-content-wrapper");
	jQuery(".fieldset-wrapper").insertAfter(".islandora-large-image-content-wrapper");
	jQuery(".islandora-solr-metadata-sidebar").hide();		
	jQuery("#messages").insertAfter("#featured");



	});

function newBrandFunction () {
var modsOwner = document.getElementById("mods-owner").textContent;
if  (modsOwner.indexOf("Missouri")>=0) { jQuery("#block-block-25").append("<div class='banner'><a href='http://dl.mospace.umsystem.edu/umsl/islandora/object/umsl%3A2632'><h1>St. Louis Mercantile Library</h1></a></div>"); }
else if  (modsOwner.indexOf("Pott")>=0) { jQuery("#block-block-25").append("<div class='banner'><a href='http://dl.mospace.umsystem.edu/umsl/islandora/object/umsl%3A2633'><h1>Herman T. Pott National Inland Waterways Library</h1></a></div>"); }
else if  (modsOwner.indexOf("Barriger")>=0) { jQuery("#block-block-25").append("<div class='banner'><a href='http://dl.mospace.umsystem.edu/umsl/islandora/object/umsl%3A2634'><h1>John W. Barriger III National Railroad Library</h1></a></div>"); }
else if  (modsOwner.indexOf("Art")>=0) { jQuery("#block-block-25").append("<div class='banner'><a href='http://dl.mospace.umsystem.edu/umsl/islandora/object/umsl%3A109460'><h1>St. Louis Mercantile Library Art Museum</h1></a></div>");}
else if  (modsOwner.indexOf("Jefferson")>=0) { jQuery("#block-block-25").append("<div class='banner'><h1>Thomas Jefferson Library</h1></div>"); }
else if  (modsOwner.indexOf("Archives")>=0) { jQuery("#block-block-25").append("<div class='banner'><h1>University Archives</h1></div>"); }
else if  (modsOwner.indexOf("UMSL")>=0) { 
			jQuery("#block-block-25").append("<div class='banner'><h1>Digital Collections at the University of Missouri-St. Louis</h1></div>");
			jQuery("#page-title").css("display","none");
			jQuery("#sidebar-first").css("display","none");
			jQuery("#sidebar-first").css("width","0px");
			jQuery("#content").css("width","960px");
			}
else{  }
};

	    



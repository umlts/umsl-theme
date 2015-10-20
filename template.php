<?php

/**
 * Override global page preprocess function
 */
function umsl_theme_preprocess_page(&$variables) {
// Only if an islandora object
  if ($islandora_object = menu_get_object('islandora_object', 2)) {
		$temp_array = array();
    $pid = $islandora_object->id;
    $object_url = '/islandora/object/' . $pid;

    $metadata = $islandora_object['MODS']->content;
		preg_match("/<physicalLocation>([^<>]*)<\/physicalLocation>/", $metadata, $location);
		$temp_array['location'] = $location;

    if (isset($islandora_object['PDF'])) {
      $pdf_link = '<a id="pdf-icon-link" href="' . $GLOBALS['base_url'] . $object_url. '/datastream/PDF/view"><img id="pdf-icon-image" src="/sites/all/themes/umsl-theme/images/icon_PDF.png"></a>';
      $variables['pdf_datastream'] = $pdf_link;
    }

		$variables['islandora_object'] = $temp_array;

//dsm($variables, 'variables array');
//dsm($metadata, 'metadata array');
//dsm($islandora_object, 'islandora array');
  }
}

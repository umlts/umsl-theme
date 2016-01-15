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
    $thumbnail_img = '<img src="' . $GLOBALS['base_url'] . $object_url . '/datastream/TN/view"' . '/>';
// Title from mods
    if (preg_match("/<physicalLocation>([^<>]*)<\/physicalLocation>/", $metadata, $location) || preg_match("/<mods:physicalLocation>([^<>]*)<\/mods:physicalLocation>/", $metadata, $location)) {
      $temp_array['location'] = $location;
    }
// Pdf link
    if (isset($islandora_object['PDF'])) {
      $pdf_link = '<a id="pdf-icon-link" href="' . $GLOBALS['base_url'] . $object_url. '/datastream/PDF/view"><img id="pdf-icon-image" src="/sites/all/themes/umsl-theme/images/icon_PDF.png"></a>';
      $variables['pdf_datastream'] = $pdf_link;
    }
		$variables['islandora_object'] = $temp_array;

    $object_content_models = $islandora_object->relationships->get('info:fedora/fedora-system:def/model#', 'hasModel');
    foreach ($object_content_models as $model) {
      $variables['theme_hook_suggestions'][] = 'page__islandora__object__' . str_replace(':', '_', $model['object']['value']);
    }
// If Collection content model
    if ($object_content_models['0']['object']['value'] == 'islandora:collectionCModel' || $object_content_models['0']['object']['value'] == 'islandora:newspaperCModel') {
      $metadata = $islandora_object['DC']->content;
      preg_match("/<dc:description>([^<>]*)<\/dc:description>/", $metadata, $description);
      $temp_array['pid'] = $pid;
      $temp_array['description'] = $description;
      $temp_array['path'] = $object_url;
      $temp_array['thumbnail'] = $thumbnail_img;
      $temp_array['thumb_link'] = l($thumbnail_img, $object_url);
      $variables['islandora_object'] = $temp_array;
    }
  }
}
//dsm($islandora_object, 'islandora object');
//dsm($metadata, 'metadata object');
//dsm($temp_array, 'custom array');
//dsm($variables, 'variables array');
//dsm($tabs, 'tabs array');

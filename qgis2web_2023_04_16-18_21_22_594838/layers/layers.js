var wms_layers = [];

var format_Abomey_0 = new ol.format.GeoJSON();
var features_Abomey_0 = format_Abomey_0.readFeatures(json_Abomey_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abomey_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abomey_0.addFeatures(features_Abomey_0);
var lyr_Abomey_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Abomey_0, 
                style: style_Abomey_0,
                interactive: true,
                title: '<img src="styles/legend/Abomey_0.png" /> Abomey'
            });
var format_Abomeysitestouristiqueetloisirs_1 = new ol.format.GeoJSON();
var features_Abomeysitestouristiqueetloisirs_1 = format_Abomeysitestouristiqueetloisirs_1.readFeatures(json_Abomeysitestouristiqueetloisirs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abomeysitestouristiqueetloisirs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abomeysitestouristiqueetloisirs_1.addFeatures(features_Abomeysitestouristiqueetloisirs_1);
var lyr_Abomeysitestouristiqueetloisirs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Abomeysitestouristiqueetloisirs_1, 
                style: style_Abomeysitestouristiqueetloisirs_1,
                interactive: true,
                title: '<img src="styles/legend/Abomeysitestouristiqueetloisirs_1.png" /> Abomey sites touristique et loisirs'
            });
var format_Abomeyroute_2 = new ol.format.GeoJSON();
var features_Abomeyroute_2 = format_Abomeyroute_2.readFeatures(json_Abomeyroute_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abomeyroute_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abomeyroute_2.addFeatures(features_Abomeyroute_2);
var lyr_Abomeyroute_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Abomeyroute_2, 
                style: style_Abomeyroute_2,
                interactive: true,
                title: '<img src="styles/legend/Abomeyroute_2.png" /> Abomey route'
            });

lyr_Abomey_0.setVisible(true);lyr_Abomeysitestouristiqueetloisirs_1.setVisible(true);lyr_Abomeyroute_2.setVisible(true);
var layersList = [lyr_Abomey_0,lyr_Abomeysitestouristiqueetloisirs_1,lyr_Abomeyroute_2];
lyr_Abomey_0.set('fieldAliases', {'nom_com': 'nom_com', 'population': 'population', 'code_com': 'code_com', 'source': 'source', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Abomeysitestouristiqueetloisirs_1.set('fieldAliases', {'Noms': 'Noms', 'X': 'X', 'Y': 'Y', });
lyr_Abomeyroute_2.set('fieldAliases', {'num_route': 'num_route', 'type': 'type', 'cl_admin': 'cl_admin', 'revetement': 'revetement', 'praticab': 'praticab', 'chaussee_s': 'chaussee_s', 'voie_local': 'voie_local', 'franchisst': 'franchisst', 'source': 'source', 'shape_leng': 'shape_leng', });
lyr_Abomey_0.set('fieldImages', {'nom_com': 'TextEdit', 'population': 'TextEdit', 'code_com': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Abomeysitestouristiqueetloisirs_1.set('fieldImages', {'Noms': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Abomeyroute_2.set('fieldImages', {'num_route': 'TextEdit', 'type': 'TextEdit', 'cl_admin': 'TextEdit', 'revetement': 'TextEdit', 'praticab': 'TextEdit', 'chaussee_s': 'TextEdit', 'voie_local': 'TextEdit', 'franchisst': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Abomey_0.set('fieldLabels', {'nom_com': 'inline label', 'population': 'no label', 'code_com': 'no label', 'source': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Abomeysitestouristiqueetloisirs_1.set('fieldLabels', {'Noms': 'inline label', 'X': 'header label', 'Y': 'inline label', });
lyr_Abomeyroute_2.set('fieldLabels', {'num_route': 'inline label', 'type': 'inline label', 'cl_admin': 'no label', 'revetement': 'inline label', 'praticab': 'no label', 'chaussee_s': 'inline label', 'voie_local': 'no label', 'franchisst': 'no label', 'source': 'no label', 'shape_leng': 'no label', });
lyr_Abomeyroute_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
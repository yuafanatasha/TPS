ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([13064225.324449, 315922.684161, 13066238.984253, 317236.169445]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_survey_lapangan_2 = new ol.format.GeoJSON();
var features_survey_lapangan_2 = format_survey_lapangan_2.readFeatures(json_survey_lapangan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_survey_lapangan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_survey_lapangan_2.addFeatures(features_survey_lapangan_2);cluster_survey_lapangan_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_survey_lapangan_2
});
var lyr_survey_lapangan_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_survey_lapangan_2, 
                style: style_survey_lapangan_2,
                popuplayertitle: "survey_lapangan",
                interactive: true,
                title: '<img src="styles/legend/survey_lapangan_2.png" /> survey_lapangan'
            });
var format_coba_drainase_3 = new ol.format.GeoJSON();
var features_coba_drainase_3 = format_coba_drainase_3.readFeatures(json_coba_drainase_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coba_drainase_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coba_drainase_3.addFeatures(features_coba_drainase_3);
var lyr_coba_drainase_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coba_drainase_3, 
                style: style_coba_drainase_3,
                popuplayertitle: "coba_drainase",
                interactive: true,
                title: '<img src="styles/legend/coba_drainase_3.png" /> coba_drainase'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_survey_lapangan_2.setVisible(true);lyr_coba_drainase_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_survey_lapangan_2,lyr_coba_drainase_3];
lyr_survey_lapangan_2.set('fieldAliases', {'fid': 'fid', 'Kode_irigasi': 'Kode_irigasi', 'Nama_Jalan': 'Nama_Jalan', 'Keterangan': 'Keterangan', 'foto': 'foto', });
lyr_coba_drainase_3.set('fieldAliases', {'fid': 'fid', 'dari': 'dari', 'menuju': 'menuju', 'foto': 'foto', });
lyr_survey_lapangan_2.set('fieldImages', {'fid': 'Hidden', 'Kode_irigasi': 'TextEdit', 'Nama_Jalan': 'TextEdit', 'Keterangan': 'TextEdit', 'foto': 'ExternalResource', });
lyr_coba_drainase_3.set('fieldImages', {'fid': 'Hidden', 'dari': 'TextEdit', 'menuju': 'TextEdit', 'foto': 'ExternalResource', });
lyr_survey_lapangan_2.set('fieldLabels', {'Kode_irigasi': 'inline label - always visible', 'Nama_Jalan': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'foto': 'header label - visible with data', });
lyr_coba_drainase_3.set('fieldLabels', {'dari': 'inline label - always visible', 'menuju': 'inline label - always visible', 'foto': 'header label - visible with data', });
lyr_coba_drainase_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
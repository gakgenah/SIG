var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIS_Batas_Kabupaten_2024_0 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kabupaten_2024_0 = format_LapakGIS_Batas_Kabupaten_2024_0.readFeatures(json_LapakGIS_Batas_Kabupaten_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kabupaten_2024_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIS_Batas_Kabupaten_2024_0.addFeatures(features_LapakGIS_Batas_Kabupaten_2024_0);var lyr_LapakGIS_Batas_Kabupaten_2024_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIS_Batas_Kabupaten_2024_0, 
                style: style_LapakGIS_Batas_Kabupaten_2024_0,
    title: 'LapakGIS_Batas_Kabupaten_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_0_0.png" /> Rendah<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_0_1.png" /> Sedang<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_0_2.png" /> Tinggi<br />'
        });

lyr_LapakGIS_Batas_Kabupaten_2024_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIS_Batas_Kabupaten_2024_0];
lyr_LapakGIS_Batas_Kabupaten_2024_0.set('fieldAliases', {'Daerah': 'Daerah', 'Persentase': 'Persentase', 'Jumlah': 'Jumlah', });
lyr_LapakGIS_Batas_Kabupaten_2024_0.set('fieldImages', {'Daerah': 'TextEdit', 'Persentase': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_LapakGIS_Batas_Kabupaten_2024_0.set('fieldLabels', {'Daerah': 'no label', 'Persentase': 'inline label', 'Jumlah': 'inline label', });
lyr_LapakGIS_Batas_Kabupaten_2024_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
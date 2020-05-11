var dataset = ee.ImageCollection('COPERNICUS/S2')
                  .filterBounds(geometry)
                  .filterDate('2019-01-01', '2020-06-30')
                  .first()
                

var B4_RED=dataset.select('B4')
var B8_NIR=dataset.select('B8')



var ndvi=B8_NIR.subtract(B4_RED).divide(B8_NIR.add(B4_RED))

console.log(ndvi)


var ndvi_palette= [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ]

Map.addLayer(ndvi,{min:0,max:1,palette:ndvi_palette},'NDVI')

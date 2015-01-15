# Infra-estrutura Cicloviária em São Paulo

Um mapa com dados do OpenStreetMap sobre a infra-estrutura cicloviária da Região Metropolitana de São Paulo.

## OpenStreetMap

Para buscar os dados, rodamos a busca abaixo no Overpass e salvamos o GeoJSON:

/*
This shows cycleways, cycleroutes and other bicycle infra-structure.
*/

[out:json];

(
  // Get cycle route relations
  relation[route=bicycle]({{bbox}})->.cr;
  // Get cycleways
  way[highway=cycleway]({{bbox}});

  // Cycleways on road streets
  way[highway]["cycleway:left"=lane]({{bbox}});
  way[highway]["cycleway:right"=lane]({{bbox}});

  // The convention is to use highway="path",
  // but get all highways with bicycle=designated
  //way[highway=path][bicycle=designated]({{bbox}});
  way[highway][bicycle=designated]({{bbox}});

  node[amenity=bicycle_parking]({{bbox}});
  node[amenity=bicycle_rental]({{bbox}});
  node[amenity=fuel]({{bbox}});
  node[shop=bicycle]({{bbox}});

);

out body;
>;
out skel qt;

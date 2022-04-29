mapboxgl.accessToken = 'pk.eyJ1IjoibXJkdXlraGllbTI2MTAiLCJhIjoiY2wyOGFyeHkxMDB3cDNqdDB3cm1pOWlvaSJ9.qS59jznxajSdILjeI084Pw'; 
    const map = new mapboxgl.Map({
      container: 'tour-map-block',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'mapbox://styles/mrduykhiem2610/cl2cxkxs900aj15jza2qymwda', 
      center: [4.717496, 50.658644],
      zoom: 5.50,
		cooperativeGestures: true
    });
	
	map.addControl(new mapboxgl.FullscreenControl());
		
		let hoveredStateId = null;
		
map.on('load', () => {
map.addSource('places', {
'type': 'geojson',
'data': 'images/tour-western-europe.geojson'
});
	
map.addLayer({
'id': 'route',
'type': 'line',
'source': 'places',
'layout': {
'line-join': 'round',
'line-cap': 'round'
},
'paint': {
'line-color': '#b6b6b6',
'line-width': 2
}
});
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'circle',
'source': 'places',
'paint': {
'circle-color': ['case',['boolean', ['feature-state', 'hover'], false],'#25AAE1', '#FBB040'],
'circle-radius': ['case',['boolean', ['feature-state', 'hover'], false],10, 8],
'circle-stroke-width': 2,
'circle-stroke-color': '#ffffff'
}
});
	
// When the user moves their mouse over the state-fill layer, we'll update the
// feature state for the feature under the mouse.
map.on('click', 'places', (e) => {

	if (e.features.length > 0) {
	if (hoveredStateId !== null) {
	map.setFeatureState(
	{ source: 'places', id: hoveredStateId },
	{ hover: false }
	);
	}
	hoveredStateId = e.features[0].id;
	map.setFeatureState(
	{ source: 'places', id: hoveredStateId },
	{ hover: true }
	);
	}
});
	
	// When the mouse leaves the state-fill layer, update the feature state of the
// previously hovered feature.
});
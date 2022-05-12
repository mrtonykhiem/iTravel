	
		mapboxgl.accessToken = 'pk.eyJ1IjoibXJkdXlraGllbTI2MTAiLCJhIjoiY2wyOGFyeHkxMDB3cDNqdDB3cm1pOWlvaSJ9.qS59jznxajSdILjeI084Pw'; 
    const map = new mapboxgl.Map({
      container: 'map-top-destination',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'mapbox://styles/mrduykhiem2610/cl2cxkxs900aj15jza2qymwda', 
      center: [4.817603023527738,
      50.820810615638294],
      zoom: 5.00
    });

map.scrollZoom.disable();
		
		let hoveredStateId = null;
		const top_destination_img = document.getElementById('top-destination-img-preview');
		const top_destination_region = document.getElementById('top-destination-region-preview');
		const top_destination_place = document.getElementById('top-destination-place-preview');
		const top_destination_description = document.getElementById('top-destination-description-preview');
		
map.on('load', () => {
map.addSource('places', {
'type': 'geojson',
'data': 'images/destination-image-thumbnail/Countries/europe/central-europe/germany/germany.geojson'
});
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'circle',
'source': 'places',
'paint': {
'circle-color': ['case',['boolean', ['feature-state', 'hover'], false],'#25AAE1', '#FBB040'],
'circle-radius': ['case',['boolean', ['feature-state', 'hover'], false],15, 12],
'circle-stroke-width': 2,
'circle-stroke-color': '#ffffff'
}
});
 
// Create a popup, but don't add it to the map yet.
const popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
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
	
	top_destination_img.src = e.features[0].properties.img_link + 'featured-thumbnail.png';
	top_destination_region.innerHTML = e.features[0].properties.region_name;
	top_destination_place.innerHTML = e.features[0].properties.place_name;
	top_destination_description.innerHTML = e.features[0].properties.place_description;
});
 
map.on('mouseenter', 'places', (e) => {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';
	
// Copy coordinates array.
const coordinates = e.features[0].geometry.coordinates.slice();
const place_name = e.features[0].properties.place_name;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
// Populate the popup and set its coordinates
// based on the feature found.
popup.setLngLat(coordinates).setHTML(place_name).addTo(map);
});
	
	map.on('mouseleave', 'places', () => {
		map.getCanvas().style.cursor = '';
		popup.remove();
	});
	
	// When the mouse leaves the state-fill layer, update the feature state of the
// previously hovered feature.
});
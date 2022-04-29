const featured_cities_grid = document.getElementById('city-row');
		const featured_countries_grid = document.getElementById('country-row');
		const featured_landmark_grid = document.getElementById('attraction-row');
		load_destination_grid();
		
		function load_destination_grid() {
			var innerstring = '';
			var destination_city_list = destination_cities;
			
			var innerstring_2 = '';
			var destination_countries_list = destination_country;
			
			var innerstring_3 = '';
			var destination_attractions_list = destination_attractions;
			
			for (var i=0; i<6; i++) {
				innerstring = innerstring + create_destination_city_item(destination_city_list[i].quoc_gia, destination_city_list[i].city_name, destination_city_list[i].country_city);
			}
			
			for (var i=0; i<6; i++) {
				innerstring_2 = innerstring_2 + create_destination_country_item(destination_countries_list[i].quoc_gia, destination_countries_list[i].region, destination_countries_list[i].country_city);
			}
			
			for (var i=0; i<6; i++) {
				innerstring_3 = innerstring_3 + create_destination_attraction_item(destination_attractions_list[i].quoc_gia, destination_attractions_list[i].attraction_name, destination_attractions_list[i].country_city);
			}
			featured_cities_grid.innerHTML = innerstring;
			featured_countries_grid.innerHTML = innerstring_2;
			featured_landmark_grid.innerHTML = innerstring_3;
		}
		
		function create_destination_city_item(country_name, city_name, country_city) {
			
			return '<div class="col-2"><div class="destination-item-thumbnail"><a href="#"><img src="' + country_city +'thumbnail.png" alt=""><div class="destination-label"><h2>' + country_name + '</h2><h3>' + city_name + '</h3></div></a></div></div>';
		}
		
		function create_destination_attraction_item(country_name, attraction_name, country_city) {
			
			return '<div class="col-2"><div class="destination-item-thumbnail"><a href="#"><img src="' + country_city +'thumbnail.png" alt=""><div class="destination-label"><h2>' + country_name + '</h2><h3>' + attraction_name + '</h3></div></a></div></div>';
		}
		
		function create_destination_country_item(country_name, continent, country_city) {
			
			return '<div class="col-2"><div class="destination-item-thumbnail"><a href="#"><img src="' + country_city +'thumbnail.png" alt=""><div class="destination-label"><h2>' + continent + '</h2><h3>' + country_name + '</h3></div></a></div></div>';
		}
		
		document.getElementById('countries-dest').addEventListener('click', function() {
			var t = document.getElementById('destination-grid').querySelector('.active');
			t.classList.remove('active');
			var m = document.getElementById('dest-buttons').querySelector('.active');
			m.classList.remove('active');
			document.getElementById('country-row').classList.add('active');
			this.classList.add('active');
		});
		document.getElementById('attraction-dest').addEventListener('click', function() {
			var t = document.getElementById('destination-grid').querySelector('.active');
			t.classList.remove('active');
			var m = document.getElementById('dest-buttons').querySelector('.active');
			m.classList.remove('active');
			document.getElementById('attraction-row').classList.add('active');
			this.classList.add('active');
		});
		document.getElementById('cities-dest').addEventListener('click', function() {
			var t = document.getElementById('destination-grid').querySelector('.active');
			t.classList.remove('active');
			var m = document.getElementById('dest-buttons').querySelector('.active');
			m.classList.remove('active');
			document.getElementById('city-row').classList.add('active');
			this.classList.add('active');
		});

const iTravel_labels = document.querySelectorAll('.iTravel-label');
add_label();
		
		function add_label() {
			for (var i=0; i<iTravel_labels.length; i++) {
				var label_content = iTravel_labels[i].id;
				iTravel_labels[i].innerHTML = label_case(label_content);
			}
		}
		
		function label_case(label) {
			switch(label) {
				case 'destination-label':
					return label_write('ĐIỂM ĐẾN', 'destination');
					break;
				case 'tour-label':
					return label_write('TOUR', 'tour');
					break;
				case 'blog-label':
					return label_write('BLOG', 'blog');
					break;
				case 'explore-label':
					return label_write('KHÁM PHÁ', 'explore');
					break;
				default:
					return '';
					break;
			}
		}
		
		function label_write(label_big, label) {
			return '<h1 class="iTravel-word">' + label_big + '</h1><img src="images/' + label + '-label-line.png" alt="">';
		}

		const destination_category = document.querySelector('.destination-buttons');
		
		function showDestinationCategory(dest_cat) {
			const active_dest = destination_category.querySelector('.active');
			active_dest.classList.remove('active');
			
			const cities_dest = destination_category.querySelector('#cities-dest');
			const countries_dest = destination_category.querySelector('#countries-dest');
			const landmark_dest = destination_category.querySelector('#landmark-dest');
			
			switch(dest_cat) {
				case 'cities-dest':
					cities_dest.classList.add('active');
					break;
				case 'countries-dest':
					countries_dest.classList.add('active');
					break;
				case 'landmark-dest':
					landmark_dest.classList.add('active');
					break;
				default:
					break;
			}
		}
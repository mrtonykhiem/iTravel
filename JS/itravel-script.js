const featured_destination_grid = document.getElementById('test');
		load_destination_grid();
		
		function load_destination_grid() {
			var innerstring = '';
			var destination_city_list = destination_cities;
			
			for (var i=0; i<destination_city_list.length; i++) {
				innerstring = innerstring + create_destination_city_item(destination_city_list[i].quoc_gia, destination_city_list[i].city_name, destination_city_list[i].country_city);
			}
			featured_destination_grid.innerHTML = innerstring;
		}
		
		function create_destination_city_item(country_name, city_name, country_city) {
			
			return '<div class="col-2"><div class="destination-item-thumbnail"><a href="#"><img src="images/destination-image-thumbnail/' + country_city +'.png" alt=""><div class="destination-label"><h2>' + country_name + '</h2><h3>' + city_name + '</h3></div></a></div></div>';
		}

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
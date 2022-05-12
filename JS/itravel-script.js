
		
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
					return label_write('TOUR NỔI BẬT', 'tour');
					break;
				case 'blog-label':
					return label_write('BLOG MỚI NHẤT', 'blog');
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

const explore_category = [
			{'explore_icon': 'icon-masks', 'explore_name': 'VĂN HOÁ'},
			{'explore_icon': 'icon-cutlery', 'explore_name': 'ẨM THỰC'},
			{'explore_icon': 'icon-landscape', 'explore_name': 'THIÊN NHIÊN'},
			{'explore_icon': 'icon-landmark', 'explore_name': 'DANH LAM'},
			{'explore_icon': 'icon-road', 'explore_name': 'CUNG ĐƯỜNG'},
			{'explore_icon': 'icon-island', 'explore_name': 'BIỂN ĐẢO'},
			{'explore_icon': 'icon-hotel', 'explore_name': 'NGHỈ DƯỠNG'}
		];
		
		const tour_category = [
			{'explore_icon': 'icon-castle', 'explore_name': 'DU LỊCH VĂN HOÁ , LỊCH SỬ'},
			{'explore_icon': 'icon-wildlife', 'explore_name': 'DU LICH SINH THÁI'},
			{'explore_icon': 'icon-pray', 'explore_name': 'DU LỊCH HÀNH HƯƠNG'},
			{'explore_icon': 'icon-hiking', 'explore_name': 'DU LỊCH KHÁM PHÁ'},
			{'explore_icon': 'icon-resort', 'explore_name': 'DU LỊCH NGHỈ DƯỠNG'},
			{'explore_icon': 'icon-sports', 'explore_name': 'DU LỊCH THỂ THAO'}
		];
		
		const explore_innerHTML = document.getElementById('discover-list');
		explore_innerHTML.innerHTML = showExploreCategory();
		
		const tour_innerHTML = document.getElementById('travel-list');
		tour_innerHTML.innerHTML = showTourCategory();
		
		function showExploreCategory() {
			var explore_innerHTML = '';
			for (var i=0; i<explore_category.length; i++) {
				explore_innerHTML = explore_innerHTML + '<div class="col-1plus"><a href="blog_list.html" class="travel-type discover-category"><i class="' + explore_category[i].explore_icon +'"></i><h6>' + explore_category[i].explore_name +'</h6></a></div>';
			}
			return explore_innerHTML;
		}
		
		function showTourCategory() {
			var tour_innerHTML = '';
			for (var i=0; i<tour_category.length; i++) {
				tour_innerHTML = tour_innerHTML + '<div class="col-2"><a href="tour_list.html" class="travel-type"><i class="' + tour_category[i].explore_icon +'"></i><h6>' + tour_category[i].explore_name +'</h6></a></div>';
			}
			return tour_innerHTML;
		}
		
		const blog_innerHTML = document.getElementById('main-page-news');
		const showFeaturedBlog = 5;
		showMainBlog();
		
		function showMainBlog() {
			var big_featured = createMainBlogItems(blog_list[0].blog_image_link, blog_list[0].blog_title, blog_list[0].summary, blog_list[0].date, createMainBlogTags(blog_list[0].blog_tags), blog_list[0].author);
			
			var small_featured = document.createElement('div');
			small_featured.classList.add('small-featured-blog', 'col-6');
			
			var small_featured_content = document.createElement('div');
			small_featured_content.classList.add('row');
			
			for (var i=1; i<showFeaturedBlog; i++) {
				small_featured_content.innerHTML = small_featured_content.innerHTML + '<div class="col-6"><div class="small-blog"><a href="blog_1.html"><img src="' + blog_list[i].blog_image_link + 'small.png" alt=""><div class="small-blog-content"><a href="#" class="blog-category">' + blog_list[i].blog_tags[0] + '</a><a href="#" class="big-blog-title">' + blog_list[i].blog_title + '</a><div class="blog-information"><div><i class="fa fa-calendar"></i><p>' + blog_list[i].date.getDate() + '/' + blog_list[i].date.getMonth() +'/' + blog_list[i].date.getFullYear() + '</p></div><div><i class="fa fa-user"></i><p>' + blog_list[i].author + '</p></div></div></div></a></div></div>';
			}
			
			small_featured.append(small_featured_content);
			
			blog_innerHTML.append(big_featured, small_featured);
		}
		
		function createMainBlogTags(blog_tags) {
			var blog_tags_inner = '';
			for (var i=0; i<blog_tags.length; i++) {
				blog_tags_inner = blog_tags_inner + '<a href="blog_list.html" class="blog-category">' + blog_tags[i] + '</a>';
			}
			return blog_tags_inner;
		}
		
		function createMainBlogItems(blog_image_link, blog_title, blog_summary, blog_date, blog_tags, blog_author) {
			var blog_item = document.createElement('div');
			blog_item.classList.add('big-featured-blog', 'col-6');
			blog_item.innerHTML = '<div class="img-blog-block"><a href="blog_1.html"><img style="display: block; width: 100%" src="' + blog_image_link + 'big.png" alt=""></a></div>' + blog_tags + '<a class="big-blog-title" href="blog_1.html">' + blog_title + '</a><div class="blog-information"><div><i class="fa fa-calendar"></i><p>' + blog_date.getDate() + '/' + blog_date.getMonth() +'/' + blog_date.getFullYear() + '</p></div><div><i class="fa fa-user"></i><p>' + blog_author + '</p></div></div><p>' + blog_summary +'</p>';
			return blog_item;
		}
		
		const tour_list_content = document.getElementById('tour-list-content');
		var tour_item_innerHTML = '';
		for (var i=0; i<6; i++) {
			var tour_item_innerHTML = tour_item_innerHTML + showTourItems(tour_list[i].tour_image, tour_list[i].tour_name, tour_list[i].tour_summary, tour_list[i].tour_time, tour_list[i].tour_depart, tour_list[i].tour_sale);
		}
		tour_list_content.innerHTML = tour_item_innerHTML;
		
		function showTourItems(tour_image, tour_name, tour_summary, tour_time, tour_depart, tour_price) {
			return '<div class="swiper-slide"><div class="tour-content"><div class="tour-image"><a href="tour_1.html" class="tour-thumbnail"><img src="' + tour_image +'thumbnail.png" alt="" style="width: 100%"></a></div><div class="tour-info"><h6>' + tour_summary +'</h6><a href="tour_1.html">' + tour_name +'</a></div><div class="tour-break-line"></div><div class="tour-time-depart"><div class="tour-detail"><i class="fa fa-calendar"></i><p><span>Thời gian: </span>' + tour_time + '</p></div><div class="tour-detail"><i class="fa fa-flag"></i><p><span>Xuất phát: </span>' + tour_depart + '</p></div></div><div class="tour-break-line"></div><div class="tour-review-price"><a href="tour_1.html">Xem chi tiết</a><h4><span>từ </span>' + new Intl.NumberFormat().format(tour_price) +' đ</h4></div></div></div>';
		}
		
		var swiper2 = new Swiper(".my-slider", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
          nextEl: "#this-slider-2 .swiper-button-next",
          prevEl: "#this-slider-2 .swiper-button-prev",
        },
      });
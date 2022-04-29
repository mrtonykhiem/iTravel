// JavaScript Document

const destination_cities = [
	{
		'city_name': 'TOKYO',
		'quoc_gia': 'NHẬT BẢN',
		'region': 'KANTO',
		'country_city': 'images/destination-image-thumbnail/countries/asia/east-asia/japan/kanto/tokyo/',
		'isFeatured': true
	},
	{
		'city_name': 'MOSCOW',
		'quoc_gia': 'NGA',
		'region': 'MOSCOW',
		'country_city': 'images/destination-image-thumbnail/countries/europe/eastern-europe/russia/central-russia/moscow/',
		'isFeatured': true
	},
	{
		'city_name': 'SEOUL',
		'quoc_gia': 'HÀN QUỐC',
		'region': 'SEOUL',
		'country_city': 'images/destination-image-thumbnail/countries/asia/east-asia/skorea/seoul/seoul/',
		'isFeatured': true
	},
	{
		'city_name': 'NEW YORK',
		'quoc_gia': 'MỸ',
		'region': 'NEW YORK',
		'country_city': 'images/destination-image-thumbnail/countries/america/north-america/usa/new-york/new-york/',
		'isFeatured': true
	},
	{
		'city_name': 'ROME',
		'quoc_gia': 'ITALY',
		'region': 'LAZIO',
		'country_city': 'images/destination-image-thumbnail/countries/europe/southern-europe/italy/lazio/rome/',
		'isFeatured': true
	},
	{
		'city_name': 'GIZA',
		'quoc_gia': 'AI CẬP',
		'region': 'GREATER CAIRO',
		'country_city': 'images/destination-image-thumbnail/countries/africa-arab/northern-africa/egypt/greater-cairo/giza/',
		'isFeatured': true
	},
	{
		'city_name': 'BERLIN',
		'quoc_gia': 'ĐỨC',
		'region': 'BERLIN',
		'country_city': 'images/destination-image-thumbnail/countries/europe/central-europe/germany/berlin/',
		'isFeatured': true
	},
	{
		'city_name': 'PARIS',
		'quoc_gia': 'PHÁP',
		'region': "L'ILE DE FRANCE",
		'country_city': 'images/destination-image-thumbnail/countries/europe/western-europe/france/ile-de-france/paris/',
		'isFeatured': true
	},
	{
		'city_name': 'LONDON',
		'quoc_gia': 'ANH QUỐC',
		'region': 'LONDON',
		'country_city': 'images/destination-image-thumbnail/countries/europe/western-europe/uk/greater-london/london/',
		'isFeatured': true
	},
	{
		'city_name': 'BARCELONA',
		'quoc_gia': 'TÂY BAN NHA',
		'region': 'CATALAN',
		'country_city': 'images/destination-image-thumbnail/countries/europe/southern-europe/spain/catalan/barcelona/',
		'isFeatured': true
	},
	{
		'city_name': 'DUBAI',
		'quoc_gia': 'UAE',
		'region': 'DUBAI',
		'country_city': 'images/destination-image-thumbnail/countries/africa-arab/middle-east/uae/dubai/',
		'isFeatured': true
	},
	{
		'city_name': 'TP.SINGAPORE',
		'quoc_gia': 'SINGAPORE',
		'region': 'SINGAPORE',
		'country_city': 'images/destination-image-thumbnail/countries/asia/southeast-asia/singapore/singapore-city/',
		'isFeatured': true
	}
];

const destination_country = [
	{
		'quoc_gia': 'NHẬT BẢN',
		'region': 'CHÂU Á',
		'country_city': 'images/destination-image-thumbnail/countries/asia/east-asia/japan/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'ẤN ĐỘ',
		'region': 'CHÂU Á',
		'country_city': 'images/destination-image-thumbnail/Countries/asia/south-asia/india/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'HÀN QUỐC',
		'region': 'CHÂU Á',
		'country_city': 'images/destination-image-thumbnail/countries/asia/east-asia/skorea/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'HOA KỲ',
		'region': 'CHÂU MỸ',
		'country_city': 'images/destination-image-thumbnail/countries/america/north-america/usa/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'ITALY',
		'region': 'CHÂU ÂU',
		'country_city': 'images/destination-image-thumbnail/countries/europe/southern-europe/italy/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'AI CẬP',
		'region': 'CHÂU PHI',
		'country_city': 'images/destination-image-thumbnail/countries/africa-arab/northern-africa/egypt/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'ĐỨC',
		'region': 'CHÂU ÂU',
		'country_city': 'images/destination-image-thumbnail/countries/europe/central-europe/germany/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'PHÁP',
		'region': "CHÂU ÂU",
		'country_city': 'images/destination-image-thumbnail/countries/europe/western-europe/france/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'ANH QUỐC',
		'region': 'CHÂU ÂU',
		'country_city': 'images/destination-image-thumbnail/countries/europe/western-europe/uk/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'TÂY BAN NHA',
		'region': 'CHÂU ÂU',
		'country_city': 'images/destination-image-thumbnail/countries/europe/southern-europe/spain/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'TRUNG HOA',
		'region': 'CHÂU Á',
		'country_city': 'images/destination-image-thumbnail/countries/asia/east-asia/china/',
		'isFeatured': true
	},
	{
		'quoc_gia': 'CANADA',
		'region': 'CHÂU MỸ',
		'country_city': 'images/destination-image-thumbnail/countries/america/north-america/canada/',
		'isFeatured': true
	}
];

const destination_attractions = [
	{
		'attraction_name': 'Đền Taj Mahal',
		'quoc_gia': 'ẤN ĐỘ',
		'region': 'ACRA',
		'country_city': 'images/destination-image-thumbnail/Countries/asia/south-asia/india/agra/taj-mahal/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Machu Picchu',
		'quoc_gia': 'PERU',
		'region': 'CUSCO',
		'country_city': 'images/destination-image-thumbnail/countries/america/south-america/peru/cusco/machu-picchu/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Vạn Lý Trường Thành',
		'quoc_gia': 'TRUNG HOA',
		'region': 'TRUNG HOA',
		'country_city': 'images/destination-image-thumbnail/countries/asia/east-asia/china/great-wall/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Tượng nữ thần Tự Do',
		'quoc_gia': 'HOA KỲ',
		'region': 'NEW YORK',
		'country_city': 'images/destination-image-thumbnail/countries/america/north-america/usa/new-york/new-york/statue-of-liberty/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Đấu trường la mã',
		'quoc_gia': 'ITALY',
		'region': 'LAZIO',
		'country_city': 'images/destination-image-thumbnail/countries/europe/southern-europe/italy/lazio/rome/roman-colosseum/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Tượng Chúa Cứu Thế',
		'quoc_gia': 'BRAZIL',
		'region': 'RIO DE JANEIRO',
		'country_city': 'images/destination-image-thumbnail/countries/america/south-america/brazil/rio-de-janeiro/the-redeemer/',
		'isFeatured': true
	},
	{
		'attraction_name': 'La Sagrada Familia',
		'quoc_gia': 'TÂY BAN NHA',
		'region': 'CATALAN',
		'country_city': 'images/destination-image-thumbnail/countries/europe/southern-europe/spain/catalan/barcelona/la-sagrada-familia/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Tháp Eiffel',
		'quoc_gia': 'PHÁP',
		'region': "L'ILE DE FRANCE",
		'country_city': 'images/destination-image-thumbnail/countries/europe/western-europe/france/ile-de-france/paris/eiffel-tower/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Nhà hát Opera',
		'quoc_gia': 'ÚC',
		'region': 'SYDNEY',
		'country_city': 'images/destination-image-thumbnail/countries/asia/australasia/australia/sydney/opera-house/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Angkor Wat',
		'quoc_gia': 'CAMPUCHIA',
		'region': 'SIEM REAP',
		'country_city': 'images/destination-image-thumbnail/countries/asia/southeast-asia/cambodia/siem-reap/angkor-wat/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Cầu Cổng Vàng',
		'quoc_gia': 'HOA KỲ',
		'region': 'CALIFORNIA',
		'country_city': 'images/destination-image-thumbnail/countries/america/north-america/usa/california/san-francisco/golden-gate-bridge/',
		'isFeatured': true
	},
	{
		'attraction_name': 'Acropolis',
		'quoc_gia': 'HY LẠP',
		'region': 'ATHENS',
		'country_city': 'images/destination-image-thumbnail/countries/europe/southern-europe/greece/athens/acropolis/',
		'isFeatured': true
	}
];

const tour_list = [
	{
		'tour_name': 'Tour Tây Âu (Paris - Amsterdam)',
		'tour_summary': 'Châu Âu - Pháp - Bỉ - Hà Lan - Đức',
		'tour_time': '9 ngày 8 đêm',
		'tour_depart': 'TP.HCM',
		'tour_sale': 82000000,
		'iteration': ['Paris', 'Bruges', 'Brussels', 'Bonn', 'Cologne', 'Giethoorn', 'Amsterdam', 'Zaanse Schans', 'The Hague'],
		'book_day': [
			{
				'ID': 1,
				'depart_day': new Date(2022, 5, 24),
				'flight': 'Qatar Airway',
				'available_seat': 6,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 2,
				'depart_day': new Date(2022, 6, 7),
				'flight': 'Qatar Airway',
				'available_seat': 8,
				'isDiscount': true,
				'discount': 0.2
			}
		],
		'destination_portfolio': '',
		'review_point': 4.4,
		'reviews': [
			{
				'ID': 1,
				'guest_ID': 'Nguyễn Văn A',
				'guest_point': 5,
				'review_text': 'Cảm ơn vì đã tổ chức một tour tuyệt vời như vậy. Con người thân thiện, cảnh vật đẹp và thức ăn ngon. Rất đáng tiền. Đây là một chuyến đi đáng nhớ!! Hẹn gặp lại một ngày gần nhất!'
			},
			{
				'ID': 2,
				'guest_ID': 'Trần Thị B',
				'guest_point': 4.5,
				'review_text': 'Cảm ơn vì đã tổ chức một tour tuyệt vời như vậy. Con người thân thiện, cảnh vật đẹp và thức ăn ngon. Rất đáng tiền. Đây là một chuyến đi đáng nhớ!! Hẹn gặp lại một ngày gần nhất!'
			},
			{
				'ID': 3,
				'guest_ID': 'Huỳnh Văn C',
				'guest_point': 4,
				'review_text': 'Cảm ơn vì đã tổ chức một tour tuyệt vời như vậy. Con người thân thiện, cảnh vật đẹp và thức ăn ngon. Rất đáng tiền. Đây là một chuyến đi đáng nhớ!! Hẹn gặp lại một ngày gần nhất!'
			},
			{
				'ID': 4,
				'guest_ID': 'Trần Thị B',
				'guest_point': 3.5,
				'review_text': 'Cảm ơn vì đã tổ chức một tour tuyệt vời như vậy. Con người thân thiện, cảnh vật đẹp và thức ăn ngon. Rất đáng tiền. Đây là một chuyến đi đáng nhớ!! Hẹn gặp lại một ngày gần nhất!'
			},
			{
				'ID': 5,
				'guest_ID': 'Huỳnh Văn C',
				'guest_point': 4,
				'review_text': 'Cảm ơn vì đã tổ chức một tour tuyệt vời như vậy. Con người thân thiện, cảnh vật đẹp và thức ăn ngon. Rất đáng tiền. Đây là một chuyến đi đáng nhớ!! Hẹn gặp lại một ngày gần nhất!'
			}
		],
		'tour_image': 'images/tour-thumbnail/tour-1/tour-1-'
	},
	{
		'tour_name': 'Tour Vòng quanh Ý',
		'tour_summary': 'Châu Âu - Italy',
		'tour_time': '8 ngày 7 đêm',
		'tour_depart': 'TP.HCM',
		'tour_sale': 75000000,
		'iteration': ['Rome', 'Florence', 'Cinque Terre', 'Pisa', 'Venice', 'Milan'],
		'book_day': [
			{
				'ID': 1,
				'depart_day': new Date(2022, 5, 24),
				'flight': 'Emirates Airway',
				'available_seat': 3,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 2,
				'depart_day': new Date(2022, 6, 7),
				'flight': 'Emirates Airway',
				'available_seat': 5,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 3,
				'depart_day': new Date(2022, 6, 19),
				'flight': 'Emirates Airway',
				'available_seat': 4,
				'isDiscount': false,
				'discount': 0
			}
		],
		'destination_portfolio': '',
		'review_point': 4.4,
		'reviews': [
			{
				'ID': 1,
				'guest_ID': 'Trần Thị C',
				'guest_point': 3.8,
				'review_text': 'Một trải nghiệm tuyệt vời'
			}
		],
		'tour_image': 'images/tour-thumbnail/tour-2/tour-2-'
	},
	{
		'tour_name': 'Tour Singapore - Sentosa',
		'tour_summary': 'Châu Á - Đông Nam Á - Singapore',
		'tour_time': '4 ngày 3 đêm',
		'tour_depart': 'TP.HCM',
		'tour_sale': 14000000,
		'iteration': ['Singapore', 'Đảo Sentosa'],
		'book_day': [
			{
				'ID': 1,
				'depart_day': new Date(2022, 4, 30),
				'flight': 'Vietjet',
				'available_seat': 8,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 2,
				'depart_day': new Date(2022, 5, 7),
				'flight': 'Vietjet',
				'available_seat': 5,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 3,
				'depart_day': new Date(2022, 5, 21),
				'flight': 'Vietjet',
				'available_seat': 4,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 4,
				'depart_day': new Date(2022, 5, 28),
				'flight': 'Vietjet',
				'available_seat': 6,
				'isDiscount': false,
				'discount': 0
			},
			{
				'ID': 5,
				'depart_day': new Date(2022, 6, 4),
				'flight': 'Vietjet',
				'available_seat': 9,
				'isDiscount': false,
				'discount': 0
			},
			{
				'ID': 6,
				'depart_day': new Date(2022, 6, 11),
				'flight': 'Vietjet',
				'available_seat': 11,
				'isDiscount': false,
				'discount': 0
			},
			{
				'ID': 7,
				'depart_day': new Date(2022, 6, 25),
				'flight': 'Vietjet',
				'available_seat': 14,
				'isDiscount': false,
				'discount': 0
			}
		],
		'destination_portfolio': '',
		'review_point': 4.4,
		'reviews': [
			{
				'ID': 1,
				'guest_ID': 'Trần Thị C',
				'guest_point': 3.8,
				'review_text': 'Một trải nghiệm tuyệt vời'
			}
		],
		'tour_image': 'images/tour-thumbnail/tour-3/tour-3-'
	},
	{
		'tour_name': 'Tour Bờ Tây Hoa Kỳ',
		'tour_summary': 'Châu Mỹ - Bắc Mỹ - California - Nevada',
		'tour_time': '11 ngày 10 đêm',
		'tour_depart': 'TP.HCM',
		'tour_sale': 90000000,
		'iteration': ['San Francisco', 'San Jose', 'Los Angeles', 'Hollywood', 'Universal Studio', 'Las Vegas', 'Đập Hoover'],
		'book_day': [
			{
				'ID': 1,
				'depart_day': new Date(2022, 5, 18),
				'flight': 'Vietnam Airlines',
				'available_seat': 7,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 2,
				'depart_day': new Date(2022, 6, 22),
				'flight': 'Vietnam Airlines',
				'available_seat': 10,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 3,
				'depart_day': new Date(2022, 7, 20),
				'flight': 'Vietnam Airlines',
				'available_seat': 12,
				'isDiscount': false,
				'discount': 0
			},
			{
				'ID': 4,
				'depart_day': new Date(2022, 8, 10),
				'flight': 'Vietnam Airlines',
				'available_seat': 14,
				'isDiscount': false,
				'discount': 0
			}
		],
		'destination_portfolio': '',
		'review_point': 4.4,
		'reviews': [
			{
				'ID': 1,
				'guest_ID': 'Trần Thị C',
				'guest_point': 3.8,
				'review_text': 'Một trải nghiệm tuyệt vời'
			}
		],
		'tour_image': 'images/tour-thumbnail/tour-4/tour-4-'
	},
	{
		'tour_name': 'Tour Canada (Tiêu chuẩn)',
		'tour_summary': 'Châu Mỹ - Bắc Mỹ - Canada',
		'tour_time': '11 ngày 10 đêm',
		'tour_depart': 'TP.HCM',
		'tour_sale': 125000000,
		'iteration': ['Vancouver', 'Victoria', 'Montreal', 'Quebec', 'Ottawa', 'Toronto'],
		'book_day': [
			{
				'ID': 1,
				'depart_day': new Date(2022, 6, 4),
				'flight': 'EVA Air',
				'available_seat': 9,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 2,
				'depart_day': new Date(2022, 7, 6),
				'flight': 'EVA Air',
				'available_seat': 10,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 3,
				'depart_day': new Date(2022, 8, 8),
				'flight': 'EVA Air',
				'available_seat': 12,
				'isDiscount': false,
				'discount': 0
			},
			{
				'ID': 4,
				'depart_day': new Date(2022, 9, 8),
				'flight': 'EVA Air',
				'available_seat': 14,
				'isDiscount': false,
				'discount': 0
			},
			{
				'ID': 5,
				'depart_day': new Date(2022, 10, 6),
				'flight': 'EVA Air',
				'available_seat': 15,
				'isDiscount': false,
				'discount': 0
			}
		],
		'destination_portfolio': '',
		'review_point': 4.4,
		'reviews': [
			{
				'ID': 1,
				'guest_ID': 'Trần Thị C',
				'guest_point': 3.8,
				'review_text': 'Một trải nghiệm tuyệt vời'
			}
		],
		'tour_image': 'images/tour-thumbnail/tour-5/tour-5-'
	},
	{
		'tour_name': 'Tour Đà Nẵng - Huế',
		'tour_summary': 'Châu Á - Đông Nam Á - Việt Nam',
		'tour_time': '5 ngày 4 đêm',
		'tour_depart': 'TP.HCM',
		'tour_sale': 6100000,
		'iteration': ['Đà Nẵng', 'Hội An', 'Động Thiên Đường', 'Huế', 'Bà Nà', 'Cầu Vàng'],
		'book_day': [
			{
				'ID': 1,
				'depart_day': new Date(2022, 5, 4),
				'flight': 'Vietjet',
				'available_seat': 6,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 2,
				'depart_day': new Date(2022, 5, 11),
				'flight': 'Vietjet',
				'available_seat': 8,
				'isDiscount': true,
				'discount': 0.2
			},
			{
				'ID': 3,
				'depart_day': new Date(2022, 5, 18),
				'flight': 'Vietjet',
				'available_seat': 12,
				'isDiscount': false,
				'discount': 0
			},
			{
				'ID': 4,
				'depart_day': new Date(2022, 5, 25),
				'flight': 'Vietjet',
				'available_seat': 14,
				'isDiscount': false,
				'discount': 0
			}
		],
		'destination_portfolio': '',
		'review_point': 4.4,
		'reviews': [
			{
				'ID': 1,
				'guest_ID': 'Trần Thị C',
				'guest_point': 3.8,
				'review_text': 'Một trải nghiệm tuyệt vời'
			}
		],
		'tour_image': 'images/tour-thumbnail/tour-6/tour-6-'
	}
];

const blog_list = [
	{
		'blog_title': '15 thác nước hùng vĩ nhất thế giới',
		'date': new Date(2022, 4, 18),
		'author': 'iTravel',
		'summary': 'Thác Bản Giốc của Việt Nam được Thrillist liệt vào danh sách những dòng thác đẹp nhất, cùng những thác nổi tiếng như Niagara, Yosemite…',
		'blog_image_link': 'images/blog-image-thumbnail/blog-1-image/blog-1-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN']
	},
	{
		'blog_title': 'Kinh nghiệm du lịch Ý tự túc cực chi tiết giúp bạn tiết kiệm chi phí',
		'date': new Date(2022, 4, 16),
		'author': 'iTravel',
		'summary': 'Bên cạnh việc lựa chọn các tour du lịch Ý, bạn có thể tự mình lên lịch trình để khám phá đất nước tuyệt vời này đấy nhé.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-2-image/blog-2-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KINH NGHIỆM', 'ITALY']
	},
	{
		'blog_title': 'Samarkand - viên ngọc của phương Đông',
		'date': new Date(2022, 4, 14),
		'author': 'iTravel',
		'summary': 'Nằm trên thung lũng sông Zerafshan, Samarkand được thừa hưởng nhiều nguồn tài nguyên thiên nhiên dồi dào và là một vị trí quan trọng trong con đường tơ lụa giữa Trung Quốc và phương Tây xưa kia.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-3-image/blog-3-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'DANH LAM', 'UZBEKISTAN']
	},
	{
		'blog_title': 'Ngỡ ngàng trước vẻ đẹp ngoạn mục của Sơn Đoòng',
		'date': new Date(2022, 4, 13),
		'author': 'iTravel',
		'summary': 'Hang Sơn Đoòng là hang động lớn nhất, đẹp nhất trên thế giới và là một điếm đến không thể bỏ qua cho bất kì du khách nào đam mê du lịch mạo hiểm trên thế giới.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-4-image/blog-4-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN', 'VIỆT NAM']
	},
	{
		'blog_title': 'Khách Việt đi nước ngoài nhiễm Covid-19 xử lý thế nào?',
		'date': new Date(2022, 4, 11),
		'author': 'iTravel',
		'summary': 'Trong quá trình du lịch phát hiện nhiễm Covid-19, khách sẽ được cách ly theo quy định của điểm đến, chi phí có trong bảo hiểm.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-5-image/blog-5-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['TIN TỨC', 'COVID-19']
	},
	{
		'blog_title': 'Top 50 Món ăn ngon nhất thế giới (PT.1)',
		'date': new Date(2022, 4, 10),
		'author': 'iTravel',
		'summary': 'Danh sách 50 món ăn ngon nhất thế giới dưới đây chắc chắc sẽ khiến những ai yêu mến du lịch nói chung và ẩm thực nói riêng phải ngạc nhiên vì những đa dạng về màu sắc, gia vị và nguyên liệu được tận dụng khác nhau ở mỗi quốc gia.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-6-image/blog-6-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ẢM THỰC']
	},
	{
		'blog_title': 'Khám phá vườn quốc gia Yellowstone - kho báu của đất nước Hoa Kỳ',
		'date': new Date(2022, 4, 8),
		'author': 'iTravel',
		'summary': 'Vườn quốc gia Yellowstone là một địa điểm du lịch nổi tiếng của Hoa Kỳ, hấp dẫn bởi vẻ đẹp thiên nhiên hùng vĩ, ấn tượng và hệ sinh thái động thực vật vô cùng phong phú, đa dạng.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-7-image/blog-7-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN', 'HOA KỲ']
	},
	{
		'blog_title': 'Máy bay, tàu hỏa tăng chuyến dịp 30/4',
		'date': new Date(2022, 4, 6),
		'author': 'iTravel',
		'summary': 'Nhiều chuyến bay đến điểm du lịch vào ngày lễ 30/4 đã gần kín chỗ, giá vé gấp hai lần so với ngày bình thường.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-8-image/blog-8-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['TIN TỨC', 'VẬN CHUYỂN']
	},
	{
		'blog_title': 'Du lịch Maroc tự túc – Morocco nên đi chơi ở đâu? Đi mấy ngày?',
		'date': new Date(2022, 4, 5),
		'author': 'iTravel',
		'summary': 'Du lịch Maroc sẽ đưa bạn đi khám phá vô vàn điều bí ẩn với những công trình kiến trúc Hồi giáo ấn tượng và khiến bạn mê đắm cùng các trải nghiệm hấp dẫn “có một không hai” như cưỡi lạc đà, ngắm sao trên sa mạc…',
		'blog_image_link': 'images/blog-image-thumbnail/blog-9-image/blog-9-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KINH NGHIỆM', 'MA RỐC']
	},
	{
		'blog_title': 'Kinh nghiệm du lịch Nhật Bản tự túc: Visa, ăn ở và vui chơi',
		'date': new Date(2022, 4, 4),
		'author': 'iTravel',
		'summary': 'Theo bảng xếp hạng Business Insider, Nhật Bản là một địa điểm du lịch “không-thể-bỏ-qua” trong năm 2022. Không chỉ đẹp, đất nước Phù Tang còn thu hút khách du lịch bởi nền văn hóa độc đáo, thần bí.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-10-image/blog-10-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KINH NGHIỆM', 'NHẬT BẢN']
	},
	{
		'blog_title': '“Bỏ túi ngay” kinh nghiệm du lịch Indonesia mới nhất dành cho bạn',
		'date': new Date(2022, 4, 3),
		'author': 'iTravel',
		'summary': 'Indonesia là một quốc đảo lớn nhất Đông Nam Á. Nổi tiếng với những cánh rừng xanh ngút ngàn , những bãi biển xinh đẹp hay Đảo thiên đường Bali tuyệt đẹp, Những ngôi đến linh thiêng có kiến trúc độc đáo.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-11-image/blog-11-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KINH NGHIỆM', 'INDONESIA']
	},
	{
		'blog_title': 'Khám phá cung đường “nghẹt thở” Đại Tây Dương tại Na Uy',
		'date': new Date(2022, 4, 2),
		'author': 'iTravel',
		'summary': 'Bạn có phải là một người ưa mạo hiểm? Và hiện tại bạn không biết nên tìm đến đâu để trải nghiệm và chinh phục những thử thách? Vậy hãy tìm ngay đến cung đường Đại Tây Dương – một trong những địa điểm nổi tiếng khi du lịch Na Uy, để có thể chinh phục những con đường dốc cao vút trên mặt biển.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-12-image/blog-12-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'NA UY', 'CUNG ĐƯỜNG']
	},
	{
		'blog_title': 'Những hòn đảo kỳ lạ nhất trên thế giới',
		'date': new Date(2022, 4, 1),
		'author': 'iTravel',
		'summary': 'Hòn đảo bị nguyền rủa, đảo"ngoài hành tinh", đảo búp bê... là một trong những hòn đảo lạ lùng và kỳ quặc nhất trên thế giới. Nếu có cơ hội tới một trong những hòn đảo này chắc chắn bạn sẽ nhận được không ít điều bất ngờ thú vị và cả sợ hãi.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-13-image/blog-13-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'BIỂN ĐẢO']
	},
	{
		'blog_title': '12 sự thật thú vị về núi Phú Sĩ ngay cả người Nhật cũng không biết',
		'date': new Date(2022, 3, 30),
		'author': 'iTravel',
		'summary': 'Núi Phú Sĩ - ngọn núi linh thiêng với đỉnh núi quanh năm tuyết phủ trắng nằm giữa hai tỉnh Yamanashi và Shizuoka của Nhật Bản. Với độ cao 3,776m đây chính là ngọn núi cao nhất Nhật Bản. Cùng tìm hiểu 12 sự thật thú vị về núi Phú Sĩ mà thậm chí đến cả người Nhật cũng chưa chắc đã biết thông qua bài viết dưới đây nhé!',
		'blog_image_link': 'images/blog-image-thumbnail/blog-14-image/blog-14-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'NHẬT BẢN', 'VĂN HOÁ', 'THIÊN NHIÊN']
	},
	{
		'blog_title': 'Top 14 những tòa lâu đài đẹp nhất nước Đức chờ bạn đến khám phá',
		'date': new Date(2022, 3, 15),
		'author': 'iTravel',
		'summary': 'Cùng tìm hiểu top 14 lâu đài đẹp nhất nước Đức và cùng nhau khám phá những điểm đến tuyệt đẹp này nhé.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-15-image/blog-15-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'DANH LAM']
	},
	{
		'blog_title': 'Khám phá nét độc đáo trong trang phục truyền thống của người Đức',
		'date': new Date(2022, 3, 13),
		'author': 'iTravel',
		'summary': 'Văn hóa Đức không chỉ được thể hiện qua những thói quen, phong tục tập quán, hay hương vị ẩm thực, các công trình kiến trúc,... mà nó còn được thể hiện bằng những bộ trang phục truyền thống cổ xưa.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-16-image/blog-16-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'VĂN HOÁ']
	},
	{
		'blog_title': 'Khám phá các bảo tàng xe hơi ở Đức nổi tiếng nhất',
		'date': new Date(2022, 3, 8),
		'author': 'iTravel',
		'summary': 'Được mệnh danh là thủ phủ của xe hơi, vì thế đặt chân tới Đức mà không ghé thăm các bảo tàng xe hơi ở Đức là thiếu sót lớn đấy nhé. Tuy nhiên, bạn đã có đủ thông tin và biết được ở Đức có những bảo tàng xe hơi nào chưa?',
		'blog_image_link': 'images/blog-image-thumbnail/blog-17-image/blog-17-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'VĂN HOÁ']
	},
	{
		'blog_title': 'Khám phá tinh hoa của ẩm thực Đức trong những món ăn đơn giản',
		'date': new Date(2022, 3, 6),
		'author': 'iTravel',
		'summary': 'Ngoài là đất nước có nền bóng đá rất phát triển. Thì ẩm thực của nước Đức cũng không hề kém cạnh. Năm ở khu vực trung tâm Châu Âu, nên ẩm thực của nước Đức có sự giao thoa đa dạng từ các nước Châu Âu. Nhời vậy mà nền ẩm thực của nơi đây cực kì đa dạng.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-18-image/blog-18-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'ẨM THỰC']
	},
	{
		'blog_title': 'Lang thang rừng Đen - quê hương truyện cổ tích Grimm',
		'date': new Date(2022, 3, 5),
		'author': 'iTravel',
		'summary': 'Vì sao rừng Đen lại là nguồn cảm hứng sáng tác cho bao câu chuyện cổ tích nước Đức? Thử một lần rong ruổi rừng Đen và ghi lại trải nghiệm tuyệt diệu trong khu rừng cổ tích này!',
		'blog_image_link': 'images/blog-image-thumbnail/blog-19-image/blog-19-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'THIÊN NHIÊN']
	}
];
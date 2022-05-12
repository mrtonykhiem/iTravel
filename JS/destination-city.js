// JavaScript Document

const tour_list = [
	{
		'tour_name': 'Tour Tây Âu (Paris - Amsterdam)',
		'tour_summary': 'Châu Âu - Pháp - Bỉ - Hà Lan - Đức',
		'tour_time': '9 ngày 8 đêm',
		'tour_length': 9,
		'tour_depart': 'TP.HCM',
		'tour_sale': 82000000,
		'iteration': ['Paris', 'Bruges', 'Brussels', 'Bonn', 'Cologne', 'Giethoorn', 'Amsterdam', 'Zaanse Schans', 'The Hague'],
		'tour_image': 'images/tour-thumbnail/tour-1/tour-1-',
		'tour_type': ['KHÁM PHÁ', 'VĂN HOÁ'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'tour_book': [
			{
				'depart_date': new Date('2022/6/7'),
				'return_date': new Date('2022/6/15'),
				'flight': 'Qatar Airway',
				'depart_flight_ID': ['QR971', 'QR041'],
				'return_flight_ID': ['QR274', 'QR970'],
				'available_book': 2
			}
		],
		'tour_country': ['Pháp', 'Bỉ', 'Hà Lan', 'Đức'],
		'tour_score': 4.4,
		'tour_sale_off': 0.2,
		'tour_interest': 383
	},
	{
		'tour_name': 'Tour Vòng quanh Ý',
		'tour_summary': 'Châu Âu - Italy',
		'tour_time': '8 ngày 7 đêm',
		'tour_length': 8,
		'tour_depart': 'TP.HCM',
		'tour_sale': 75000000,
		'iteration': ['Rome', 'Florence', 'Cinque Terre', 'Pisa', 'Venice', 'Milan'],
		'tour_image': 'images/tour-thumbnail/tour-2/tour-2-',
		'tour_type': ['KHÁM PHÁ', 'VĂN HOÁ', 'SINH THÁI'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/6/7'),
				'return_date': new Date('2022/6/15'),
				'flight': 'Qatar Airway',
				'depart_flight_ID': ['EK393', 'EK97'],
				'return_flight_ID': ['EK92', 'EK392'],
				'available_book': 6
			},
			{
				'depart_date': new Date('2022/7/19'),
				'return_date': new Date('2022/7/25'),
				'flight': 'Qatar Airway',
				'depart_flight_ID': ['EK393', 'EK97'],
				'return_flight_ID': ['EK92', 'EK392'],
				'available_book': 6
			}
		],
		'tour_country': ['Italy'],
		'tour_score': 4.2,
		'tour_sale_off': 0.15,
		'tour_interest': 240
	},
	{
		'tour_name': 'Tour Singapore - Sentosa',
		'tour_summary': 'Châu Á - Đông Nam Á - Singapore',
		'tour_time': '4 ngày 3 đêm',
		'tour_length': 4,
		'tour_depart': 'TP.HCM',
		'tour_sale': 14000000,
		'iteration': ['Singapore', 'Đảo Sentosa'],
		'tour_image': 'images/tour-thumbnail/tour-3/tour-3-',
		'tour_type': ['KHÁM PHÁ'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/5/20'),
				'return_date': new Date('2022/5/23'),
				'flight': 'Singapore Airlines',
				'depart_flight_ID': ['SQ191'],
				'return_flight_ID': ['SQ194'],
				'available_book': 6
			},
			{
				'depart_date': new Date('2022/6/3'),
				'return_date': new Date('2022/6/6'),
				'flight': 'Singapore Airlines',
				'depart_flight_ID': ['SQ191'],
				'return_flight_ID': ['SQ194'],
				'available_book': 9
			},
			{
				'depart_date': new Date('2022/6/17'),
				'return_date': new Date('2022/6/20'),
				'flight': 'Singapore Airlines',
				'depart_flight_ID': ['SQ191'],
				'return_flight_ID': ['SQ194'],
				'available_book': 9
			}
		],
		'tour_country': ['Singapore'],
		'tour_score': 4.8,
		'tour_sale_off': 0.15,
		'tour_interest': 510
	},
	{
		'tour_name': 'Tour Bờ Tây Hoa Kỳ',
		'tour_summary': 'Châu Mỹ - Bắc Mỹ - California - Nevada',
		'tour_time': '11 ngày 10 đêm',
		'tour_length': 11,
		'tour_depart': 'TP.HCM',
		'tour_sale': 90000000,
		'iteration': ['San Francisco', 'San Jose', 'Los Angeles', 'Hollywood', 'Universal Studio', 'Las Vegas', 'Đập Hoover'],
		'tour_image': 'images/tour-thumbnail/tour-4/tour-4-',
		'tour_type': ['KHÁM PHÁ', 'VĂN HOÁ'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/6/22'),
				'return_date': new Date('2022/6/29'),
				'flight': 'Vietnam Airlines',
				'depart_flight_ID': ['VN98'],
				'return_flight_ID': ['đang cập nhật'],
				'available_book': 9
			},
			{
				'depart_date': new Date('2022/7/20'),
				'return_date': new Date('2022/7/27'),
				'flight': 'Vietnam Airlines',
				'depart_flight_ID': ['VN98'],
				'return_flight_ID': ['đang cập nhật'],
				'available_book': 9
			}
		],
		'tour_country': ['Hoa Kỳ'],
		'tour_score': 4.5,
		'tour_sale_off': 0.0,
		'tour_interest': 401
	},
	{
		'tour_name': 'Tour Canada (Tiêu chuẩn)',
		'tour_summary': 'Châu Mỹ - Bắc Mỹ - Canada',
		'tour_time': '11 ngày 10 đêm',
		'tour_length': 11,
		'tour_depart': 'TP.HCM',
		'tour_sale': 125000000,
		'iteration': ['Vancouver', 'Victoria', 'Montreal', 'Quebec', 'Ottawa', 'Toronto'],
		'tour_image': 'images/tour-thumbnail/tour-5/tour-5-',
		'tour_type': ['KHÁM PHÁ', 'VĂN HOÁ', 'SINH THÁI'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/6/4'),
				'return_date': new Date('2022/6/13'),
				'flight': 'Korean Air',
				'depart_flight_ID': ['KE684', 'KE071'],
				'return_flight_ID': ['KE074', 'KE683'],
				'available_book': 9,
				'sale_off': 0
			}
		],
		'tour_country': ['Canada'],
		'tour_score': 4.3,
		'tour_sale_off': 0,
		'tour_interest': 406
	},
	{
		'tour_name': 'Tour Đà Nẵng - Huế',
		'tour_summary': 'Châu Á - Đông Nam Á - Việt Nam',
		'tour_time': '5 ngày 4 đêm',
		'tour_length': 5,
		'tour_depart': 'TP.HCM',
		'tour_sale': 6100000,
		'iteration': ['Đà Nẵng', 'Hội An', 'Động Thiên Đường', 'Huế', 'Bà Nà', 'Cầu Vàng'],
		'tour_image': 'images/tour-thumbnail/tour-6/tour-6-',
		'tour_type': ['KHÁM PHÁ', 'SINH THÁI', 'NGHỈ DƯỠNG'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/6/4'),
				'return_date': new Date('2022/6/13'),
				'flight': 'Korean Air',
				'depart_flight_ID': ['KE684', 'KE071'],
				'return_flight_ID': ['KE074', 'KE683'],
				'available_book': 9
			}
		],
		'tour_country': ['Việt Nam'],
		'tour_score': 4,
		'tour_sale_off': 0.2,
		'tour_interest': 515
	},
	{
		'tour_name': 'Tour vòng quanh Thuỵ Sĩ',
		'tour_summary': 'Châu Âu - Thụy Sĩ',
		'tour_time': '8 ngày 7 đêm',
		'tour_length': 8,
		'tour_depart': 'TP.HCM',
		'tour_sale': 91000000,
		'iteration': ['Zurich', 'Brienz', 'Iseltwald', 'Interlaken', 'Grindelwald', 'Blausee', 'Bern', 'Chillon', 'Geneva'],
		'tour_image': 'images/tour-thumbnail/tour-7/tour-7-',
		'tour_type': ['KHÁM PHÁ', 'SINH THÁI', 'VĂN HOÁ'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/6/17'),
				'return_date': new Date('2022/6/23'),
				'flight': 'Emirates',
				'depart_flight_ID': ['EK393', 'EK87'],
				'return_flight_ID': ['EK86', 'EK392'],
				'available_book': 2
			},
			{
				'depart_date': new Date('2022/8/26'),
				'return_date': new Date('2022/9/1'),
				'flight': 'Emirates',
				'depart_flight_ID': ['EK393', 'EK87'],
				'return_flight_ID': ['EK86', 'EK392'],
				'available_book': 6
			}
		],
		'tour_country': ['Thụy Sĩ'],
		'tour_score': 4.6,
		'tour_sale_off': 0.1,
		'tour_interest': 424
	},
	{
		'tour_name': 'Tour Tây Âu (Rome - Paris)',
		'tour_summary': 'Châu Âu - Ý - Thuỵ Sĩ - Pháp',
		'tour_time': '11 ngày 10 đêm',
		'tour_length': 11,
		'tour_depart': 'TP.HCM',
		'tour_sale': 107000000,
		'iteration': ['Rome', 'Pisa', 'Venice', 'Milan', 'Lucern', 'Titlis', 'Zurich', 'Rhine Falls', 'Strasbourg', 'Paris'],
		'tour_image': 'images/tour-thumbnail/tour-8/tour-8-',
		'tour_type': ['KHÁM PHÁ', 'SINH THÁI', 'VĂN HOÁ'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/6/7'),
				'return_date': new Date('2022/6/16'),
				'flight': 'Emirates',
				'depart_flight_ID': ['EK393', 'EK87'],
				'return_flight_ID': ['EK86', 'EK392'],
				'available_book': 2,
				'sale_off': 5000000
			}
		],
		'tour_country': ['Italy', 'Thụy Sĩ', 'Pháp'],
		'tour_score': 4.1,
		'tour_sale_off': 0.15,
		'tour_interest': 285
	},
	{
		'tour_name': 'Tour vòng quanh Thổ Nhĩ Kỳ',
		'tour_summary': 'Châu Âu - Châu Á - Thổ Nhĩ Kỳ',
		'tour_time': '11 ngày 10 đêm',
		'tour_length': 11,
		'tour_depart': 'TP.HCM',
		'tour_sale': 43000000,
		'iteration': ['Istanbul', 'Canakkale', 'Pergamon', 'Kusadasi', 'Selcuk', 'Pamukkale', 'Konya', 'Cappadocia', 'Ankara'],
		'tour_image': 'images/tour-thumbnail/tour-9/tour-9-',
		'tour_type': ['KHÁM PHÁ', 'SINH THÁI', 'VĂN HOÁ'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/6/7'),
				'return_date': new Date('2022/6/17'),
				'flight': 'Turkish Airlines',
				'depart_flight_ID': ['TK163'],
				'return_flight_ID': ['TK162'],
				'available_book': 3
			},
			{
				'depart_date': new Date('2022/6/14'),
				'return_date': new Date('2022/6/24'),
				'flight': 'Turkish Airlines',
				'depart_flight_ID': ['TK163'],
				'return_flight_ID': ['TK162'],
				'available_book': 3
			},
			{
				'depart_date': new Date('2022/6/21'),
				'return_date': new Date('2022/7/1'),
				'flight': 'Turkish Airlines',
				'depart_flight_ID': ['TK163'],
				'return_flight_ID': ['TK162'],
				'available_book': 3
			}
		],
		'tour_country': ['Thổ Nhĩ Kỳ'],
		'tour_score': 4.7,
		'tour_sale_off': 0.2,
		'tour_interest': 272
	},
	{
		'tour_name': 'Tour Dubai',
		'tour_summary': 'Châu Á - Trung Đông - UAE',
		'tour_time': '5 ngày',
		'tour_length': 5,
		'tour_depart': 'TP.HCM',
		'tour_sale': 30000000,
		'iteration': ['Dubai', 'Abu Dhabi'],
		'tour_image': 'images/tour-thumbnail/tour-10/tour-10-',
		'tour_type': ['KHÁM PHÁ', 'NGHỈ DƯỠNG'],
		'tour_transport': ['Máy bay', 'Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/5/17'),
				'return_date': new Date('2022/5/21'),
				'flight': 'Emirates',
				'depart_flight_ID': ['EK393'],
				'return_flight_ID': ['EK392'],
				'available_book': 9
			},
			{
				'depart_date': new Date('2022/5/24'),
				'return_date': new Date('2022/5/28'),
				'flight': 'Emirates',
				'depart_flight_ID': ['EK393'],
				'return_flight_ID': ['EK392'],
				'available_book': 7
			},
			{
				'depart_date': new Date('2022/5/31'),
				'return_date': new Date('2022/6/4'),
				'flight': 'Emirates',
				'depart_flight_ID': ['TK163'],
				'return_flight_ID': ['TK162'],
				'available_book': 9
			}
		],
		'tour_country': ['UAE'],
		'tour_score': 4.5,
		'tour_sale_off': 0.2,
		'tour_interest': 244
	},
	{
		'tour_name': 'Tour khám phá Angkor Wat',
		'tour_summary': 'Châu Á - Campuchia',
		'tour_time': '4 ngày 3 đêm',
		'tour_length': 4,
		'tour_depart': 'TP.HCM',
		'tour_sale': 6600000,
		'iteration': ['Siem Reap', 'Angkor Wat', 'Phnom Penh'],
		'tour_image': 'images/tour-thumbnail/tour-11/tour-11-',
		'tour_type': ['KHÁM PHÁ', 'SINH THÁI', 'VĂN HOÁ'],
		'tour_transport': ['Xe khách'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/5/14'),
				'return_date': new Date('2022/5/17'),
				'flight': 'Xe khách',
				'depart_flight_ID': ['XE'],
				'return_flight_ID': ['XE'],
				'available_book': 9
			},
			{
				'depart_date': new Date('2022/5/19'),
				'return_date': new Date('2022/5/22'),
				'flight': 'Xe khách',
				'depart_flight_ID': ['XE'],
				'return_flight_ID': ['XE'],
				'available_book': 9
			},
			{
				'depart_date': new Date('2022/5/26'),
				'return_date': new Date('2022/5/29'),
				'flight': 'Xe khách',
				'depart_flight_ID': ['XE'],
				'return_flight_ID': ['XE'],
				'available_book': 9
			},
			{
				'depart_date': new Date('2022/6/2'),
				'return_date': new Date('2022/6/5'),
				'flight': 'Xe khách',
				'depart_flight_ID': ['XE'],
				'return_flight_ID': ['XE'],
				'available_book': 9
			}
		],
		'tour_country': ['Campuchia'],
		'tour_score': 4,
		'tour_sale_off': 0.15,
		'tour_interest': 220
	},
	{
		'tour_name': 'Tour khám phá Bangkok - Pattaya',
		'tour_summary': 'Châu Á - Thailand',
		'tour_time': '5 ngày',
		'tour_length': 5,
		'tour_depart': 'TP.HCM',
		'tour_sale': 7100000,
		'iteration': ['Bangkok', 'Khao Chee Chan', 'Pattaya', 'Coral Island', 'Floating Market', 'Phra Khao Yai', 'Muang Boran'],
		'tour_image': 'images/tour-thumbnail/tour-12/tour-12-',
		'tour_type': ['KHÁM PHÁ', 'VĂN HOÁ'],
		'tour_transport': ['Xe khách', 'Máy bay'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/5/12'),
				'return_date': new Date('2022/5/16'),
				'flight': 'Vietjet Air',
				'depart_flight_ID': ['VJ803'],
				'return_flight_ID': ['VJ804'],
				'available_book': 5
			},
			{
				'depart_date': new Date('2022/5/18'),
				'return_date': new Date('2022/5/22'),
				'flight': 'Vietjet Air',
				'depart_flight_ID': ['VJ803'],
				'return_flight_ID': ['VJ804'],
				'available_book': 5
			},
			{
				'depart_date': new Date('2022/5/25'),
				'return_date': new Date('2022/5/29'),
				'flight': 'Vietjet Air',
				'depart_flight_ID': ['VJ803'],
				'return_flight_ID': ['VJ804'],
				'available_book': 5
			}
		],
		'tour_country': ['Thái Lan'],
		'tour_score': 4.3,
		'tour_sale_off': 0,
		'tour_interest': 301
	},
	{
		'tour_name': 'Tour Nam Âu',
		'tour_summary': 'Châu Âu - Pháp - Monaco - Tây Ban Nha - Bồ Đào Nha',
		'tour_time': '10 ngày',
		'tour_length': 10,
		'tour_depart': 'Hà Nội',
		'tour_sale': 86000000,
		'iteration': ['Nice', 'Cannes', 'Monaco', 'Marseilles', 'Avignon', 'Barcelona', 'Madrid', 'Salamanca', 'Porto', 'Fatima', 'Lisbon'],
		'tour_image': 'images/tour-thumbnail/tour-16/tour-16-',
		'tour_type': ['KHÁM PHÁ', 'SINH THÁI', 'NGHỈ DƯỠNG'],
		'tour_transport': ['Xe khách', 'Máy bay'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/6/12'),
				'return_date': new Date('2022/6/21'),
				'flight': 'Turkish Airlines',
				'depart_flight_ID': ['TK165', 'TK1813'],
				'return_flight_ID': ['TK1760', 'TK164'],
				'available_book': 9
			},
			{
				'depart_date': new Date('2022/7/3'),
				'return_date': new Date('2022/7/12'),
				'flight': 'Turkish Airlines',
				'depart_flight_ID': ['TK165', 'TK1813'],
				'return_flight_ID': ['TK1760', 'TK164'],
				'available_book': 9
			}
		],
		'tour_country': ['Pháp', 'Tây Ban Nha', 'Bồ Đào Nha', 'Monaco'],
		'tour_score': 4.6,
		'tour_sale_off': 0.0,
		'tour_interest': 442
	},
	{
		'tour_name': 'Tour Tây Âu (Frankfurt - Paris)',
		'tour_summary': 'Châu Âu - Đức - Luxembourg - Pháp - Bỉ - Hà Lan',
		'tour_time': '9 ngày 8 đêm',
		'tour_length': 9,
		'tour_depart': 'Hà Nội',
		'tour_sale': 52000000,
		'iteration': ['Frankfurt', 'Cologne', 'Amsterdam', 'Giethoorn', 'Zaanse Schans', 'Brussels', 'Paris', 'Luxembourg'],
		'tour_image': 'images/tour-thumbnail/tour-17/tour-17-',
		'tour_type': ['KHÁM PHÁ', 'SINH THÁI', 'VĂN HOÁ'],
		'tour_transport': ['Xe khách', 'Máy bay'],
		'isSale': true,
		'tour_book': [
			{
				'depart_date': new Date('2022/5/27'),
				'return_date': new Date('2022/6/3'),
				'flight': 'Bamboo Airways',
				'depart_flight_ID': ['QH73'],
				'return_flight_ID': ['QH74'],
				'available_book': 9
			},
			{
				'depart_date': new Date('2022/6/6'),
				'return_date': new Date('2022/6/13'),
				'flight': 'Bamboo Airways',
				'depart_flight_ID': ['QH73'],
				'return_flight_ID': ['QH74'],
				'available_book': 9
			}
		],
		'tour_country': ['Pháp', 'Bỉ', 'Hà Lan', 'Đức', 'Luxembourg'],
		'tour_score': 4.7,
		'tour_sale_off': 0,
		'tour_interest': 355
	}
];

const blog_list = [
	{
		'blog_title': '15 thác nước hùng vĩ nhất thế giới',
		'date': new Date('2022/4/18'),
		'author': 'iTravel',
		'summary': 'Thác Bản Giốc của Việt Nam được Thrillist liệt vào danh sách những dòng thác đẹp nhất, cùng những thác nổi tiếng như Niagara, Yosemite…',
		'blog_image_link': 'images/blog-image-thumbnail/blog-1-image/blog-1-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN'],
		'blog_view': 43403,
		'blog_like': 3211
	},
	{
		'blog_title': 'Kinh nghiệm du lịch Ý tự túc cực chi tiết giúp bạn tiết kiệm chi phí',
		'date': new Date('2022/4/16'),
		'author': 'iTravel',
		'summary': 'Bên cạnh việc lựa chọn các tour du lịch Ý, bạn có thể tự mình lên lịch trình để khám phá đất nước tuyệt vời này đấy nhé.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-2-image/blog-2-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KINH NGHIỆM', 'ITALY'],
		'blog_view': 33403,
		'blog_like': 4211
	},
	{
		'blog_title': 'Samarkand - viên ngọc của phương Đông',
		'date': new Date('2022/4/14'),
		'author': 'iTravel',
		'summary': 'Nằm trên thung lũng sông Zerafshan, Samarkand được thừa hưởng nhiều nguồn tài nguyên thiên nhiên dồi dào và là một vị trí quan trọng trong con đường tơ lụa giữa Trung Quốc và phương Tây xưa kia.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-3-image/blog-3-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'DANH LAM', 'UZBEKISTAN'],
		'blog_view': 13403,
		'blog_like': 1500
	},
	{
		'blog_title': 'Ngỡ ngàng trước vẻ đẹp ngoạn mục của Sơn Đoòng',
		'date': new Date('2022/4/13'),
		'author': 'iTravel',
		'summary': 'Hang Sơn Đoòng là hang động lớn nhất, đẹp nhất trên thế giới và là một điếm đến không thể bỏ qua cho bất kì du khách nào đam mê du lịch mạo hiểm trên thế giới.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-4-image/blog-4-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN', 'VIỆT NAM'],
		'blog_view': 63403,
		'blog_like': 6242
	},
	{
		'blog_title': 'Khách Việt đi nước ngoài nhiễm Covid-19 xử lý thế nào?',
		'date': new Date('2022/4/11'),
		'author': 'iTravel',
		'summary': 'Trong quá trình du lịch phát hiện nhiễm Covid-19, khách sẽ được cách ly theo quy định của điểm đến, chi phí có trong bảo hiểm.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-5-image/blog-5-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['TIN TỨC', 'COVID-19'],
		'blog_view': 11457,
		'blog_like': 1603
	},
	{
		'blog_title': 'Top 50 Món ăn ngon nhất thế giới (PT.1)',
		'date': new Date('2022/4/10'),
		'author': 'iTravel',
		'summary': 'Danh sách 50 món ăn ngon nhất thế giới dưới đây chắc chắc sẽ khiến những ai yêu mến du lịch nói chung và ẩm thực nói riêng phải ngạc nhiên vì những đa dạng về màu sắc, gia vị và nguyên liệu được tận dụng khác nhau ở mỗi quốc gia.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-6-image/blog-6-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ẢM THỰC'],
		'blog_view': 21483,
		'blog_like': 4603
	},
	{
		'blog_title': 'Khám phá vườn quốc gia Yellowstone - kho báu của đất nước Hoa Kỳ',
		'date': new Date('2022/4/8'),
		'author': 'iTravel',
		'summary': 'Vườn quốc gia Yellowstone là một địa điểm du lịch nổi tiếng của Hoa Kỳ, hấp dẫn bởi vẻ đẹp thiên nhiên hùng vĩ, ấn tượng và hệ sinh thái động thực vật vô cùng phong phú, đa dạng.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-7-image/blog-7-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN', 'HOA KỲ'],
		'blog_view': 21401,
		'blog_like': 3654
	},
	{
		'blog_title': 'Máy bay, tàu hỏa tăng chuyến dịp 30/4',
		'date': new Date('2022/4/6'),
		'author': 'iTravel',
		'summary': 'Nhiều chuyến bay đến điểm du lịch vào ngày lễ 30/4 đã gần kín chỗ, giá vé gấp hai lần so với ngày bình thường.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-8-image/blog-8-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['TIN TỨC', 'VẬN CHUYỂN'],
		'blog_view': 12452,
		'blog_like': 1203
	},
	{
		'blog_title': 'Du lịch Maroc tự túc – Morocco nên đi chơi ở đâu? Đi mấy ngày?',
		'date': new Date('2022/4/5'),
		'author': 'iTravel',
		'summary': 'Du lịch Maroc sẽ đưa bạn đi khám phá vô vàn điều bí ẩn với những công trình kiến trúc Hồi giáo ấn tượng và khiến bạn mê đắm cùng các trải nghiệm hấp dẫn “có một không hai” như cưỡi lạc đà, ngắm sao trên sa mạc…',
		'blog_image_link': 'images/blog-image-thumbnail/blog-9-image/blog-9-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KINH NGHIỆM', 'MA RỐC'],
		'blog_view': 11788,
		'blog_like': 2611
	},
	{
		'blog_title': 'Kinh nghiệm du lịch Nhật Bản tự túc: Visa, ăn ở và vui chơi',
		'date': new Date('2022/4/4'),
		'author': 'iTravel',
		'summary': 'Theo bảng xếp hạng Business Insider, Nhật Bản là một địa điểm du lịch “không-thể-bỏ-qua” trong năm 2022. Không chỉ đẹp, đất nước Phù Tang còn thu hút khách du lịch bởi nền văn hóa độc đáo, thần bí.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-10-image/blog-10-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KINH NGHIỆM', 'NHẬT BẢN'],
		'blog_view': 33472,
		'blog_like': 4687
	},
	{
		'blog_title': '“Bỏ túi ngay” kinh nghiệm du lịch Indonesia mới nhất dành cho bạn',
		'date': new Date('2022/4/3'),
		'author': 'iTravel',
		'summary': 'Indonesia là một quốc đảo lớn nhất Đông Nam Á. Nổi tiếng với những cánh rừng xanh ngút ngàn , những bãi biển xinh đẹp hay Đảo thiên đường Bali tuyệt đẹp, Những ngôi đến linh thiêng có kiến trúc độc đáo.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-11-image/blog-11-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KINH NGHIỆM', 'INDONESIA'],
		'blog_view': 28421,
		'blog_like': 3018
	},
	{
		'blog_title': 'Khám phá cung đường “nghẹt thở” Đại Tây Dương tại Na Uy',
		'date': new Date('2022/4/2'),
		'author': 'iTravel',
		'summary': 'Bạn có phải là một người ưa mạo hiểm? Và hiện tại bạn không biết nên tìm đến đâu để trải nghiệm và chinh phục những thử thách? Vậy hãy tìm ngay đến cung đường Đại Tây Dương – một trong những địa điểm nổi tiếng khi du lịch Na Uy, để có thể chinh phục những con đường dốc cao vút trên mặt biển.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-12-image/blog-12-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'NA UY', 'CUNG ĐƯỜNG'],
		'blog_view': 18700,
		'blog_like': 1245
	},
	{
		'blog_title': 'Những hòn đảo kỳ lạ nhất trên thế giới',
		'date': new Date('2022/4/1'),
		'author': 'iTravel',
		'summary': 'Hòn đảo bị nguyền rủa, đảo"ngoài hành tinh", đảo búp bê... là một trong những hòn đảo lạ lùng và kỳ quặc nhất trên thế giới. Nếu có cơ hội tới một trong những hòn đảo này chắc chắn bạn sẽ nhận được không ít điều bất ngờ thú vị và cả sợ hãi.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-13-image/blog-13-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'BIỂN ĐẢO'],
		'blog_view': 29113,
		'blog_like': 2894
	},
	{
		'blog_title': '12 sự thật thú vị về núi Phú Sĩ ngay cả người Nhật cũng không biết',
		'date': new Date('2022/3/30'),
		'author': 'iTravel',
		'summary': 'Núi Phú Sĩ - ngọn núi linh thiêng với đỉnh núi quanh năm tuyết phủ trắng nằm giữa hai tỉnh Yamanashi và Shizuoka của Nhật Bản. Với độ cao 3,776m đây chính là ngọn núi cao nhất Nhật Bản. Cùng tìm hiểu 12 sự thật thú vị về núi Phú Sĩ mà thậm chí đến cả người Nhật cũng chưa chắc đã biết thông qua bài viết dưới đây nhé!',
		'blog_image_link': 'images/blog-image-thumbnail/blog-14-image/blog-14-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'NHẬT BẢN', 'VĂN HOÁ', 'THIÊN NHIÊN'],
		'blog_view': 38815,
		'blog_like': 4122
	},
	{
		'blog_title': 'Top 14 những tòa lâu đài đẹp nhất nước Đức chờ bạn đến khám phá',
		'date': new Date('2022/3/15'),
		'author': 'iTravel',
		'summary': 'Cùng tìm hiểu top 14 lâu đài đẹp nhất nước Đức và cùng nhau khám phá những điểm đến tuyệt đẹp này nhé.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-15-image/blog-15-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'DANH LAM'],
		'blog_view': 25542,
		'blog_like': 2800
	},
	{
		'blog_title': 'Khám phá nét độc đáo trong trang phục truyền thống của người Đức',
		'date': new Date('2022/3/13'),
		'author': 'iTravel',
		'summary': 'Văn hóa Đức không chỉ được thể hiện qua những thói quen, phong tục tập quán, hay hương vị ẩm thực, các công trình kiến trúc,... mà nó còn được thể hiện bằng những bộ trang phục truyền thống cổ xưa.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-16-image/blog-16-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'VĂN HOÁ'],
		'blog_view': 18457,
		'blog_like': 2005
	},
	{
		'blog_title': 'Khám phá các bảo tàng xe hơi ở Đức nổi tiếng nhất',
		'date': new Date('2022/3/8'),
		'author': 'iTravel',
		'summary': 'Được mệnh danh là thủ phủ của xe hơi, vì thế đặt chân tới Đức mà không ghé thăm các bảo tàng xe hơi ở Đức là thiếu sót lớn đấy nhé. Tuy nhiên, bạn đã có đủ thông tin và biết được ở Đức có những bảo tàng xe hơi nào chưa?',
		'blog_image_link': 'images/blog-image-thumbnail/blog-17-image/blog-17-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'VĂN HOÁ'],
		'blog_view': 19922,
		'blog_like': 1500
	},
	{
		'blog_title': 'Khám phá tinh hoa của ẩm thực Đức trong những món ăn đơn giản',
		'date': new Date('2022/3/6'),
		'author': 'iTravel',
		'summary': 'Ngoài là đất nước có nền bóng đá rất phát triển. Thì ẩm thực của nước Đức cũng không hề kém cạnh. Năm ở khu vực trung tâm Châu Âu, nên ẩm thực của nước Đức có sự giao thoa đa dạng từ các nước Châu Âu. Nhời vậy mà nền ẩm thực của nơi đây cực kì đa dạng.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-18-image/blog-18-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'ẨM THỰC'],
		'blog_view': 30434,
		'blog_like': 3517
	},
	{
		'blog_title': 'Lang thang rừng Đen - quê hương truyện cổ tích Grimm',
		'date': new Date('2022/3/5'),
		'author': 'iTravel',
		'summary': 'Vì sao rừng Đen lại là nguồn cảm hứng sáng tác cho bao câu chuyện cổ tích nước Đức? Thử một lần rong ruổi rừng Đen và ghi lại trải nghiệm tuyệt diệu trong khu rừng cổ tích này!',
		'blog_image_link': 'images/blog-image-thumbnail/blog-19-image/blog-19-',
		'url_link' : 'blog/blog_1.html',
		'blog_tags': ['KHÁM PHÁ', 'ĐỨC', 'THIÊN NHIÊN'],
		'blog_view': 24118,
		'blog_like': 2200
	}
];
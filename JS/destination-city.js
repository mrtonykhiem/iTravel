// JavaScript Document

const destination_cities = [
	{
		'city_name': 'TOKYO',
		'quoc_gia': 'NHẬT BẢN',
		'region': 'KANTO',
		'country_city': 'japan-tokyo',
		'isFeatured': true
	},
	{
		'city_name': 'MOSCOW',
		'quoc_gia': 'NGA',
		'region': 'MOSCOW',
		'country_city': 'russia-moscow',
		'isFeatured': true
	},
	{
		'city_name': 'SEOUL',
		'quoc_gia': 'HÀN QUỐC',
		'region': 'SEOUL',
		'country_city': 'skorea-seoul',
		'isFeatured': true
	},
	{
		'city_name': 'NEW YORK',
		'quoc_gia': 'MỸ',
		'region': 'NEW YORK',
		'country_city': 'usa-newyork',
		'isFeatured': true
	},
	{
		'city_name': 'ROME',
		'quoc_gia': 'ITALY',
		'region': 'LAZIO',
		'country_city': 'italy-rome',
		'isFeatured': true
	},
	{
		'city_name': 'GIZA',
		'quoc_gia': 'AI CẬP',
		'region': 'GREATER CAIRO',
		'country_city': 'egypt-giza',
		'isFeatured': true
	},
	{
		'city_name': 'BERLIN',
		'quoc_gia': 'ĐỨC',
		'region': 'BERLIN',
		'country_city': 'germany-berlin',
		'isFeatured': true
	},
	{
		'city_name': 'PARIS',
		'quoc_gia': 'PHÁP',
		'region': "L'ILE DE FRANCE",
		'country_city': 'france-paris',
		'isFeatured': true
	},
	{
		'city_name': 'LONDON',
		'quoc_gia': 'ANH QUỐC',
		'region': 'LONDON',
		'country_city': 'uk-london',
		'isFeatured': true
	},
	{
		'city_name': 'BARCELONA',
		'quoc_gia': 'TÂY BAN NHA',
		'region': 'CATALAN',
		'country_city': 'spain-barcelona',
		'isFeatured': true
	},
	{
		'city_name': 'DUBAI',
		'quoc_gia': 'UAE',
		'region': 'DUBAI',
		'country_city': 'uae-dubai',
		'isFeatured': true
	},
	{
		'city_name': 'TP.SINGAPORE',
		'quoc_gia': 'SINGAPORE',
		'region': 'SINGAPORE',
		'country_city': 'singapore-singaporecity',
		'isFeatured': true
	}
];

const tour_list = [
	{
		'tour_name': 'Tour Tây Âu (Paris - Amsterdam)',
		'tour_destination': ['Pháp', 'Bỉ', 'Hà Lan', 'Đức'],
		'tour_time': '9 ngày 8 đêm',
		'tour_depart': 'TP.HCM',
		'tour_sale': 82000000,
		'isDiscount': true,
		'discount': 0.2,
		'iteration': ['Paris', 'Bruges', 'Brussels', 'Bonn', 'Cologne', 'Giethoorn', 'Amsterdam', 'Zaanse Schans', 'The Hague'],
		'book_day': [
			{
				'ID': 1,
				'depart_day': new Date(2022, 5, 24),
				'flight': 'Qatar Airway',
				'available_seat': 6
			},
			{
				'ID': 2,
				'depart_day': new Date(2022, 6, 7),
				'flight': 'Qatar Airway',
				'available_seat': 8
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
			}
		],
		'tour_image': 'tour_1'
	},
	{
		'tour_name': 'Tour Vòng quanh Ý',
		'tour_destination': ['Rome', 'Florence', 'Cinque Terre', 'Pisa', 'Venice', 'Milan'],
		'tour_time': '8 ngày 7 đêm',
		'tour_depart': 'TP.HCM',
		'tour_sale': 75000000,
		'isDiscount': true,
		'discount': 0.2,
		'iteration': ['Rome', 'Florence', 'Cinque Terre', 'Pisa', 'Venice', 'Milan'],
		'book_day': [
			{
				'ID': 1,
				'depart_day': new Date(2022, 5, 24),
				'flight': 'Emirates Airway',
				'available_seat': 3
			},
			{
				'ID': 2,
				'depart_day': new Date(2022, 6, 7),
				'flight': 'Emirates Airway',
				'available_seat': 5
			},
			{
				'ID': 3,
				'depart_day': new Date(2022, 6, 19),
				'flight': 'Emirates Airway',
				'available_seat': 4
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
		'tour_image': 'tour_2'
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
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN', 'THÁC NƯỚC']
	},
	{
		'blog_title': 'Kinh nghiệm du lịch Ý tự túc cực chi tiết giúp bạn tiết kiệm chi phí',
		'date': new Date(2022, 4, 16),
		'author': 'iTravel',
		'summary': 'Bên cạnh việc lựa chọn các tour du lịch Ý, bạn có thể tự mình lên lịch trình để khám phá đất nước tuyệt vời này đấy nhé.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-2-image/blog-2-',
		'url_link' : 'blog/blog_2.html',
		'blog_tags': ['KINH NGHIỆM', 'ITALY']
	},
	{
		'blog_title': 'Samarkand - viên ngọc của phương Đông',
		'date': new Date(2022, 4, 14),
		'author': 'iTravel',
		'summary': 'Nằm trên thung lũng sông Zerafshan, Samarkand được thừa hưởng nhiều nguồn tài nguyên thiên nhiên dồi dào và là một vị trí quan trọng trong con đường tơ lụa giữa Trung Quốc và phương Tây xưa kia.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-3-image/blog-3-',
		'url_link' : 'blog/blog_3.html',
		'blog_tags': ['KHÁM PHÁ', 'DANH LAM', 'SAMARKAND', 'UZBEKISTAN']
	},
	{
		'blog_title': 'Ngỡ ngàng trước vẻ đẹp ngoạn mục của Sơn Đoòng',
		'date': new Date(2022, 4, 13),
		'author': 'iTravel',
		'summary': 'Hang Sơn Đoòng là hang động lớn nhất, đẹp nhất trên thế giới và là một điếm đến không thể bỏ qua cho bất kì du khách nào đam mê du lịch mạo hiểm trên thế giới.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-4-image/blog-4-',
		'url_link' : 'blog/blog_4.html',
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN', 'SƠN ĐOÒNG', 'VIỆT NAM']
	},
	{
		'blog_title': 'Khách Việt đi nước ngoài nhiễm Covid-19 xử lý thế nào?',
		'date': new Date(2022, 4, 11),
		'author': 'iTravel',
		'summary': 'Trong quá trình du lịch phát hiện nhiễm Covid-19, khách sẽ được cách ly theo quy định của điểm đến, chi phí có trong bảo hiểm.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-5-image/blog-5-',
		'url_link' : 'blog/blog_5.html',
		'blog_tags': ['TIN TỨC', 'COVID-19']
	},
	{
		'blog_title': 'Top 50 Món ăn ngon nhất thế giới (PT.1)',
		'date': new Date(2022, 4, 10),
		'author': 'iTravel',
		'summary': 'Danh sách 50 món ăn ngon nhất thế giới dưới đây chắc chắc sẽ khiến những ai yêu mến du lịch nói chung và ẩm thực nói riêng phải ngạc nhiên vì những đa dạng về màu sắc, gia vị và nguyên liệu được tận dụng khác nhau ở mỗi quốc gia.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-6-image/blog-6-',
		'url_link' : 'blog/blog_6.html',
		'blog_tags': ['KHÁM PHÁ', 'ẢM THỰC']
	},
	{
		'blog_title': 'Khám phá vườn quốc gia Yellowstone - kho báu của đất nước Hoa Kỳ',
		'date': new Date(2022, 4, 8),
		'author': 'iTravel',
		'summary': 'Vườn quốc gia Yellowstone là một địa điểm du lịch nổi tiếng của Hoa Kỳ, hấp dẫn bởi vẻ đẹp thiên nhiên hùng vĩ, ấn tượng và hệ sinh thái động thực vật vô cùng phong phú, đa dạng.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-7-image/blog-7-',
		'url_link' : 'blog/blog_7.html',
		'blog_tags': ['KHÁM PHÁ', 'THIÊN NHIÊN', 'HOA KỲ', 'YELLOWSTONE']
	},
	{
		'blog_title': 'Máy bay, tàu hỏa tăng chuyến dịp 30/4',
		'date': new Date(2022, 4, 6),
		'author': 'iTravel',
		'summary': 'Nhiều chuyến bay đến điểm du lịch vào ngày lễ 30/4 đã gần kín chỗ, giá vé gấp hai lần so với ngày bình thường.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-8-image/blog-8-',
		'url_link' : 'blog/blog_8.html',
		'blog_tags': ['TIN TỨC', 'VẬN CHUYỂN']
	},
	{
		'blog_title': 'Du lịch Maroc tự túc – Morocco nên đi chơi ở đâu? Đi mấy ngày?',
		'date': new Date(2022, 4, 5),
		'author': 'iTravel',
		'summary': 'Du lịch Maroc sẽ đưa bạn đi khám phá vô vàn điều bí ẩn với những công trình kiến trúc Hồi giáo ấn tượng và khiến bạn mê đắm cùng các trải nghiệm hấp dẫn “có một không hai” như cưỡi lạc đà, ngắm sao trên sa mạc…',
		'blog_image_link': 'images/blog-image-thumbnail/blog-9-image/blog-9-',
		'url_link' : 'blog/blog_9.html',
		'blog_tags': ['KINH NGHIỆM', 'MA RỐC']
	},
	{
		'blog_title': 'Kinh nghiệm du lịch Nhật Bản tự túc: Visa, ăn ở và vui chơi',
		'date': new Date(2022, 4, 4),
		'author': 'iTravel',
		'summary': 'Theo bảng xếp hạng Business Insider, Nhật Bản là một địa điểm du lịch “không-thể-bỏ-qua” trong năm 2022. Không chỉ đẹp, đất nước Phù Tang còn thu hút khách du lịch bởi nền văn hóa độc đáo, thần bí.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-10-image/blog-10-',
		'url_link' : 'blog/blog_10.html',
		'blog_tags': ['KINH NGHIỆM', 'NHẬT BẢN']
	},
	{
		'blog_title': '“Bỏ túi ngay” kinh nghiệm du lịch Indonesia mới nhất dành cho bạn',
		'date': new Date(2022, 4, 3),
		'author': 'iTravel',
		'summary': 'Indonesia là một quốc đảo lớn nhất Đông Nam Á. Nổi tiếng với những cánh rừng xanh ngút ngàn , những bãi biển xinh đẹp hay Đảo thiên đường Bali tuyệt đẹp, Những ngôi đến linh thiêng có kiến trúc độc đáo.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-11-image/blog-11-',
		'url_link' : 'blog/blog_11.html',
		'blog_tags': ['KINH NGHIỆM', 'INDONESIA']
	},
	{
		'blog_title': 'Khám phá cung đường “nghẹt thở” Đại Tây Dương tại Na Uy',
		'date': new Date(2022, 4, 2),
		'author': 'iTravel',
		'summary': 'Bạn có phải là một người ưa mạo hiểm? Và hiện tại bạn không biết nên tìm đến đâu để trải nghiệm và chinh phục những thử thách? Vậy hãy tìm ngay đến cung đường Đại Tây Dương – một trong những địa điểm nổi tiếng khi du lịch Na Uy, để có thể chinh phục những con đường dốc cao vút trên mặt biển.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-12-image/blog-12-',
		'url_link' : 'blog/blog_12.html',
		'blog_tags': ['KHÁM PHÁ', 'NA UY', 'CUNG ĐƯỜNG']
	},
	{
		'blog_title': 'Những hòn đảo kỳ lạ nhất trên thế giới',
		'date': new Date(2022, 4, 1),
		'author': 'iTravel',
		'summary': 'Hòn đảo bị nguyền rủa, đảo"ngoài hành tinh", đảo búp bê... là một trong những hòn đảo lạ lùng và kỳ quặc nhất trên thế giới. Nếu có cơ hội tới một trong những hòn đảo này chắc chắn bạn sẽ nhận được không ít điều bất ngờ thú vị và cả sợ hãi.',
		'blog_image_link': 'images/blog-image-thumbnail/blog-13-image/blog-13-',
		'url_link' : 'blog/blog_13.html',
		'blog_tags': ['KHÁM PHÁ', 'BIỂN ĐẢO']
	},
	{
		'blog_title': '12 sự thật thú vị về núi Phú Sĩ ngay cả người Nhật cũng không biết',
		'date': new Date(2022, 3, 30),
		'author': 'iTravel',
		'summary': 'Núi Phú Sĩ - ngọn núi linh thiêng với đỉnh núi quanh năm tuyết phủ trắng nằm giữa hai tỉnh Yamanashi và Shizuoka của Nhật Bản. Với độ cao 3,776m đây chính là ngọn núi cao nhất Nhật Bản. Cùng tìm hiểu 12 sự thật thú vị về núi Phú Sĩ mà thậm chí đến cả người Nhật cũng chưa chắc đã biết thông qua bài viết dưới đây nhé!',
		'blog_image_link': 'images/blog-image-thumbnail/blog-14-image/blog-14-',
		'url_link' : 'blog/blog_14.html',
		'blog_tags': ['KHÁM PHÁ', 'NHẬT BẢN', 'VĂN HOÁ', 'THIÊN NHIÊN']
	}
];
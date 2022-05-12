const blog_innerHTML = document.getElementById('create-this');
		const more_blog = document.getElementById('more-blog');
		const more_blog_button = document.getElementById('more-blog-button');
		const extended_blog_tag_button = document.getElementById('extended-blog-tags-button');
		const extended_blog_tags = document.getElementById('extended-blogs-tag');
		const close_extended_tag = document.getElementById('close-extended-tag');
		const explore_tags = document.querySelectorAll('.explore-tags');
		const blog_sort_button = document.getElementById('blog-sort-button');
		const blog_sort_options = document.getElementById('blog-sort-options');
		const blog_num_total = document.getElementById('blog-num-total');
		const blog_show_progress = document.getElementById('blog-show-progress');
		const blog_show_num = document.getElementById('blog-show-num');
		const reset_filter = document.getElementById('reset-filter');
		var this_blog_list = blog_list;
		var initial = 0;
		var blog_show = 10;
		showBlog();
		
		var array_filter_condition = [];
		
		extended_blog_tag_button.addEventListener('click', function() {
			extended_blog_tags.classList.add('active');
		});
		
		close_extended_tag.addEventListener('click', function() {
			extended_blog_tags.classList.remove('active');
		});
		
		blog_sort_button.addEventListener('click', function() {
			blog_sort_options.classList.toggle('active');
		})
		
		reset_filter.addEventListener('click', function() {
			extended_blog_tags.classList.remove('active');
			array_filter_condition = [];
			clearBlogItem();
			clearAllFilterTag();
			this_blog_list = blog_list;
			showBlog();
		})
		
		function clearAllFilterTag() {
			explore_tags.forEach(explore_tag => explore_tag.classList.remove('active'));
		}
		
		function findCommonElements3(arr1, arr2) {
			return arr1.some(item => arr2.includes(item))
		}
		
		function filterBlogList(blog_keyword_array, blog_list) {
			return blog_list.filter(filter_blog_list => findCommonElements3(filter_blog_list.blog_tags, blog_keyword_array));
		}
		
		function sortBlogList(sort_condition) {
			clearBlogItem();
			switch(sort_condition) {
				case 'Thời gian':
					this_blog_list =  this_blog_list.sort(function(blog_list_a, blog_list_b) {
						return blog_list_b.date - blog_list_a.date;
					});
					break;
				case 'Yêu thích nhất':
					this_blog_list =  this_blog_list.sort(function(blog_list_a, blog_list_b) {
						return blog_list_b.blog_like - blog_list_a.blog_like;
					});
					break;
				case 'Đọc nhiều nhất':
					this_blog_list =  this_blog_list.sort(function(blog_list_a, blog_list_b) {
						return blog_list_b.blog_view - blog_list_a.blog_view;
					});
					break;
				default:
					break;
			}
			showBlog();
			blog_sort_button.textContent = sort_condition;
			blog_sort_options.classList.remove('active');
		}
		
		function filterShowBlog(array_filter) {
			this_blog_list = filterBlogList(array_filter, blog_list);
			showBlog();
		}
		
		function showBlog() {
			blog_num_total.innerHTML = this_blog_list.length + ' bài blog';
			if (this_blog_list.length > blog_show) {
				for (var i=initial; i<blog_show; i++) {
					blog_innerHTML.append(createBlogItems(this_blog_list[i].blog_image_link, this_blog_list[i].blog_title, this_blog_list[i].summary, this_blog_list[i].date, createBlogTags(this_blog_list[i].blog_tags), this_blog_list[i].author, this_blog_list[i].blog_like, this_blog_list[i].blog_view));
				}
				more_blog_button.classList.add('active');
				blog_show_num.textContent = blog_show + ' trong ' + this_blog_list.length + ' hiển thị';
				blog_progress_percent = blog_show/this_blog_list.length * 100;
				blog_show_progress.style.width = blog_progress_percent + '%';
				initial = blog_show;
				blog_show = blog_show + 10;
			} else {
				for (var i=initial; i<this_blog_list.length; i++) {
					blog_innerHTML.append(createBlogItems(this_blog_list[i].blog_image_link, this_blog_list[i].blog_title, this_blog_list[i].summary, this_blog_list[i].date, createBlogTags(this_blog_list[i].blog_tags), this_blog_list[i].author, this_blog_list[i].blog_like, this_blog_list[i].blog_view));
				}
				more_blog_button.classList.remove('active');
				blog_show_num.textContent = this_blog_list.length + ' trong ' + this_blog_list.length + ' hiển thị';
				blog_show_progress.style.width = '100%';
			}
		}
		
		function createBlogTags(blog_tags) {
			var blog_tags_inner = '';
			for (var i=0; i<blog_tags.length; i++) {
				blog_tags_inner = blog_tags_inner + '<span class="blog-category">' + blog_tags[i] + '</span>';
			}
			return blog_tags_inner;
		}
		
		function createBlogItems(blog_image_link, blog_title, blog_summary, blog_date, blog_tags, blog_author, blog_like, blog_view) {
			var blog_item = document.createElement('div');
			blog_item.classList.add('blog-list', 'row');
			
			var blog_image = document.createElement('div');
			blog_image.classList.add('col-4');
			blog_image.innerHTML = '<div href="#" class="blog-image-thumbnail"><a href="blog_1.html"><img style="width: 100%" src="' + blog_image_link +'list.png" alt=""></a></div>';
			
			var blog_content = document.createElement('div');
			blog_content.classList.add('col-8');
			blog_day = blog_date.getDate() < 10 ? '0' + blog_date.getDate() : blog_date.getDate();
			blog_month = blog_date.getMonth() < 10 ? '0' + blog_date.getMonth() : blog_date.getMonth();
			blog_content.innerHTML = '<div class="blog-content"><div class="blog-tabs">' + blog_tags + '</div><a href="blog_1.html" class="blog-list-title">' + blog_title + '</a><div class="blog-information"><div><i class="fa fa-calendar"></i><p>' + blog_day +'/' + blog_month + '/' + blog_date.getFullYear() +'</p></div><div><i class="fa fa-user"></i><p>' + blog_author +'</p></div><div><i class="fa fa-thumbs-up"></i><p>'+ blog_like +' like</p></div><div><i class="fa fa-search-plus"></i><p>' + blog_view +' xem</p></div></div><p>' + blog_summary + '</p></div>';
			
			blog_item.append(blog_image, blog_content);
			
			return blog_item;
		}
		
		function clearBlogItem() {
			blog_innerHTML.innerHTML = '';
			blog_show = 10;
			initial = 0;
			blog_sort_button.textContent = 'Thời gian';
		}
		
		more_blog_button.addEventListener('click', function() {
			showBlog();
		})
		
		explore_tags.forEach(explore_tag => explore_tag.addEventListener('click', function() {
			clearBlogItem();
			if (explore_tag.classList.contains('active')) {
				array_filter_condition.splice(array_filter_condition.indexOf(explore_tag.textContent), 1);
				explore_tag.classList.remove('active');
				if (array_filter_condition.length == 0) {
					this_blog_list = blog_list;
					showBlog();
				} else {
					filterShowBlog(array_filter_condition);
				}
			} else {
				array_filter_condition.push(explore_tag.textContent);
				explore_tag.classList.add('active');
				filterShowBlog(array_filter_condition);
			}
		}));
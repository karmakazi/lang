$(function() {

	const undergraduateData = [
		{
			label: 'Accounting',
			img: 'banner8.png',
			description: 'The accounting degree at the Lang School for Business and Economics will help you develop a solid foundation of accounting and business know-how to get you a professional CPA designation, augment your accounting focus with an edge and take you beyond the classroom.',
			url: 'https://www.uoguelph.ca/programs/accounting/'
		},
		{
			label: 'Food and Agriculture Business',
			img: 'banner2.png',
			description: 'The Lang School for Business and Economics’ Food and Agricultural Business program prepares you for today’s agribusiness industry and the business challenges of tomorrow.',
			url: 'https://www.uoguelph.ca/programs/food-and-agricultural-business'
		},
		{
			label: 'Government, Economics and Management',
			img: 'banner1.png',
			description: 'Dive into the unique intersection between the public sector with business and economics. Confront questions like why decision makers make the decisions they do, develop transferable business skills in law, human resources, marketing, accounting and finance, and pursue diverse career opportunities within the public, private and voluntary sectors.',
			url: 'https://www.uoguelph.ca/programs/government-economics-and-management'
		},
		{
			label: 'Hospitality and Tourism Management',
			img: 'banner9.jpg',
			description: 'From corporate social responsibility in business to evaluating hospitality operations, your Hospitality and Tourism Management degree works for you, opening limitless pathways to success in the fast-paced hospitality and tourism industry.',
			url: 'https://www.uoguelph.ca/programs/hospitality-and-tourism-management'
		},
		{
			label: 'Management',
			img: 'banner9b.jpg',
			description: 'The Lang School’s Management degree helps to develop the leadership and business education skills you will need to Improve Life for future generations. Our ethical and collaborative curriculum will help shape the future, using business as a force for good and for impact.',
			url: 'https://www.uoguelph.ca/programs/management/'
		},
		{
			label: 'Management Economics and Finance',
			img: 'banner9c.jpg',
			description: 'In this program, you will gain in-depth knowledge of finance theory and obtain a practical understanding of a broad range of business areas. Integrate the analysis of economics and finance with the practical tools of accounting, business management and marketing in management economics and finance, focusing on management economics or finance.',
			url: 'https://www.uoguelph.ca/programs/management-economics-and-finance/'
		},
		{
			label: 'Marketing Management',
			img: 'banner1.png',
			description: 'The Marketing Management program consists of a balanced curriculum of marketing and liberal education courses that equips students to gain knowledge in creating, communicating, and delivering product offerings to create value to stakeholders in a global and connected economy, opening a variety of career paths.',
			url: 'https://www.uoguelph.ca/programs/marketing-management/'
		},
		{
			label: 'Real Estate',
			img: 'banner1.png',
			description: 'The Real Estate major in the Bachelor of Commerce program is one of only a few undergraduate programs in Canada that specialize in the real estate sector. Topics such as the development, financing, valuation, market analysis and management of real estate are taught in the context of economic, legal, political and social factors affecting the large and growing field of business of real estate in Canada and the world.',
			url: 'https://www.uoguelph.ca/programs/real-estate/'
		},
		{
			label: 'Sport and Event Management',
			img: 'banner1.png',
			description: 'The Lang School’s Sport and Event Management program builds a strong foundation of commerce courses and introduces specialized knowledge such as sponsorship, media, events and leadership.',
			url: 'https://www.uoguelph.ca/programs/sport-and-event-management/'
		},
	]
	function initializeContent() {
		$('.content h3').text(undergraduateData[0].label)
		$('.content .description').text(undergraduateData[0].description)
		$('.content .start-here').attr('href', undergraduateData[0].url)
		$('.content .banner').css('background-image', `url('img/banners/${undergraduateData[0].img}')`)
	}

	initializeContent()

	$('.ul-nav a').on('click', function(e) {
		e.preventDefault()
		$('.ul-nav a').removeClass('active')
		$(this).addClass('active')
		$('.btn-dropdown').attr('aria-expanded', 'false')
		const idx = $('.ul-nav a').index(this)
		if (undergraduateData[idx]) {
			$('.content h3').text(undergraduateData[idx].label)
			$('.content .description').text(undergraduateData[idx].description)
			$('.content .start-here').attr('href', undergraduateData[idx].url)
			// $('.banner').css('background-image', `url('img/${undergraduateData[idx].img}')`)
		}
	})
	$('.btn-dropdown').on('click', function() {
			const isExpanded = $(this).attr('aria-expanded') === 'true'
			$(this).attr('aria-expanded', isExpanded ? 'false' : 'true')
	})

})

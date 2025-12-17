$(function() {

		const gradData = [
		{
			id: 'real-estate',
			img: 'blue_4.png',
			label: 'Master of Real Estate',
			slogan: 'with a master’s degree in Real Estate.',
			description1: 'Lang’s Master of Real Estate program equips you with the knowledge and practical skills required to excel in the Canadian commercial real estate industry. If you’re ready for a new lease on your career, click now for an assessment.',
			description2: 'Interested in elevating your real estate business acumen?',
			description2b: 'Join us on a virtual info session where you can learn more about the Lang School’s Master’s of Real Estate.',
			description3: "The Master’s of Real Estate equips you with in-depth insights into office, retail, industrial, and residential spaces and develop the technical skills required to analyze, identify, and address the industry's emerging real estate challenges.",
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/masters-real-estate/'
		},
		{
			id: 'project-management',
			img: 'blue_4.png',
			label: 'Master in Project Management',
			slogan: 'master’s degree in Project Management',
			description1: 'Are you a project manager looking to lead organizational change?',
			description1b: "Set up a one-on-one assessment and see how a Master's in Project Management can elevate your career.",
			description2: 'Join us online for an informative session on the Lang School’s Master’s in Project Management and learn more about how you can enhance your skills.',
			description3: 'The Master of Project Management program offers the opportunity to develop depth in areas of project management related to leadership, human resource management, and sustainable business.',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/masters-project-management/'
		},
		{
			id: 'leadership',
			img: 'yellow_1.png',
			label: 'Master of Arts in Leadership',
			slogan: 'with a master’s degree in Leadership',
			description1: 'Become a leader who will Improve Life with our Master’s in Leadership. ',
			description1b: 'If that sounds like you, set up your one-on-one assessment below.',
			description2: 'Join us online for an informative session on the Lang Masters of Arts (MA) in Leadership and plan your journey.',
			description3: 'Immerse yourself in a program that redefines what it means to lead. Delivered through flexible online learning and enhanced by a conference, Lang’s Master’s in Leadership empowers you to elevate your career.',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/masters-leadership/'
		},
		{
			id: 'management',
			img: 'blue_1.png',
			label: 'Master of Science in Management',
			slogan: 'with a master’s degree in Management.',
			description1: 'If you’re ready to take your career to the next level, consider an MSc in Management.',
			description1b: 'Set up a one-on-one assessment below to learn more about becoming an evidence-based, innovative leader.',
			description2: 'Join us on our next virtual session, and Expand your career options further by gaining knowledge in critical areas of organizational development, workplace wellbeing, and project management.',
			description3: 'Lang’s MSc program provides an enriching, professionally relevant, and flexible academic experience by including you as part of a collaborative learning environment. ',
			description3b: 'With specialized fields in Innovation, Commercialization, Entrepreneurship and Management Research, you’re sure to find how you can make Business Work For You.',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/msc-management/'
		},
		{
			id: 'tourism',
			img: 'blue_4.png',
			label: 'Master of Science in Tourism and Hospitality',
			slogan: 'with a master’s degree in Tourism and Hospitality',
			description1: 'Lang’s MSc in Tourism and Hospitality empowers graduates to excel in their industry.',
			description1b: 'With two flexible options to complete the program, all that’s left to do is find the one for you.',
			description1c: 'Set up an assessment now.',
			description2: 'Looking to build practical research skills or deeper analytical research?',
			description2b: 'Join our upcoming virtual info session to see which program delivery will best suit you.',
			description3: 'What does connecting academic knowledge and real-world challenges look like? It looks like Lang’s MSc in Tourism and Hospitality. Learn more now.',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/msc-tourism-hospitality/'
		},
		{
			id: 'mba',
			img: 'red_2.png',
			label: 'MBA',
			slogan: 'with the Lang MBA',
			description1: 'Curious about enrolling in the MBA program? Let us answer your questions and help you find the right fit for your goals. Click now for an assessment. ',
			description2: 'Join us online for an informative session on the Lang School MBA program, research proposals, student life, and career pathways.',
			description3: 'Interested in the MBA? Read more about this program at Canada’s number one school for responsible business.',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/mba/'
		},
		{
			id: 'supply-chain-management',
			img: 'blue_4.png',
			label: 'Master of Supply Chain Management',
			slogan: 'with the Lang Master of Supply Chain Management',
			description1: 'Advance your supply chain management career with us. Apply for an assessment for the MSCM program.',
			description2: 'Attend our virtual info-session and learn about how this 10-month program could accelerate your growth in supply chain management.',
			description3: 'Learn about supply chain management from world-class leaders and experts over 10 – 36 months. ',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: ''
		},
		{
			id: 'marketing',
			img: 'blue_4.png',
			label: 'Master of Science in Marketing and Consumer Studies',
			slogan: 'with a master’s degree in Marketing and Consumer Studies',
			description1: 'Are you looking to become a marketing leader? The MSc in Marketing and Consumer studies might be for you. Express your interest and we’ll be in touch.',
			description2: 'Learn more about the program and hear from successful graduates at our upcoming virtual info session.',
			description3: 'Learn more about this robust program and other MSc options available at the Lang School for Business and Economics.',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/msc-marketing/'
		},
		{
			id: 'accounting',
			img: 'blue_4.png',
			label: 'Master of Professional Accounting (MPAcc)',
			slogan: 'with a master’s degree in Professional Accounting',
			description1: 'The MPAcc at Lang allows you to pursue your Chartered Professional Accountants (CPA) designation and your master’s degree.',
			description1b: 'If that sounds like you, set up an assessment with us.',
			description2: 'Register for our upcoming virtual info session and learn about how you can gain two certifications at the same time. ',
			description3: 'The MPAcc will provide you with a direct pathway to becoming a professional accountant and increase your marketability in the field of finance.',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/gdip-accounting/'
		},
		{
			id: 'financial-economics',
			img: 'blue_4.png',
			label: 'MA in Financial Economics',
			slogan: 'with a master’s degree in Financial Economics',
			description1: 'Take your analysis a step further with the MA in Financial Economics – set up an assessment with us today.',
			description2: 'Our upcoming virtual info panel provides a great foundation for students looking to continue pursuing economics and finance.',
			description2b: 'Register now.',
			description3: 'The MA in Financial Economics provides students with rigorous training in economic theory, finance, and econometrics. Graduates of the program are well-equipped to pursue careers in either the public or private sector.',
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/ma-economics-finance/'
		},
		{
			id: 'gdip-accounting',
			img: 'blue_4.png',
			label: 'Graduate Diploma (GDip) in Accounting',
			slogan: 'with a graduate diploma in Accounting',
			description1: 'Looking to secure your CPA? The graduate diploma might be a good fit. Get an assessment now.',
			description2: 'Join our upcoming virtual session to learn about how the GDip can enhance your career goals.',
			description3: "Lang's Graduate Diploma in Accounting is a four-month program that will give you advanced standing in the CPA Professional Education Program (PEP).",
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/gdip-accounting/'
		},
		{
			id: 'gdip-market-research',
			img: 'blue_4.png',
			label: 'Graduate Diploma (GDip) in Market Research',
			slogan: 'with a graduate diploma in Market Research',
			description1: 'If you are interested in graduate-level studies, but not a master’s thesis, consider this one-year course-based program. Book an assessment.',
			description2: 'Register for our next virtual session to learn if you should pursue a GDip or a Master’s program. ',
			description3: "The University of Guelph’s Graduate Diploma in Market Research is designed for students who want to extend their undergraduate knowledge of market research and advanced analytical tools.",
			url1: 'https://form.jotform.com/253075028818258',
			url2: 'https://form.jotform.com/253075028818258',
			url3: 'https://www.uoguelph.ca/lang/gdip/market-research/'
		},
	]

	// return raw query param value
	function getQueryParam(name) {
			return new URLSearchParams(window.location.search).get(name)
	}

	const programParam = getQueryParam('program')

	const slug = s => String(s || '')
			.toLowerCase()
			.trim()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]/g, '')

	const target = slug(decodeURIComponent(programParam))

	const matched = gradData.find(item => item.id === target)
	if (matched) {
		$('.primary').removeClass('hide')
		$('.secondary').addClass('hide')
		$('h1').text(matched.label)
		$('.slogan').html(matched.slogan)
		$('.content2 .col').eq(0).find('p').text(matched.description1 || '')
		$('.content2 .col').eq(0).find('p').first().after($('<p>').text(matched.description1c)).after($('<p>').text(matched.description1b))
		// $('.content2 .col').eq(0).find('p').second().after($('<p>').text(matched.description1c))
		$('.content2 .col').eq(1).find('p').text(matched.description2 || '')
		$('.content2 .col').eq(1).find('p').first().after($('<p>').text(matched.description2b))
		$('.content2 .col').eq(2).find('p').text(matched.description3 || '')
		$('.content2 .col').eq(2).find('p').first().after($('<p>').text(matched.description3b))
		$('.content2 .col').eq(0).find('a').attr('href', matched.url1 || '#')
		$('.content2 .col').eq(1).find('a').attr('href', matched.url2 || '#')
		$('.content2 .col').eq(2).find('a').attr('href', matched.url3 || '#')
		$('.banner').css('background-image', `url('img/banners/${matched.img}')`)
		if (matched.img.startsWith('yellow')) {
			$('.banner').addClass('yellow')
		}
	} else {
		$('.primary').addClass('hide')
		$('.secondary').removeClass('hide')
		const data = gradData.find(item => item.id === 'test')
		$('h1').text(data.label)
		$('.slogan').html(data.slogan)

	}
})

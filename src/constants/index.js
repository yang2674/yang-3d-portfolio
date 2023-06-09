import {
	weather,
	mindfully,
	rci,
	tindog,
	carshare,
	asana,
	xcode,
	expressjs,
	pgsql,
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	prime,
	jtellr,
	sfg,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from '../assets';

const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Responsive Design',
		icon: web,
	},
	{
		title: `React.js for Web / Mobile`,
		icon: mobile,
	},
	{
		title: 'Unity / Unreal Engine',
		icon: backend,
	},
	{
		title: 'YouTube Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	// {
	// 	name: 'TypeScript',
	// 	icon: typescript,
	// },
	{
		name: 'React JS',
		icon: reactjs,
	},
	// {
	// 	name: 'Redux Toolkit',
	// 	icon: redux,
	// },
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Express JS',
		icon: expressjs,
	},
	{
		name: 'PostgreSQL',
		icon: pgsql,
	},
	// {
	// 	name: 'MongoDB',
	// 	icon: mongodb,
	// },
	{
		name: 'Xcode',
		icon: xcode,
	},
];

const experiences = [
	{
		index: 0,
		title: 'Front-End Software Engineer',
		company_name: 'JourneyTellr',
		icon: jtellr,
		iconBg: '#E6DEDD',
		date: 'Jan 2023 - Present',
		points: [
			'Redesigned react native components and theme to match wireframes according to product team ',
			'Created svg icons from scratch and implemented into components',
			'Technologies: JavaScript, React-Native, Cocoapods, Xcode, Flipper, Asana, Microsoft 365, Azure AWS, React-Query, React-Navigation',
		],
	},

	{
		index: 1,
		title: 'Full Stack Software Engineer Student',
		company_name: 'Prime Digital Academy',
		icon: prime,
		iconBg: '#383E56',
		date: 'May 2022 - Sep 2022 ',
		points: [
			'Completed 20-week, full-time, full-stack software engineering program, developing technical and non-technical skills in a highly collaborative environment',
			'Designed two full-stack web applications in modern technologies',
			'Practiced Agile development, standups, weekly group projects, whiteboard coding challenges, diversity, equity, and inclusion training, hybrid work, time management, and active listening',
			'Technologies: JavaScript, PostgreSQL, Express, React, Node',
		],
	},
	{
		index: 2,
		title: 'Software Developer Apprentice',
		company_name: 'Software for Good',
		icon: sfg,
		iconBg: '#E6DEDD',
		date: 'Nov 2021 - Feb 2022',
		points: [
			'Designed a backend feature that allows admin accounts to manually add applicants into the database, if deadline has expired',
			'Familiarized with Model View Controller (MVC) architecture and CRUD',
			'Worked with a real-world client to design features for the city of Saint Paul’s Right Track program',
			'Technologies: Ruby, Ruby on Rails, Rspec, Heroku',
		],
	},
	// {
	// 	title: 'React.js Developer',
	// 	company_name: 'Starbucks',
	// 	icon: starbucks,
	// 	iconBg: '#383E56',
	// 	date: 'March 2020 - April 2021',
	// 	points: [
	// 		'Developing and maintaining web applications using React.js and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 		'Participating in code reviews and providing constructive feedback to other developers.',
	// 	],
	// },
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'React Weather App',
		description:
			'React Web app that uses the OpenWeather API to provide weather information',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'openweather',
				color: 'orange-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'robin-text-gradient',
			},
		],
		image: weather,
		source_code_link:
			'https://github.com/yang2674/react-weather-app',
	},
	{
		name: 'Mindfully',
		description:
			'React Web app that allows users to track journaling and meditation using the Spotify API.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'spotify',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'robin-text-gradient',
			},
		],
		image: mindfully,
		source_code_link:
			'https://github.com/yang2674/solo-project-mindfully',
	},
	{
		name: 'Rochester Community Initiative',
		description:
			'React Web app that allows school counselors to search for mental health professionals in Olmstead County.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'postgresql',
				color: 'blue-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'robin-text-gradient',
			},
		],
		image: rci,
		source_code_link: 'https://github.com/yang2674/rochinitiative',
	},
	{
		name: 'Tindog',
		description:
			'React Web / Mobile app that is based on Tinder. Fun project to practice Tailwind and React.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			// {
			// 	name: 'postgresql',
			// 	color: 'blue-text-gradient',
			// },
			{
				name: 'tailwind',
				color: 'robin-text-gradient',
			},
		],
		image: tindog,
		source_code_link: 'https://github.com/yang2674/react-tindog',
	},
	{
		name: 'Carshare Calculator',
		description:
			'React Web app that allows people in the Twin Cities to calculate the costs of carshare plans with Evie and HOURCAR.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			// {
			// 	name: 'postgresql',
			// 	color: 'blue-text-gradient',
			// },
			{
				name: 'tailwind',
				color: 'robin-text-gradient',
			},
		],
		image: carshare,
		source_code_link:
			'https://github.com/yang2674/carshare-calculator',
	},
];

export {
	navLinks,
	services,
	technologies,
	experiences,
	testimonials,
	projects,
};

export interface IJob {
  title: string,
  company: string,
  location: string,
  start: number,
  end: number,
  description: string[],
  achievements: string[],
  topics: string[],
  type: string,
  link?: string,
}

export const jobs = [
  {
    title: 'Frontend Developer Intern',
    link: 'https://www.chess.com/',
    company: 'Chess.com',
    location: 'Los Altos, CA',
    start: 1585724400000,
    end: 1598943600000,
    description: [
      'Designed and developed reusable components in Vue.js and PHP.',
    ],
    achievements: [
      'Completed refactor of frontend design for Puzzles and Four Player Chess.',
    ],
    topics: [
      'Vue.js',
      'Web Development',
      'Coding',
    ],
    type: 'Internship',
  },
  {
    title: 'Web Development Teachers Assistant',
    company: 'BYU CS 260',
    link: 'https://catalog.byu.edu/physical-and-mathematical-sciences/computer-science/web-programming',
    location: 'Brigham Young University, UT',
    start: 1567321200000,
    end: 1585724400000,
    description: [
      'Covering web fundamentals, Vue.js and Express backends.',
      'Duties included manning lab hours and grading student work.',
    ],
    achievements: [
      'Wrote a Discord bot to aid in lab hour scheduling after the transition to online classes due to COVID19.',
    ],
    topics: [
      'Vue.js',
      'Web Development',
      'Instruction',
      'Coding',
    ],
    type: 'Part-Time',
  },
  {
    title: 'Coding Instructor',
    company: 'STEM4Kids',
    link: 'https://www.activityhero.com/biz/68289-stem4kids-san-jose-ca',
    location: 'Cupertino, CA',
    start: 1556694000000,
    end: 1564642800000,
    description: [
      'Taught Python, C++ and Javascript to children ages 6-17.',
      'Regular counselor duties to ensure the kids have a fun / safe summer!',
    ],
    achievements: [],
    topics: [
      'Instruction',
      'Coding',
    ],
    type: 'Full-time',
  },
  {
    title: 'Music Studio Lead',
    company: 'Steve & Kate\'s Camp',
    link: 'https://steveandkatescamp.com/',
    location: 'San Jose, CA',
    start: 1525158000000,
    end: 1533106800000,
    description: [
      'Counselor in charge of music studio, helping kids learn instruments and develop a passion for music.',
      'Regular counselor duties to ensure the kids have a fun / save summer!',
    ],
    achievements: [],
    topics: [
      'Music',
      'Instruction',
    ],
    type: 'Full-time',
  },
  {
    title: 'Temporary Human Resources Assistant',
    company: 'RTW Management',
    link: 'http://www.rtwmanagement.com/home.html',
    location: 'Los ALtos, CA',
    start: 1525158000000,
    end: 1525158000000,
    description: [
      'Hired to find drivers alone for the U.S. Open in New York.',
    ],
    achievements: [
      'Found and hired 30 drivers in New York licensed for paratransit transit.',
    ],
    topics: [
      'Human Resources',
    ],
    type: 'Temp',
  },
  {
    title: 'Music Studio Lead',
    company: 'Steve & Kate\'s Camp',
    link: 'https://steveandkatescamp.com/',
    location: 'Cupertino, CA',
    start: 1493622000000,
    end: 1501570800000,
    description: [
      'Counselor in charge of music studio, helping kids learn instruments and develop a passion for music.',
      'Regular counselor duties to ensure the kids have a fun / save summer!',
    ],
    achievements: [],
    topics: [
      'Music',
      'Instruction',
    ],
    type: 'Full-time',
  },
  {
    title: 'Executive Producer of Media',
    company: 'California YMCA Youth & Government',
    link: 'https://www.calymca.org/',
    location: 'Sacramento, CA',
    start: 1483257600000,
    end: 1498892400000,
    description: [
      'Lead a team of over 200 student journalists providing media coverage of Youth & Government\'s yearly mock state government.',
      'Gatekeeper of quality control.',
    ],
    achievements: [],
    topics: [
      'Media',
    ],
    type: 'Highschool',
  },
  {
    title: 'Head of Media',
    company: 'The Talon (High School Newspaper)',
    link: 'https://lahstalon.org/',
    location: 'Los Altos, CA',
    start: 1459494000000,
    end: 1496300400000,
    description: [
      'Managed videographers, photographers and graphic artists to work along side writers.',
      'Gatekeeper of quality control and consistancy.',
    ],
    achievements: [],
    topics: [
      'Media',
    ],
    type: 'Highschool',
  },
];

export const PORTFOLIO = [
  {
    title: 'Portfolio Site',
    url: 'https://andyruwruw.com',
    github: 'https://github.com/andyruwruw/andyruwruw.com',
    description: '',
    image: null,
    topics: [
    ],
    tools: [
      'React.js',
      'Typescript',
    ],
    start: 0,
    end: 0,
  },
  {
    title: 'enhanced-spotify-api',
    url: 'https://enhancedspotifyapi.com/',
    github: 'https://github.com/andyruwruw/enhanced-spotify-api',
    description: 'Object oriented Spotify API wrapper, providing developers with prototype classes for each of Spotify\'s data objects. So far reaching 1.9k installs!',
    image: 'https://raw.githubusercontent.com/andyruwruw/enhanced-spotify-api/master/documentation/markdown/logo.svg?sanitize=true',
    topics: [
      'Spotify',
      'npm',
    ],
    tools: [
      'Jest.js',
      'Spotify API',
    ],
    start: 0,
    end: 0,
  },
  {
    title: 'chess-web-api',
    url: 'https://www.npmjs.com/package/chess-web-api',
    github: 'https://github.com/andyruwruw/chess-web-api',
    description: '',
    image: 'https://raw.githubusercontent.com/andyruwruw/chess-web-api/master/documentation/logo.png',
    topics: [
      'Chess',
      'npm',
    ],
    tools: [
      'Jest.js',
      'Chess.com API',
    ],
    start: 0,
    end: 0,
  },
  {
    title: 'Boid Boogie',
    url: 'https://boidboogie.com/',
    github: 'https://github.com/andyruwruw/boid-boogie',
    description: 'Flocking simulation utilizing Spotify\'s Web Playback SDK and API to dynamically move the boids with the user\'s music.',
    images: 'https://raw.githubusercontent.com/andyruwruw/boid-boogie/master/src/assets/logo.svg',
    topics: [
      'Spotify',
      'Flocking Simulation',
    ],
    tools: [
      'Vue.js',
      'Spotify API',
      'Spotify Playback SDK',
      'P5.js',
      'Serverless',
    ],
    start: 0,
    end: 0,
  },
  {
    title: 'Countdown Timer',
    url: 'https://countdown-timer-app.vercel.app/',
    github: 'https://github.com/andyruwruw/countdown-timer',
    description: '',
    topics: [
      'Productivity',
    ],
    tools: [
      'Vue.js',
      'Google API',
      'P5.js',
      'Serverless',
    ],
    start: 0,
    end: 0,
  },
  {
    title: 'chess-image-generator',
    url: 'https://www.npmjs.com/package/chess-image-generator',
    github: 'https://github.com/andyruwruw/chess-image-generator',
    description: '',
    image: 'https://raw.githubusercontent.com/andyruwruw/chess-image-generator/master/documentation/logo.png',
    topics: [
      'Chess',
      'npm',
    ],
    tools: [],
    start: 0,
    end: 0,
  },
  {
    title: 'Github Profile README.md',
    url: 'https://github.com/andyruwruw',
    github: 'https://github.com/andyruwruw/andyruwruw',
    description: '',
    topics: [
      'Spotify',
      'Chess',
    ],
    image: 'https://img.icons8.com/ios-filled/256/000000/github.png',
    tools: [
      'React.js',
      'Serverless',
      'Spotify API',
      'Chess.com API',
    ],
    start: 0,
    end: 0,
  },
];

export const SAMPLE_CLASSWORK = [
  {
    title: '',
    url: '',
    date: '',
  },
];

export const SKILLS = [
  {
    title: 'Vue.js',
    proficiency: 10,
    topic: [
      'Web Development',
      'Frontend',
      'Coding',
    ],
  },
  {
    title: 'React.js',
    proficiency: 10,
    topic: [
      'Web Development',
      'Frontend',
      'Coding',
    ],
  },
  {
    title: 'Typescript',
    proficiency: 10,
    topic: [
      'Web Development',
      'Frontend',
      'Coding',
    ],
  },
  {
    title: 'Jest.js',
    proficiency: 10,
    topic: [
      'Web Development',
      'Frontend',
      'Coding',
    ],
  },
  {
    title: 'SCSS',
    proficiency: 10,
    topic: [
      'Web Development',
      'Frontend',
      'Coding',
    ],
  },
  {
    title: 'MongoDB',
    proficiency: 10,
    topic: [
      'Web Development',
      'Backend',
      'Coding',
    ],
  },
  {
    title: 'Node.js',
    proficiency: 10,
    topic: [
      'Web Development',
      'Backend',
      'Coding',
    ],
  },
  {
    title: 'Python',
    proficiency: 10,
    topic: [
      'Coding',
    ],
  },
  {
    title: 'C++',
    proficiency: 10,
    topic: [
      'Coding',
    ],
  },
  {
    title: 'C',
    proficiency: 10,
    topic: [
      'Coding',
    ],
  },
  {
    title: 'Java',
    proficiency: 10,
    topic: [
      'Coding',
    ],
  },
  {
    title: 'Adobe Premiere',
    proficiency: 10,
    topic: [
      'Media',
    ],
  },
  {
    title: 'Adobe After Effects',
    proficiency: 10,
    topic: [
      'Media',
    ],
  },
  {
    title: 'Adobe InDesign',
    proficiency: 10,
    topic: [
      'Media',
    ],
  },
  {
    title: 'NGINX',
    proficiency: 10,
    topic: [
      'Coding',
    ],
  },
];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

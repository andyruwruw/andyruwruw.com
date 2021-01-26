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

export const jobs: Array<IJob> = [
  {
    title: 'Frontend Developer Intern',
    link: 'https://www.chess.com/',
    company: 'Chess.com',
    location: 'Los Altos, CA',
    start: 1585724400000,
    end: 1598943600000,
    description: [
      'Designed and developed reusable components in Vue.js and PHP.',
      'Completed refactor of frontend design for Puzzles and Four Player Chess.',
    ],
    achievements: [],
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
      'Asked to find drivers for the U.S. Open in New York.',
      'Found and hired 30 drivers licensed for paratransit.',
    ],
    achievements: [
      
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

export interface IProject {
  title: string,
  url: string,
  github: string,
  description: Array<string>
  image: string,
  topics: Array<string>
  tools: Array<string>
  start: number,
  end: Number,
  npm: string | null,
}

export const projects: IProject[] = [
  {
    title: 'Portfolio Site',
    url: 'https://andyruwruw.com',
    github: 'https://github.com/andyruwruw/andyruwruw.com',
    description: [
      'Portfolio site, built with React.js and Typescript to show proficiency, as well as visually showcase examples of work.',
      'Most of my work is done in Vue.js, so a project like this was a great opportunity to use React.',
      '90% of the visual appeal comes from some very fancy illustrations animated to appear 3D.'
    ],
    image: 'portfolio_site',
    topics: [
    ],
    tools: [
      'React.js',
      'Typescript',
      'Material UI'
    ],
    start: 1595833200000,
    end: 1606118400000,
    npm: null,
  },
  {
    title: 'Boid Boogie',
    url: 'https://boidboogie.com/',
    github: 'https://github.com/andyruwruw/boid-boogie',
    description: [
      'Flocking simulation that dynamically moves the boids with the user\'s music.',
      'Utilizing Spotify\'s Web Playback SDK and API to retrieve the user\'s playback and track audio analaysis',
      'Inspired by https://www.kaleidosync.com/visualizer',
    ],
    image: 'boid_boogie',
    topics: [
      'Spotify',
      'Flocking Simulation',
    ],
    tools: [
      'Vue.js',
      'Spotify API',
      'Spotify Playback SDK',
      'P5.js',
      'Vercel Serverless',
    ],
    start: 1596006000000,
    end: 1596783600000,
    npm: null,
  },
  {
    title: 'Github Profile README.md',
    url: 'https://github.com/andyruwruw',
    github: 'https://github.com/andyruwruw/andyruwruw',
    description: [
      'Dynamic Github profile README.md that uses a Vercel serverless backend to render React.js components based on API results.',
      'The README.md always displays my current Spotify playback, top tracks, and current chess.com games',
      'Inspired by natemoo-re.',
    ],
    topics: [
      'Spotify',
      'chess.com',
    ],
    image: 'andyruwruw_github_profile',
    tools: [
      'React.js',
      'Vercel Serverless',
      'Spotify API',
      'Chess.com API',
    ],
    start: 1595660400000,
    end: 1596006000000,
    npm: null,
  },
  {
    title: 'enhanced-spotify-api',
    url: 'https://enhancedspotifyapi.com/',
    github: 'https://github.com/andyruwruw/enhanced-spotify-api',
    description: [
      'Object oriented Spotify API wrapper, providing developers with prototype classes for each of Spotify\'s data objects.',
      'Lazy loading of data, minimal requests, and all of Spotify\'s API in some nifty classes, with easy customization',
      'By far my most downloaded npm package.',
    ],
    image: 'enhanced_spotify_api',
    topics: [
      'Spotify',
      'npm',
    ],
    tools: [
      'Jest.js',
      'Spotify API',
    ],
    start: 1584774000000,
    end: 1585724400000,
    npm: 'enhanced-spotify-api',
  },
  {
    title: 'chess-web-api',
    url: 'https://www.npmjs.com/package/chess-web-api',
    github: 'https://github.com/andyruwruw/chess-web-api',
    description: [
      'A lightweight unoffical wrapper for the Chess.com public data API.',
      'Featured on Chess.com\'s official API documentation, and recieves maintenance from myself and the community.',
    ],
    image: 'chess_web_api',
    topics: [
      'chess.com',
      'npm',
    ],
    tools: [
      'Jest.js',
      'Chess.com API',
    ],
    start: 1581062400000,
    end: 1581235200000,
    npm: 'chess-web-api',
  },
  {
    title: 'chess-image-generator',
    url: 'https://www.npmjs.com/package/chess-image-generator',
    github: 'https://github.com/andyruwruw/chess-image-generator',
    description: [
      'Generates PNG file or buffer based on commonly used chess position notations.',
      'Probably my most boring package, but recieved a bit more attention after an article was written about it!',
    ],
    image: 'chess_image_generator',
    topics: [
      'chess',
      'npm',
    ],
    tools: [],
    start: 1581062400000,
    end: 1581235200000,
    npm: 'chess-image-generator',
  },
  {
    title: 'Blackmailer',
    url: 'https://blackmailer.xyz',
    github: 'https://github.com/cyficowley/blackmail',
    description: [
      'Allows users to blackmail themselves into completing goals.',
      'Describe your goal, upload blackmail, and the email of the worst person it could be sent to.',
      'Submit proof of completion before your self set deadline, or get blackmailed.',
    ],
    topics: [
      'Gimmick',
    ],
    image: 'blackmailer',
    tools: [
      'Firebase',
      'Vue.js',
      'Vuetify',
    ],
    start: 1591686000000,
    end: 0,
    npm: null,
  },
  {
    title: 'Countdown Timer',
    url: 'https://countdown-timer-app.vercel.app/',
    github: 'https://github.com/andyruwruw/countdown-timer',
    description: [
      'Minimalist timer displaying the time remaining you have until your next Google calendar event or until a current event expires.',
      'An older project, but one I still use to this day.',
    ],
    topics: [
      'Productivity',
    ],
    image: 'countdown_timer',
    tools: [
      'Vue.js',
      'Google API',
      'P5.js',
      'Vercel Serverless',
      'Vuetify',
    ],
    start: 1566630000000,
    end: 1567839600000,
    npm: null,
  },
  {
    title: 'Countdown Timer',
    url: 'https://countdown-timer-app.vercel.app/',
    github: 'https://github.com/andyruwruw/countdown-timer',
    description: [
      'Minimalist timer displaying the time remaining you have until your next Google calendar event or until a current event expires.',
      'An older project, but one I still use to this day.',
    ],
    topics: [
      'Productivity',
    ],
    image: 'countdown_timer',
    tools: [
      'Vue.js',
      'Google API',
      'P5.js',
      'Vercel Serverless',
      'Vuetify',
    ],
    start: 1566630000000,
    end: 1567839600000,
    npm: null,
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

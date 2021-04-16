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

const jobs: Array<IJob> = [
  {
    title: 'Software Engineer Intern',
    link: 'https://business.adobe.com/products/target/adobe-target.html',
    company: 'Adobe',
    location: 'San Francisco, CA',
    start: 1621839600000,
    end: 1628838000000,
    description: [
      'Working on microservices in the backend of Adobe Target\'s personalized content delivery infrastructure and on the client SDKs that enable developers to easily integrate the service into their apps.',
    ],
    achievements: [],
    topics: [
      'Coding',
      'Back-end',
    ],
    type: 'Internship',
  },
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

export default jobs;

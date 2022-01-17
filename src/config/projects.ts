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

const projects: IProject[] = [
  {
    title: 'Spotify Cartography',
    url: 'https://spotify-cartography.vercel.app/',
    github: 'https://github.com/andyruwruw/spotify-cartography',
    description: [
      'Spotify Cartography groups simular songs together based on their happiness, energy, danceability and six other variables using an algorithm called t-distributed stochastic neighbor embedding (t-SNE).',
      'The songs are then displayed in a 3D space using Three.js, allowing you to fly around and explore.',
      '1st place winner for Oregon State Beaverhacks Winter 2022!',
    ],
    image: 'spotify_cartography',
    topics: [
      'Spotify',
    ],
    tools: [
      'Vue.js',
      'Three.js',
      't-SNE',
      'Spotify API',
      'Spotify Playback SDK',
    ],
    start: 1641456000000,
    end: 1642406400000,
    npm: null,
  },
  {
    title: 'password-encrypter',
    url: 'https://password-encrypter.vercel.app/',
    github: 'https://github.com/andyruwruw/password-encrypter',
    description: [
      'password-encrypter takes a base, secondary, integer and skull key to generate a password hashed from a combination of those four parameters. The intent is to store and maintain a different base, secondary, integer for every account and use this app to find the password.',
      'I\'ve been using algorithm generated passwords for a while now, but have always wanted a more secure system that used hashing.',
    ],
    image: 'password_encrypter',
    topics: [
      'Security',
      'Utilities',
    ],
    tools: [
      'Vue.js',
      'Typescript',
    ],
    start: 1622530800000,
    end: 1622876400000,
    npm: null,
  },
  {
    title: 'andyruwruw.com',
    url: 'https://andyruwruw.com',
    github: 'https://github.com/andyruwruw/andyruwruw.com',
    description: [
      'Portfolio site, built with React.js and Typescript to demonstrate proficiency, as well as visually showcase examples of work.',
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
    title: 'Stardew Valley Mod: WaterBot',
    url: 'https://www.nexusmods.com/stardewvalley/mods/8167',
    github: 'https://github.com/andyruwruw/stardew-valley-water-bot',
    description: [
      'WaterBot is a Stardew Valley mod that helps you water your crops while staying as vanilla as possible.',
      'When you right-click a not fully grown plant with your Watering Can, the bot will take control of your character, watering all your crops and refilling the water can at the nearest water source whenever necessary.',
      'The bot uses a variety of algorithms to find the best path through your crops, including depth-first, breadth-first, A* searches and TSP greedy.',
    ],
    topics: [
      'Stardew Valley',
      'Game Mods'
    ],
    image: 'water_bot',
    tools: [
      'C#',
      '.NET Framework',
      'SMAPI',
    ],
    start: 1613721600000,
    end: 1614326400000,
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
    title: 'Melophile',
    url: '',
    github: 'https://github.com/MelophileOrg',
    description: [
      'Application for providing insight into your unique music taste by analayzing your library using Spotify\'s API.',
      'Sharing and making your profile public allows users to discover new music through the best of other\'s libraries.',
      'My own obsession with music pushes this to be my most ambitious project to date, with the scope of the project constantly expanding.',
      'For more information, see the README.md at MelophileOrg/melophile.',
    ],
    topics: [
      'Spotify',
    ],
    image: 'melophile',
    tools: [
      'Vue.js',
      'Terraform',
      'AWS Lambda & SQS',
      'MongoDB',
      'Spotify API',
      'Typescript',
      'Chart.js',
    ],
    start: 1568962800000,
    end: 0,
    npm: null,
  },
  {
    title: 'melophile-ui',
    url: '',
    github: 'https://github.com/MelophileOrg',
    description: [
      'With the scope of Melophile expanding, I\'ve had to part with Vuetify.js, my favorite component library, in favor of a custom made library that suites my needs.',
      'melophile-ui will contain all the reusable Vue.js components, written in Typescript, that Melophile utilizes.',
      'The repo is made private due to the use of licensed designs.',
    ],
    topics: [
      'Component Library',
    ],
    image: 'melophile_ui',
    tools: [
      'Rollup.js',
      'Vue.js',
      'Typescript',
      'Storybook.js',
      'Chart.js',
    ],
    start: 1578384000000,
    end: 0,
    npm: null,
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
    end: 1593586800000,
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
      'Utilities',
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

export default projects;

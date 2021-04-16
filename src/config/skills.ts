export interface ISkill {
  title: string,
  proficiency: number,
  topic: string[],
  icon?: string,
}

const skills: ISkill[] = [
  {
    title: 'Vue.js',
    proficiency: 10,
    topic: [
      'Web Development',
      'Frontend',
      'Coding',
    ],
    icon: 'vue',
  },
  {
    title: 'React.js',
    proficiency: 10,
    topic: [
      'Web Development',
      'Frontend',
      'Coding',
    ],
    icon: 'react',
  },
  {
    title: 'Typescript',
    proficiency: 10,
    topic: [
      'Web Development',
      'Frontend',
      'Coding',
    ],
    icon: 'typescript',
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

export default skills;

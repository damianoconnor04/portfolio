export type skillsType = 'Design' | 'Build' | 'Enhance' | 'Deploy';
export const skills: skillsType[] = ['Design', 'Build', 'Enhance', 'Deploy'];

export const skillsContent = {
  Design: [
    {
      category: 'Graphics',
      tools: ['Photoshop', 'Illustrator', 'Inkscape'],
    },
    {
      category: 'Prototyping',
      tools: ['Storybook', 'Framer', 'Figma', 'Sketch'],
    },
  ],

  Build: [
    {
      category: 'Stack',
      tools: ['React', 'Next.js', 'Bun', 'MySQL', 'MongoDB', 'Prisma'],
    },
    {
      category: 'Libraries',
      tools: ['Axios', 'React Router', 'Redux', 'TailwindCSS', 'MaterialUI'],
    },
  ],

  Enhance: [
    {
      category: 'Testing',
      tools: ['Playwright', 'Jest', 'React Testing Library'],
    },
    {
      category: 'Optimization',
      tools: ['Axe', 'Next SEO', 'Google Search Console', 'Lighthouse'],
    },
  ],

  Deploy: [
    { category: 'Local', tools: ['Nginx', 'Docker', 'Apache', 'Ubuntu'] },
    {
      category: 'Cloud',
      tools: ['AWS', 'Cloudflare', 'Vercel', 'GitHub Pages'],
    },
  ],
};

export const sections = ['Skills', 'Projects', 'Contact'];

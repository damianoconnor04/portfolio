export type skillsType = 'Design' | 'Build' | 'Enhance' | 'Deploy';
export const skills: skillsType[] = ['Design', 'Build', 'Enhance', 'Deploy'];

export const skillsContent = {
  Design: [
    { category: 'Wireframes', tools: ['Figma', 'Adobe XD'] },
    { category: 'Prototyping', tools: ['Storybook'] },
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
      category: 'Optimization',
      tools: ['Lighthouse', 'Axe', 'Next SEO', 'Google Search Console'],
    },
    {
      category: 'Testing',
      tools: ['Playwright', 'Jest', 'React Testing Library'],
    },
  ],

  Deploy: [
    {
      category: 'Cloud',
      tools: ['AWS', 'Cloudflare', 'Vercel', 'GitHub Pages'],
    },
    { category: 'Local', tools: ['Nginx', 'Docker', 'Apache', 'Ubuntu'] },
  ],
};

export const sections = ['Skills', 'Projects', 'Contact'];

export const info = {
  name:      'Christian Cáceres Marín',
  role:      'Full Stack Developer',
  roleAlt:   'Ingeniero Civil en Computación e Informática',
  uni:       'Universidad de Tarapacá',
  location:  'Iquique, Chile 🇨🇱',
  bio:       'Desarrollador full stack con formación en ingeniería informática. Construyo aplicaciones web modernas con React y Express, enfocado en interfaces limpias, código mantenible y soluciones reales para emprendedores y empresas.',
  available: true,
  email:     'christiancaceres1398@gmail.com',
  phone:     '+56 9 8919 8933',
  github:    'https://github.com/CoipoNorte',
  linkedin:  'https://www.linkedin.com/in/christian-caceres-marin-538045365',
  whatsapp:  'https://wa.me/56989198933?text=Hola%20Christian%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte',
  instagram: 'https://instagram.com/coipo_norte',
}

export const stack = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React',       level: 90 },
      { name: 'Vite',        level: 88 },
      { name: 'HTML5',       level: 95 },
      { name: 'CSS3',        level: 92 },
      { name: 'JavaScript',  level: 88 },
      { name: 'Tailwind',    level: 80 },
      { name: 'Bootstrap',   level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js',   level: 82 },
      { name: 'Express',   level: 85 },
      { name: 'NestJS',    level: 65 },
      { name: 'Python',    level: 75 },
      { name: 'PHP',       level: 68 },
      { name: 'Java',      level: 70 },
    ],
  },
  {
    category: 'Base de Datos',
    icon: '🗄️',
    items: [
      { name: 'MySQL',      level: 82 },
      { name: 'MongoDB',    level: 75 },
      { name: 'SQLite',     level: 78 },
      { name: 'PostgreSQL', level: 65 },
    ],
  },
  {
    category: 'Herramientas',
    icon: '🔧',
    items: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Electron',     level: 72 },
      { name: 'Docker',       level: 60 },
      { name: 'Figma',        level: 70 },
      { name: 'Postman',      level: 85 },
      { name: 'VS Code',      level: 95 },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'CoipoNorte Precios 2026',
    description: 'Lista de precios referencial para servicios informáticos. SPA con React + Vite, navegación por secciones, animaciones flotantes y desplazamiento suave. Desplegado en GitHub Pages.',
    tech: ['React', 'Vite', 'CSS3', 'GitHub Pages'],
    category: 'Web App',
    featured: true,
    github: 'https://github.com/CoipoNorte/coiponorte-precios',
    demo:   'https://coiponorte.github.io/coiponorte-precios',
    image:  '/portfolio/assets/1.png',
  },
  {
    id: 2,
    title: 'Vivimar',
    description: 'Landing page de contacto para empresa inmobiliaria. Diseño limpio y responsive orientado a la captación de clientes con formulario integrado.',
    tech: ['HTML5', 'CSS3'],
    category: 'Landing Page',
    featured: true,
    github: null,
    demo:   'https://www.vivimar.cl',
    image:  '/portfolio/assets/2.png',
  },
  {
    id: 3,
    title: 'Animales de Chile',
    description: 'Aplicación web educativa sobre fauna chilena. Ilustraciones SVG interactivas con animaciones y navegación por especies nativas.',
    tech: ['JavaScript', 'SVG', 'HTML5', 'CSS3'],
    category: 'Web Educativa',
    featured: true,
    github: 'https://github.com/CoipoNorte/Animales-de-Chile',
    demo:   'https://coiponorte.github.io/Animales-de-Chile',
    image:  '/portfolio/assets/3.png',
  },
  {
    id: 4,
    title: 'Tech Dashboard',
    description: 'Aplicación de escritorio para gestión y organización de servicios técnicos. Vistas dinámicas con EJS, interfaz con Bootstrap 5 y runtime Electron.',
    tech: ['Electron', 'Bootstrap 5', 'EJS', 'Node.js'],
    category: 'Escritorio',
    featured: false,
    github: 'https://github.com/CoipoNorte',
    demo:   null,
    image:  '/portfolio/assets/4.png',
  },
]

export const navLinks = [
  { label: 'Sobre mí', id: 'about'    },
  { label: 'Stack',    id: 'stack'    },
  { label: 'Proyectos',id: 'projects' },
  { label: 'Contacto', id: 'contact'  },
]
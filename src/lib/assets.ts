export const techIcons: Record<string, string> = {
  // Programming Languages
  cpp:      'https://skillicons.dev/icons?i=cpp&theme=light',
  python:   'https://skillicons.dev/icons?i=python&theme=light',
  javascript: 'https://skillicons.dev/icons?i=js&theme=light',
  go:       'https://skillicons.dev/icons?i=go&theme=light',
  csharp:   'https://skillicons.dev/icons?i=cs&theme=light',
  
  // Frontend
  react:    'https://skillicons.dev/icons?i=react&theme=light',
  html:     'https://skillicons.dev/icons?i=html&theme=light',
  css:      'https://skillicons.dev/icons?i=css&theme=light',
  tailwind: 'https://skillicons.dev/icons?i=tailwind&theme=light',
  
  // Backend
  nodejs:   'https://skillicons.dev/icons?i=nodejs&theme=light',
  dotnet:   'https://skillicons.dev/icons?i=dotnet&theme=light',
  
  // Databases
  sql:      'https://skillicons.dev/icons?i=mysql&theme=light',
  mongodb:  'https://skillicons.dev/icons?i=mongodb&theme=light',
  postgres: 'https://skillicons.dev/icons?i=postgres&theme=light',
  redis:    'https://skillicons.dev/icons?i=redis&theme=light',
  
  // Tools
  git:      'https://skillicons.dev/icons?i=git&theme=light',
  docker:   'https://skillicons.dev/icons?i=docker&theme=light',
  vscode:   'https://skillicons.dev/icons?i=vscode&theme=light',
  postman:  'https://skillicons.dev/icons?i=postman&theme=light',
  
  // Placeholders
  restapi:  'https://placehold.co/48x48/FFFFFF/1a1a2e?text=API',
  iot:      'https://placehold.co/48x48/FFFFFF/1a1a2e?text=IoT',
  opencv:   'https://cdn.simpleicons.org/opencv',
};

export const projectImages = {
  ecommerce: 'https://picsum.photos/600/400?random=10',
  ai: 'https://picsum.photos/600/400?random=11',
  chess: 'https://picsum.photos/600/400?random=12',
  school: 'https://picsum.photos/600/400?random=13',
  security: 'https://picsum.photos/600/400?random=14',
};

export const getAvatar = (name: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&scale=80`;

export const logo =
  'https://placehold.co/200x50/0a0e27/00d4ff?text=MA&font=montserrat';

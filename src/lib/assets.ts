export const techIcons: Record<string, string> = {
  twilio: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twilio.svg',
  zapier: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg',
  systeme: 'https://placehold.co/48x48/141829/00d4ff?text=S',
  n8n: 'https://n8n.io/favicon.ico',
  dotnet: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
  nodejs: 'https://skillicons.dev/icons?i=nodejs&theme=dark',
  react: 'https://skillicons.dev/icons?i=react&theme=dark',
  sql: 'https://skillicons.dev/icons?i=mysql&theme=dark',
  python: 'https://skillicons.dev/icons?i=python&theme=dark',
  opencv: 'https://placehold.co/48x48/141829/00d4ff?text=CV',
  iot: 'https://placehold.co/48x48/141829/00d4ff?text=IoT',
  webhook: 'https://placehold.co/48x48/141829/00d4ff?text=WH',
  restapi: 'https://placehold.co/48x48/141829/00d4ff?text=API',
};

export const projectImages = {
  sms: 'https://picsum.photos/600/400?random=1',
  workflow: 'https://picsum.photos/600/400?random=2',
  twilio: 'https://picsum.photos/600/400?random=3',
  institute: 'https://picsum.photos/600/400?random=4',
  faceRecognition: 'https://picsum.photos/600/400?random=5',
};

export const getAvatar = (name: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&scale=80`;

export const logo =
  'https://placehold.co/200x50/0a0e27/00d4ff?text=Zentro&font=montserrat';

export const techIcons: Record<string, string> = {
  // Placeholders — white bg, dark text
  twilio: 'https://placehold.co/48x48/FFFFFF/F22F46?text=Twilio',
  webhook:  'https://placehold.co/48x48/FFFFFF/1a1a2e?text=WH',
  iot:      'https://placehold.co/48x48/FFFFFF/1a1a2e?text=IoT',
  restapi:  'https://placehold.co/48x48/FFFFFF/1a1a2e?text=API',
  systeme: 'https://placehold.co/48x48/00d4ff/1a1a2e?text=S',
  // The rest of your working icons
  zapier:   'https://cdn.simpleicons.org/zapier',
  n8n:      'https://cdn.simpleicons.org/n8n',
  opencv:   'https://cdn.simpleicons.org/opencv',
  dotnet:   'https://skillicons.dev/icons?i=dotnet&theme=light',
  nodejs:   'https://skillicons.dev/icons?i=nodejs&theme=light',
  react:    'https://skillicons.dev/icons?i=react&theme=light',
  sql:      'https://skillicons.dev/icons?i=mysql&theme=light',
  python:   'https://skillicons.dev/icons?i=python&theme=light',
  
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

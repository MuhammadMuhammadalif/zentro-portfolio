export function scrollToSection(href: string) {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function getCompanyName() {
  return process.env.NEXT_PUBLIC_COMPANY_NAME || 'Your Software House';
}

export function getCompanyEmail() {
  return process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'hello@example.com';
}

export function getCalendlyUrl() {
  return process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
}

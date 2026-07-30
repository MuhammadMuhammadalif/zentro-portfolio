export function scrollToSection(href: string) {
  // Remove the # if it's already there, then add it back for querySelector
  const targetId = href.startsWith('#') ? href : `#${href}`;
  const element = document.querySelector(targetId);
  
  if (element) {
    console.log(`Scrolling to element: ${targetId}`);
    
    // Get the element's position
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    // Account for fixed navbar (adjust offset as needed)
    const navbarHeight = 80; // Approximate navbar height
    const offsetPosition = elementPosition - navbarHeight;
    
    // Smooth scroll to the position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.error(`Element not found: ${targetId}`);
    // Fallback: scroll to the case studies section
    const caseStudiesSection = document.querySelector('#caseStudies');
    if (caseStudiesSection) {
      const sectionPosition = caseStudiesSection.getBoundingClientRect().top + window.pageYOffset;
      const navbarHeight = 80;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  }
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

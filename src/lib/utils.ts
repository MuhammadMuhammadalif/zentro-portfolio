export function scrollToSection(href: string) {
  const element = document.querySelector(href);
  
  if (element) {
    console.log(`Scrolling to element: ${href}`);
    
    // Check if smooth scrolling is supported
    const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    
    if (supportsSmoothScroll) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      // Fallback for browsers that don't support smooth scrolling
      element.scrollIntoView(true);
      
      // Manual smooth scroll fallback
      const scrollTo = element.getBoundingClientRect().top + window.pageYOffset;
      const duration = 500; // milliseconds
      const start = window.pageYOffset;
      const distance = scrollTo - start;
      let startTime: number | null = null;
      
      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, start + distance * progress);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      requestAnimationFrame(animation);
    }
  } else {
    console.error(`Element not found: ${href}`);
    // Fallback: scroll to the case studies section
    const caseStudiesSection = document.querySelector('#caseStudies');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

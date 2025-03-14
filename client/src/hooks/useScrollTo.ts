import { useCallback } from 'react';

export function useScrollTo() {
  return useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const offset = 100; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);
}

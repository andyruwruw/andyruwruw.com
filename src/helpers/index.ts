import { months } from '../config/index';

export function getDate(time: number) {
  const date = new Date(time);
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export class ScrollHelper {
  static scrollTo(element: any, delay: number | undefined | null = null, behavior: 'smooth' | 'auto' | undefined = 'smooth') {
    console.log(element);
    if (typeof window === 'undefined') {
      return;
    }
  
    window.requestAnimationFrame(() => {
      let offset = element.offsetTop;
      try {
        let bodyRect = document.body.getBoundingClientRect();
        let bodyStyle = window.getComputedStyle(document.body, null);
  
        let paddingTop = parseFloat(bodyStyle.getPropertyValue('padding-top'));
  
        let elementRect = element.getBoundingClientRect();
        offset = elementRect.top - paddingTop - bodyRect.top;
      } catch (err) {
        console.log('Scroll failed');
      }
  
      if (delay) {
        setTimeout(() => {
          window.scrollTo({ top: offset, left: 0, behavior });
        }, delay);
      } else {
        window.scrollTo({ top: offset, left: 0, behavior });
      }
    });
  }
}
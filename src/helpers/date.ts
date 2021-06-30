import { months } from '../config/index';

/**
 * Returns a formated date string from milliseconds
 *
 * @param {number} time Milliseconds
 * @returns {string} Formated date
 */
export function getDate(time: number) {
  const date = new Date(time);
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

import { months } from '../config/index';

export function getDate(time: number) {
  const date = new Date(time);
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

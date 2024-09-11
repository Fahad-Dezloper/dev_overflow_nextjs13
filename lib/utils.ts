import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const elapsed = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(elapsed / (1000 * 60));
  const hours = Math.floor(elapsed / (1000 * 60 * 60));
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30.44)); // Average days in a month
  const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365.25)); // Accounting for leap years

  if (seconds < 60) {
    return 'just now';
  } else if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (days < 7) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (weeks < 5) {
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (months < 12) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};

export const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    // If the number is 1 million or more, divide by 1 million and append 'M'
    return (num / 1_000_000).toFixed(1) + 'M';
  } else if (num >= 1_000) {
    // If the number is 1 thousand or more, divide by 1 thousand and append 'k'
    return (num / 1_000).toFixed(1) + 'k';
  } else {
    // If the number is less than 1 thousand, return it as is
    return num.toString();
  }
};

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return num.toString();
  }
};


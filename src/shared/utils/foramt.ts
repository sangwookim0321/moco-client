import dayjs from 'dayjs';

export function foramtDate(date: string): string {
  return dayjs(date).format('YYYY.MM.DD');
}

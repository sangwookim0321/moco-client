import dayjs from 'dayjs';

export function foramtDate(date: string): string {
  if (!date) {
    return '';
  }

  return dayjs(date).format('YYYY.MM.DD');
}

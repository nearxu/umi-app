import { request } from '@/utils/request';

export function getData(url: string) {
  return request.post(url, {});
}

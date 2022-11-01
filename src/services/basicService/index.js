import { request, useRequest } from 'umi';

export async function testConnect() {
  return request('https://rp9me5.lafyun.com:443/testPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      wow: 'kkk',
    },
  });
}

import { extend } from 'umi-request';

/** 异常处理程序 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const { status, url, statusText } = response;

    const errorText = `${url} ${statusText}`;

    console.log(errorText);
  } else if (!response) {
    console.log(`您的网络发生异常，无法连接服务器`);
  }
  return response;
};

const request = extend({
  errorHandler, // 默认错误处理
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

request.interceptors.request.use(
  (url, options) => {
    const _options: any = {};
    const methods = options.method || 'GET';

    const commonData = {};

    if (methods.toUpperCase() === 'POST') {
      _options.data = {
        ...options.data,
        ...commonData,
      };
    } else {
      _options.params = {
        ...options.params,
        ...commonData,
      };
    }

    return {
      url,
      options: {
        ...options,
        ..._options,
      },
    };
  },
  { global: false },
);

export { request };

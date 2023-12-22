import type { AsyncData } from "nuxt/app";

// check api.d.ts if you change this
export enum Method {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  DELETE = "DELETE",
  PUT = "PUT",
}

export type APIConfig = {
  host?: string;
  endpoint: string;
  method: Method;
  payload?: { [index: string]: string };
  params?: { [index: string]: string };
  contentType?: string;
  headers?: any;
};

const useMeApi = async <DataT, ErrorT>(
  config: APIConfig | string
): Promise<{
  response: AsyncData<DataT, ErrorT>;
  abortController: AbortController;
}> => {
  try {
    let oa: {
      method: Method;
      url: string;
      params: { [index: string]: string };
      headers: any;
      data?: { [index: string]: string };
      timeout?: number;
    };

    // if config is just URL
    if (typeof config === "string") {
      oa = {
        method: Method.GET,
        url: config,
        params: {},
        headers: {
          "Content-type": "application/json",
        },
      };
    } else {
      const _config = JSON.parse(JSON.stringify(config));
      oa = {
        method: _config.method as Method,
        url: _config.host + "/" + _config.endpoint,
        params: _config.params || {},
        data: _config.payload || {},
        headers: {
          "Content-type": _config?.contentType
            ? _config.contentType
            : "text/plain",
        },
      };
    }
    const abortController: AbortController = new AbortController();

    // const response = await useLazyFetch(oa.url, {
    //   method: oa.method,
    //   query: oa.params,
    //   body: oa.data,
    //   headers: oa.headers,
    // });

    const key =
      oa.url +
      JSON.stringify(oa.method)?.toLowerCase() +
      JSON.stringify(oa.headers)?.toLowerCase() +
      JSON.stringify(oa.params)?.toLowerCase() +
      JSON.stringify(oa.data)?.toLowerCase();
    // console.log("useAsyncData KEY:", key);
    const response = await useLazyAsyncData(key, () => {
      return $fetch(oa.url, {
        method: oa.method,
        query: oa.params,
        body: oa.data,
        headers: oa.headers,
        signal: abortController.signal,
      });
    });

    if (response.status.value === "error") {
      throw new Error(response.error.value?.message);
    }

    return { response, abortController } as {
      response: AsyncData<DataT, ErrorT>;
      abortController: AbortController;
    };
  } catch (err) {
    console.log("API Error: ", err);
    // will add more error handler
    throw err;
  }
};

export default {
  useMeApi,
};

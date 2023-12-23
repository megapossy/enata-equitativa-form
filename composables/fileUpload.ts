import axios from "axios";

export const useFileUpload = () => {
  const upload = async (filePath: string, file: File): Promise<string> => {
    try {
      const uniqFileKey =
        Date.now() + "_" + helpers.getRandomInt(10000000) + "_" + filePath;
      const { data: url } = await useFetch("/api/r2-signed-url", {
        params: {
          key: uniqFileKey,
        },
      });

      if (!url.value)
        throw createError({
          statusMessage: "Signed URL Invalid",
        });

      let formData = new FormData();
      formData.append("file", file);
      const data = new Blob([file], { type: "image/jpeg" });
      const { error } = await useFetch(url.value as string, {
        method: "put",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: data,
      });

      return uniqFileKey;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return {
    upload,
  };
};

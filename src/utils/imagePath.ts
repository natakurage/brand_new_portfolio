export const getStoragePath = (src: string) => {
  return new URL(src, process.env.NEXT_PUBLIC_STORAGE_BASE_PATH).toString();
};


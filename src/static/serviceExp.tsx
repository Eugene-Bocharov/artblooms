const importImages = (
  prefix: string,
  count: number,
  extensions: string[] = ['jpg', 'jpeg', 'png', 'webp']
) => {
  const images = [];

  for (let i = 1; i <= count; i++) {
    for (const ext of extensions) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        images.push(require(`./${prefix}_${i}.${ext}`));
        break; // If the file is found, stop checking other extensions
      } catch (error) {
        // Ignore errors if the file doesn't exist
      }
    }
  }

  return images;
};

// Adjust counts based on the highest-numbered image you have
export const photos = {
  partner: importImages('partner', 50),
  logoh: [require('./logoh2.png')],
  logod: [require('./logod3.png')],
  welc: [require('./welcImg3.jpg')],
};

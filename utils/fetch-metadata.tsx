export const getMetaData = async (url: string) => {
  const response = await fetch(`/api/metadata?url=${url}`);
  const metadata = await response.json();

  console.log('metadata2222', metadata);

  const urlName = url.split('/').pop() || '-';
  console.log('urlName', urlName, metadata.favico);

  const favico =
    metadata.favico !== ''
      ? metadata.favico.includes('https')
        ? metadata.favico
        : metadata.favico.split('/')[1].includes(urlName)
        ? `${url}${metadata.favico.split(urlName)[1]}`
        : `${url}${metadata.favico}`
      : '';

  console.log('FAVICO123', favico);

  return {
    title: metadata.title,
    description: metadata.description,
    image: metadata.image,
    favicon: favico,
  };
};

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '49wnzdwt',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skWGQ6rnZl8ajrF503Yqm4gx0a3BNTCLnaD6arpuOLNT8quofC5qoEsM0UAcZ3nQJ3hqgV8k0DRMdrBfFBCFaUBWKtIFxutFRlgKxIzU781KOrz7I2risbUejNSSFis2a3ZHomWpenXixVqr0velYfjzgRRce22H8Izv0g8b2E4K5UzRxwqA',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

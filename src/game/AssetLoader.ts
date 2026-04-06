import spaceshipImgUrl from '@/static/images/spaceship.png';
import backgroundImgUrl from '@/static/images/background.png';
import { requiredEnemyImageUrls } from './enemies/enemyRegistry';

export { spaceshipImgUrl, backgroundImgUrl };

export type ImageMap = { [imageUrl: string]: HTMLImageElement };

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(`Failed to load image: ${src} - ${err}`);
  });
}

export async function loadAllAssets(): Promise<ImageMap> {
  const coreImageUrls = [spaceshipImgUrl, backgroundImgUrl];
  const allUrls = [...new Set([...coreImageUrls, ...requiredEnemyImageUrls])];

  const loadedImages = await Promise.all(allUrls.map(loadImage));

  const images: ImageMap = {};
  allUrls.forEach((url, i) => {
    images[url] = loadedImages[i];
  });

  return images;
}

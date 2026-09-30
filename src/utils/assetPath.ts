/**
 * Helper to resolve assets from the public directory with Vite's configured BASE_URL.
 * This guarantees proper loading on GitHub Pages (e.g. /roshani/photos/photo1.jpg)
 * as well as local development (e.g. /photos/photo1.jpg).
 */
export function getAssetUrl(relativePath: string): string {
  if (!relativePath) return '';
  if (relativePath.startsWith('http://') || relativePath.startsWith('https://') || relativePath.startsWith('data:')) {
    return relativePath;
  }
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}

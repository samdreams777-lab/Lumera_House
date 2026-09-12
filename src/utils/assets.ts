/**
 * Resolves static asset paths with Vite's BASE_URL to support subpath hosting (e.g. GitHub Pages).
 * Made idempotent to prevent double-prefixing if called multiple times on the same path.
 */
export function getAssetUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  
  // Prevent double-prefixing if path already begins with base URL
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

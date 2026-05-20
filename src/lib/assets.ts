/**
 * Asset paths configuration.
 * Update these paths if your file names differ from the defaults.
 */

export const ASSETS = {
  videos: {
    heroEstate: "/videos/hero-estate.mp4",
    flowerField: "/videos/flower-field.mp4",
    mistOverlay: "/videos/mist-overlay.mp4", // optional
  },
  images: {
    heroEstatePoster: "/images/hero-estate-poster.jpg",
    flowerFieldPoster: "/images/flower-field-poster.jpg",
  },
  textures: {
    grain: "/textures/grain.png", // optional
  },
  logo: {
    svg: "/logo/logo.svg",
    png: "/logo/logo.png",
  },
} as const;

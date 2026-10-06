import data from '~/data/gallery.json'

/** A short looping clip of the mod doing its thing. */
export type GalleryClip = {
  src: string
  caption: string
}

export type GalleryShot = {
  src: string
  title: string
  caption: string
  width: number
  height: number
}

export type ModGallery = {
  clips: GalleryClip[]
  shots: GalleryShot[]
}

const GALLERIES = data as Record<string, ModGallery>

/** The pictures for a mod, by its family key and repo folder. A bundle's folder is its family key. */
export function getGallery(family: string, dir: string): ModGallery | null {
  return GALLERIES[`${family}/${dir}`] ?? null
}

/** The file's name without its folder, number and extension, so "/gallery/world/structures/4-pyramid.webp" is "pyramid". */
export function galleryName(src: string): string {
  return src.slice(src.lastIndexOf('/') + 1).replace(/\.\w+$/, '').replace(/^\d+-/, '')
}

/** A mod's main clip is "clip.webp" and the others are "clip-<name>.webp". */
export function clipName(src: string): string {
  return galleryName(src).replace(/^clip-?/, '') || 'clip'
}

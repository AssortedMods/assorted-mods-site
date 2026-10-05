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

/** The pictures for a mod, by its family key and repo folder. */
export function getGallery(family: string, dir: string): ModGallery | null {
  return GALLERIES[`${family}/${dir}`] ?? null
}

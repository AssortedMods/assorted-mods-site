import { computed, inject, provide, reactive, ref, type InjectionKey, type Ref } from 'vue'
import { clipName, galleryName, getGallery, type GalleryClip, type GalleryShot, type ModGallery } from '~/utils/gallery'

/**
 * One mod page's pictures. The page places shots and clips beside the text with GalleryShot and
 * GalleryClip, and whatever it does not place is shown at the end of the page.
 */
export type ModGalleryContext = {
  gallery: ModGallery | null
  /** The main clip, shown under the page header. */
  lead: GalleryClip | null
  /** Sources the page has placed itself. */
  placed: Set<string>
  /** Index into gallery.shots of the picture open in the lightbox. */
  opened: Ref<number | null>
  /** Which way the last step went, so the new picture slides in from that side. */
  forward: Ref<boolean>
  open: (index: number) => void
  close: () => void
  step: (by: number) => void
}

const KEY: InjectionKey<ModGalleryContext> = Symbol('mod-gallery')

export function provideModGallery(family: string, dir: string): ModGalleryContext {
  const gallery = getGallery(family, dir)
  const opened = ref<number | null>(null)
  const forward = ref(true)
  const context: ModGalleryContext = {
    gallery,
    lead: gallery?.clips.find(c => clipName(c.src) === 'clip') ?? null,
    placed: reactive(new Set<string>()),
    opened,
    forward,
    open(index) {
      opened.value = index
    },
    close() {
      opened.value = null
    },
    step(by) {
      const count = gallery?.shots.length ?? 0
      if (opened.value === null || !count) return
      forward.value = by > 0
      opened.value = (opened.value + by + count) % count
    }
  }
  provide(KEY, context)
  return context
}

export function useModGallery(): ModGalleryContext {
  const context = inject(KEY)
  if (!context) throw new Error('GalleryShot and GalleryClip only work inside a PartPage')
  return context
}

/** Looks a shot up by its name and marks it placed, for a page showing it beside its text. */
export function placeShot(name: string): { shot: GalleryShot, index: number } {
  const context = useModGallery()
  const index = context.gallery?.shots.findIndex(s => galleryName(s.src) === name) ?? -1
  if (index < 0) throw new Error(`no gallery shot "${name}" for this page`)
  context.placed.add(context.gallery!.shots[index]!.src)
  return { shot: context.gallery!.shots[index]!, index }
}

/** Looks a clip up by its name and marks it placed. */
export function placeClip(name: string): GalleryClip {
  const context = useModGallery()
  const clip = context.gallery?.clips.find(c => clipName(c.src) === name)
  if (!clip) throw new Error(`no gallery clip "${name}" for this page`)
  context.placed.add(clip.src)
  return clip
}

/** The shots and clips the page has not placed, which GalleryGrid shows at the end. */
export function useUnplaced() {
  const context = useModGallery()
  return {
    shots: computed(() => (context.gallery?.shots ?? []).map((shot, index) => ({ shot, index })).filter(s => !context.placed.has(s.shot.src))),
    clips: computed(() => (context.gallery?.clips ?? []).filter(c => c !== context.lead && !context.placed.has(c.src)))
  }
}

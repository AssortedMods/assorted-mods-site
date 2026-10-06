<template>
  <PartPage
    family="decor"
    part="hangeables"
  >
    <SectionHeading name="neon_sign">
      Neon Sign
    </SectionHeading>
    <p>
      Neon Signs work just like regular signs except colored text will glow and it has a fancy GUI
      to get the text to look just the way you want it. It also comes with three different
      backgrounds.
    </p>
    <GalleryShot name="neon" />
    <Recipe id="assortedhangeables:neon_sign" />
    <PageFigure
      src="/figures/decor/neon-sign-screen.png"
      caption="The neon sign screen, with a color and style for every line and the three backgrounds."
    />

    <SectionHeading name="wallpaper">
      Wallpaper
    </SectionHeading>
    <p>
      Are your walls lacking substance? Maybe they need some wallpaper. Wallpaper gives you many
      options to decorate your home with. By default you have 24 different designs. Other than just
      the default wallpaper you can also dye them by right clicking on a placed wallpaper with dye,
      if you would like to clear the wallpaper use Bonemeal. These support
      <NuxtLink
        class="page-link"
        to="/decor/paint"
      >
        Paint Rollers
      </NuxtLink> to dye
      them. If your house even catches on fire remember that you can remove the burned look from
      wallpaper.
    </p>
    <Recipe id="assortedhangeables:wallpaper" />
    <p>
      Once placed right click on it again and it will cycle through the available options. When
      placed next to other wallpaper it will try and take on the texture of the surrounding
      wallpaper.
    </p>
    <GalleryShot name="wallpaper" />

    <SectionHeading name="frames">
      Frames
    </SectionHeading>
    <p>
      If you would also like to add depth to your house then frames are for you. Frames come in
      either wood or iron. Frames are stronger than wallpaper so if their supporting block is
      removed they will still be there. To dye a frame you just need to right click with a dye in
      your hand on them. These support
      <NuxtLink
        class="page-link"
        to="/decor/paint"
      >
        Paint Rollers
      </NuxtLink> to dye
      them. To break frames use an axe for wooden and a pickaxe for the iron variant.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedhangeables:wood_frame" />
      <Recipe id="assortedhangeables:iron_frame" />
    </div>
    <p>
      Similar to Wallpaper, once placed keep right clicking for available patterns, it will
      automatically cycle through only those that fit the given area.
    </p>
    <GalleryShot name="parlor" />

    <SectionHeading name="calendar">
      Calendar
    </SectionHeading>
    <p>
      Calendars are a good way to keep track of how much time has passed in your Minecraft world.
      They will automatically add up the amount of time that has passed and give the appropriate
      year, month, and day for the current day. No needing to tear off the previous day.
    </p>
    <p>
      NOTE: If you set the time use `/time set {some value}` this will disrupt the time that the
      calendar uses. So the actual time will not be accurate.
    </p>
    <Recipe id="assortedhangeables:calendar" />

    <SectionHeading name="wall_clock">
      Wall Clock
    </SectionHeading>
    <p>
      Wall Clocks are basically a better looking clock on the wall. Who needs items frames when you
      can get a clean looking wall clock that functions the exact same as a normal clock.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedhangeables:wall_clock" />
      <Recipe id="assortedhangeables:wall_clock_alt" />
    </div>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedhangeables-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>frames.framesBurn</i> lets frames burn. On by default.</li>
      <li><i>frames.dyeFrames</i> lets you dye frames. On by default.</li>
      <li><i>wallpaper.wallpapersBurn</i> lets wallpaper burn. On by default.</li>
      <li><i>wallpaper.dyeWallpapers</i> lets you dye wallpaper. On by default.</li>
      <li><i>wallpaper.wallpapersCopyDye</i> lets wallpaper copy the dye color of wallpaper next to it. On by default.</li>
      <li><i>wallpaper.numWallpaperOptions</i> is how many wallpaper patterns there are to pick from. 24 by default. Only change it if a resource pack adds more.</li>
    </ul>
    <p>
      These are in the <i class="text-gray-600">assortedhangeables-client</i> config file. They only change your own game, so everyone can set
      their own.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>wallpaper.wallpaperWidth</i> is how far wallpaper sticks out from the wall. 1 by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Hangeables'
})
</script>

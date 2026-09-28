<template>
  <PartPage
    family="decor"
    part="hangeables"
  >
    <h2><a name="neon_sign">Neon Sign</a></h2>
    <p>
      Neon Signs work just like regular signs except colored text will glow and it has a fancy GUI
      to get the text to look just the way you want it. It also comes with three different
      backgrounds.
    </p>
    <Recipe id="assortedhangeables:neon_sign" />
    <img src="\mods\decor\neon_sign_gui.png">
    <img src="\mods\decor\neon_signs.png">

    <h2><a name="wallpaper">Wallpaper</a></h2>
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
    <img src="\mods\decor\wallpaper.png">

    <h2><a name="frames">Frames</a></h2>
    <p>
      If you would also like to add depth to your house then frames are for you. Frames come in
      either wood or iron. Frames are stronger then wallpaper so if their supporting block is
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
    <img src="\mods\decor\frames.png">

    <h2><a name="calendar">Calendar</a></h2>
    <p>
      Calendar are a good way to keep track of how much time has passed in your Minecraft world.
      They will automatically add up the amount of time that has passed and give the appropriate
      year, month, and day for the current day. No needing to tear off the previous day.
    </p>
    <p>
      NOTE: If you set the time use `/time set {some value}` this will disrupt the time that the
      calendar uses. So the actual time will not be accurate.
    </p>
    <Recipe id="assortedhangeables:calendar" />

    <h2><a name="wall_clock">Wall Clock</a></h2>
    <p>
      Wall Clocks are basically a better looking clock on the wall. Who needs items frames when you
      can get a clean looking wall clock that functions the exact same as a normal clock.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedhangeables:wall_clock" />
      <Recipe id="assortedhangeables:wall_clock_alt" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Hangeables'
})
</script>

<template>
  <PartPage
    family="decor"
    part="paint"
  >
    <p>
      Paint adds the ability to paint Decor blocks as well as some Vanilla blocks. To do this it uses
      Paint Rollers to apply the paint in the world and in crafting recipes.
    </p>
    <SectionHeading name="paint_roller">
      Paint Roller
    </SectionHeading>
    <p>
      This is the basic Paint Roller with no color applied to it. It is effectively useless as you
      can't do anything with it but craft the colored Paint Rollers.
    </p>
    <Recipe id="assortedpaint:paint_roller" />
    <SectionHeading name="colors">
      Paint Roller Colors
    </SectionHeading>
    <p>
      These are the all powerful Paint Rollers that can apply all 16 default colors in Minecraft to
      a multitude of blocks. They are crafted with a matching dye and the basic Paint Roller above.
      They also have 64 uses to color 64 different things.
    </p>
    <Recipe id="assortedpaint:paint_roller_orange" />
    <GalleryShot name="rollers" />

    <p>
      They have a number of uses. They can color blocks in world, they can color blocks in crafting
      recipes, they can dye entities in world, and they can act as dye in Crafting recipes. Below is
      the current list of different Blocks and Entities that Paint Rollers can color.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <NuxtLink
          class="page-link"
          to="/decor/roads"
        >
          Roadways
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="page-link"
          to="/decor/lights"
        >
          Fluro
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="page-link"
          to="/decor/hangeables"
        >
          Frames
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="page-link"
          to="/decor/hangeables"
        >
          Wallpaper
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="page-link"
          to="/decor/building-blocks"
        >
          Vertical/Horizontal Siding
        </NuxtLink>
      </li>
      <li>Wool</li>
      <li>Carpet</li>
      <li>Concrete Powder</li>
      <li>Concrete</li>
      <li>Dye Sheep</li>
    </ul>
    <GalleryShot name="painting" />
    <p>
      A roller in the crafting grid with one wool or carpet dyes it to the roller's color, and the
      same goes for concrete and concrete powder.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedpaint:roller_dyeing" />
      <Recipe id="assortedpaint:orange_concrete_paint_roll" />
      <Recipe id="assortedpaint:orange_concrete_powder_paint_roll" />
    </div>
    <p>
      A fluro block of any color can be crafted with a roller to turn it into another color, and a
      roadway crafted with a roller comes out painted.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedpaint:fluro_orange_paint_roll" />
      <Recipe id="assortedpaint:roadway_orange" />
    </div>

    <SectionHeading name="siding">
      Siding
    </SectionHeading>
    <p>
      To go with the Paint Rollers are some basic design blocks from
      <NuxtLink
        class="page-link"
        to="/decor/building-blocks#siding"
      >
        Assorted Building Blocks
      </NuxtLink> that can be painted using these Paint Rollers. These are aptly named
      <i>Horizontal Siding</i> and <i>Vertical Siding</i>. The color comes from the paint roller in
      the recipe, held together with honeycomb, slime, honey, resin or tar.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedpaint:siding_horizontal_orange" />
      <Recipe id="assortedpaint:siding_vertical_orange" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Paint'
})
</script>

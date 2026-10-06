<template>
  <PartPage
    family="decor"
    part="colorizer"
  >
    <p>
      Colorizers are blocks that can take on the appearance of most blocks. There are many different
      colorizers available from variants of already existing blocks like Doors, Stairs, or Fences.
      There are also new types of blocks that can represent furniture or adding slopes.
    </p>
    <GalleryShot name="cabin" />
    <SectionHeading name="block">
      Colorizer Block
    </SectionHeading>
    <p>
      The base <i>Colorizer Block</i> is required to all the other types of blocks that are
      possible. The red, green, and blue dye are required while the other can be substituted with
      any dye. They can be any stone.
    </p>
    <Recipe id="assortedcolorizer:colorizer" />
    <SectionHeading name="brush">
      Colorizer Brush
    </SectionHeading>
    <Recipe id="assortedcolorizer:colorizer_brush" />
    <p>
      The <i>Colorizer Brush</i> is the method that you use to texture all of the different
      colorizer blocks. Shift right click on a block you want to use and if you don't already have
      a block selected and the block is supported it will consume the block and set the texture for
      the brush. If the brush consumes a block is configurable. Once you have a brush set up just
      right click on a <i>Colorizer Block</i> to texture it.
    </p>
    <p>
      After you set a block the <i>Colorizer Brush</i> has 16 uses before or reverts to the empty
      version. If you need to clear the selected block before the uses are up you can put the brush
      in a crafting table with a bucket of water.
    </p>
    <Recipe id="assortedcolorizer:clean_colorizer_brush" />
    <p>
      If you are in creative mode you can shift-right click to change to a new block without needing
      to wash the brush.
    </p>

    <SectionHeading name="furniture">
      Furniture
    </SectionHeading>
    <p>
      Furniture are a way to spruce up your builds with some unique blocks. Every furniture block
      should support being <i>waterlogged</i> as well as being placed on all sides of a block.
    </p>
    <SectionHeading
      name="table"
      :level="3"
    >
      Colorizer Table
    </SectionHeading>
    <p>
      Tables are part of some of the new furniture. Tables when placed next to one another automatically
      place the legs at the correct positions for a table so you can have enough room to eat your
      cereal. Tables will adjust the legs no matter what side of a block the table was placed on so
      even upside down and on the sides it will look like the table was just flipped or on its side.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_table" />
      <Recipe id="assortedcolorizer:colorizer_table_stonecutting" />
    </div>
    <SectionHeading
      name="chair"
      :level="3"
    >
      Colorizer Chair
    </SectionHeading>
    <p>Chairs go with your tables. These chairs re-orient depending on which way you place them.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_chair" />
      <Recipe id="assortedcolorizer:colorizer_chair_stonecutting" />
    </div>
    <SectionHeading
      name="stool"
      :level="3"
    >
      Colorizer Stool
    </SectionHeading>
    <p>
      Stools are smaller than chairs and go quite well when a
      <NuxtLink
        class="page-link"
        to="/decor/decorations#planter"
      >
        Planter Pot
      </NuxtLink> is
      placed on top of them.
    </p>
    <Recipe id="assortedcolorizer:colorizer_stool" />
    <SectionHeading
      name="counter"
      :level="3"
    >
      Colorizer Counter
    </SectionHeading>
    <p>Counters are like the tables except without the legs so they just kinda float there.</p>
    <Recipe id="assortedcolorizer:colorizer_counter" />
    <SectionHeading
      name="lamppost"
      :level="3"
    >
      Colorizer Lamp Post
    </SectionHeading>
    <p>
      Lamp Posts are 3 blocks tall when placed and emit light from the top block. If you break any
      of the 3 blocks they all break. They are a good way to make nice looking lighting.
    </p>
    <Recipe id="assortedcolorizer:colorizer_lamp_post" />

    <SectionHeading name="vanilla">
      Vanilla Alternatives
    </SectionHeading>
    <p>
      The following blocks are Colorizer alternatives to vanilla blocks. They work just like the
      vanilla counterparts but can be colorized just like any of the other colorizer blocks. A
      colorized door wearing the same block as the wall around it is a hidden entrance, and a
      colorized trap door does the same for a floor.
    </p>
    <SectionHeading
      name="door"
      :level="3"
    >
      Colorizer Door
    </SectionHeading>
    <Recipe id="assortedcolorizer:colorizer_door" />
    <SectionHeading
      name="trapdoor"
      :level="3"
    >
      Colorizer Trap Door
    </SectionHeading>
    <Recipe id="assortedcolorizer:colorizer_trap_door" />
    <SectionHeading
      name="fence"
      :level="3"
    >
      Colorizer Fence
    </SectionHeading>
    <Recipe id="assortedcolorizer:colorizer_fence" />
    <SectionHeading
      name="fencegate"
      :level="3"
    >
      Colorizer Fence Gate
    </SectionHeading>
    <Recipe id="assortedcolorizer:colorizer_fence_gate" />
    <SectionHeading
      name="wall"
      :level="3"
    >
      Colorizer Wall
    </SectionHeading>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_wall" />
      <Recipe id="assortedcolorizer:colorizer_walls_stonecutting" />
    </div>
    <SectionHeading
      name="stairs"
      :level="3"
    >
      Colorizer Stairs
    </SectionHeading>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_stairs" />
      <Recipe id="assortedcolorizer:colorizer_stairs_stonecutting" />
    </div>
    <SectionHeading
      name="slab"
      :level="3"
    >
      Colorizer Slab
    </SectionHeading>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_slab" />
      <Recipe id="assortedcolorizer:colorizer_slab_stonecutting" />
    </div>
    <SectionHeading
      name="vertical_slab"
      :level="3"
    >
      Colorizer Vertical Slab
    </SectionHeading>
    <p>
      There is also a new block which is just a Vertical version of a normal vanilla slab. You can
      place these on the sides of blocks as well as combine them if you want into a full block like
      normal.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_vertical_slab" />
      <Recipe id="assortedcolorizer:colorizer_vertical_slab_stonecutting" />
    </div>
    <SectionHeading
      name="building"
      :level="3"
    >
      Colorizer Panel, Beam and Column
    </SectionHeading>
    <p>
      The panel, beam and column from
      <NuxtLink
        class="page-link"
        to="/decor/building-blocks"
      >
        Building Blocks
      </NuxtLink>, cut from a colorizer on the stonecutter. They behave just as the wooden and
      stone ones do.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_panel_stonecutting" />
      <Recipe id="assortedcolorizer:colorizer_beam_stonecutting" />
      <Recipe id="assortedcolorizer:colorizer_column_stonecutting" />
    </div>

    <SectionHeading name="slopes">
      Slopes
    </SectionHeading>
    <p>
      There are many <i>Slopes</i> as well. These slopes usually provide shapes that you can't
      normally get with Minecraft's model system and allow your world to look a bit smoother. All
      slopes should support being <i>waterlogged</i> and being placed differently depending on the
      side of the block that it is placed on and where on that side that it was, think upside down
      stairs.
    </p>
    <GalleryShot name="showroom" />
    <SectionHeading
      name="slope"
      :level="3"
    >
      Colorizer Slope
    </SectionHeading>
    <p>Slopes are half of a full block and operate the same as straight stairs.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_slope" />
      <Recipe id="assortedcolorizer:colorizer_slope_stonecutting" />
    </div>
    <SectionHeading
      name="sloped_angle"
      :level="3"
    >
      Colorizer Sloped Angle
    </SectionHeading>
    <p>Sloped angles point towards a corner and can only be walked up on the point it faces.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_sloped_angle" />
      <Recipe id="assortedcolorizer:colorizer_sloped_angle_stonecutting" />
    </div>
    <SectionHeading
      name="slanted_corner"
      :level="3"
    >
      Colorizer Slanted Corner
    </SectionHeading>
    <p>Slanted corners are a sharper incline than the sloped angles but can still be walked up.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_slanted_corner" />
      <Recipe id="assortedcolorizer:colorizer_slanted_corner_stonecutting" />
    </div>
    <SectionHeading
      name="corner"
      :level="3"
    >
      Colorizer Corner
    </SectionHeading>
    <p>Corners are a sideways cut of a full block.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_corner" />
      <Recipe id="assortedcolorizer:colorizer_corner_stonecutting" />
    </div>
    <SectionHeading
      name="oblique_slope"
      :level="3"
    >
      Colorizer Oblique Slope
    </SectionHeading>
    <p>
      Oblique slopes act as a corner piece on stairs and are basically missing a slanted corner.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_oblique_slope" />
      <Recipe id="assortedcolorizer:colorizer_oblique_slope_stonecutting" />
    </div>
    <SectionHeading
      name="sloped_intersection"
      :level="3"
    >
      Colorizer Sloped Intersection
    </SectionHeading>
    <p>
      Sloped intersections are what would happen if two slopes were combined and act as corner
      stairs.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_sloped_intersection" />
      <Recipe id="assortedcolorizer:colorizer_sloped_intersection_stonecutting" />
    </div>
    <SectionHeading
      name="pyramid"
      :level="3"
    >
      Colorizer Pyramid
    </SectionHeading>
    <p>Pyramids only count as half a block, and are just a small pyramid.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_pyramid" />
      <Recipe id="assortedcolorizer:colorizer_pyramid_stonecutting" />
    </div>
    <SectionHeading
      name="full_pyramid"
      :level="3"
    >
      Colorizer Full Pyramid
    </SectionHeading>
    <p>
      Large pyramids can be climbed up but the highest point is in the middle as you would suspect.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_full_pyramid" />
      <Recipe id="assortedcolorizer:colorizer_full_pyramid_stonecutting" />
    </div>
    <SectionHeading
      name="sloped_post"
      :level="3"
    >
      Colorizer Sloped Post
    </SectionHeading>
    <p>Sloped posts can not be climbed up and are just a large post.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_sloped_post" />
      <Recipe id="assortedcolorizer:colorizer_sloped_post_stonecutting" />
    </div>

    <SectionHeading name="fireplaces">
      Fireplaces
    </SectionHeading>
    <p>
      The Colorizer Fireplaces are <i>almost</i> all blocks that can be lit to have a burning state,
      chimneys do not have this luxury. All fireplaces can not be waterlogged or placed upside down
      or on sides. All the lightable fireplaces can be lit with <i>flint and steel</i> or a
      <i>fire charge</i>. Punch these blocks with an empty hand to put them out.
    </p>
    <SectionHeading
      name="fireplace"
      :level="3"
    >
      Colorizer Fireplace
    </SectionHeading>
    <p>
      Chimneys produce smoke when on top of a lit fireplace. Fireplaces also re-orient their corner
      posts when multiple are placed next to each other.
    </p>
    <Recipe id="assortedcolorizer:colorizer_fireplace" />
    <PageFigure
      src="/figures/decor/fireplace-chimney.webp"
      caption="A lit fireplace with a chimney stacked above it, smoking."
    />
    <SectionHeading
      name="chimney"
      :level="3"
    >
      Colorizer Chimney
    </SectionHeading>
    <p>
      Chimneys produce smoke when placed on top of either a Fireplace or Stove and can be stacked on
      top of each other.
    </p>
    <Recipe id="assortedcolorizer:colorizer_chimney" />
    <SectionHeading
      name="stove"
      :level="3"
    >
      Colorizer Stove
    </SectionHeading>
    <p>Stoves, like fireplaces, will produce smoke when a chimney is on top of a lit stove.</p>
    <Recipe id="assortedcolorizer:colorizer_stove" />
    <SectionHeading
      name="firepit"
      :level="3"
    >
      Colorizer Firepit
    </SectionHeading>
    <p>Firepits have an opening on the top and act as a normal fireplace block.</p>
    <Recipe id="assortedcolorizer:colorizer_firepit" />
    <SectionHeading
      name="covered_firepit"
      :level="3"
    >
      Colorizer Covered Firepit
    </SectionHeading>
    <p>Covered firepits are as the name suggests a covered variant of firepits.</p>
    <Recipe id="assortedcolorizer:colorizer_firepit_covered" />
    <SectionHeading
      name="firering"
      :level="3"
    >
      Colorizer Firering
    </SectionHeading>
    <p>Firerings are great for ghost stories and are just a small ring on the ground.</p>
    <Recipe id="assortedcolorizer:colorizer_firering" />

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedcolorizer-common</i> config file. They are read once at startup, so changes need a
      restart.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>colorizer.colorizerConsumeBlock</i> uses up the block you put on a brush. On by default.</li>
      <li><i>colorizer.colorizerBrushCount</i> is how many blocks a brush can color before it needs a new block. 16 by default.</li>
      <li><i>colorizer.shapeSmoothness</i> is how smooth the hitboxes of slopes and the other shapes are. 2 by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Colorizer'
})
</script>

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
    <h2><a name="block">Colorizer Block</a></h2>
    <p>
      The base <i>Colorizer Block</i> is required to all the other types of blocks that are
      possible. The red, green, and blue dye are required while the other can be substituted with
      any dye. They can be any stone.
    </p>
    <Recipe id="assortedcolorizer:colorizer" />
    <h2><a name="brush">Colorizer Brush</a></h2>
    <Recipe id="assortedcolorizer:colorizer_brush" />
    <p>
      The <i>Colorizer Brush</i> is the method that you use to texture all of the different
      colorizer blocks. Shift right click on a block you want to use and if you don't already have
      a block selected and the block is supported it will consume the block and set the texture for
      the brush. If the brush consumes a block is configurable. Once you have a brush set up just
      right click on a <i>Colorizer Block</i> to texture it.
    </p>
    <img src="\mods\decor\brush.png">
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

    <h2><a name="furniture">Furniture</a></h2>
    <p>
      Furniture are a way to spruce up your builds with some unique blocks. Every furniture block
      should support being <i>waterlogged</i> as well as being placed on all sides of a block.
    </p>
    <h3><a name="table">Colorizer Table</a></h3>
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
    <h3><a name="chair">Colorizer Chair</a></h3>
    <p>Chairs go with your tables. These chairs re-orient depending on which way you place them.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_chair" />
      <Recipe id="assortedcolorizer:colorizer_chair_stonecutting" />
    </div>
    <img src="\mods\decor\chairs_tables.png">
    <h3><a name="stool">Colorizer Stool</a></h3>
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
    <img src="\mods\decor\stool_pot.png">
    <h3><a name="counter">Colorizer Counter</a></h3>
    <p>Counters are like the tables except without the legs so they just kinda float there.</p>
    <Recipe id="assortedcolorizer:colorizer_counter" />
    <h3><a name="lamppost">Colorizer Lamp Post</a></h3>
    <p>
      Lamp Posts are 3 blocks tall when placed and emit light from the top block. If you break any
      of the 3 blocks they all break. They are a good way to make nice looking lighting.
    </p>
    <Recipe id="assortedcolorizer:colorizer_lamp_post" />
    <img src="\mods\decor\lamp_posts.png">

    <h2><a name="vanilla">Vanilla Alternatives</a></h2>
    <p>
      The following blocks are Colorizer alternatives to vanilla blocks. They work just like the
      vanilla counterparts but can be colorized just like any of the other colorizer blocks. A
      colorized door wearing the same block as the wall around it is a hidden entrance, and a
      colorized trap door does the same for a floor.
    </p>
    <h3><a name="door">Colorizer Door</a></h3>
    <Recipe id="assortedcolorizer:colorizer_door" />
    <h3><a name="trapdoor">Colorizer Trap Door</a></h3>
    <Recipe id="assortedcolorizer:colorizer_trap_door" />
    <h3><a name="fence">Colorizer Fence</a></h3>
    <Recipe id="assortedcolorizer:colorizer_fence" />
    <h3><a name="fencegate">Colorizer Fence Gate</a></h3>
    <Recipe id="assortedcolorizer:colorizer_fence_gate" />
    <h3><a name="wall">Colorizer Wall</a></h3>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_wall" />
      <Recipe id="assortedcolorizer:colorizer_walls_stonecutting" />
    </div>
    <h3><a name="stairs">Colorizer Stairs</a></h3>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_stairs" />
      <Recipe id="assortedcolorizer:colorizer_stairs_stonecutting" />
    </div>
    <h3><a name="slab">Colorizer Slab</a></h3>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_slab" />
      <Recipe id="assortedcolorizer:colorizer_slab_stonecutting" />
    </div>
    <h3><a name="vertical_slab">Colorizer Vertical Slab</a></h3>
    <p>
      There is also a new block which is just a Vertical version of a normal vanilla slab. You can
      place these on the sides of blocks as well as combine them if you want into a full block like
      normal.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_vertical_slab" />
      <Recipe id="assortedcolorizer:colorizer_vertical_slab_stonecutting" />
    </div>
    <h3><a name="building">Colorizer Panel, Beam and Column</a></h3>
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

    <h2><a name="slopes">Slopes</a></h2>
    <p>
      There are many <i>Slopes</i> as well. These slopes usually provide shapes that you can't
      normally get with Minecraft's model system and allow your world to look a bit smoother. All
      slopes should support being <i>waterlogged</i> and being placed differently depending on the
      side of the block that it is placed on and where on that side that it was, think upside down
      stairs.
    </p>
    <h3><a name="slope">Colorizer Slope</a></h3>
    <p>Slopes are half of a full block and operate the same as straight stairs.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_slope" />
      <Recipe id="assortedcolorizer:colorizer_slope_stonecutting" />
    </div>
    <h3><a name="sloped_angle">Colorizer Sloped Angle</a></h3>
    <p>Sloped angles point towards a corner and can only be walked up on the point it faces.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_sloped_angle" />
      <Recipe id="assortedcolorizer:colorizer_sloped_angle_stonecutting" />
    </div>
    <h3><a name="slanted_corner">Colorizer Slanted Corner</a></h3>
    <p>Slanted corners are a sharper incline than the sloped angles but can still be walked up.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_slanted_corner" />
      <Recipe id="assortedcolorizer:colorizer_slanted_corner_stonecutting" />
    </div>
    <h3><a name="corner">Colorizer Corner</a></h3>
    <p>Corners are a sideways cut of a full block.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_corner" />
      <Recipe id="assortedcolorizer:colorizer_corner_stonecutting" />
    </div>
    <h3><a name="oblique_slope">Colorizer Oblique Slope</a></h3>
    <p>
      Oblique slopes act as a corner piece on stairs and are basically missing a slanted corner.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_oblique_slope" />
      <Recipe id="assortedcolorizer:colorizer_oblique_slope_stonecutting" />
    </div>
    <h3><a name="sloped_intersection">Colorizer Sloped Intersection</a></h3>
    <p>
      Sloped intersections are what would happen if two slopes were combined and act as corner
      stairs.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_sloped_intersection" />
      <Recipe id="assortedcolorizer:colorizer_sloped_intersection_stonecutting" />
    </div>
    <h3><a name="pyramid">Colorizer Pyramid</a></h3>
    <p>Pyramids only count as half a block, and are just a small pyramid.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_pyramid" />
      <Recipe id="assortedcolorizer:colorizer_pyramid_stonecutting" />
    </div>
    <h3><a name="full_pyramid">Colorizer Full Pyramid</a></h3>
    <p>
      Large pyramids can be climbed up but the highest point is in the middle as you would suspect.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_full_pyramid" />
      <Recipe id="assortedcolorizer:colorizer_full_pyramid_stonecutting" />
    </div>
    <h3><a name="sloped_post">Colorizer Sloped Post</a></h3>
    <p>Sloped posts can not be climbed up and are just a large post.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcolorizer:colorizer_sloped_post" />
      <Recipe id="assortedcolorizer:colorizer_sloped_post_stonecutting" />
    </div>

    <h2><a name="fireplaces">Fireplaces</a></h2>
    <p>
      The Colorizer Fireplaces are <i>almost</i> all blocks that can be lit to have a burning state,
      chimneys do not have this luxury. All fireplaces can not be waterlogged or placed upside down
      or on sides. All the lightable fireplaces can be lit with <i>flint and steel</i> or a
      <i>fire charge</i>. Punch these blocks with an empty hand to put them out.
    </p>
    <h3><a name="fireplace">Colorizer Fireplace</a></h3>
    <p>
      Chimneys produce smoke when on top of a lit fireplace. Fireplaces also re-orient their corner
      posts when multiple are placed next to each other.
    </p>
    <Recipe id="assortedcolorizer:colorizer_fireplace" />
    <img src="\mods\decor\fireplace_chimney.png">
    <h3><a name="chimney">Colorizer Chimney</a></h3>
    <p>
      Chimneys produce smoke when placed on top of either a Fireplace or Stove and can be stacked on
      top of each other.
    </p>
    <Recipe id="assortedcolorizer:colorizer_chimney" />
    <h3><a name="stove">Colorizer Stove</a></h3>
    <p>Stoves, like fireplaces, will produce smoke when a chimney is on top of a lit stove.</p>
    <Recipe id="assortedcolorizer:colorizer_stove" />
    <h3><a name="firepit">Colorizer Firepit</a></h3>
    <p>Firepits have an opening on the top and act as a normal fireplace block.</p>
    <Recipe id="assortedcolorizer:colorizer_firepit" />
    <h3><a name="covered_firepit">Colorizer Covered Firepit</a></h3>
    <p>Covered firepits are as the name suggests a covered variant of firepits.</p>
    <Recipe id="assortedcolorizer:colorizer_firepit_covered" />
    <h3><a name="firering">Colorizer Firering</a></h3>
    <p>Firerings are great for ghost stories and are just a small ring on the ground.</p>
    <Recipe id="assortedcolorizer:colorizer_firering" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Colorizer'
})
</script>

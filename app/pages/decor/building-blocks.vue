<template>
  <PartPage
    family="decor"
    part="building-blocks"
  >
    <p>
      Building Blocks adds about 300 new blocks. Bricks, tiles, columns, beams and panels for every
      stone and wood, plus siding, new doors, a chain link fence and the lumber mill.
    </p>
    <GalleryShot name="temple" />
    <p>
      Almost every block here comes off a stonecutter or lumber mill. Stone and metal are cut on the
      stonecutter, wood on the lumber mill. Most come as slabs and stairs too, and the bricks and
      tiles as walls.
    </p>

    <SectionHeading name="lumber_mill">
      Lumber Mill
    </SectionHeading>
    <p>
      The stonecutter's twin for wood. Put in planks and pick what to cut them into. It also
      supports logs to break up into any of the child blocks and items.
    </p>
    <Recipe id="assortedbuildingblocks:lumber_mill" />
    <p>
      Logs can be cut straight into doors, fences, signs, trapdoors and the rest without making
      planks first.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:oak_planks_from_oak_logs_lumber_mill" />
      <Recipe id="assortedbuildingblocks:oak_door_from_oak_logs_lumber_mill" />
    </div>

    <SectionHeading name="timber">
      Timber
    </SectionHeading>
    <p>The lumber mill cuts every kind of planks into parquet and framed planks.</p>
    <GalleryShot name="wood" />
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:oak_parquet_from_oak_planks_lumber_mill" />
      <Recipe id="assortedbuildingblocks:framed_oak_planks_from_oak_planks_lumber_mill" />
    </div>

    <SectionHeading name="panels">
      Panels
    </SectionHeading>
    <p>
      The lumber mill cuts a plank into eight panels. A panel lines the face you place it against.
      It can be placed against a wall, a floor or a ceiling.
    </p>
    <Recipe id="assortedbuildingblocks:oak_panel_from_oak_planks_lumber_mill" />

    <SectionHeading name="beams">
      Beams
    </SectionHeading>
    <p>
      The lumber mill cuts a plank into four beams, and the stonecutter an iron ingot into an iron
      beam. They run along the top or bottom of the block, the way you are facing. A beam placed
      against the side of another grows an arm to meet it, so they cross and tee on their own.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:oak_beam_from_oak_planks_lumber_mill" />
      <Recipe id="assortedbuildingblocks:iron_beam_from_iron_ingot_stonecutting" />
    </div>

    <SectionHeading name="stone_patterns">
      Stone Patterns
    </SectionHeading>
    <p>
      Every stone is cut into bricks, tiles and a carved creeper face. Stone, granite, diorite,
      andesite, calcite, tuff, dripstone, deepslate, blackstone, sandstone and red sandstone. The
      stonecutter makes them from the raw stone or from its polished form.
    </p>
    <GalleryShot name="stones" />
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:granite_bricks_from_granite_stonecutting" />
      <Recipe id="assortedbuildingblocks:granite_tiles_from_granite_stonecutting" />
      <Recipe id="assortedbuildingblocks:carved_granite_from_granite_stonecutting" />
    </div>

    <SectionHeading name="weathering">
      Mossy and Cracked Bricks
    </SectionHeading>
    <p>
      Every stone's bricks have a mossy and a cracked form, made the way vanilla stone bricks are.
      Vines or moss for mossy, a furnace for cracked.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:mossy_granite_bricks_from_vine" />
      <Recipe id="assortedbuildingblocks:cracked_granite_bricks" />
    </div>

    <SectionHeading name="columns">
      Columns
    </SectionHeading>
    <p>
      Fluted stone and columns come off the stonecutter from any of the stones. Columns have a base
      at the bottom, a capital at the top and a plain shaft between. They can also be placed against
      a wall to lay them on their side.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:granite_column_from_granite_stonecutting" />
      <Recipe id="assortedbuildingblocks:fluted_granite_from_granite_stonecutting" />
    </div>

    <SectionHeading name="bricks">
      Bricks
    </SectionHeading>
    <p>Brick blocks are cut into basketweave and herringbone patterns on the stonecutter.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:basketweave_bricks_from_bricks_stonecutting" />
      <Recipe id="assortedbuildingblocks:herringbone_bricks_from_bricks_stonecutting" />
    </div>

    <SectionHeading name="cobblestone">
      Cobblestone
    </SectionHeading>
    <p>
      Cobblestone can be reinforced with iron or framed in sticks, and calcite and cobbled deepslate
      together make a checkerboard.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedbuildingblocks:reinforced_cobblestone" />
      <Recipe id="assortedbuildingblocks:framed_cobblestone" />
      <Recipe id="assortedbuildingblocks:checkered_stone" />
    </div>

    <SectionHeading name="decorative_stone">
      Decorative Stone
    </SectionHeading>
    <p>
      Decorative stone comes off the stonecutter from plain stone, which makes it cheap enough to
      use by the wall.
    </p>
    <Recipe id="assortedbuildingblocks:decorative_path_stonecutting" />

    <SectionHeading name="metal_bricks">
      Metal and Gem Bricks
    </SectionHeading>
    <p>
      Iron, gold and diamond blocks are cut into bricks on the stonecutter, one for one. Obsidian is
      cut into polished obsidian, and lapis and redstone blocks into bricks, tiles and polished
      blocks. Glowstone is cut into bricks as well.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedbuildingblocks:iron_bricks_from_iron_block_stonecutting" />
      <Recipe id="assortedbuildingblocks:lapis_bricks_from_lapis_block_stonecutting" />
      <Recipe id="assortedbuildingblocks:polished_obsidian_from_obsidian_stonecutting" />
      <Recipe id="assortedbuildingblocks:glowstone_bricks_from_glowstone_stonecutting" />
    </div>

    <SectionHeading name="meat_block">
      Meat Block
    </SectionHeading>
    <p>
      Nine porkchops pressed around a bone. It comes apart into the nine porkchops again.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:meat_block" />
      <Recipe id="assortedbuildingblocks:porkchop_from_meat_block" />
    </div>

    <SectionHeading name="siding">
      Siding
    </SectionHeading>
    <PageFigure
      src="/figures/decor/siding.webp"
      caption="Siding in purple, lime and blue."
    />
    <p>
      Siding boards a wall in horizontal or vertical planking, in any of the sixteen colors. The
      color comes from the paint roller in the recipe, and the rollers come with
      <NuxtLink
        class="page-link"
        to="/decor/paint"
      >
        Assorted Paint
      </NuxtLink>. The siding recipes are shown there.
    </p>

    <SectionHeading name="chain_link">
      Chain Link
    </SectionHeading>
    <PageFigure
      src="/figures/decor/chain-link-fence.webp"
      caption="A chain link fence around a pool."
    />
    <p>
      Chain Links allow for the construction of Chain Link fences and Chain Link doors. To build
      those you must first craft some chain links.
    </p>
    <Recipe id="assortedbuildingblocks:chain_link" />
    <p>
      You are able to craft Chain Links with other metals as long as a mod is installed alongside
      this one that adds them like
      <NuxtLink
        class="page-link"
        to="/core/ores"
      >
        Assorted Ores
      </NuxtLink> or
      <NuxtLink
        class="page-link"
        to="/core/machines"
      >
        Assorted Machines
      </NuxtLink>.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedbuildingblocks:chain_link_aluminum" />
      <Recipe id="assortedbuildingblocks:chain_link_steel" />
    </div>

    <SectionHeading name="chain_link_fence">
      Chain Link Fence
    </SectionHeading>
    <Recipe id="assortedbuildingblocks:chain_link_fence" />
    <p>
      Chain Links Fences work just like Iron Bars do and will connect to solid blocks alongside
      them.
    </p>

    <SectionHeading name="doors">
      Doors
    </SectionHeading>
    <PageFigure
      src="/figures/decor/doors.webp"
      caption="The four new doors in a row."
    />
    <p>
      There are 4 new doors. Quartz, Steel, Glass, and Chain Link. The Quartz and Steel door both
      function the same as the Iron Door in vanilla. The Steel door is able to be crafted if a mod is
      installed alongside it that includes steel like
      <NuxtLink
        class="page-link"
        to="/core/machines"
      >
        Assorted Machines
      </NuxtLink>.
    </p>
    <br>
    <p>
      <i>These doors can all be locked like the Vanilla Doors if you have
        <NuxtLink
          class="page-link"
          to="/storage/locks"
        >Assorted Locks</NuxtLink>
        installed.</i>
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedbuildingblocks:quartz_door" />
      <Recipe id="assortedbuildingblocks:steel_door" />
      <Recipe id="assortedbuildingblocks:glass_door" />
      <Recipe id="assortedbuildingblocks:chain_link_door" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Building Blocks'
})
</script>

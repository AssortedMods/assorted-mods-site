<template>
  <PartPage
    family="decor"
    part="decorations"
  >
    <p>
      Are you looking for a bit more decorations for interior design. Then check some of these
      blocks out!
    </p>
    <img src="\mods\decor\decorations.png">

    <SectionHeading name="decorations">
      Decorations
    </SectionHeading>
    <p>
      These decorations have a number of different designs that they can cycle between with a right
      click to find the right look just for you.
    </p>
    <br>
    <SectionHeading
      name="clay_decoration"
      :level="3"
    >
      Clay
    </SectionHeading>
    <p>
      The clay decoration you will need to make sure that you smelt the unfired version to be able
      to place the fired version.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assorteddecorations:unfired_clay_decoration" />
      <Recipe id="assorteddecorations:clay_decoration" />
    </div>
    <SectionHeading
      name="bone_decoration"
      :level="3"
    >
      Bone
    </SectionHeading>
    <p>A bone decoration needs no firing. Place it and right click to cycle through the shapes.</p>
    <Recipe id="assorteddecorations:bone_decoration" />

    <SectionHeading name="planter">
      Planter Pot
    </SectionHeading>
    <p>
      The planter pot can be used to plant all sorts of different plants on it depending on the top
      that is currently set. Right clicking on the block with an empty hand will rotate the type
      which you can see by the texture on the top. Depending on the top it will check if the plant
      that is trying to be placed is supported. Other checks like if water is nearby still come into
      play.
    </p>
    <Recipe id="assorteddecorations:unfired_planter_pot" />
    <p>
      You will need to smelt an unfired planter pot to get a block you can actually place.
    </p>
    <Recipe id="assorteddecorations:planter_pot" />
    <img src="\mods\decor\planter_pot.png">

    <SectionHeading name="fountain">
      Fountain
    </SectionHeading>
    <Recipe id="assorteddecorations:fountain" />
    <p>
      The Fountain is a block that when powered provides a tiny little splash of water effect. Steel
      or aluminum ingots can take the place of the iron if you have a mod that adds them.
    </p>
    <img src="\mods\decor\fountain.png">
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Decorations'
})
</script>

<template>
  <PartPage
    family="tools"
    part="suits"
  >
    <GalleryShot name="three-suits" />
    <SectionHeading name="chicken_suit">
      Chicken Suit
    </SectionHeading>
    <p>
      The Chicken Suit is a unique armor set. With every piece of the suit you get an extra jump.
      With these you can 'fly' around as good as a chicken and get the chicken glide effect rather
      than falling to your death.
    </p>
    <GalleryShot name="flying" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsuits:chicken_suit_helmet" />
      <Recipe id="assortedsuits:chicken_suit_chestplate" />
      <Recipe id="assortedsuits:chicken_suit_leggings" />
      <Recipe id="assortedsuits:chicken_suit_boots" />
    </div>
    <SectionHeading name="enchantment">
      Chicken Jump Enchantment
    </SectionHeading>
    <p>
      There is also a new Chicken Jump enchantment that allows other armor sets to gain the unique
      ability that the Chicken Suit had. You can get it from enchanting or finding an enchantment
      book. Or using your already made <i>Chicken Suit</i> and combining it with another piece of
      armor of the same type.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <PageFigure
        src="/figures/tools/chicken-jump-book.png"
        caption="A Chicken Jump book going onto a diamond chestplate on an anvil."
      />
      <PageFigure
        src="/figures/tools/chicken-jump-armor.png"
        caption="A chicken suit chestplate passing Chicken Jump to a diamond chestplate on an anvil."
      />
    </div>

    <SectionHeading name="scuba_suit">
      Scuba Suit
    </SectionHeading>
    <p>
      The scuba suit works in halves to allow for an easier time under water. The mask and tank
      together let you breathe under water and see better than you would without it. The legs and
      fins together move you through water far quicker than regular swimming.
    </p>
    <GalleryShot name="scuba-suit" />
    <GalleryShot name="scuba-tank" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsuits:scuba_helmet" />
      <Recipe id="assortedsuits:scuba_chestplate" />
      <Recipe id="assortedsuits:scuba_leggings" />
      <Recipe id="assortedsuits:scuba_boots" />
    </div>

    <SectionHeading name="lava_suit">
      Lava Suit
    </SectionHeading>
    <p>
      The lava suit is like the scuba suit and works in lava. A full set will allow you to safely traverse through lava and become immune to fire.
      The legs and boots on their own let you swim through lava as you would through water.
      Having just the boots will allow you to walk on Magma and other "hot" blocks without taking damage.
    </p>
    <GalleryShot name="lava-suit" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsuits:lava_helmet" />
      <Recipe id="assortedsuits:lava_chestplate" />
      <Recipe id="assortedsuits:lava_leggings" />
      <Recipe id="assortedsuits:lava_boots" />
    </div>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedsuits-common</i> config file. They are read once at startup, so changes need a
      restart.
    </p>
    <p>
      Each suit has its own armor values under <i>chicken_suit</i>, <i>scuba_suit</i> and
      <i>lava_suit</i>. They are the same values as the armor explained on the
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets#armor"
      >
        Gear Sets
      </NuxtLink> page.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Suits'
})
</script>

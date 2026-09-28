<template>
  <PartPage
    family="tools"
    part="suits"
  >
    <img src="\mods\tools\suits.webp">
    <h2><a name="chicken_suit">Chicken Suit</a></h2>
    <p>
      The Chicken Suit is a unique armor set. With every piece of the suit you get an extra jump.
      With these you can 'fly' around as good as a chicken and get the chicken glide effect rather
      than falling to your death.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsuits:chicken_suit_helmet" />
      <Recipe id="assortedsuits:chicken_suit_chestplate" />
      <Recipe id="assortedsuits:chicken_suit_leggings" />
      <Recipe id="assortedsuits:chicken_suit_boots" />
    </div>
    <h2><a name="enchantment">Chicken Jump Enchantment</a></h2>
    <p>
      There is also a new Chicken Jump enchantment that allows other armor sets to gain the unique
      ability that the Chicken Suit had. You can get it from enchanting or finding an enchantment
      book. Or using your already made <i>Chicken Suit</i> and combining it with another piece of
      armor of the same type.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <img src="\mods\tools\chicken_jump_enchantment_book.png">
      <img src="\mods\tools\chicken_jump_enchantment_armor.png">
    </div>

    <h2><a name="scuba_suit">Scuba Suit</a></h2>
    <p>
      The scuba suit works in halves to allow for an easier time under water. The mask and tank
      together let you breathe under water and see better than you would without it. The legs and
      fins together move you through water far quicker than regular swimming.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsuits:scuba_helmet" />
      <Recipe id="assortedsuits:scuba_chestplate" />
      <Recipe id="assortedsuits:scuba_leggings" />
      <Recipe id="assortedsuits:scuba_boots" />
    </div>

    <h2><a name="lava_suit">Lava Suit</a></h2>
    <p>
      The lava suit is like the scuba suit and works in lava. A full set will allow you to safely traverse through lava and become immune to fire.
      The legs and boots on their own let you swim through lava as you would through water.
      Having just the boots will allow you to walk on Magma and other "hot" blocks without taking damage.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsuits:lava_helmet" />
      <Recipe id="assortedsuits:lava_chestplate" />
      <Recipe id="assortedsuits:lava_leggings" />
      <Recipe id="assortedsuits:lava_boots" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Suits'
})
</script>

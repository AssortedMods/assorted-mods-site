<template>
  <PartPage
    family="tools"
    part="throwing-spears"
  >
    <p>
      This mod adds Throwing Spears with any default Minecraft tool material as well as all of the
      extra materials in <NuxtLink
        class="page-link"
        to="/tools/gear-sets"
      >
        Gear Sets
      </NuxtLink>. These
      throwing spears function similar to tridents in the fact that they can damage entities by
      swinging as well as they are able to be thrown from the hand. A thrown spear sticks where it
      lands, ready to be picked back up. Every material uses the same recipe, two sticks and the
      material, shown below for a vanilla one and an extra one.
    </p>
    <p>
      These are separate items from the plain Spears Minecraft has for each of its tool materials.
      The matching plain Spears for the extra materials come with
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets"
      >
        Gear Sets
      </NuxtLink>.
    </p>
    <img src="\mods\tools\throwing_spears_all.png">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedthrowingspears:diamond_throwing_spear" />
      <Recipe id="assortedthrowingspears:sapphire_throwing_spear" />
    </div>
    <p>The Diamond Throwing Spear is also able to upgraded to the Netherite Throwing Spear using a smithing table.</p>
    <Recipe id="assortedthrowingspears:netherite_throwing_spear_smithing" />
    <h2><a name="enchantments">Enchantments</a></h2>
    <p>
      Besides just the being able to throw them you are also able to enchant Throwing Spears with an
      assortment of different enchantments. Some of the enchantments only Throwing Spears are able to
      get. The current list of enchanments is below:
    </p>
    <ul class="list-disc list-inside">
      <li>Curse of Vanishing</li>
      <li>Mending</li>
      <li>Unbreaking</li>
      <li>Impaling</li>
      <li>Loyalty</li>
      <li>Flammable</li>
      <li>Unstable</li>
      <li>Conductive</li>
      <li>Bounciness</li>
    </ul>
    <h2><a name="vanilla-enchants">Vanilla Enchantments</a></h2>
    <p>
      The top 5 enchantments function the exact same way as they do in Vanilla. Specifically
      Impaling and Loyalty function just like they would on a Trident. So, if you have Loyalty it
      will come back to you, and Impaling does extra damage on Water creatures.
    </p>
    <h2><a name="throwing-spear-enchants">Throwing Spear Enchantments</a></h2>
    <p>
      The bottom 4 enchantments are added just for the Throwing Spears themselves.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <b>Flammable</b> (max-level:1) - When it hits a block it will try to spawn fire around the
        area that it lands. Flammable is not compatible with Unstable.
      </li>
      <li>
        <b>Unstable</b> (max-level:2) - When it hits a block or an entity it will cause an
        explosion. The size of the explosion is determined by the level. Unstable is not compatible
        with the other 3 added enchantments.
      </li>
      <li>
        <b>Conductive</b> (max-level:3) - When it hits a block or an entity it will try and cause a
        lightning strike. Each level improves the chances of the lightning strike happening
        (configurable with <i>better_spears.conductivityLightningChances</i> in the
        <i class="text-gray-600">assortedthrowingspears-common</i> config file). Conductive is not
        compatible with Unstable.
      </li>
      <li>
        <b>Bounciness</b> (max-level:5) - When it hits a block it will try and bounce up to the
        number of levels you have. Bounciness is not compatible with Unstable.
      </li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Throwing Spears'
})
</script>

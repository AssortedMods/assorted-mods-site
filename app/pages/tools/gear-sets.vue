<template>
  <PartPage
    family="tools"
    part="gear-sets"
  >
    <p>
      Every metal and gem
      <NuxtLink
        class="page-link"
        to="/core/ores"
      >
        Assorted Ores
      </NuxtLink> and
      <NuxtLink
        class="page-link"
        to="/core/machines"
      >
        Assorted Machines
      </NuxtLink> add gets a full gear set here, so tin, copper, silver, aluminum, nickel,
      platinum, lead, bronze, electrum, invar, steel, ruby, amethyst, sapphire, topaz, emerald and
      peridot. That is a Pickaxe, Axe, Shovel, Hoe, Sword, Spear, Helmet, Chestplate, Leggings and
      Boots for each material. Copper, amethyst and emerald are in the game already, so those sets
      can be crafted with no other mod. The rest need a mod that adds the ingot or gem, and it does
      not have to be an Assorted one.
    </p>
    <GalleryShot name="armory" />
    <p>
      Vanilla's own materials are not repeated as pickaxes and swords, since the game already has
      those. The extra materials also turn up in the tools vanilla has no version of, like
      <NuxtLink
        class="page-link"
        to="/tools/hammers"
      >
        Hammers
      </NuxtLink>,
      <NuxtLink
        class="page-link"
        to="/tools/machetes"
      >
        Machetes
      </NuxtLink>,
      <NuxtLink
        class="page-link"
        to="/tools/multitools"
      >
        Multitools
      </NuxtLink>,
      <NuxtLink
        class="page-link"
        to="/tools/shears"
      >
        Shears
      </NuxtLink>,
      <NuxtLink
        class="page-link"
        to="/tools/throwing-spears"
      >
        Throwing Spears
      </NuxtLink> and
      <NuxtLink
        class="page-link"
        to="/tools/buckets"
      >
        Buckets
      </NuxtLink>, when those mods are installed.
    </p>
    <p>
      Each tool or armor can be repaired using the ingot or gem form of the material and is crafted
      the same way you craft vanilla tools and armor but replacing them for the material of your
      choice. Each tool and armor material is completely configurable if you would like to change
      the values.
    </p>
    <SectionHeading name="spears">
      Spears
    </SectionHeading>
    <p>
      Minecraft has its own plain Spear for each of its tool materials. These spears act exactly like
      the vanilla ones but in all of the extra materials, so they are not left out. They use the
      vanilla spear recipe.
    </p>
    <SectionHeading name="recipes">
      Example recipes
    </SectionHeading>
    <p>
      If you forgot what the recipes look like or maybe just want a refresher here you go. Replace
      the Topaz Gem with the material of your choice to craft any of the tools or armor.
    </p>
    <GalleryShot name="inventory" />
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedgearsets:topaz_pickaxe" />
      <Recipe id="assortedgearsets:topaz_axe" />
      <Recipe id="assortedgearsets:topaz_shovel" />
      <Recipe id="assortedgearsets:topaz_hoe" />
      <Recipe id="assortedgearsets:topaz_sword" />
      <Recipe id="assortedgearsets:topaz_spear" />
      <Recipe id="assortedgearsets:topaz_helmet" />
      <Recipe id="assortedgearsets:topaz_chestplate" />
      <Recipe id="assortedgearsets:topaz_leggings" />
      <Recipe id="assortedgearsets:topaz_boots" />
    </div>

    <SectionHeading name="tiers">
      Tool Materials
    </SectionHeading>
    <p>
      The tool materials are shared by every Assorted mod, so a tin hammer and a tin bucket agree.
      They live in the <i class="text-gray-600">assortedlib-tool-tiers.toml</i> config file on
      NeoForge, or <i class="text-gray-600">assortedlib-tool-tiers.json</i> on Fabric.
      <i>vanilla_materials</i> covers wood up to netherite and <i>extra_materials</i> covers every
      extra material. Vanilla tools are not affected, only the tools in the Assorted mods. Values are
      read once at startup, so changes need a restart.
    </p>
    <p>The following values can be configured:</p>
    <ul class="list-disc list-outside mx-6">
      <li>
        <i>harvestLevel</i> for tools, refers to what blocks it can break. 0 is wood, 1 stone,
        2 iron, 3 diamond, 4 and above netherite.
      </li>
      <li><i>maxUses</i> refers to how many uses it has before it breaks.</li>
      <li><i>efficiency</i> for tools, refers to how quickly the material can break blocks.</li>
      <li><i>damage</i> refers to damage to entities.</li>
      <li>
        <i>enchantability</i> refers to how enchantable the material is. The higher the number the
        better enchantments are likely to appear.
      </li>
      <li><i>axeDamage</i> is the damage modifier for axes in each material.</li>
      <li><i>axeSpeed</i> is the speed modifier for axes in each material.</li>
    </ul>
    <p>
      To hide the tools and armor of a material no installed mod adds, turn on
      <i>creative.hideUncraftableItems</i> in the
      <i class="text-gray-600">assortedlib-common</i> config file.
    </p>

    <SectionHeading name="armor">
      Armor Materials
    </SectionHeading>
    <p>
      The armor for each extra material is under <i>extra_armor</i> in the
      <i class="text-gray-600">assortedgearsets-common.toml</i> config file on NeoForge, or
      <i class="text-gray-600">assortedgearsets-common.json</i> on Fabric.
    </p>
    <p>The following values can be configured:</p>
    <ul class="list-disc list-outside mx-6">
      <li>
        <i>durability</i> refers to how long the armor will last. This value is multiplied
        differently for each piece.
        <div class="mx-6">
          <ul class="list-[square] list-inside">
            <li>durability * 11 for the helmet</li>
            <li>durability * 16 for the chestplate</li>
            <li>durability * 15 for the leggings</li>
            <li>durability * 13 for the boots</li>
          </ul>
        </div>
      </li>
      <li>
        <i>helmetReductionAmount</i>, <i>chestPlateReductionAmount</i>,
        <i>leggingsReductionAmount</i>, and <i>bootsReductionAmount</i> refer to the number of armor
        points the player gets for wearing that piece.
      </li>
      <li>
        <i>enchantability</i> refers to how enchantable the material is. The higher the number the
        better enchantments are likely to appear.
      </li>
      <li>
        <i>toughness</i> can be used to provide extra resistance to the power of strong attacks.
      </li>
      <li>
        <i>knockbackResistance</i> refers to how much resistance to getting knocked back from
        attacks on projectiles.
      </li>
    </ul>
    <p>
      The same file has a <i>spears</i> group for each extra material with the nine values Minecraft
      tunes per spear material: <i>swingSeconds</i>, <i>damageMultiplier</i>,
      <i>delaySeconds</i>, <i>dismountSeconds</i>, <i>dismountSpeed</i>, <i>knockbackSeconds</i>,
      <i>knockbackSpeed</i>, <i>damageSeconds</i>, and <i>damageSpeed</i>.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Gear Sets'
})
</script>

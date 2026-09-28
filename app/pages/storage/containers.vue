<template>
  <PartPage
    family="storage"
    part="containers"
  >
    <p>
      All of these blocks support hoppers and pipes to insert and export items. With
      <NuxtLink
        class="page-link"
        to="/storage/locks"
      >
        Assorted Locks
      </NuxtLink>
      installed all of them except the Item Tower can also be locked.
    </p>

    <h2><a name="crates">Warehouse Crates</a></h2>
    <p>
      A warehouse crate is not a storage crate but more of a box you would see in a Warehouse.
      Warehouse crates are simple storage blocks that have 27 slots for items. There is one for each
      of the 12 vanilla wood types, and each takes any log of its own wood.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedcontainers:oak_warehouse_crate" />
      <Recipe id="assortedcontainers:birch_warehouse_crate" />
      <Recipe id="assortedcontainers:spruce_warehouse_crate" />
      <Recipe id="assortedcontainers:jungle_warehouse_crate" />
      <Recipe id="assortedcontainers:acacia_warehouse_crate" />
      <Recipe id="assortedcontainers:dark_oak_warehouse_crate" />
      <Recipe id="assortedcontainers:warped_warehouse_crate" />
      <Recipe id="assortedcontainers:crimson_warehouse_crate" />
      <Recipe id="assortedcontainers:mangrove_warehouse_crate" />
      <Recipe id="assortedcontainers:cherry_warehouse_crate" />
      <Recipe id="assortedcontainers:bamboo_warehouse_crate" />
      <Recipe id="assortedcontainers:pale_oak_warehouse_crate" />
    </div>

    <h2><a name="obsidian_safe">Obsidian Safe</a></h2>
    <p>The obsidian safe is resistant to explosions and has 27 slots for storage.</p>
    <Recipe id="assortedcontainers:obsidian_safe" />

    <h2><a name="gold_safe">Gold Safe</a></h2>
    <p>
      The gold safe works just like Shulker boxes where when you break it, it will keep its
      inventory. Once placed again the inventory will still remain when you open it up. The gold safe
      is an upgrade to the Obsidian Safe so is just as strong as well as has 36 slots instead of 27.
    </p>
    <Recipe id="assortedcontainers:gold_safe" />

    <h2><a name="cabinets">Cabinets</a></h2>
    <p>
      Cabinets are similar to the warehouse crates where they store a single chests worth of items
      but they come in two varieties and open from the front instead of the top.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcontainers:wood_cabinet" />
      <Recipe id="assortedcontainers:glass_cabinet" />
    </div>

    <h2><a name="lockers">Lockers</a></h2>
    <p>
      Lockers can be placed either one or two high. When placed two high you can access twice the
      items. Similar to a double chest but on its side. The inventory for the locker scrolls and
      you can use the right side buttons to navigate as well.
    </p>
    <Recipe id="assortedcontainers:locker" />
    <img src="\mods\storage\locker.png">

    <h2><a name="item_tower">Item Tower</a></h2>
    <p>
      Item Towers are an interesting way of storing your items but they cannot be locked. Each one
      can store 18 stacks in two rows. But when stacked on top of each other you can access all of
      them from the one you open. When hoppers or pipes are involved they also have access to all of
      the towers.
    </p>
    <Recipe id="assortedcontainers:item_tower" />
    <img src="\mods\storage\item_tower_inventory.png">
    <img src="\mods\storage\item_tower.png">
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Containers'
})
</script>

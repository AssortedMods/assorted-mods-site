<template>
  <PartPage
    family="storage"
    part="crates"
  >
    <p>
      If you have ever used any barrel or drawer mod this will be very familiar. These allow you to
      store many stacks of the same item and you are able to add and remove items from it all
      without needing to go into the GUI. With
      <NuxtLink
        class="page-link"
        to="/storage/locks"
      >
        Assorted Locks
      </NuxtLink>
      installed every block added here can also be locked.
    </p>
    <img src="\mods\storage\storage_crates.png">

    <SectionHeading name="crates">
      Crates
    </SectionHeading>
    <p>
      A crate holds one kind of item and a lot of it. By default 32 stacks. There is a crate for
      every wood, and they are all the same size.
    </p>
    <p>
      There are 4 different basic Storage Crates that you are able to make each has a different
      number of slots for items. Single, Double, Triple, and Quadruple slot variants. A double gives
      two compartments of sixteen stacks. A triple gives sixteen, eight and eight. A quadruple gives
      four of eight. More kinds of item, less of each.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcrates:oak_crate" />
      <Recipe id="assortedcrates:oak_crate_double" />
      <Recipe id="assortedcrates:oak_crate_triple" />
      <Recipe id="assortedcrates:oak_crate_quadruple" />
    </div>

    <SectionHeading
      name="interacting"
      :level="3"
    >
      Interacting
    </SectionHeading>
    <p>
      There are a number of different ways you can interact with crates to add and remove items from
      them.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <strong>Right Click</strong> - Try and add the stack in your hand to the slot you were
        hovering over
      </li>
      <li>
        <strong>Double - Right Click</strong> - Will look for the same type of items that your first
        click contained and try to add them all
      </li>
      <li>
        <strong>Left Click</strong> - Will drop a single item of the item you were hovering over
      </li>
      <li>
        <strong>Shift Left Click</strong> - Will drop a full stack of the item you were hovering
        over
      </li>
      <li>
        <strong>Shift Right Click</strong> - Will open an interface that you can add upgrades and
        see the items in the crate
      </li>
    </ul>

    <SectionHeading name="compacting">
      Compacting
    </SectionHeading>
    <p>
      A Compacting Storage Crate will allow the automatic conversion of certain recipes that have
      different compact representations. For example Iron has 3 states in vanilla. Iron Block ->
      Iron Ingots -> Iron Nuggets. The Compacting Storage Crate will allow you to input any of these
      into it and if you need one of them you can get that form out automatically.
    </p>
    <br>
    <p>
      The crate only supports up to 3 levels. As such the recipe requires any
      <strong>Triple</strong> slot Storage Crate
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcrates:crate_compacting_iron" />
      <Recipe id="assortedcrates:crate_compacting_aluminum" />
      <Recipe id="assortedcrates:crate_compacting_steel" />
    </div>

    <SectionHeading name="controller">
      Controller
    </SectionHeading>
    <p>
      If you would like to be manage a lot of Storage Crates at once you can use a Storage Crate
      Controller. This block allows for you to pipe items in or pipe items out as well as allows for
      you to interact with it to add items to your storage system.
    </p>
    <p>
      Storage Crates will automatically be connected to the controller as long as there is a direct
      connection of Crates back to the Controller.
    </p>
    <Recipe id="assortedcrates:crate_controller" />

    <SectionHeading
      name="bridge"
      :level="3"
    >
      Bridge
    </SectionHeading>
    <p>
      If you would like to connect some Storage Crates to your controller that do not have a direct
      connection you can join them using the Storage Bridge to "bridge" the gap and have those
      Storage Crates still connected.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcrates:crate_bridge_gold" />
      <Recipe id="assortedcrates:crate_bridge_copper" />
      <Recipe id="assortedcrates:crate_bridge_bronze" />
    </div>

    <SectionHeading name="upgrades">
      Upgrades
    </SectionHeading>
    <p>
      There are 4 Storage Crate specific upgrades that you can craft and add to your Storage Crates
      as well as each of the Level Upgrades from
      <NuxtLink
        class="page-link"
        to="/storage/level-upgrades"
      >
        Assorted Level Upgrades
      </NuxtLink>. You add these Upgrades either by Right-Clicking on a Storage Crate with them or by opening
      the interface of a Storage Crate and adding them within.
    </p>
    <img src="\mods\storage\crate_interface.png">
    <p>The Blank Upgrade is the base the other upgrades are made from.</p>
    <Recipe id="assortedcrates:blank_upgrade" />

    <SectionHeading
      name="item_locking"
      :level="3"
    >
      Item Locking
    </SectionHeading>
    <p>
      Within the Storage Crate interface you can click the checkbox for a specific slot to lock the
      item in it. So even if you run out new items will not be able to take its place.
      <i>For Compacting Crates the checkbox is for the whole Crate rather than just one slot</i>.
    </p>
    <br>

    <SectionHeading
      name="void_upgrade"
      :level="3"
    >
      Void Upgrade
    </SectionHeading>
    <p>
      The Void Upgrade will allow you to still be able to input new items in the Storage Crate but
      each one past the maximum will get "voided" and you will not be able to recover them.
    </p>
    <Recipe id="assortedcrates:void_upgrade" />

    <SectionHeading
      name="redstone_upgrade"
      :level="3"
    >
      Redstone Upgrade
    </SectionHeading>
    <p>
      The Redstone Upgrade will make the Storage Crate emit a redstone signal if certain conditions
      are met. You can cycle modes by right clicking the air with the Redstone Upgrade in your hand.
      The different modes are shown below. Each will be a percentage that will decide the resulting
      Redstone power level.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <strong>All Slots</strong> - The difference between all of the slots combined max storage and
        the current amount stored in them all
      </li>
      <li>
        <strong>Most Full Slot</strong> - The difference between the slot with the most items max
        storage and current amount stored in that slot
      </li>
      <li>
        <strong>Least Full Slot</strong> - The difference between the slot with the least items max
        storage and current amount stored in that slot
      </li>
      <li>
        <strong>Slot {0,1,2,3}</strong> - The difference between the slot that is specified's max
        storage and current amount stored in that slot
      </li>
    </ul>
    <Recipe id="assortedcrates:redstone_upgrade" />

    <SectionHeading
      name="amount_upgrade"
      :level="3"
    >
      Amount Upgrade
    </SectionHeading>
    <p>
      The Amount Upgrade will let you see the number of items that are currently in each slot. It
      has two modes, <strong>Simple</strong> will show only the amount in each slot
      <strong>Full</strong> will show the amount out of the total allowed in that slot.
    </p>
    <Recipe id="assortedcrates:amount_upgrade" />
    <img src="\mods\storage\amount_upgrade.png">

    <SectionHeading
      name="glow_upgrade"
      :level="3"
    >
      Glow Upgrade
    </SectionHeading>
    <p>
      The Glow Upgrade will light the items stored in the slots when it is dark so that it is a bit
      easier to see what is stored in each Crate.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcrates:glow_upgrade" />
      <Recipe id="assortedcrates:glow_upgrade_glowstone" />
    </div>
    <img src="\mods\storage\glow_upgrade.png">

    <SectionHeading
      name="level_upgrades"
      :level="3"
    >
      Level Upgrades
    </SectionHeading>
    <p>
      With
      <NuxtLink
        class="page-link"
        to="/storage/level-upgrades"
      >
        Assorted Level Upgrades
      </NuxtLink>
      installed Storage Crates support installing Level Upgrades. These Level Upgrades will provide
      a boost to the amount you can store in each slot. Each Level Upgrade has an associated
      multiplier which you can see within the Storage Crate interface. Each Level Upgrade you add
      multiplies its multiplier by whatever the base stack size was and adds it.
    </p>
    <img src="\mods\storage\crate_interface_level.png">

    <SectionHeading
      name="locking"
      :level="3"
    >
      Locking
    </SectionHeading>
    <p>
      With
      <NuxtLink
        class="page-link"
        to="/storage/locks"
      >
        Assorted Locks
      </NuxtLink>
      installed you are able to lock Storage Controllers, Storage Crates, and Compacting Storage
      Crates. These will allow you to restrict access to your crates and storage crate system.
      <i>Make sure to use a locked hopper if you still want to pipe items in</i>.
    </p>

    <SectionHeading name="rotator_majig">
      Rotator Majig
    </SectionHeading>
    <p>
      Another new item added is a Rotator Majig which will allow you to rotate blocks assuming they
      allow it. But you are also able to rotate the items in each slot of a Storage Crate. Maybe you
      want to place a crate on the ceiling this will allow for easier visibility.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedcrates:rotator_majig_iron" />
      <Recipe id="assortedcrates:rotator_majig_iron_alt" />
    </div>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedcrates-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>crates.maxControllerSearchRange</i> is how far a crate controller looks for crates. 64 blocks by default.</li>
    </ul>
    <p>
      These are in the <i class="text-gray-600">assortedcrates-client</i> config file. They only change your own game, so everyone can set
      their own.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>crates.crateMaxRenderDistance</i> is how far away you can still see the items on the front of crates. 16 blocks by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Crates'
})
</script>

<template>
  <PartPage
    family="storage"
    part="locks"
  >
    <p>
      Doors, chests, ender chests, barrels, hoppers and shulker boxes can be locked and then opened
      with the correct key. So can the containers from the other Assorted Storage mods. Using the
      locksmith workbench you are able to set a code on locks and keys to restrict access to only
      those that have a key of the same code.
    </p>

    <SectionHeading name="workbench">
      Locksmith Workbench
    </SectionHeading>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedlocks:locksmith_workbench" />
      <Recipe id="assortedlocks:locksmith_workbench_alt" />
    </div>
    <p>
      Using this workbench will allow you to define a code for keys and locks. As long as the lock
      and key code are the same you will be able to open blocks.
    </p>
    <img src="\mods\storage\locksmith_workbench.png">

    <SectionHeading name="lock">
      Locksmith Lock
    </SectionHeading>
    <p>
      Once a code has been set on a lock simply right click a supported storage block to lock it and
      restrict access to it.
    </p>
    <Recipe id="assortedlocks:locksmith_lock" />

    <SectionHeading name="key">
      Locksmith Key
    </SectionHeading>
    <p>
      You just need to have this key somewhere within your inventory and you will be able to open
      storage blocks that are locked with its code.
    </p>
    <Recipe id="assortedlocks:locksmith_key" />

    <SectionHeading name="key_ring">
      Key Ring
    </SectionHeading>
    <p>
      If you have a ton of spare keys lying around taking up your inventory there is a simple
      solution the <b>Key Ring</b>. This neat item allows you to store up to 12 separate keys in one
      item and will allow you to unlock any block just the same as if you had each key separate.
    </p>
    <Recipe id="assortedlocks:key_ring" />
    <p>
      To use it just right click it in your inventory and a GUI will open. Drag any keys you would
      like to store over and then you are good to go. It only supports 1 key in each slot.
    </p>
    <img src="\mods\storage\key_ring_gui.png">

    <SectionHeading name="containers">
      Locking Containers
    </SectionHeading>
    <p>
      Use a padlock on a chest, barrel, hopper or shulker box and it becomes the locked version of
      itself. A locked chest, barrel, hopper or shulker box keeps whatever was inside when the
      padlock went on. You can also craft a vanilla chest or barrel together with a lock that has a
      code to get a locked one.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedlocks:locked_chest" />
      <Recipe id="assortedlocks:locked_barrel" />
    </div>
    <p>
      Sneak and use it with an empty hand while you carry the matching key to take the padlock off
      and get the plain one back.
    </p>

    <SectionHeading name="ender_chest">
      Locked Ender Chest
    </SectionHeading>
    <p>
      The Locked Ender Chest adds the ability to have multiple separate Ender Chest inventories
      saved and can be accessed by anyone else who has the same code use to lock it.
    </p>
    <p>
      There are two ways to get a Locked Ender Chest. The first is in a crafting table combine an
      Ender Chest and a <b>Locksmith Lock</b> with a saved code. One without a code will not work.
      Then you will get a Locked Ender Chest locked with that code.
    </p>
    <Recipe id="assortedlocks:locked_ender_chest" />
    <p>
      The second option is to just <b>Shift+Right Click</b> an Ender Chest with a
      <b>Locksmith Lock</b> with a saved code. This will turn the Ender Chest into a Locked Ender
      Chest locked with that code.
    </p>
    <img src="\mods\storage\locked_ender_chest.png">
    <p>
      Each separate Locked Ender Chest locked with a different code is a completely separate
      inventory than the others. So you can have a huge amount of separate Locked Ender Chests to
      store different items in.
    </p>
    <p>
      If you ever want the normal Ender Chest back just <b>Shift+Right Click</b> on one and the lock
      will pop off provided you are able to access the inventory of what it is locked with.
    </p>

    <SectionHeading name="doors">
      Locking Doors
    </SectionHeading>
    <p>
      Using the <i>Locksmith Lock</i> you are also able to lock all of the Vanilla doors so that you
      require the correct key with the correct combination to open them.
      <u>If they are locked they will no longer be able to be activated by redstone.</u>
      If you have
      <NuxtLink
        class="page-link"
        to="/decor/building-blocks"
      >
        Assorted Building Blocks
      </NuxtLink>
      installed you will also be able to lock the 4 doors that it adds (Quartz, Steel, Glass, Chain
      Link).
    </p>
    <img src="\mods\storage\locked_doors.png">
    <p>
      Doors that do not open by hand, like Iron, Quartz, and Steel, can be locked with a right click
      using a <i>Locksmith Lock</i> that has a combination.
      <b>Doors that do open by hand, including the wooden and copper ones, need a shift-right click</b>.
    </p>
    <br>
    <p>
      To remove the lock from a door shift-right click on the locked door with an empty hand. Make
      sure you have a key in your inventory with the combination.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Locks'
})
</script>

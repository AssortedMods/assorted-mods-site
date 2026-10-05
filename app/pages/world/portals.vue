<template>
  <PartPage
    family="world"
    part="portals"
  >
    <SectionHeading name="void_portals">
      Void Portals
    </SectionHeading>
    <img src="\mods\world\portals.webp">
    <p>
      A void portal frame is an end portal frame you can make yourself. They are very slow to break as
      you would expect.
    </p>
    <Recipe id="assortedportals:void_portal_frame" />
    <p>
      You can place them in an opening of 3x3 to 9x9 on a floor, wall or ceiling. If they all face the
      same way you can build an End Portal of your own.
    </p>
    <SectionHeading name="void_striker">
      Void Striker and Ender Flames
    </SectionHeading>
    <p>
      Strike any frame of a finished ring with a void striker and the end portal will open. Ender
      flames set inside a closed ring of void portal frames will also open the portal. On end stone the
      flames will burn forever.
    </p>
    <Recipe id="assortedportals:void_striker" />
    <SectionHeading name="void_crystal">
      Void Crystal
    </SectionHeading>
    <p>
      Void crystal is found on the End islands. It is quite rare and needs an iron pickaxe or better
      to break.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World | Portals'
})
</script>

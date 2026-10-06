<template>
  <PartPage
    family="decor"
    part="roads"
  >
    <p>
      Have you ever wanted to design a very basic road system in Minecraft? Well now you can with
      some Roadway blocks. These blocks allow you to have roadways, manholes, lights, sidewalks and
      stone paths.
    </p>
    <GalleryShot name="road" />
    <SectionHeading name="required">
      Requirements
    </SectionHeading>
    <p>
      Before you can start crafting and playing around with the Roadways you will need some items
      that form the structure for these Roadway blocks.
    </p>
    <br>
    <SectionHeading
      name="tarball"
      :level="3"
    >
      Tarball
    </SectionHeading>
    <p>
      To get started you need to craft some Tarballs which will be used to create some
      <i>Asphalt</i> for the roads. But, you are also able to use Tarball to craft some Siding
      blocks with <NuxtLink
        class="page-link"
        to="/decor/paint"
      >
        Paint Rollers
      </NuxtLink>.
    </p>
    <Recipe id="assortedroads:tarball" />

    <SectionHeading
      name="asphalt"
      :level="3"
    >
      Asphalt
    </SectionHeading>
    <p>
      Once you have turned some tar into Asphalt you can get started crafting some Roadways.
      <i>You are also able to Right-Click with the Asphalt in your hand to transform stone into
        Roadways without needing to craft</i>.
    </p>
    <Recipe id="assortedroads:asphalt" />

    <SectionHeading name="block">
      Roadway
    </SectionHeading>
    <p>
      The base <i>Roadway</i> is required to craft all of the other types of Roadways and is what
      you paint to get different patterns on top. Using
      <NuxtLink
        class="page-link"
        to="/decor/paint"
      >
        Paint Rollers
      </NuxtLink> you are
      able to paint the top to the specified color by Right-Clicking a Roadway that is place. If you
      use the White Paint Roller it comes with extra patterns, just keep Right-Clicking. With a
      Water Bucket in hand you can clear Roadways.
    </p>
    <GalleryShot name="crossing" />
    <Recipe id="assortedroads:roadway" />
    <p>You are also able to paint and clear the Roadway in a crafting table.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedpaint:roadway_orange" />
      <Recipe id="assortedroads:roadway_wash" />
    </div>
    <SectionHeading name="manhole">
      Roadway Manhole
    </SectionHeading>
    <PageFigure
      src="/figures/decor/manhole.webp"
      caption="A manhole open and closed."
    />
    <p>
      With a Roadway Manhole you can create a block that you are able to toggle (Right-Click) to
      pass in and out of the block. You can also use Steel from
      <NuxtLink
        class="page-link"
        to="/core/machines"
      >
        Assorted Machines
      </NuxtLink> to
      craft with.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedroads:roadway_manhole" />
      <Recipe id="assortedroads:steel_roadway_manhole" />
    </div>
    <SectionHeading name="light">
      Roadway Light
    </SectionHeading>
    <p>
      Using an
      <NuxtLink
        class="page-link"
        to="/decor/lights"
      >
        Illumination Plate
      </NuxtLink> from Assorted Lights you
      can embed it into the Roadway to provide a toggleable light source. Just power it with
      redstone to turn it on!
    </p>
    <Recipe id="assortedroads:roadway_light" />
    <SectionHeading name="sidewalk">
      Sidewalk
    </SectionHeading>
    <p>
      To accompany your Roadway there is a sidewalk block. This block has the special ability of
      speeding up your movement when you walk on it.
    </p>
    <Recipe id="assortedroads:sidewalk" />
    <SectionHeading name="stone_path">
      Stone Path
    </SectionHeading>
    <p>
      A stone path is the quieter surface for a garden, cut from plain stone on the stonecutter.
    </p>
    <Recipe id="assortedroads:stone_path_stonecutting" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Roads'
})
</script>

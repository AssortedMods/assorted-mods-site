<template>
  <LibPage
    title="Instruction Manual"
    description="One book with a section for every Assorted mod you have installed."
    icon="/icons/assortedlib/instruction_manual.png"
  >
    <p>
      Every Assorted mod writes its own part of the manual, so it only has what you actually have
      installed. Hover over it to see how many mods it covers. A mod that is turned off takes its
      chapters with it.
    </p>
    <p>
      Craft it from a book, a piece of leather to bind it and any dye for the ink.
    </p>
    <Recipe id="assortedlib:instruction_manual" />

    <SectionHeading name="pointing">
      Pointing at Things
    </SectionHeading>
    <p>
      Right click anything with the manual and it opens to that page, if it has one. Blocks, dropped
      items and creatures all work. Otherwise it opens back where you left off.
    </p>
    <p>
      A check mark shows by your crosshair when what you are looking at has a page. It can be turned
      off with <i>manual.showPageIndicator</i> in the
      <NuxtLink
        class="page-link"
        to="/lib#config"
      >
        Assorted Lib
      </NuxtLink> config.
    </p>

    <SectionHeading name="reading">
      Reading It
    </SectionHeading>
    <p>
      Pick a mod from the main page to see what it adds, then pick a chapter to read it. The arrows
      at the corners turn the page and step back out to the chapters and the index.
    </p>
    <p>
      An item drawn on a page is a link. Click it and the book turns to what it is.
    </p>

    <SectionHeading name="recipes">
      Recipes
    </SectionHeading>
    <p>
      A recipe is drawn on the screen of whatever makes it, so crafting looks like a crafting table
      and smelting looks like a furnace. The slots it always has are drawn too, like a furnace's fuel.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li>A slot ringed in gold takes any one of several things and cycles through them.</li>
      <li>Two crossed arrows in the top right corner mean the recipe is shapeless.</li>
      <li>Hover over a recipe and it stops cycling while you read it.</li>
    </ul>
  </LibPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Lib | Instruction Manual'
})
</script>

<template>
  <PartPage
    family="cuisine"
    part="kitchen"
  >
    <SectionHeading name="dairy">
      Dairy
    </SectionHeading>
    <p>
      We have two machines that convert milk into a Dairy product.
    </p>
    <img src="\mods\cuisine\machines.png">

    <SectionHeading
      name="butter_churn"
      :level="3"
    >
      Butter Churn
    </SectionHeading>
    <p>
      Right click the churn with a milk bucket to fill it. Every right
      click while it is working speeds up the output. Right click once more
      when it is done for two butter.
    </p>
    <Recipe id="assortedkitchen:butter_churn" />

    <SectionHeading
      name="cheese_maker"
      :level="3"
    >
      Cheese Maker
    </SectionHeading>
    <p>
      The cheese maker takes a milk bucket and ages cheese slowly.
      Watch it turn from pale to a yellow orange, right click it to
      get your cheese.
    </p>
    <Recipe id="assortedkitchen:cheese_maker" />

    <SectionHeading
      name="making"
      :level="3"
    >
      What Goes In
    </SectionHeading>
    <p>
      Both machines take any milk bucket, and both hand the empty bucket back with the result.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:churning" />
      <Recipe id="assortedkitchen:cheese_making" />
    </div>

    <SectionHeading
      name="cheese"
      :level="3"
    >
      Cheese
    </SectionHeading>
    <p>A block of cheese cuts into nine pieces, and nine pieces press back into a block.</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:cheese" />
      <Recipe id="assortedkitchen:cheese_block" />
    </div>

    <SectionHeading
      name="hot_cheese"
      :level="3"
    >
      Cheese Sandwich
    </SectionHeading>
    <p>
      Cheese between two pieces of bread makes a cheese sandwich. It is better food than the cold
      piece was.
    </p>
    <Recipe id="assortedkitchen:hot_cheese" />

    <SectionHeading name="food">
      Food
    </SectionHeading>
    <p>
      Eggs, sandwiches, and the two tools that allow you to make the rest of the food. The knife and the
      whisk both stay in the crafting grid instead of being used up.
    </p>

    <SectionHeading
      name="eggs"
      :level="3"
    >
      Eggs
    </SectionHeading>
    <p>
      Crack eggs into a bowl with some butter, mix them with a whisk, then cook them in a furnace. Cooked eggs can be a filling meal.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:eggs_unmixed" />
      <Recipe id="assortedkitchen:eggs_mixed" />
      <Recipe id="assortedkitchen:eggs_cooked_smelting" />
    </div>

    <SectionHeading
      name="sandwiches"
      :level="3"
    >
      Sandwiches
    </SectionHeading>
    <p>
      Bread cuts into slices, and slices with meat and cheese can make a burger. The
      cheese it needs comes from the <a href="#cheese_maker">Cheese Maker</a>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:bread_slice" />
      <Recipe id="assortedkitchen:cheese_burger" />
    </div>

    <SectionHeading
      name="knife"
      :level="3"
    >
      Knife
    </SectionHeading>
    <p>
      The knife slices bread and pumpkins. With <NuxtLink to="/cuisine/dragon-fruit">
        Assorted Dragon Fruit
      </NuxtLink> it also cuts a dragon fruit out of a cactus.
    </p>
    <Recipe id="assortedkitchen:knife" />

    <SectionHeading
      name="whisk"
      :level="3"
    >
      Whisk
    </SectionHeading>
    <p>The whisk beats eggs, and wears out the same way the knife does.</p>
    <Recipe id="assortedkitchen:whisk" />

    <SectionHeading name="chocolate">
      Chocolate
    </SectionHeading>
    <p>
      Making chocolate is a long chain of crafting steps. Grind the beans, mix the dust with
      milk, heat it, and then either eat it, set it into bars, or bake it into something else.
    </p>

    <SectionHeading
      name="mortar_and_pestle"
      :level="3"
    >
      Mortar and Pestle
    </SectionHeading>
    <p>
      The mortar and pestle grinds cocoa beans. Like the knife and the whisk it stays in the
      crafting grid and wears out a little with every use.
    </p>
    <Recipe id="assortedkitchen:mortar_and_pestle" />

    <SectionHeading
      name="dust"
      :level="3"
    >
      Cocoa Dust
    </SectionHeading>
    <p>Ground down in a mortar and pestle, cocoa beans give cocoa dust.</p>
    <Recipe id="assortedkitchen:cocoa_dust" />

    <SectionHeading
      name="bowl"
      :level="3"
    >
      Chocolate Bowl
    </SectionHeading>
    <p>
      Combine cocoa dust and milk in a bowl to make cold chocolate. Any milk
      bucket will do, including the ones <NuxtLink to="/tools">Assorted Tools</NuxtLink> adds.
    </p>
    <Recipe id="assortedkitchen:chocolate_bowl" />

    <SectionHeading
      name="hot"
      :level="3"
    >
      Hot Chocolate
    </SectionHeading>
    <p>Heat the bowl in a furnace and it becomes hot chocolate.</p>
    <Recipe id="assortedkitchen:hot_chocolate_smelting" />

    <SectionHeading
      name="ball"
      :level="3"
    >
      Chocolate Balls
    </SectionHeading>
    <p>
      You can eat the hot chocolate rolled into balls or use them to make a cake and pie.
    </p>
    <Recipe id="assortedkitchen:chocolate_ball" />

    <SectionHeading
      name="mold"
      :level="3"
    >
      Chocolate Bar Mold
    </SectionHeading>
    <p>
      Place the mold and right click it with hot chocolate to pour. It steams while it sets, and
      every block of ice or snow packed against its sides cools it faster. Once it has set, right
      click the mold for the bars.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:chocolate_bar_mold" />
      <Recipe id="assortedkitchen:chocolate_molding" />
    </div>

    <SectionHeading
      name="bar"
      :level="3"
    >
      Chocolate Bars
    </SectionHeading>
    <p>
      Make a wrapper to wrap the Chocolate bars to make it complete.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:chocolate_bar" />
      <Recipe id="assortedkitchen:wrapper" />
      <Recipe id="assortedkitchen:chocolate_bar_wrapped" />
    </div>

    <SectionHeading
      name="storage"
      :level="3"
    >
      Storage
    </SectionHeading>
    <p>Nine bars press into a block, and a block converts back to 9 chocolate bars.</p>
    <Recipe id="assortedkitchen:chocolate_block" />

    <SectionHeading
      name="cake"
      :level="3"
    >
      Chocolate Cake
    </SectionHeading>
    <p>
      Chocolate balls and milk make a tasty Chocolate Cake.
    </p>
    <Recipe id="assortedkitchen:chocolate_cake" />

    <SectionHeading name="pies">
      Pies
    </SectionHeading>
    <p>
      Every pie starts as dough in a pan, gets a filling, and then bakes in a furnace. A baked pie
      can be placed and eaten a slice at a time, the way a cake works.
    </p>
    <img src="\mods\cuisine\pies.png">

    <SectionHeading
      name="ingredients"
      :level="3"
    >
      Ingredients
    </SectionHeading>
    <p>
      The pan is reusable and the dough is not. Pumpkin slices are the one filling you have to cut
      yourself.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:pan" />
      <Recipe id="assortedkitchen:dough" />
      <Recipe id="assortedkitchen:pumpkin_slice" />
    </div>

    <SectionHeading
      name="raw"
      :level="3"
    >
      Filling a Pie
    </SectionHeading>
    <p>
      Make an empty pie, then fill it with apple, pumpkin, melon or pork. A raw pie cannot be eaten.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:raw_empty_pie" />
      <Recipe id="assortedkitchen:raw_apple_pie" />
      <Recipe id="assortedkitchen:raw_pumpkin_pie" />
      <Recipe id="assortedkitchen:raw_melon_pie" />
      <Recipe id="assortedkitchen:raw_pork_pie" />
    </div>

    <SectionHeading
      name="baking"
      :level="3"
    >
      Baking
    </SectionHeading>
    <p>A raw pie bakes in a furnace, and what comes out is the block you place and can eat.</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:apple_pie_smelting" />
      <Recipe id="assortedkitchen:pumpkin_pie_smelting" />
      <Recipe id="assortedkitchen:melon_pie_smelting" />
      <Recipe id="assortedkitchen:pork_pie_smelting" />
    </div>

    <SectionHeading
      name="chocolate_pie"
      :level="3"
    >
      Chocolate Pie
    </SectionHeading>
    <p>
      Chocolate balls fill a pie too, and it bakes the same way. Just grab some
      <a href="#ball">Chocolate Balls</a> from above.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:raw_chocolate_pie" />
      <Recipe id="assortedkitchen:chocolate_pie_smelting" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Kitchen'
})
</script>

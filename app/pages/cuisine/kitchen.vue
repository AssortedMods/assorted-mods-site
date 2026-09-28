<template>
  <PartPage
    family="cuisine"
    part="kitchen"
  >
    <h2><a name="dairy">Dairy</a></h2>
    <p>
      We have two machines that convert milk into a Dairy product.
    </p>
    <img src="\mods\cuisine\machines.png">

    <h3><a name="butter_churn">Butter Churn</a></h3>
    <p>
      Right click the churn with a milk bucket to fill it. Every right
      click while it is working speeds up the output. Right click once more
      when it is done for two butter.
    </p>
    <Recipe id="assortedkitchen:butter_churn" />

    <h3><a name="cheese_maker">Cheese Maker</a></h3>
    <p>
      The cheese maker takes a milk bucket and ages cheese slowly.
      Watch it turn from pale to a yellow orange, right click it to
      get your cheese.
    </p>
    <Recipe id="assortedkitchen:cheese_maker" />

    <h3><a name="making">What Goes In</a></h3>
    <p>
      Both machines take any milk bucket, and both hand the empty bucket back with the result.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:churning" />
      <Recipe id="assortedkitchen:cheese_making" />
    </div>

    <h3><a name="cheese">Cheese</a></h3>
    <p>A block of cheese cuts into nine pieces, and nine pieces press back into a block.</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:cheese" />
      <Recipe id="assortedkitchen:cheese_block" />
    </div>

    <h3><a name="hot_cheese">Cheese Sandwich</a></h3>
    <p>
      Cheese between two pieces of bread makes a cheese sandwich. It is better food than the cold
      piece was.
    </p>
    <Recipe id="assortedkitchen:hot_cheese" />

    <h2><a name="food">Food</a></h2>
    <p>
      Eggs, sandwiches, and the two tools that allow you to make the rest of the food. The knife and the
      whisk both stay in the crafting grid instead of being used up.
    </p>

    <h3><a name="eggs">Eggs</a></h3>
    <p>
      Crack eggs into a pan, mix them with a whisk, then cook them in a furnace. Cooked eggs can be a filling meal.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:eggs_unmixed" />
      <Recipe id="assortedkitchen:eggs_mixed" />
      <Recipe id="assortedkitchen:eggs_cooked_smelting" />
    </div>

    <h3><a name="sandwiches">Sandwiches</a></h3>
    <p>
      Bread cuts into slices, and slices with meat and cheese can make a burger. The
      cheese it needs comes from the <a href="#cheese_maker">Cheese Maker</a>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:bread_slice" />
      <Recipe id="assortedkitchen:cheese_burger" />
    </div>

    <h3><a name="knife">Knife</a></h3>
    <p>
      The knife slices bread and pumpkins. With <NuxtLink to="/cuisine/dragon-fruit">
        Assorted Dragon Fruit
      </NuxtLink> it also cuts a dragon fruit out of a cactus.
    </p>
    <Recipe id="assortedkitchen:knife" />

    <h3><a name="whisk">Whisk</a></h3>
    <p>The whisk beats eggs, and wears out the same way the knife does.</p>
    <Recipe id="assortedkitchen:whisk" />

    <h2><a name="chocolate">Chocolate</a></h2>
    <p>
      Making chocolate is a long chain of crafting steps. Grind the beans, mix the dust with
      milk, heat it, and then either eat it, set it into bars, or bake it into something else.
    </p>

    <h3><a name="mortar_and_pestle">Mortar and Pestle</a></h3>
    <p>
      The mortar and pestle grinds cocoa beans. Like the knife and the whisk it stays in the
      crafting grid and wears out a little with every use.
    </p>
    <Recipe id="assortedkitchen:mortar_and_pestle" />

    <h3><a name="dust">Cocoa Dust</a></h3>
    <p>Ground down in a mortar and pestle, cocoa beans give cocoa dust.</p>
    <Recipe id="assortedkitchen:cocoa_dust" />

    <h3><a name="bowl">Chocolate Bowl</a></h3>
    <p>
      Combine cocoa dust and milk in a bowl to make cold chocolate. Any milk
      bucket will do, including the ones <NuxtLink to="/tools">Assorted Tools</NuxtLink> adds.
    </p>
    <Recipe id="assortedkitchen:chocolate_bowl" />

    <h3><a name="hot">Hot Chocolate</a></h3>
    <p>Heat the bowl in a furnace and it becomes hot chocolate.</p>
    <Recipe id="assortedkitchen:hot_chocolate_smelting" />

    <h3><a name="ball">Chocolate Balls</a></h3>
    <p>
      You can eat the hot chocolate rolled into balls or use them to make a cake and pie.
    </p>
    <Recipe id="assortedkitchen:chocolate_ball" />

    <h3><a name="mould">Chocolate Bar Mould</a></h3>
    <p>
      Place the mould and right click it with hot chocolate to pour. It steams while it sets, and
      every block of ice or snow packed against its sides cools it faster. Once it has set, right
      click the mould for the bars.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:chocolate_bar_mould" />
      <Recipe id="assortedkitchen:chocolate_moulding" />
    </div>

    <h3><a name="bar">Chocolate Bars</a></h3>
    <p>
      Make a wrapper to wrap the Chocolate bars to make it complete.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:chocolate_bar" />
      <Recipe id="assortedkitchen:wrapper" />
      <Recipe id="assortedkitchen:chocolate_bar_wrapped" />
    </div>

    <h3><a name="storage">Storage</a></h3>
    <p>Nine bars press into a block, and a block converts back to 9 chocolate bars.</p>
    <Recipe id="assortedkitchen:chocolate_block" />

    <h3><a name="cake">Chocolate Cake</a></h3>
    <p>
      Chocolate balls and milk make a tasty Chocolate Cake.
    </p>
    <Recipe id="assortedkitchen:chocolate_cake" />

    <h2><a name="pies">Pies</a></h2>
    <p>
      Every pie starts as dough in a pan, gets a filling, and then bakes in a furnace. A baked pie
      can be placed and eaten a slice at a time, the way a cake works.
    </p>
    <img src="\mods\cuisine\pies.png">

    <h3><a name="ingredients">Ingredients</a></h3>
    <p>
      The pan is reusable and the dough is not. Pumpkin slices are the one filling you have to cut
      yourself.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:pan" />
      <Recipe id="assortedkitchen:dough" />
      <Recipe id="assortedkitchen:pumpkin_slice" />
    </div>

    <h3><a name="raw">Filling a Pie</a></h3>
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

    <h3><a name="baking">Baking</a></h3>
    <p>A raw pie bakes in a furnace, and what comes out is the block you place and can eat.</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedkitchen:apple_pie_smelting" />
      <Recipe id="assortedkitchen:pumpkin_pie_smelting" />
      <Recipe id="assortedkitchen:melon_pie_smelting" />
      <Recipe id="assortedkitchen:pork_pie_smelting" />
    </div>

    <h3><a name="chocolate_pie">Chocolate Pie</a></h3>
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

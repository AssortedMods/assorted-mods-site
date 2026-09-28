<template>
  <PartPage
    family="cuisine"
    part="sodas"
  >
    <p>
      Eleven bottled drinks. Every one of them starts the same way, and unlike food they can heal you
      directly.
    </p>
    <img src="\mods\cuisine\sodas.png">

    <h2><a name="carbonated">Carbonated Water</a></h2>
    <p>
      Every soda needs a soda bottle, some carbon dioxide, and water to carbonate.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsodas:soda_bottle" />
      <Recipe id="assortedsodas:soda_co2" />
      <Recipe id="assortedsodas:soda_carbonated_water" />
    </div>

    <h2><a name="types">Flavors</a></h2>
    <p>
      Ten flavors on top of the plain carbonated water. Each one heals differently and may have a different effect once drunk.
    </p>
    <table class="table-auto my-4">
      <thead>
        <tr>
          <th class="text-left pr-8 pb-1">
            Soda
          </th>
          <th class="text-left pr-8 pb-1">
            Heals
          </th>
          <th class="text-left pb-1">
            Effect
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="pr-8">
            Carbonated Water
          </td>
          <td class="pr-8">
            1 heart
          </td>
          <td>
            &mdash;
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Slurm
          </td>
          <td class="pr-8">
            1&frac12; hearts
          </td>
          <td>
            Speed II, and Hunger with it
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Root Beer
          </td>
          <td class="pr-8">
            2&frac12; hearts
          </td>
          <td>
            Regeneration
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Mushroom Soda
          </td>
          <td class="pr-8">
            2&frac12; hearts
          </td>
          <td>
            Nausea
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Orange Soda
          </td>
          <td class="pr-8">
            4 hearts
          </td>
          <td>
            &mdash;
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Apple Soda
          </td>
          <td class="pr-8">
            5 hearts
          </td>
          <td>
            &mdash;
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Orange Cream Soda
          </td>
          <td class="pr-8">
            5 hearts
          </td>
          <td>
            Saturation
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Cocoa Soda
          </td>
          <td class="pr-8">
            7 hearts
          </td>
          <td>
            Speed
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Golden Apple Soda
          </td>
          <td class="pr-8">
            10 hearts
          </td>
          <td>
            Absorption
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Diamond Soda
          </td>
          <td class="pr-8">
            10 hearts
          </td>
          <td>
            Resistance
          </td>
        </tr>
        <tr>
          <td class="pr-8">
            Spiked Orange Soda
          </td>
          <td class="pr-8">
            4 hearts of damage
          </td>
          <td>
            Poison
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Spiked orange I don't recommend drinking but maybe try it out.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsodas:soda_slurm" />
      <Recipe id="assortedsodas:soda_apple" />
      <Recipe id="assortedsodas:soda_golden_apple" />
      <Recipe id="assortedsodas:soda_cocoa" />
      <Recipe id="assortedsodas:soda_root_beer" />
      <Recipe id="assortedsodas:soda_diamond" />
      <Recipe id="assortedsodas:soda_mushroom" />
      <Recipe id="assortedsodas:soda_orange" />
      <Recipe id="assortedsodas:soda_cream_orange" />
      <Recipe id="assortedsodas:soda_spiked_orange" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Sodas'
})
</script>

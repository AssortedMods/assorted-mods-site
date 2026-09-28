<template>
  <PartPage
    family="tools"
    part="buckets"
  >
    <p>
      This mod adds Buckets with any default material seen below as well as all of the extra
      materials in <NuxtLink
        class="page-link"
        to="/tools/gear-sets"
      >
        Gear Sets
      </NuxtLink>. These extra Buckets allow
      you to pickup more than one fluid depending on the type of bucket. By default the Wooden and
      Stone buckets only can store one buckets worth and after placement they break.
    </p>
    <img src="\mods\tools\buckets.webp">
    <p>
      Hotter fluids need a sturdier bucket, so what a bucket can pick up is a question of material as
      well. A wooden bucket leaves lava alone.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedbuckets:wood_bucket" />
      <Recipe id="assortedbuckets:stone_bucket" />
      <Recipe id="assortedbuckets:gold_bucket" />
      <Recipe id="assortedbuckets:diamond_bucket" />
      <Recipe id="assortedbuckets:netherite_bucket" />
    </div>
    <p>You are able to upgrade from Diamond Bucket to Netherite Bucket using a Netherite ingot.</p>
    <Recipe id="assortedbuckets:netherite_bucket_smithing" />

    <h2><a name="milk">Milk</a></h2>
    <p>
      Any of these buckets can be used to milk cows. What you can milk depends on the bucket. All of
      them can manage a cow, better ones also manage a sheep, and the best of them a pig as well.
    </p>

    <h2><a name="config">Config</a></h2>
    <p>
      Each material has its own bucket settings under <i>better_buckets.&lt;material&gt;</i> in the
      <i class="text-gray-600">assortedbuckets-common.toml</i> config file on NeoForge, or
      <i class="text-gray-600">assortedbuckets-common.json</i> on Fabric. Values are read once at
      startup, so changes need a restart.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>maxBuckets</i> the maximum number of buckets that this materials bucket can hold.</li>
      <li>
        <i>milkingLevel</i> the milking level that will be set for this materials bucket. Being able
        to milk a cow is a level of 0, Sheep is 1, and Pig is 2.
      </li>
      <li><i>maxPickupTemp</i> the maximum temp of a fluid this materials bucket can pickup.</li>
      <li>
        <i>breaksAfterUse</i> is this material so weak that the bucket will break after placing a
        fluid.
      </li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Buckets'
})
</script>

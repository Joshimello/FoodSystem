<script lang="ts">
  import { Avatar, Layout } from 'stwui'
  
  export let data
  const { popularFood, shops } = data
</script>

<div class="flex justify-between p-4">
  <button>
    <div class="i-material-symbols-menu text-black text-3xl"/>
  </button>
  <div class="flex items-center gap-2">
    <div class="i-material-symbols-location-on-outline text-black text-2xl"/>
    <span class="text-xl">NTHU</span>
  </div>
  <Avatar src="image.png">
    <Avatar.Indicator slot="indicator"/>
  </Avatar>
</div>

<div class="w-full px-4 pb-4">
  <div class="rounded-3xl bg-rose-400 h-40 p-8">
    <div class="h-full flex flex-col justify-between w-max">
      <span class="text-3xl font-serif text-white block">
        Get 15% Off
      </span>
      <button class="bg-white/25 text-white text-2xl px-6 py-2 rounded-full">
        Get Promo
      </button>
    </div>
  </div>
</div>

<div class="w-full px-4 mb-4">
  <div class="flex items-center bg-white rounded-3xl px-8 py-4 gap-4">
    <div class="i-material-symbols-search text-black text-2xl p-2"/>
    <input class="w-full bg-transparent outline-none" placeholder="Search"/>
  </div>
</div>

<div class="w-full px-4 mb-4">
  <span class="text-2xl text-black font-bold p-2">
    Popular Food
  </span>
  <div class="flex pt-4 gap-4">
    {#each popularFood.slice(0, 3) as { name, price, rating, img }}
      <div class="w-full rounded-2xl bg-white flex-col p-4">
        <div class="h-30 w-full rounded-2xl bg-gray-200 mb-4"/>
        <div class="flex">
          <span class="text-2xl font-serif">
            { name }
          </span>
        </div>
        <div class="flex justify-between">
          <span>
            <span class="text-2xl font-bold text-rose-400">
              { price }
            </span>
            <span class="text-xl text-gray-400">
              /meal
            </span>
          </span>
          <span class="flex items-center gap-1">
            <div class="i-material-symbols-star text-rose-400 text-xl"/>
            <span class="text-xl text-gray-400">
              { rating }
            </span>
          </span>
        </div>
      </div>
    {/each}
  </div>
  <div class="grid grid-cols-2 gap-4 mt-4">
    {#each popularFood.slice(3, 7) as { name, price, rating, img }}
      <div class="w-full rounded-2xl bg-white flex p-4 gap-4">
        <div class="h-20 w-40 rounded-2xl bg-gray-200"/>
        <div class="flex flex-col w-full justify-between py-2">
          <span class="text-2xl font-serif">
            { name }
          </span>
          <div class="flex justify-between">
            <span>
              <span class="text-2xl font-bold text-rose-400">
                { price }
              </span>
              <span class="text-xl text-gray-400">
                /meal
              </span>
            </span>
            <span class="flex items-center gap-1">
              <div class="i-material-symbols-star text-rose-400 text-xl"/>
              <span class="text-xl text-gray-400">
                { rating }
              </span>
            </span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="w-full px-4 mb-4">
  <span class="text-2xl text-black font-bold p-2">
    Shops
  </span>
  <div class="flex overflow-auto py-4 gap-4">
    {#each shops as { name, priceRange, rating }}
      <div class="w-60 rounded-2xl bg-white flex-shrink-0 p-4 flex flex-col">
        <div class="h-30 w-full rounded-2xl bg-gray-200 mb-4"/>
        <span class="text-2xl font-serif">
          { name }
        </span>
        <div class="flex justify-between">
          <span class="text-2xl font-bold text-rose-400">
            { priceRange }
          </span>
          <span class="flex items-center gap-1">
            <div class="i-material-symbols-star text-rose-400 text-xl"/>
            <span class="text-xl text-gray-400">
              { rating }
            </span>
          </span>
        </div>
      </div>
    {/each}
  </div>
</div>
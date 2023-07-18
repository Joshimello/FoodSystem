<script lang="ts">
  import { Modal, Portal, Card, Dropdown, Button, Badge } from 'stwui'

  let isModal = false, show
  const openModal = id => {
    isModal = true
    show = id-1
  }

  let isCart = false
  let cart = []
  const addCart = id => {
    isModal = false
    cart = [...cart, foods[id]]
  }
  $: total = cart.reduce((acc, { price }) => acc + price, 0)

  export let data
  const { foods, shops } = data
  let value

  $: searchResults = foods.filter(({ name }) => name.includes(value))

</script>

<Portal>
  {#if isModal}
    <Modal handleClose={()=>isModal = false}>
      <Modal.Content slot="content" class="p-4">
        <Modal.Content.Body slot="body">
          <div class="h-50 rounded-2xl overflow-hidden">
            <img src={ foods[show].img }>
          </div>
          <div class="flex flex-col py-2">
            <span class="flex items-center gap-1">
              <div class="i-material-symbols-star text-rose-400 text-xl"/>
              <span class="text-xl text-gray-400">
                { foods[show].rating }
              </span>
            </span>
            <span class="text-3xl font-serif">
              { foods[show].name }
            </span>
          </div>
          <div class="flex flex-col pb-4">
            <span class="text-xl">
              Description
            </span>
            <span class="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </Modal.Content.Body>
        <Modal.Content.Footer slot="footer" class="bg-rose-400 rounded-md flex flex-col h-max gap-4">
          <div class="flex justify-between">
            <span>
              <span class="text-2xl font-bold text-white">
                ${ foods[show].price }
              </span>
              <span class="text-xl text-white">
                /meal
              </span>
            </span>
            <div class="flex items-center">
              <button class="bg-white/25 p-1 rounded-full">
                <div class="i-material-symbols-remove text-2xl text-white"/>
              </button>
              <span class="text-2xl text-white px-4">
                1
              </span>
              <button class="bg-white/25 p-1 rounded-full">
                <div class="i-material-symbols-add text-2xl text-white"/>
              </button>
            </div>
          </div>
          <button class="bg-white/25 text-white text-xl px-6 py-2 rounded-full flex items-center gap-2 justify-center" on:click={()=>addCart(show)}>
            <span>
              Add to cart
            </span>
            <div class="i-material-symbols-arrow-forward text-2xl text-white"/>            
          </button>
        </Modal.Content.Footer>
      </Modal.Content>
    </Modal>
  {/if}
</Portal>

<div class="flex justify-between p-4">
  <button>
    <div class="i-material-symbols-menu text-black text-3xl"/>
  </button>

  <div class="flex items-center gap-2">
    <div class="i-material-symbols-location-on-outline text-black text-2xl"/>
    <span class="text-xl">NTHU</span>
  </div>

  <Dropdown bind:visible={ isCart }>
    <button slot="trigger" class="relative" on:click={()=>isCart = true}>
      <div class="i-material-symbols-shopping-cart text-black text-3xl"/>
      <div class="absolute -top-2 -right-2 bg-rose-400 rounded-full w-5 h-5 flex justify-center items-center text-white text-xs">
        { cart.length }
      </div>
    </button>
    <Dropdown.Items slot="items">
      {#each cart as { id, name, price, rating, img }}
      <Dropdown.Items.Item label={ name }/>
      {/each}
      <Dropdown.Items.Item label={ 'Checkout $' + total } class="bg-rose-400 text-white" />
    </Dropdown.Items>
  </Dropdown>

    
</div>

<div class="w-full px-4 pb-4">
  <div class="rounded-3xl bg-rose-400 h-40 p-8 flex bg-contain bg-right bg-no-repeat">
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
    <input class="w-full bg-transparent outline-none" placeholder="Search" bind:value/>
  </div>
</div>

{#if value}
<div class="w-full px-4 mb-4 flex flex-col gap-2">
  <span class="text-2xl text-black font-bold p-2">
    Search Results
  </span>
  {#each searchResults as { id, name, price, rating, img }}
    <div class="w-full rounded-2xl bg-white flex p-4 gap-4">
      <div class="h-20 w-60 rounded-2xl bg-gray-200 overflow-hidden">
        <img class="object-cover w-full h-full" src="{ img }">
      </div>
      <div class="flex flex-col w-full justify-between py-2">
        <a class="text-2xl font-serif cursor-pointer" on:click={()=>openModal(id)}>
          { name }
        </a>
        <div class="flex justify-between">
          <span>
            <span class="text-2xl font-bold text-rose-400">
              ${ price }
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
{/if}

<div class="w-full px-4 mb-4">
  <span class="text-2xl text-black font-bold p-2">
    Popular Food
  </span>
  <div class="flex pt-4 gap-4">
    {#each foods.slice(0, 3) as { id, name, price, rating, img }}
      <div class="w-full rounded-2xl bg-white flex-col p-4">
        <div class="h-30 w-full rounded-2xl bg-gray-200 mb-4 overflow-hidden">
          <img class="object-cover w-full h-full" src="{ img }">
        </div>
        <div class="flex">
          <a class="text-2xl font-serif cursor-pointer" on:click={()=>openModal(id)}>
            { name }
          </a>
        </div>
        <div class="flex justify-between">
          <span>
            <span class="text-2xl font-bold text-rose-400">
              ${ price }
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
    {#each foods.slice(3, 7) as { id, name, price, rating, img }}
      <div class="w-full rounded-2xl bg-white flex p-4 gap-4">
        <div class="h-30 w-60 rounded-2xl bg-gray-200 overflow-hidden">
          <img class="object-cover w-full h-full" src="{ img }">
        </div>
        <div class="flex flex-col w-full justify-between py-2">
          <a class="text-2xl font-serif cursor-pointer" on:click={()=>openModal(id)}>
            { name }
          </a>
          <div class="flex justify-between">
            <span>
              <span class="text-2xl font-bold text-rose-400">
                ${ price }
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
    {#each shops as { name, priceRange, rating, img }}
      <div class="w-60 rounded-2xl bg-white flex-shrink-0 p-4 flex flex-col">
        <div class="h-30 w-full rounded-2xl bg-gray-200 mb-4 overflow-hidden">
          <img class="object-cover w-full h-full" src="{ img }">
        </div>
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
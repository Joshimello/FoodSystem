<script>
  import { Canvas } from '@threlte/core'
  import Scene from '$lib/scene/Scene.svelte'
</script>

<div class="absolute w-full h-100vh flex items-end justify-center z-1">
  <a class="outline outline-2 outline-black rounded-xl py-2 px-12 mb-8 hover:bg-gray-200 transition duration-100 cursor-pointer" href="/menu">
    <span class="text-4xl font-serif text-black">Order Now</span>
  </a>
</div>

<div class="absolute w-full h-100vh">
  <Canvas>
    <Scene/>
  </Canvas>
</div>

<div class="h-100vh w-full flex flex-col items-center justify-center gap-50">
  <div class="w-120 flex justify-start">
    <span class="text-6xl font-serif">Can't wait</span>
  </div>
  <div class="w-120 flex justify-end">
    <span class="text-6xl font-serif">for Food?</span>
  </div>
</div>
<script>
  import { Canvas } from '@threlte/core'
  import Scene from '$lib/scene/Scene.svelte'
</script>

<div class="h-100vh w-full flex items-center justify-center">
  <div class="absolute w-full h-full">
    <Canvas>
      <Scene/>
    </Canvas>
  </div>
  <span class="text-8xl pb-50">Food</span>
</div>
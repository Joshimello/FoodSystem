<script>
  import { T, Canvas } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'

  import Ramen from './Pusheen_vs_noodle.svelte'

  let actions
  $: if(actions){
    $actions['Animation']?.play()
  }

</script>

<T.PerspectiveCamera makeDefault position={[10, 4, 0]}>
  <OrbitControls enableDamping autoRotate autoRotateSpeed={0.25} />
</T.PerspectiveCamera>

<Ramen position={[4.8, -1, 0]} bind:actions={actions} />
<script>
  import 'virtual:uno.css'
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :global(body){
    margin: 0;
    padding: 0;
    @apply bg-gray-100;
  }
</style>

<slot/>
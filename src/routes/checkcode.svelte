<script context="module">
  export function check() {
    console.log("storeArr value is",storeArr)
    storeArr.update(val=>["new Value"])
  }
</script>

<script>
  import { storeArr } from "./stores.js";
</script>

<svelte:head>
  <title>Check code</title>
</svelte:head>
$storeArr
<button on:click={check}>Change arr</button>

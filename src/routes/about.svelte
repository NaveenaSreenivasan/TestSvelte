<!-- <script>
// import {arrcheck} from "./index.svelte";
 import {ibill} from "./index.svelte";
import {arrcheck} from "./stores.js";

	var duparr = ['aa','bb','cc']
// 	arrcheck.forEach(function (value,index) {
// 		arrcheck[index].set(duparr[index]);

// });

	// arrcheck.splice(1,1)
	// arrcheck = arrcheck;
	//arrcheck[0] = "abcd";


function changearr(){

	ibill.splice(0,1)
	ibill= ibill;
}

</script> -->


<script>
import { col } from './stores.js';
import {arrcheck} from "./stores.js";

//const push = () => col.update(val => [...val, Date.now()]);
function push(){
	col.update(val => [...val, Date.now()]);
}
function changearr(){

	ibill.splice(0,1)
	ibill= ibill;
}
</script>
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>

 {#each $arrcheck as val,i}
<h3> {val} </h3>
{/each}
<h3> {$arrcheck.length} </h3>


<!-- {#each ibill as val,i}
<h3> {val} </h3>
{/each}
<h3> {ibill.length} </h3> -->

<button on:click={changearr}> Change arr </button> 

<button on:click={push}>Push</button>
<ol>
  {#each $col as item}
    <li>{item}</li>
  {/each}
</ol>
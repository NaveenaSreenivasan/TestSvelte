<style>
	/* h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	} */
</style>

<script>
var x = 1;

</script>

<script context="module">
 import { get } from 'svelte/store';
 import { count } from './stores.js';
export function changearr(){
	// arrcheck.splice(1,1)
	// arrcheck = arrcheck;
	arrcheck[0] = "abcd";
}
   
console.log(x)
const value = get(count);
console.log("value is ",value);

export  var ibill = ["1","2","3"];
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>




<!-- <h1>Great success!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure> -->

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p> -->

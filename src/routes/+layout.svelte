<script>
  import Header from '$lib/components/header/Header.svelte';
  import 'uno.css';
</script>

<Header />

<div class="container m-auto">
  <!-- text-orange-400 -->
  <slot />
</div>


<div class="splash-container">
  <div class="splash">
      <!-- <h1 class="splash-head">Big Bold Text</h1>
      <p class="splash-subhead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
          <a href="http://purecss.io" class="pure-button pure-button-primary">Get Started</a>
      </p> -->
  </div>
</div>
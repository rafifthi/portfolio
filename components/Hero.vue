<template>
  <div class="container my-24 xl:mt-32 py-18">
    <div class="grid bg-hero bg-no-repeat bg-contain bg-center gap-4">
      <div class="grid">
        <div class="footnote">BASED IN /// <br />Jakarta, ID</div>
        <h1 class="justify-self-end">HELLO I'M</h1>
      </div>
      <div class="grid sm:flex lg:flex-wrap gap-4">
        <h1>RAFIF, A</h1>
        <vue-typed-js :back-speed="100" :type-speed="100" :loop="true" :strings="['VISUAL', 'PRODUCT', 'GRAPHIC']">
          <h1 class="typing visual mt-5 ml-4"></h1>
        </vue-typed-js>
      </div>
      <h1 class="justify-self-end">DESIGNER</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style></style>

<template>
  <div class="flex justify-between py-8 mt-12 lg:mt-16 container">
    <div class="text-sm tracking-wide self-center">Copyright © 2022 Rafif Fathi. <br />All rights reserved.</div>
    <div class="flex flex-col space-y-3">
      <a
        v-for="item in navigations"
        :key="item.name"
        :href="item.href"
        target="_blank"
        class="text-md font-semibold hover:text-primary"
        >{{ item.name }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      navigations: [
        { name: 'Email', href: 'mailto:rafifthii@gmail.com' },
        { name: 'Resume', href: 'https://drive.google.com/file/d/1fZ67rs1IVAqag06F_8_y92WM4DKpahex/view?usp=sharing' },
        { name: 'dribbble', href: 'https://dribbble.com/rafifthi' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rafifthi/' },
      ],
    }
  },
}
</script>

<style></style>

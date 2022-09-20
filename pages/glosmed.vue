<template>
  <div class="">
    <!-- Cover -->
    <div
      class="grid bg-gradient-to-t from-sky-50 to-sky-200 gap-12 lg:grid-cols-2 pt-36"
    >
      <div class="px-6 lg:px-12 pt-24 pb-12">
        <h2 class="lg:mb-64">
          Glosmed distributes eye surgery equipment all over Indonesia.
        </h2>
        <img class="pt-24 pr-20 block lg:hidden mt-12" src="../assets/img/glosmed_cover.png" alt="" />
        <ul>
          <li>Timeline <span class="font-semibold">April - June 2022</span></li>
          <li>Team <span class="font-semibold">Myself</span></li>
          <li>
            Role
            <span class="font-semibold">Fullstack Developer</span>
          </li>
        </ul>
      </div>
      <img class="pt-24 pr-20 hidden lg:block" src="../assets/img/glosmed_cover.png" alt="" />
    </div>
    <div class="container">
      <!-- Project Vision -->
      <div class="grid justify-items-center mt-24 py-24">
        <div class="max-w-xl">
          <h3 class="text-cyan-500 mb-4">Project Vision</h3>
          <div class="body-large">
            Glosmed is the only distributor of Bausch and Lomb (Germany-based
            eye surgery equipment company) in Indonesia. To carry out its
            duties, Glosmed needs a variety of media instruments to reach users
            across the country, including website. They themselves actually have
            a website that was already running. However, this website has a poor
            design and often confuses users. Therefore, this project is focused
            on revamping the looks and feels of the website to be more clean and
            visually structured.
          </div>
        </div>
      </div>
      <!-- Project Timeline -->
      <img src="../assets/img/glosmed_timeline.png" alt="Project Timeline" />
      <!-- System Usecase -->
      <div class="grid justify-items-center mt-24 p-12">
        <div class="max-w-3xl">
          <h4 class="text-cyan-500">System Usecase</h4>
          <div class="desc mb-4">
            Used to list the needs the end users need for the system.
          </div>
          <img
            class="border-2 rounded-2xl"
            src="../assets/img/glosmed_usecase.png"
            alt="User Journey"
          />
        </div>
      </div>
      <!-- Technology Used -->
      <div class="grid mt-24 py-12 px-6 lg:px-12 bg-slate-50 rounded-2xl">
        <h4 class="text-cyan-500 mb-4">Technology Used</h4>
        <div class="body-large mb-4">
          The project polarized on 2 main points, which were the use of NuxtJS
          as a frontend framework and Strapi as a CMS service. The rest of the
          technology those are used in the system aims to support and link up
          NuxtJS and Strapi.
        </div>
        <img src="../assets/img/glosmed_tech.png" alt="" />
      </div>
      <!-- Style Guide -->
      <div class="grid justify-items-center mt-24 py-12">
        <div class="max-w-2xl">
          <h3 class="text-cyan-500 mb-4">Style Guide</h3>
          <div class="body-large">
            The colors used in the project are from the branding of Glosmed
            itself combines with the Bausch and Lomb's color. The use of this
            color reflects the position of Glosmed as a partner of Bausch+Lomb.
            For the typeface choices I use typeface that looks simple,
            accessible, and familiar for most of the users which is Poppins.
          </div>
          <img
            class="mt-16"
            src="../assets/img/glosmed_style.png"
            alt="Style Guide"
          />
        </div>
      </div>
      <!-- Final Design -->
      <div class="grid justify-items-center mt-24">
        <h3 class="text-cyan-500 mb-5">Final Design</h3>
        <div class="desc">
          The content that has been shown at the final design does not represent
          the final product.
        </div>
        <div class="grid gap-12 mt-12">
          <GlosmedDesktop />
        </div>
      </div>
      <!-- Takeaways -->
      <div class="grid justify-items-center mt-24 py-12">
        <div class="max-w-2xl">
          <h3 class="text-cyan-500 mb-4 text-center">Takeaways</h3>
          <div class="body-large text-center">
            Glosmed is the second web project I've worked on. What distinguishes
            it from the previous project is that in this project I work alone as
            a fullstack developer. Therefore I learned many things, not only in
            terms of UI design. But also in terms of system development,
            especially on the frontend side.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>

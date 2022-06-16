<template>
  <div class="">
    <!-- Cover -->
    <div
      class="grid bg-gradient-to-r from-rose-100 to-teal-100 lg:grid-cols-2 pt-48 xl:pt-52"
    >
      <div class="px-6 lg:px-12">
        <h2 class="mb-72">
          Brokoli elevates your music discovery experience to a whole new level.
        </h2>
        <ul>
          <li>Timeline <span class="font-semibold">12 Weeks</span></li>
          <li>Team <span class="font-semibold">Myself</span></li>
          <li>
            Role
            <span class="font-semibold"
              >Product design, UX design, User research</span
            >
          </li>
        </ul>
      </div>
      <img class="h-[800px]" src="../assets/img/brokoli-mockup-1.png" alt="" />
    </div>
    <div class="container">
      <!-- Project Vision -->
      <div class="grid justify-items-center mt-24 py-24">
        <div class="max-w-xl">
          <h3 class="text-green-500 mb-4">Project Vision</h3>
          <div class="body-large">
            Spotify has a recommendation feature that focuses on songs
            discovery. However, this feature doesn't have an enough
            customization features yet. By utilizing the songs audio features
            provided by Spotify Web API, this project is focused on creating
            song recommendation app based on audio similarity and songs novelty.
            Where the user can adjust the audio features filters as much as they
            like and get the exact recommendations based on their specific
            preferences.
          </div>
        </div>
      </div>
      <!-- Project Timeline -->
      <img src="../assets/img/brokoli_timeline.png" alt="Project Timeline" />
      <!-- Kickoff -->
      <div class="grid justify-items-center p-12">
        <div class="max-w-xl mb-16">
          <h3 class="text-green-500 mb-4">Kickoff</h3>
          <div class="body-large">
            In Brokoli's design process, we opted for a goal-directed design
            approach that helped us move along through the timeline smoothly.
            Qualitative research methods proved to be the most effective during
            the design process, most notably questionnaire distribution and
            usability testing sessions. Whenever we encounter an issue that we
            are trying to solve, it's smart to build a good foundation. In
            Brokoli's case, we did this by asking some generic but useful
            internal questions.
          </div>
        </div>
        <div class="grid grid-cols-3 gap-12 xl:px-12">
          <div class="flex items-center">
            <div class="w-1 h-12 bg-green-500 mr-3"></div>
            <div class="body-large">"Who is our primary audience?"</div>
          </div>
          <div class="flex items-center">
            <div class="w-1 h-12 bg-green-500 mr-3"></div>
            <div class="body-large">
              "What are the challenges we will face moving forward?"
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-1 h-12 bg-green-500 mr-3"></div>
            <div class="body-large">
              “What makes it different from existing products?“
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-1 h-12 bg-green-500 mr-3"></div>
            <div class="body-large">
              "Is there specific knowledge field to know?"
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-1 h-12 bg-green-500 mr-3"></div>
            <div class="body-large">
              “What do our users need the most in a product like this?”
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-1 h-12 bg-green-500 mr-3"></div>
            <div class="body-large">
              “What do our users need the most in a product like this?”
            </div>
          </div>
        </div>
      </div>
      <!-- Research Insights -->
      <div class="grid justify-items-center">
        <div class="grid mt-24 p-12 bg-slate-50 rounded-2xl max-w-4xl">
          <h4 class="text-green-500 mb-2">1/7 Research Insight</h4>
          <div class="desc mb-8 max-w-xl">
            Surveys and interviews with 10 participants who currently are active
            users of Spotify.
          </div>
          <div class="grid grid-cols-3 gap-8">
            <div class="p-4 border-2 rounded-xl bg-white">
              <div class="text-dark text-2xl font-semibold mb-2">01</div>
              <div class="text-sm">
                Most users feel that Spotify's autoplay feature plays songs that
                tend to be repetitive.
              </div>
            </div>
            <div class="p-4 border-2 rounded-2xl bg-white">
              <div class="text-dark text-2xl font-semibold mb-2">02</div>
              <div class="text-sm">
                Lack of customization features in Spotify song search system.
              </div>
            </div>
            <div class="p-4 border-2 rounded-2xl bg-white">
              <div class="text-dark text-2xl font-semibold mb-2">01</div>
              <div class="text-sm">
                The Spotify discovery feature has a fairly broad scope of
                classification.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Preliminary Ideation -->
      <div class="grid gap-12 grid-cols-2 items-center mt-24 p-12">
        <img src="../assets/img/brokoli_ideation.png" alt="" />
        <div class="">
          <h4 class="mb-4 text-green-500">2/7 Preliminary Ideation</h4>
          <div class="body-large">
            Affinity mapping used to identify not only the general scope of
            Brokoli, but to decide which direction the product want to proceed.
            This was a form of brainstorming during the kickoff period that
            proved to be very helpful in setting up the foundation for the rest
            of our process.
          </div>
        </div>
      </div>
      <!-- Meet The Users -->
      <div class="grid justify-items-center mt-24 p-12">
        <div class="max-w-3xl">
          <h4 class="text-green-500">3/7 Meet The Users</h4>
          <div class="desc mb-4">
            Summary personas captured primary, secondary, excluded perspectives
            from research insights.
          </div>
          <PersonaCarousel />
        </div>

        <img src="" alt="" />
      </div>
      <!-- Journey Map -->
      <div class="grid justify-items-center mt-24 p-12">
        <div class="max-w-3xl">
          <h4 class="text-green-500">4/7 Journey Map</h4>
          <div class="desc mb-4">
            Five steps and mood mappings imagined persona use of concept.
          </div>
          <img
            class="rounded-2xl"
            src="../assets/img/brokoli_journey.png"
            alt="User Journey"
          />
        </div>
      </div>
      <!-- System Architecture -->
      <div class="grid justify-items-center mt-24 p-12">
        <div class="max-w-3xl">
          <h4 class="text-green-500">5/7 System Architecture</h4>
          <div class="desc mb-4">
            Used to facilitate decisions for dynamic task flow interactions.
          </div>
          <img
            class="border-2 rounded-2xl"
            src="../assets/img/brokoli_flow.png"
            alt="User Journey"
          />
        </div>
      </div>
      <!-- Lo-Fi Ideation -->
      <div class="grid gap-12 grid-cols-2 mt-24 p-12">
        <div class="">
          <h4 class="mb-4 text-green-500">6/7 Lo-Fi Ideation</h4>
          <div class="body-large">
            Low fidelity sketches are used to put some rough ideas on top of
            papers. This process helped me to spark ideas and translate those
            rough ideas into a vivid product skeletons.
          </div>
        </div>
        <LofiCarousel />
      </div>
      <!-- Preliminary Wireframes -->
      <div
        class="grid items-center gap-20 bg-slate-50 rounded-2xl grid-cols-2 mt-24 p-12"
      >
        <img src="../assets/img/brokoli-wireframe.png" alt="" />
        <div class="">
          <h4 class="mb-4 text-green-500">7/8 Preliminary Wireframes</h4>
          <div class="body-large">
            Creating a higher fidelity but still fairly preliminary version of
            our wireframes, we were able to workout some of the technical issues
            that would not be viable in Brokoli. It was important for us to
            start big and scale down so that we could work around the features
            that we really wanted to have, rather than working upwards and
            missing something that would've been really cool to see as a user.
          </div>
        </div>
      </div>
      <!-- Final Design -->
      <div class="grid justify-items-center mt-24">
        <h3 class="text-green-500">Final Design</h3>
        <div class="grid lg:grid-cols-3 mt-16 gap-8">
          <img src="../assets/img/brokoli-mockup-2.png" alt="" />
          <img src="../assets/img/brokoli-mockup-3.png" alt="" />
          <img src="../assets/img/brokoli-mockup-4.png" alt="" />
          <img src="../assets/img/brokoli-mockup-5.png" alt="" />
          <img src="../assets/img/brokoli-mockup-6.png" alt="" />
        </div>
      </div>
      <!-- Style Guide -->
      <div class="grid justify-items-center mt-24 py-12">
        <div class="max-w-2xl">
          <h3 class="text-green-500 mb-4">Style Guide</h3>
          <div class="body-large">
            For the color tones of Brokoli, I decided to match it with Spotify
            identic green. It aims to provide familiarity to the Spotify users.
            We utilizated color sparingly throughout the app to convey which
            elements were interactable and should be paid attention to within
            the product. We also opted to use the typefaces Neue Montreal within
            the interface as they played the pivotal role of making the clean
            and trendy environment we had built in Brokoli's interface.
          </div>
          <img src="../assets/img/brokoli_style.png" alt="" />
        </div>
      </div>
      <!-- Takeaways -->
      <div class="grid justify-items-center mt-24 py-12">
        <div class="max-w-2xl">
          <h3 class="text-green-500 mb-4 text-center">Takeaways</h3>
          <div class="body-large text-center">
            Brokoli as a concept is something that I feel music listener would
            greatly benefit from. Brokoli works as a Spotify companion and
            brings additional value to the users that they couldn't find in the
            Spotify itself. The primary difficulty I had while designing this
            product was to make users to feel engaged and convinced to install
            the product eventhough this product just works as a companion app of
            Spotify. I feel that although there may be a better solution out
            there, I designed an experience that works well for most users.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#0133FA',
        brokoli: '#1DB954',
      },
      screens: {
        '2xl': '1340px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        brokolii: "url('assets/img/brokoli_thumbnail.png')",
        glosmed: "url('assets/img/glosmed_thumbnail.png')",
        kbmti: "url('assets/img/kbmti_thumbnail.png')",
        hero: "url('assets/img/blue_spot.png')",
        profile: "url('assets/img/rafif_film.png')",
        genshin: "url('assets/img/genshin.png')",
        futbol: "url('https://i.guim.co.uk/img/media/689a520bd4464fe370ff50a51a1418510ee3f5fa/0_322_3350_2011/master/3350.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=64d3cddb784edd2800a81306b5f5b88d')",
        kpop: "url('assets/img/kpop.png')",
        madeon: "url('assets/img/madeon.png')",
      },
    },
  },
  plugins: [],
}

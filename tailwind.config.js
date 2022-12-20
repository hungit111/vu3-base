/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tetiary: 'var(--color-text-tetiary)',
          disable: 'var(--color-text-disable)',
          error: 'var(--color-text-error)',
        },
      },
      backgroundColor: {
        skin: {
          primary: 'var(--color-background-primary)',
          secondary: 'var(--color-background-secondary)',
          tetiary: 'var(--color-background-tetiary)',
          disable: 'var(--color-background-disable)',
          error: 'var(--color-background-error)',
        },
      },
      borderColor: {
        skin: {
          primary: 'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)',
          tetiary: 'var(--color-border-tetiary)',
          disable: 'var(--color-border-disable)',
          error: 'var(--color-border-error)',
        },
      },
      outlineColor: {
        skin: {
          primary: 'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)',
          tetiary: 'var(--color-border-tetiary)',
          disable: 'var(--color-border-disable)',
          error: 'var(--color-border-error)',
        },
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-background-primary)',
        },
      },
    },
    //使用ウェイト
    fontWeight: {
      regular: 400,
      bold: 700,
      black: 900,
      400: 400,
      700: 700,
      900: 900,
    },
    lineHeight: {
      100: '100%',
      125: '120%',
      150: '150%',
      180: '180%',
      200: '200%',
    },
    fontSize: {
      12: '12px',
      14: '12px',
      16: '16px',
      18: '18px',
      21: '21px',
      25: '25px',
      28: '28px',
    },
    screens: {
      sp: { max: '1024px', min: '0px' },
      pc: { min: '1025px', max: '3000px' },
    },
  },
  fontFamily: {
    noto: ['Noto Sans CJK JP', 'Roboto'],
  },
  plugins: [],
}

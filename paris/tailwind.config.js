module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Open Sans', 'Helvetica', 'Roboto'],
      mono: ['monospace', 'Monaco']
    },
    fontSize: {
      tiny: '0.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '15px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      24: '24rem'
    },
    colors: {
      transparent: 'transparent',
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)'
      },
      neutral: {
        100: 'var(--color-neutral-100)',
        200: 'var(--color-neutral-200)',
        300: 'var(--color-neutral-300)',
        400: 'var(--color-neutral-400)',
        500: 'var(--color-neutral-500)',
        600: 'var(--color-neutral-600)',
      },
      success: {
        100: 'var(--color-success-100)',
        200: '#367B48',
        300: '#276738',
      },
      error: {
        100: 'var(--color-error-100)',
        200: '#B54248',
        300: '#95353A'
      },
      warning: {
        100: 'var(--color-warning-100)',
        200: '#CAB23F',
        300: '#B49E35'
      },
			tag: {
				1: 'var(--color-tag-1)',
				2: 'var(--color-tag-2)',
				3: 'var(--color-tag-3)',
				4: 'var(--color-tag-4)',
				5: 'var(--color-tag-5)',
				6: 'var(--color-tag-6)',
				7: 'var(--color-tag-7)',
				8: 'var(--color-tag-8)',
				9: 'var(--color-tag-9)',
				10: 'var(--color-tag-10)',
				11: 'var(--color-tag-11)',
				12: 'var(--color-tag-12)',
				13: 'var(--color-tag-13)',
				14: 'var(--color-tag-14)',
				15: 'var(--color-tag-15)',
				16: 'var(--color-tag-16)',
				17: 'var(--color-tag-17)',
				18: 'var(--color-tag-18)'
			}
    },
    textColor: {
      'default': '#000',
      'inverted': '#fff'
    },
		flex: {
			'1': '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
			'3': '3 1 0%'
		}
  },
  variants: {
    extend: {
      borderRadius: {
        5: '5px'
      }
    },
  },
  plugins: [],
}

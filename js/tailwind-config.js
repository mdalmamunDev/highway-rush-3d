tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo 2', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
      },
      animation: {
        'gradient-flow': 'gradientFlow 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'combo': 'comboAnim 1s ease',
        'power-active': 'powerActive 0.5s ease',
      },
      keyframes: {
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        comboAnim: {
          '0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0.5)' },
          '50%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1.3)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(1) translateY(-70px)' },
        },
        powerActive: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
        },
      }
    }
  }
}
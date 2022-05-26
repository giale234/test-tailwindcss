module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        '20px': '20px',
        '10px': '10px',
        '15px': '15px'

      },
      padding: {
        '5px': '5px',
        '10px': '10px',
        '20px': '20px',
        '8px': '8px',
        '15px': '15px'
      },
      width: {
        '20': 'calc(100% - 20px)',
        '30': '30px',
        '40%': '40%',
        '60%': '60%'
      },
      height: {
        '30': '30px'
      },
      boxShadow: {
        'xl': '5px 5px 7px 2px #00000030'
      }
    },
    fontSize: {
      'sm': '16px',
      'lg': '20px'
    },
    fontWeight: {
      'medium': 600
    }, 
    borderWidth: {
      '1': '1px',
      '2':'2px'
    }, 
    colors: {
      'red': 'red',
      'lightblack':'#0000007a',
      'exlightblack': '#00000061',
      'lightblue': '#0072ff1c',
      'semilightblue': '#3e79c1',
      'hoverColor': '#0072ff73'
    },
    minHeight: {
      '1000px': '1000px',
      '40px': '40px'
    }
  },
  plugins: [],
}

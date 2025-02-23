export const themes = {
    light: {
      background: 'white',
      text: 'black',
      border: '#eaeaea',
      primary: '#004A99',
      secondary: '#414757',
      error: '#f13a59',
      disabledText: '#004A99',
      white: '#ffffff',
      red: '#ff3130',
      black: '#000000',
      newBackground: '#F5F7FA',
      newPrimary: '#004A99',
      newSecondary: '#005EC112',
      newBorder: '#00000014',
      placeholder: '#7E8C9E',
      textColor: '#1A2633',
    },
    dark: {
      background: '#242323',
      text: '#ffffff',
      border: '#333333',
      primary: '#3A7DAF',
      secondary: '#626D77',
      error: '#f8877f',
    },
  };
  export type ColorType = keyof typeof themes;
  
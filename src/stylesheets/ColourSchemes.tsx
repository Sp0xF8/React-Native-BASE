
//create a colour theme using rgba

const light_theme = {
    background: '#A3A3A3',
    middleground: '#D6D6D6',
    foreground: '#F5F5F5',
    text: '#292929',
    accent: '#3DC1A2',
    accent_secondary: '#37DCDC',
    success: '#219831',
    error: '#700101'
}

const dark_theme = {
    background: '#1F1F1F',
    middleground: '#2C2C2C',
    foreground: '#393939',
    text: '#EBEBEB',
    accent: '#F5C400',
    accent_secondary: '#1997B3',
    success: '#0FA92E',
    error: '#700101'
}

export const ColourSchemes = {
    light: light_theme,
    dark: dark_theme
}


//export a type with all labels for colours
export type TColourScheme = keyof typeof dark_theme;
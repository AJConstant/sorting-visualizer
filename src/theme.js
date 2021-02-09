import { createMuiTheme, createPalette } from '@material-ui/core/styles';

/**
 * Creation and use of themes.
 * Planned to maintain theme in app state and allow changing of themes.
 */

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

export const lightTheme = createMuiTheme({
    palette: {
        type: 'light'
    }
});
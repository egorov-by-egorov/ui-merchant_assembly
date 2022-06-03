import { createTheme } from '@material-ui/core';

const theme = createTheme( {
    palette: {
        primary: {
            light: '#ffdb66',
            main: '#ffc300',
            dark: '#f0b700',
            contrastText: '#fff'
        },
        secondary: {
            light: '#a3a1aa',
            main: '#84828E',
            dark: '#777580',
            contrastText: '#fff'
        },
        error: {
            light: '#e5665a',
            main: '#df4031',
            dark: '#c93a2c',
            contrastText: '#fff'
        },
        warning: {
            light: '#ffc370',
            main: '#ffaf41',
            dark: '#f0a63e'
        },
        info: {
            light: '#4cb5f4',
            main: '#109cf1',
            dark: '#0e84cd'
        },
        success: {
            light: '#7ac758',
            main: '#4eb421',
            dark: '#42991c'
        },
        text: {
            primary: '#282340',
            secondary: '#84828E',
            disabled: '#D7DAE4',
            hint: '#b8c0d4'
        },
        action: {
            active: '#b8c0d4',
            hover: '#ffffff',
            selected: '#ffffff',
            disabled: '#c2cfe0',
            disabledBackground: '#f3f5f9'
        },
        background: {
            default: '#f7f7f8',
            paper: '#ffffff'
        },
        divider: '#D7DAE4',
        custom: {
            paper: '#EDEDEF',
            primaryAlt: '#4d475c',
            secondaryAlt: '#a7a3b2'
        }
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightSemiBold: 600,
        fontWeightBold: 700,
        h1: {
            fontSize: '4rem',
            fontWeight: 300
        },
        h2: {
            fontSize: '3.250rem',
            fontWeight: 300
        },
        h3: {
            fontSize: '2.750rem',
            fontWeight: 400
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 500
        },
        h5: {
            fontSize: '1.500rem',
            fontWeight: 400
        },
        h6: {
            fontSize: '1.250rem',
            fontWeight: 500
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.500
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.450
        },
        button: {
            fontSize: '1rem',
            fontWeight: 600,
            textTransform: 'uppercase'
        },
        caption: {
            fontSize: '0.770rem',
            fontWeight: 400,
            lineHeight: 1.450
        },
        subtitle1: {
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.500
        },
        subtitle2: {
            fontSize: '0.750rem',
            fontWeight: 500,
            lineHeight: 1.500
        },
        overline: {
            fontSize: '0.625rem',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1.750
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1100,
            lg: 1440,
            xl: 1680
        }
    }
} );

theme.overrides = {
    MuiDrawer: {
        paperAnchorDockedLeft: {
            borderRight: 'none'
        },
        paper: {
            backgroundColor: '#363740',
            '& .MuiListItem-button': {
                color: theme.palette.secondary.light,
                paddingTop: 23,
                paddingBottom: 22,
                '& .MuiListItemIcon-root': {
                    color: theme.palette.secondary.light
                },
                '&:hover': {
                    backgroundColor: '#474853',
                    color: '#FFC300',
                    borderLeft: '3px solid #FFC300',
                    '& .MuiListItemIcon-root': {
                        color: '#FFC300'
                    }
                }
            }
        }
    },
    MuiBackdrop: {
        root: {
            backgroundColor: 'rgba(0,0,0, 0.2)'
        }
    },
    MuiFormHelperText: {
        contained: {
            marginLeft: 0,
            marginRight: 0
        }
    },
    MuiButton: {
        root: {
            minWidth: 120,
            height: '48px',
            textTransform: 'inherit',
            whiteSpace: 'nowrap',
            marginBottom: '16px'
        }
    },
    MuiIconButton: {
        root: {
            color: 'inherit'
        }
    },
    MuiPaper: {
        elevation1: {
            boxShadow:
                '6px 0 18px rgba(0,0,0, .06), 1px 2px 4px -2px rgba(0,0,0, .06)'
        }
    },
    MuiTableHead: {
        root: {}
    },
    MuiTableRow: {
        root: {
            '&:selected': {
                backgroundColor: '#f2f9ff'
            },
            '&:hover': {
                backgroundColor: 'inherit',
                boxShadow: '0 0 12px rgba(0,0,0, .1)'
            },
            '&.Mui-selected': {
                backgroundColor: '#f2f9ff',
                '&:hover': {
                    backgroundColor: '#f2f9ff'
                }
            }
        },
        head: {
            '&:hover': {
                boxShadow: 'none'
            }
        }
    },
    MuiTableCell: {
        root: {
            padding: 10,
            fontSize: 13,
            borderBottom: '1px solid #e0e7ef',
            '& a': {
                color: '#109cf1',
                display: 'block',
                textDecoration: 'none',
                '&:hover': {
                    color: '#0e84cd'
                }
            }
        },
        stickyHeader: {
            backgroundColor: '#fff'
        },
        head: {
            whiteSpace: 'nowrap',
            fontWeight: 600,
            color: '#90a0b7'
        }
    },
    MuiOutlinedInput: {
        root: {
            textAlign: 'left'
        }
    },
    MuiSelect: {
        icon: {
            color: '#334D6E'
        },
        select: {
            '&:focus': {
                backgroundColor: 'none'
            }
        },
        selectMenu: {
            minHeight: 'auto'
        }
    },
    MuiCheckbox: {
        root: {
            color: '#c2cfe0'
        }
    },
    MuiFormControl: {
        marginNormal: {
            marginTop: 0,
            marginBottom: 24
        }
    },
    MuiTooltip: {
        tooltip: {
            padding: 8
        }
    },
    MuiInputBase: {
        focused: {
            borderColor: 'transparent'
        }
    },
    MuiMobileStepper: {
        root: {
            flexGrow: 1,
            background: 'none',
            padding: 0
        },
        progress: {
            width: '100%'
        }
    }
};

export default theme;

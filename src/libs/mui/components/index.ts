import type { Components as MuiComponents } from '@mui/material';
import {
	buttonBaseClasses,
	menuItemClasses,
	paginationItemClasses,
} from '@mui/material';

import { MuiAppBar } from './app-bar';
import { MuiButton } from './button';
import { MuiCssBaseline } from './css-baseline';
import { MuiTableHead } from './table-head';
import { MuiTextField } from './text-field';

export const Components: MuiComponents = {
	MuiCssBaseline: MuiCssBaseline,
	MuiTextField: MuiTextField,
	MuiButton: MuiButton,
	// MuiPaper: MuiPaper,
	MuiList: {
		styleOverrides: {
			root: {
				[`&:has(.${menuItemClasses.root} > img)`]: {
					display: 'grid',
					gridTemplateColumns: 'repeat(5, 1fr)',
				},
			},
		},
	},
	MuiTableHead: MuiTableHead,
	MuiAppBar: MuiAppBar,
	MuiPaginationItem: {
		styleOverrides: {
			root: ({ theme, ownerState }) => ({
				// backgroundColor: Color.NEUTRAL_12,

				...(ownerState.selected && {
					[`&.${paginationItemClasses.selected}`]: {
						// color: theme.palette.background.default,
					},
				}),
			}),

			ellipsis: () => ({
				backgroundColor: 'transparent',
			}),

			previousNext: ({ theme, ownerState }) => ({
				backgroundColor: 'transparent',

				...(ownerState.disabled &&
					{
						// color: Color.NEUTRAL_10,
					}),

				...(!ownerState.disabled &&
					{
						// color: theme.palette.primary.main,
					}),
			}),
		},
	},
	MuiFormControlLabel: {
		styleOverrides: {
			root: () => ({
				padding: 0,
				margin: 0,
				gap: '0.25rem',

				[`& .${buttonBaseClasses.root}`]: {
					padding: 0,
				},
			}),
		},
	},
	MuiFormControl: {
		styleOverrides: {
			root: {
				gap: '0.25rem',
			},
		},
	},
	MuiFormLabel: {
		styleOverrides: {
			root: {
				paddingLeft: '1rem',
			},
		},
	},

	MuiFormHelperText: {
		styleOverrides: {
			root: {
				display: 'flex',
				justifyContent: 'flex-end',
			},
		},
	},
	MuiSelect: {
		styleOverrides: {
			root: {
				border: 'none',
				width: 'fit-content',
			},
			icon: {
				marginRight: '.5rem',
				// color: Color.NEUTRAL_02,
				fontSize: '1.5rem',
			},
			outlined: {
				margin: '0 1rem 0 .5rem',
			},
		},
	},
};

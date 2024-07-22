import type { Components } from '@mui/material';
import { inputAdornmentClasses, inputBaseClasses } from '@mui/material';

type MuiTextFieldProps = Components['MuiTextField'];

export const MuiTextField: MuiTextFieldProps = {
	styleOverrides: {
		root: {
			// borderRadius: 28,
			// backgroundColor: Color.NEUTRAL_12,
			// minHeight: 52,

			[`& .${inputBaseClasses.root}`]: {
				// borderRadius: 28,
				// minHeight: 52,

				[`& .${inputBaseClasses.input}`]: {
					// color: Color.NEUTRAL_02,
				},
			},

			[`& .${inputBaseClasses.error}`]: {
				[`& .${inputAdornmentClasses.root}`]: {
					// color: Color.RED_01,
				},
			},
		},
	},
};

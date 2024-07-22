import { Box, Button, Container, TextField } from '@mui/material';
import { CheckCircle2Icon } from 'lucide-react';
import React from 'react';

export function Root(): React.ReactElement {
	return (
		<Container
			component={'div'}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				width: '100vw',
			}}
			// className="h-screen w-screen flex items-center justify-center"
		>
			<Box
				component={'form'}
				sx={{
					display: 'flex',
					gap: '1rem',
				}}
				// className="p-8 flex gap-2 max-w-2xl w-full"
				onSubmit={(e) => e.preventDefault()}
			>
				<TextField
					sx={{ width: '100%' }}
					placeholder="Full Name"
					variant="outlined"
				/>

				<Button
					variant="contained"
					sx={{ borderRadius: '8px', padding: '0.5rem 1rem' }}
				>
					<CheckCircle2Icon />
				</Button>
			</Box>
		</Container>
	);
}

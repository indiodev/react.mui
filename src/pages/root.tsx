import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { CheckCircle2Icon } from 'lucide-react';
import React from 'react';

export function Root(): React.ReactElement {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<form
				className="p-8 flex gap-2 max-w-2xl w-full"
				onSubmit={(e) => e.preventDefault()}
			>
				<Input
					placeholder="Full Name"
					className="flex-1rounded-md border border-green-600 placeholder:text-green-400"
				/>
				<Button
					variant="default"
					className="bg-green-600"
				>
					<CheckCircle2Icon />
				</Button>
			</form>
		</div>
	);
}

import React from 'react';
import { Outlet } from 'react-router-dom';

export function Root(): React.ReactElement {
	return <Outlet />;
}

import { createBrowserRouter } from 'react-router';
import { Layout } from "../components/layout/layout";
import { HomePage } from "../pages/HomePage";
import { NotFound } from '../pages/NotFound';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "notfound", element: <NotFound /> }
		],
	}
]);

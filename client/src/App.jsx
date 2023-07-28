import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { UsersEdit } from "./components/UsersEdit";
import { UsersProfile } from "./components/UsersProfile";

export const App = () => {
	return (
		<div className="container mx-auto max-w-[1800px] min-h-screen">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/users" element={<Users />} />
				<Route path="/users/:id" element={<UsersProfile />} />
				<Route path="/users/edit/:id" element={<UsersEdit />} />
				<Route path="/works" element={<Home />} />
				<Route path="/about" element={<Home />} />
				<Route path="/contact" element={<Home />} />
			</Routes>
		</div>
	);
};

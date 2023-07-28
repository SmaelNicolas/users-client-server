import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const UsersProfile = () => {
	const [user, setUser] = useState({});

	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const getUser = async () => {
			const response = await fetch(
				`http://localhost:3001/api/users/${id}`
			);
			const data = await response.json();
			setUser(data);
		};
		getUser();
	}, [id]);

	if (!user) return <div>Loading...</div>;

	return (
		<>
			<Link to="/users"> Back</Link>
			<div className="p-16">
				<div className="p-8 bg-white shadow mt-24">
					<div className="grid grid-cols-1 md:grid-cols-3">
						<div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
							<div>
								<p className="font-bold text-gray-700 text-xl">
									22
								</p>
								<p className="text-gray-400">Friends</p>
							</div>
							<div>
								<p className="font-bold text-gray-700 text-xl">
									10
								</p>
								<p className="text-gray-400">Photos</p>
							</div>
							<div>
								<p className="font-bold text-gray-700 text-xl">
									89
								</p>
								<p className="text-gray-400">Comments</p>
							</div>
						</div>
						<div className="relative">
							<img
								className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24"
								src={user.avatar}
								alt="user"
							/>
						</div>
						<div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
							<button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
								Connect
							</button>
							<button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
								Message
							</button>
						</div>
					</div>
					<div className="mt-20 text-center border-b pb-12">
						<h1 className="text-4xl font-medium text-gray-700">
							{user.lastName} {user.name},
							<span className="font-light text-gray-500">27</span>
						</h1>
						<p className="font-light text-gray-600 mt-3">
							{user.city}, {user.country}
						</p>
						<p className="mt-8 text-gray-500">
							Solution Manager - Creative Tim Officer
						</p>
						<p className="mt-2 text-gray-500">
							University of Computer Science
						</p>
					</div>
					<div className="mt-12 flex flex-col justify-center">
						<p className="text-gray-600 text-center font-light lg:px-16">
							An artist of considerable range, Ryan — the name
							taken by Melbourne-raised, Brooklyn-based Nick
							Murphy — writes, performs and records all of his own
							music, giving it a warm, intimate feel with a solid
							groove structure. An artist of considerable range.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
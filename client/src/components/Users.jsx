import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("http://localhost:3001/api/users");
			const data = await response.json();
			setUsers(data);
		};
		getUsers();
	}, []);

	const getDate = (date) =>
		new Date(date).toLocaleDateString("en-GB", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});

	if (users.length === 0) return <div>Loading...</div>;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 bg-gray-500 p-3">
			{users.map((user) => {
				return (
					<div
						key={user.id}
						className="card card-side bg-base-100 shadow-xl">
						<figure>
							<img src={user.avatar} alt="Movie" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								{user.lastName} {user.name}
							</h2>
							<p>Email : {user.email}</p>
							<p>Contact: {user.phone}</p>
							<p>
								{user.city},{user.country}
							</p>
							<p>Member Since : {getDate(user.createdAt)}</p>
							<div className="card-actions justify-end">
								<Link to={`/users/${user.id}`}>
									<button className="btn btn-primary">
										Info
									</button>
								</Link>
								<Link to={`/users/edit/${user.id}`}>
									<button className="btn btn-secondary">
										Edit
									</button>
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

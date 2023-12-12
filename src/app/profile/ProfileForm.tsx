"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useQuery } from "react-query";

export default function ProfileForm() {
	const router = useRouter();

	const getUserInfo = async () => {
		const res = await fetch("/api/profile");
		return res.json();
	};
	const { data, error, isLoading } = useQuery("userInfo", getUserInfo);
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	if (data.regno && data.contact) {
		router.push("/marketplace");
	}

	return (
		<div>
			<form method="post" action={`/api/profile`}>
				<div>
					<label htmlFor="">Name:</label>
					<input
						name="name"
						type="text"
						value={data.name}
						required
						readOnly
					/>
				</div>
				<div>
					<label htmlFor="">Email ID:</label>
					<input
						name="email"
						type="text"
						value={data.email}
						required
						readOnly
					/>
				</div>
				<div>
					<label htmlFor="">Registration No:</label>
					<input
						name="regno"
						type="text"
						value={data.name.slice(-9)}
						required
						readOnly
					/>
				</div>
				<div>
					<label htmlFor="">School:</label>
					<select name="school" id="" required>
						<option value="">select</option>
						<option value="SCOPE">SCOPE</option>
						<option value="SCORE">SCORE</option>
					</select>
				</div>
				<div>
					<label htmlFor="">Branch:</label>
					<input
						name="branch"
						type="text"
						value={data.name.slice(-7, -4)}
						required
						readOnly
					/>
				</div>
				<div>
					<label htmlFor="">Contact No:</label>
					<input
						name="contact"
						type="tel"
						pattern="[0-9]{10}"
						required
						minLength={10}
						maxLength={10}
					/>
				</div>

				<button className="border-1 bg-gray-500" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

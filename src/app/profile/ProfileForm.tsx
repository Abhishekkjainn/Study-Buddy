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
	if (error) return <div>Request Failed with error code</div>;
	if (isLoading) return <div className="min-h-screen min-w-full flex justify-center items-center bg-[#0C2F33] text-white">
		<div className="flex flex-row gap-2">
  <div className="w-4 h-4 rounded-full bg-white animate-bounce"></div>
  <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
  <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
</div>
	</div>;
	if (data.regno && data.contact) {
		router.push("/marketplace");
	}

	return (
		<div className=" min-h-screen min-wfull flex justify-center pt-20 items-center pl-0 flex-col bg-[#DEF6FA]">

					

			<div className="bg-[#FCFD9E] h-16 w-1/5 text-5xl flex justify-center items-center rounded-xl max-[600px]:w-1/2">Profile</div>

			<div className="w-1/3 h-32 flex justify-center items-center max-[600px]:w-72 text-justify">Please take a moment to provide us with some 
essential details to tailor your experience to your 
unique needs.</div>
			<form method="post" className="w-2/5 h-96 flex justify-start items-between pl-12 pr-12 pt-0 pb-12 flex-col rounded-xl max-[600px]:w-full max-[600px]:h-fit max-[600px]:pt-0 max-[600px]:pl-0 max-[600px]:pb-0 max-[600px]:pr-0" action={`/api/profile`}>
				<div className=" flex justify-between items-center h-1/4 max-[600px]:flex-col">
				<div>
					{/* <label htmlFor="">Name:</label>
					<br />
					<input
						name="name"
						type="text"
						value={data.name}
						required
						readOnly
						className=""
					/> */}
					
  <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm"
    >Full Name</label>
  <div className="mt-2 max-[600px]:mb-4">
    <input
      type="text"
      name="inputname"
	  value={data.name}
	  required
	  readOnly
      className="block w-56 rounded-xl py-1.5 px-2 focus:text-gray-800 bg-[#3CD4E4] border-t-0 border-b-4 border-black border-r-2"
    />
  </div>


				</div>
				<div>
				<label htmlFor="inputemail" className="block text-gray-800 font-semibold text-sm"
    >Email ID</label>
  <div className="mt-2 max-[600px]:mb-4" >
    <input
      type="text"
      name="inputemail"
	  value={data.email}
	  required
	  readOnly
      className="block w-56 rounded-xl py-1.5 px-2 focus:text-gray-800 bg-[#3CD4E4] border-t-0 border-b-4 border-black border-r-2"
    />
  </div>
				</div>
				</div>




				<div className="bg-slate flex justify-between items-center h-1/4 max-[600px]:flex-col">
				<div>
				<label htmlFor="regno" className="block text-gray-800 font-semibold text-sm"
    >Registration No.</label>
  <div className="mt-2">
    <input
      type="text"
      name="regno"
	  value={data.name.slice(-9)}
	  required
	  readOnly
      className="block w-56 rounded-xl py-1.5 px-2 focus:text-gray-800 bg-[#3CD4E4] border-t-0 border-b-4 border-black border-r-2 max-[600px]:mb-4"
    />
  </div>
				</div>
				<div>
					<label htmlFor="school" className="block text-gray-800 font-semibold text-sm">School:</label>

					<select name="school" id="" 
				  required className="block w-56 rounded-xl py-1.5 px-2 focus:text-gray-800 bg-[#3CD4E4] border-t-0 border-b-4 border-black mt-2 border-r-2 max-[600px]:mb-4">
						<option value="">select</option>
						<option value="SCOPE">SCOPE</option>
						<option value="SCORE">SCORE</option>
					</select>
				</div>

				</div>





				<div className="bg-slate flex justify-between items-center h-1/4 max-[600px]:flex-col">
				<div>
					<label htmlFor="branch" className="block text-gray-800 font-semibold text-sm">Branch:</label>
					<input
						name="branch"
						type="text"
						value={data.name.slice(-7, -4)}
						required
						readOnly
						className="block w-56 rounded-xl py-1.5 px-2 focus:text-gray-800 bg-[#3CD4E4] border-t-0 border-b-4 border-black mt-2 border-r-2 max-[600px]:mb-4"
					/>
				</div>
				<div>
					<label htmlFor="" className="block text-gray-800 font-semibold text-sm">Contact No:</label>
					<input
						name="contact"
						type="tel"
						pattern="[0-9]{10}"
						required
						className="block w-56 rounded-xl py-1.5 px-2 focus:text-gray-800 bg-[#3CD4E4] border-t-0 border-b-4 border-black mt-2 border-r-2"
					/>
				</div>
				</div>
				<div className="bg-slate flex justify-center pt-16 items-center h-1/4 ">
				<button  className=" hover:bg-[#0C2F20] font-bold py-3 px-6 rounded-full bg-[#0C2F33] shadow-md shadow-[#3FBDF1] text-white w-48 max-[600px]:mb-32" >
					Submit
				</button>
				</div>
			</form>
		</div>
	);
}
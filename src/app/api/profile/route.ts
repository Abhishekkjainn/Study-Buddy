import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
	// Process a GET request
	const token = await getToken({ req });
	if (token) {
		// Signed in
		return NextResponse.json({ message: "Authorized" }, { status: 200 });
	}
	// Not Signed in
	return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/lib/prisma";

export async function GET(req: NextApiRequest) {
	// Process a GET request
	const token = await getToken({ req });
	if (token) {
		// Signed in
		const data = await prisma.user.findUnique({
			where: { email: token.email! },
		});

		return NextResponse.json(data, { status: 200 });
	}
	// Not Signed in
	return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function POST(req: NextRequest) {
	// Process a GET request
	const token = await getToken({ req });
	if (token) {
		const requestUrl = new URL(req.url);
		const formData = await req.formData();
		const regno = String(formData.get("regno"));
		const branch = String(formData.get("branch"));
		const school = String(formData.get("school"));
		const contact = String(formData.get("contact"));
		console.log(regno, branch, school, contact);

		// Signed in
		const data = await prisma.user.update({
			data: {
				regno,
				branch,
				school,
				contact,
			},
			where: { email: token.email! },
		});

		return NextResponse.redirect(requestUrl.origin + "/profile", {
			status: 301,
		});
	}
	// Not Signed in
	return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

import NextAuth from "next-auth";
import authOptions from "@/auth"; // Adjusted path for the authOptions import

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

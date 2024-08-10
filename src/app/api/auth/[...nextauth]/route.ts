// imports
import NextAuth from "next-auth";

// importing providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string, // need to provide these values in .env.local
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string, // need to provide these values in .env.local
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // custom provider
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const data = {
        name: user.name,
        email: user.email,
        image: user.image,
        account: account?.provider,
      };

      console.log(data);

      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    async session({ session, user, token }) {
      return session;
    },

    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
});

export { handler as GET, handler as POST };

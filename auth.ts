import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    // Google,
    // TODO remove below when handle user in database
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
        },
        password: {
          type: "password",
          label: "Password",
        },
      },
      async authorize({ request }) {
        console.log(request);

        // TODO remove line below
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log("account", account);
      console.log("profile", profile);

      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
});

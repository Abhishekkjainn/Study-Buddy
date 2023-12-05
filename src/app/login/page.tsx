"use client";

import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../lib/firebase-config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { error } from "console";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (userCred) => {
        if (!userCred) {
          return;
        }

        fetch("/api/login", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${await userCred.user.getIdToken()}`,
          },
        })
          .then((response) => {
            if (response.status === 200) {
              router.push("/protected");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function signIn() {
    signInWithRedirect(auth, provider).catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

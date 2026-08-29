"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

export default function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const router =
    useRouter();

  function submit(
    event: FormEvent
  ) {
    event.preventDefault();

    if (
      email.trim() &&
      password.trim()
    ) {
      router.push("/");
    }
  }

  return (
    <div className="loginPage">
      <div className="loginWrap">
        <div className="loginBrand">
          <div className="logoBox">
            CS
          </div>

          <div>
            <div className="brandName">
              Capstone
            </div>

            <div className="brandTag">
              STUDY ASSISTANT
            </div>
          </div>
        </div>

        <form
          className="loginCard"
          onSubmit={submit}
        >
          <h1>
            Sign in
          </h1>

          <p className="loginUniversity">
            Swinburne University of Technology
          </p>

          <div className="field">
            <label>
              Student / Staff Email
            </label>

            <input
              type="email"
              placeholder="you@student.edu.au"
              value={email}
              onChange={(event) =>
                setEmail(
                  event.target.value
                )
              }
            />
          </div>

          <div className="field">
            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={
                password
              }
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
            />
          </div>

          <button
            type="button"
            className="forgot"
          >
            Forgot password?
          </button>

          <button
            className="signBtn"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div className="demoBox">
          <strong>
            Demo credentials
          </strong>

          <span>
            Student (COS40005): sarah.lee@student.edu.au / student123
          </span>

          <span>
            Student (both units): jordan.tan@student.edu.au / student123
          </span>

          <span>
            Admin: sarah.mitchell@swinburne.edu.au / admin123
          </span>
        </div>
      </div>
    </div>
  );
}
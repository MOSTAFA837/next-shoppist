import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/react";

import styles from "../styles/signin.module.scss";

import Header from "../components/header";
import Footer from "../components/footer";

import { BiLeftArrowAlt } from "react-icons/bi";
import { SiAuth0, SiGnuprivacyguard } from "react-icons/si";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CircledIconBtn from "../components/buttons/circledIconBtn";
import axios from "axios";
import DotLoaderSpinner from "../components/loaders/dotLoader";
import LoginInput from "@/components/inputs/loginInput";

const initialvalues = {
  login_email: "",
  login_password: "",
  login_error: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  success: "",
  error: "",
};

export default function signin({ providers, csrfToken, callbackUrl }) {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(initialvalues);
  const {
    login_email,
    login_password,
    login_error,
    name,
    email,
    password,
    conf_password,
    success,
    error,
  } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required.")
      .email("Please enter a valid email address."),
    login_password: Yup.string().required("Please enter a password"),
  });

  const registerValidation = Yup.object({
    name: Yup.string()
      .required("Name is required.")
      .min(2, "Name must be between 2 and 16 characters")
      .max(16, "Name must be between 2 and 16 characters")
      .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed"),

    email: Yup.string()
      .required("Email address is required.")
      .email("Please enter a valid email address."),

    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers, letters and punctaution marks (such as ! and &)"
      )
      .min(6, "Password must be at least 6 characters")
      .max(36, "Password can't be more than 36 characters"),

    conf_password: Yup.string()
      .required("Confirm your password")
      .oneOf(
        [Yup.ref("password")],
        "Password and confirm password aren't match"
      ),
  });

  const signupHandler = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      setUser({ ...user, success: data.message, error: "" });
      setLoading(false);

      setTimeout(async () => {
        let options = {
          redirect: false,
          email: login_email,
          password: login_password,
        };
        const res = await signIn("credentials", options);

        Router.push("/");
      }, 1500);
    } catch (error) {
      setLoading(false);
      setUser({ ...user, error: error.response.data.message, success: "" });
    }
  };

  const signInHandler = async () => {
    setLoading(true);
    let options = {
      redirect: false,
      email: login_email,
      password: login_password,
    };
    const res = await signIn("credentials", options);

    setUser({ ...user, success: "", error: "" });
    setLoading(false);

    if (res?.error) {
      setLoading(false);
      setUser({ ...user, login_error: res?.error });
    } else {
      return Router.push(callbackUrl || "/");
    }
  };

  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}
      <Header />

      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>

            <span>
              We'd be happy to join us ! <Link href="/">Go Store</Link>
            </span>
          </div>

          <div className={styles.login__form}>
            <h1>Sign in</h1>

            <p>Get access to one of the best Ecommerce service ever.</p>

            <Formik
              enableReinitialize
              initialValues={{ login_email, login_password }}
              validationSchema={loginValidation}
              onSubmit={() => {
                signInHandler();
              }}
            >
              {(form) => (
                <Form method="post" action="/api/auth/signin">
                  <input
                    type="hidden"
                    name="csfrToken"
                    defaultValue={csrfToken}
                  />

                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />

                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />

                  <CircledIconBtn type="submit" text="Sign in" />

                  {login_error && (
                    <div className={styles.error}>{login_error}</div>
                  )}

                  <div className={styles.forgot}>
                    <Link href="/auth/forgot">Forgot Password ?</Link>
                  </div>
                </Form>
              )}
            </Formik>

            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue signing whith</span>

              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => {
                  if (provider.name == "Credentials") {
                    return;
                  }

                  return (
                    <div key={provider.id} className={styles.social__btn_wrap}>
                      <button
                        className={styles.social__btn}
                        onClick={() => signIn(provider.id)}
                      >
                        <img src={`images/icons/${provider.id}.png`} alt="" />
                        {provider.name}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>

            <p>Get access to one of the best Ecommerce service ever.</p>

            <Formik
              enableReinitialize
              initialValues={{ name, email, password, conf_password }}
              validationSchema={registerValidation}
              onSubmit={() => signupHandler()}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    icon="user"
                    placeholder="Full name"
                    onChange={handleChange}
                  />

                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Email address"
                    onChange={handleChange}
                  />

                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />

                  <LoginInput
                    type="password"
                    name="conf_password"
                    icon="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                  />

                  <CircledIconBtn type="submit" text="Sign up" />
                </Form>
              )}
            </Formik>

            {success && (
              <div className={styles.success}>
                <span>{success}</span>
              </div>
            )}

            {error && (
              <div className={styles.error}>
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;
  const session = await getSession({ req });
  const { callbackUrl } = query;

  if (session) {
    return {
      redirect: {
        destination: callbackUrl,
      },
    };
  }

  const csrfToken = await getCsrfToken(context);

  const providers = Object.values(await getProviders());

  return {
    props: { providers, csrfToken, callbackUrl },
  };
}

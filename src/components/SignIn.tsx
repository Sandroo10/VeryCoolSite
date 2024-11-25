import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { login } from "../supabase/auth";

const SignInPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate('/')
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailFilled = !!loginPayload.email;
    const isPasswordFilled = !!loginPayload.password;

    if (isEmailFilled && isPasswordFilled) {
      handleLogin(loginPayload);
    } 
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center dark:text-white">
            {t("signInPage.title")}
          </div>
          <div className="text-sm text-muted-foreground text-center dark:text-white">
            {t("signInPage.subtitle")}
          </div>
        </div>
        <div className="p-6 pt-0">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none dark:text-white"
                htmlFor="email"
              >
                {t("signInPage.emailLabel")}
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={loginPayload.email}
                onChange={(e) =>
                  setLoginPayload({
                    email: e.target.value,
                    password: loginPayload.password,
                  })
                }
                placeholder={t("signInPage.emailPlaceholder")}
                className="flex h-9 w-full rounded-md border px-3 py-1"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none dark:text-white"
                htmlFor="password"
              >
                {t("signInPage.passwordLabel")}
              </label>
              <input
                name="password"
                type="password"
                id="password"
                value={loginPayload.password}
                onChange={(e) =>
                  setLoginPayload({
                    email: loginPayload.email,
                    password: e.target.value,
                  })
                }
                placeholder={t("signInPage.passwordPlaceholder")}
                className="flex h-9 w-full rounded-md border px-3 py-1"
                required
              />
            </div>
            <button
              className="h-9 w-full bg-primary text-white rounded-md hover:bg-primary/90"
              type="submit"
              onClick={handleSubmit}
            >
              {t("signInPage.signInButton")}
            </button>
          </form>
        </div>
        <div className="items-center p-6 pt-0 flex justify-between">
          <Link className="text-sm text-primary hover:underline" to="/forgot-password">
            {t("signInPage.forgotPassword")}
          </Link>
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            {t("signInPage.noAccount")}{" "}
            <Link className="text-primary hover:underline" to="/register">
              {t("signInPage.signUpLink")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

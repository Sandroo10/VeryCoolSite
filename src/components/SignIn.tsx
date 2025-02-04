import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useForm } from "react-hook-form";
import { useSignIn } from "../reactQuery/mutation/auth";

const SignInPage: React.FC = () => {
  const { t } = useTranslation();

  const { mutate:signin } = useSignIn();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const onSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data;
    if (email && password) {
      signin(data);
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
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none dark:text-white"
                htmlFor="email"
              >
                {t("signInPage.emailLabel")}
              </label>
              <input
                {...register("email", {
                  required: t("signInPage.emailRequired"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: t("signInPage.emailInvalid"),
                  },
                })}
                name="email"
                type="email"
                id="email"
                placeholder={t("signInPage.emailPlaceholder")}
                className={`flex h-9 w-full rounded-md border px-3 py-1 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none dark:text-white"
                htmlFor="password"
              >
                {t("signInPage.passwordLabel")}
              </label>
              <input
                {...register("password", {
                  required: t("signInPage.passwordRequired"),
                  minLength: {
                    value: 6,
                    message: t("signInPage.passwordMinLength"),
                  },
                })}
                name="password"
                type="password"
                id="password"
                placeholder={t("signInPage.passwordPlaceholder")}
                className={`flex h-9 w-full rounded-md border px-3 py-1 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            <button
              className="h-9 w-full bg-primary text-white rounded-md hover:bg-primary/90"
              type="submit"
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

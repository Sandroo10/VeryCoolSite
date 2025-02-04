import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useSignUp } from "../reactQuery/mutation/auth";
const RegisterPage: React.FC = () => {
  const { t } = useTranslation();



  const {mutate:handleRegister} = useSignUp()

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    if (data.email && data.password) {
      handleRegister(data);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center dark:text-white">
            {t("registerPage.title")}
          </div>
          <div className="text-sm text-muted-foreground text-center dark:text-white">
            {t("registerPage.subtitle")}
          </div>
        </div>
        <div className="p-6 pt-0">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none dark:text-white"
                htmlFor="email"
              >
                {t("registerPage.emailLabel")}
              </label>
              <input
                {...formRegister("email", {
                  required: t("registerPage.emailRequired"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: t("registerPage.emailInvalid"),
                  },
                })}
                name="email"
                placeholder={t("registerPage.emailPlaceholder")}
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
                {t("registerPage.passwordLabel")}
              </label>
              <input
                {...formRegister("password", {
                  required: t("registerPage.passwordRequired"),
                  minLength: {
                    value: 6,
                    message: t("registerPage.passwordMinLength"),
                  },
                  maxLength: {
                    value: 20,
                    message: t("registerPage.passwordMaxLength"),
                  },
                })}
                name="password"
                type="password"
                placeholder={t("registerPage.passwordPlaceholder")}
                className={`flex h-9 w-full rounded-md border px-3 py-1 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              className="h-9 w-full bg-primary text-white rounded-md hover:bg-primary/90 dark:text-black"
              type="submit"
            >
              {t("registerPage.signUpButton")}
            </button>
          </form>
        </div>
        <div className="items-center p-6 pt-0 flex justify-center">
          <p className="text-sm text-muted-foreground dark:text-white">
            {t("registerPage.haveAccount")}{" "}
            <Link className="text-primary hover:underline" to="/signin">
              {t("registerPage.signInLink")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

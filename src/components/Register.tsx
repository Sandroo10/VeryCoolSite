import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { register } from "../supabase/auth";

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();

  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const handleSubmit = () => {
    const isEmailFilled = !!registerPayload.email;
    const isPasswordFilled = !!registerPayload.password;

    if (isEmailFilled && isPasswordFilled) {
      handleRegister(registerPayload);
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none dark:text-white"
                htmlFor="email"
              >
                {t("registerPage.emailLabel")}
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={registerPayload.email}
                onChange={(e) => {
                  setRegisterPayload({
                    email: e.target.value,
                    password: registerPayload.password,
                  });
                }}
                placeholder={t("registerPage.emailPlaceholder")}
                className="flex h-9 w-full rounded-md border px-3 py-1"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none dark:text-white"
                htmlFor="password"
              >
                {t("registerPage.passwordLabel")}
              </label>
              <input
                name="password"
                type="password"
                id="password"
                value={registerPayload.password}
                onChange={(e) => {
                  setRegisterPayload({
                    email: registerPayload.email,
                    password: e.target.value,
                  });
                }}
                placeholder={t("registerPage.passwordPlaceholder")}
                className="flex h-9 w-full rounded-md border px-3 py-1"
                required
              />
            </div>
            <div className="space-y-2">
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

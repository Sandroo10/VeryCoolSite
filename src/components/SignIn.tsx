import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center">
            {t('signInPage.title')}
          </div>
          <div className="text-sm text-muted-foreground text-center">
            {t('signInPage.subtitle')}
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                {t('signInPage.emailLabel')}
              </label>
              <input
                type="email"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                id="email"
                placeholder={t('signInPage.emailPlaceholder')}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                {t('signInPage.passwordLabel')}
              </label>
              <input
                type="password"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                id="password"
                placeholder={t('signInPage.passwordPlaceholder')}
              />
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
              type="button"
            >
              {t('signInPage.signInButton')}
            </button>
          </div>
        </div>
        <div className="items-center p-6 pt-0 flex justify-between">
          <Link className="text-sm text-primary hover:underline" to="/forgot-password">
            {t('signInPage.forgotPassword')}
          </Link>
          <p className="text-sm text-muted-foreground">
            {t('signInPage.noAccount')}{" "}
            <Link className="text-primary hover:underline" to="/register">
              {t('signInPage.signUpLink')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

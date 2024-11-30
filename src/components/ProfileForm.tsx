import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next"; // Importing the translation hook
import { FillProfileInfoPayload } from "../supabase/account/index.types";

interface ProfileFormProps {
  onFormSubmit: SubmitHandler<FillProfileInfoPayload>;
  defaultValues: FillProfileInfoPayload;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onFormSubmit, defaultValues }) => {
  const { t } = useTranslation(); // Access the translation function
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FillProfileInfoPayload>({
    defaultValues,
  });

  return (
    <div className="p-6 pt-0">
      <form className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="space-y-2">
          <label htmlFor="fullNameEn" className="text-sm font-medium">
            {t("profileForm.fullNameEnLabel")}
          </label>
          <input
            id="fullNameEn"
            {...register("full_name_en", {
              required: t("profileForm.fullNameEnRequired"),
              minLength: {
                value: 3,
                message: t("profileForm.fullNameEnMinLength"),
              },
            })}
            className={`flex h-9 w-full rounded-md border px-3 py-1 ${
              errors.full_name_en ? "border-red-500" : ""
            }`}
          />
          {errors.full_name_en && (
            <span className="text-red-500 text-sm">
              {errors.full_name_en.message}
            </span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="fullNameKa" className="text-sm font-medium">
            {t("profileForm.fullNameKaLabel")}
          </label>
          <input
            id="fullNameKa"
            {...register("full_name_ka", {
              required: t("profileForm.fullNameKaRequired"),
              pattern: {
                value: /^[ა-ჰ\s]+$/,
                message: t("profileForm.fullNameKaPattern"),
              },
            })}
            className={`flex h-9 w-full rounded-md border px-3 py-1 ${
              errors.full_name_ka ? "border-red-500" : ""
            }`}
          />
          {errors.full_name_ka && (
            <span className="text-red-500 text-sm">
              {errors.full_name_ka.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="avatarUrl" className="text-sm font-medium">
            {t("profileForm.avatarUrlLabel")}
          </label>
          <input
            type="url"
            id="avatarUrl"
            {...register("avatar_url", {
              pattern: {
                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|svg|gif))$/,
                message: t(
                  "profileForm.avatarUrlPattern"
                ),
              },
            })}
            className={`flex h-9 w-full rounded-md border px-3 py-1 ${
              errors.avatar_url ? "border-red-500" : ""
            }`}
          />
          {errors.avatar_url && (
            <span className="text-red-500 text-sm">
              {errors.avatar_url.message}
            </span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="username" className="text-sm font-medium">
            {t("profileForm.usernameLabel")}
          </label>
          <input
            id="username"
            {...register("username", {
              required: t("profileForm.usernameRequired"),
              minLength: {
                value: 4,
                message: t("profileForm.usernameMinLength"),
              },
            })}
            className={`flex h-9 w-full rounded-md border px-3 py-1 ${
              errors.username ? "border-red-500" : ""
            }`}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">
              {errors.username.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-9 px-4 py-2 bg-primary text-white rounded-md"
        >
          {t("profileForm.submitButton")}
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;

import { FillProfileInfoPayload } from "../supabase/account/index.types";
import { Dispatch } from "react";
import { SetStateAction } from "react";

const ProfileForm: React.FC<{ onFormSubmit: (e: React.FormEvent) => void,
     profilePayload:FillProfileInfoPayload,
     setProfilePayload: Dispatch<SetStateAction<FillProfileInfoPayload>>
 }> = ({ onFormSubmit, profilePayload, setProfilePayload }) => {

    return(
<div className="p-6 pt-0">
        <form className="space-y-4" onSubmit={onFormSubmit}>
          

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Full  Name En
            </label>
            <input
             
              id="fullNameEn"
              name="fullNameEn"
              placeholder=""
              required
              value={profilePayload.full_name_en}
              onChange={(e) => {
                setProfilePayload({
                  username: profilePayload.username,
                    avatar_url: profilePayload.avatar_url,
                    full_name_en: e.target.value,
                    full_name_ka: profilePayload.full_name_ka,
                  });
              }}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="fullNameKa"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             Full Name Ka
            </label>
            <input
             
              id="fullNameKa"
              name="fullNameKa"
              required
              value={profilePayload.full_name_ka}
              onChange={(e) => {
                setProfilePayload({
                    username: profilePayload.username,
                    avatar_url: profilePayload.avatar_url,
                    full_name_en: profilePayload.full_name_en,
                    full_name_ka: e.target.value,
                  });
              }}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="avatarUrl"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Avatar Url
            </label>
            <input
                type= "url"
              id="avatarUrl"
              name="avatarUrl"
              placeholder=""
              value={profilePayload.avatar_url}
              onChange={(e) => {
                setProfilePayload({
                  username: profilePayload.username,
                    avatar_url: e.target.value,
                    full_name_en: profilePayload.full_name_en,
                    full_name_ka: profilePayload.full_name_ka,
                  });
              }}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>



          <div className="space-y-2">
            <label
              htmlFor="userName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Username
            </label>
            <input
            
              id="userName"
              name="userName"
              placeholder=""
              required
              value={profilePayload.username}
              onChange={(e) => {
                setProfilePayload({
                  username: e.target.value,
                  avatar_url: profilePayload.avatar_url,
                  full_name_en: profilePayload.full_name_en,
                  full_name_ka: profilePayload.full_name_ka,
                });
              }}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    )
}


export default ProfileForm;
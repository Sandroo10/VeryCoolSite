import {  useState } from "react";
import { mapProfileTableData } from "../supabase/account/index";
import { useAuth } from "./context/AuthContext";
import ProfileForm from "./ProfileForm";

import { useGetProfileInfo } from "../reactQuery/query/profile";
import { useFillProfile } from "../reactQuery/mutation/profile";
import { FillProfileInfoPayload } from "@/supabase/account/index.types";

const Profile: React.FC = () => {
  const { user } = useAuth();


  const [isEditing, setIsEditing] = useState(false);

  // const { mutate: handleFillProfileInfo } = useMutation({
  //   mutationKey: ["fill-profile-info"],
  //   mutationFn: fillProfileInfo,
  //   onSuccess: (updatedProfile: FillProfileInfoPayload) => {
  //     setProfilePayload(updatedProfile); 
  //     setIsEditing(false); 
  //     console.log("Profile updated successfully!");
  //   },
  //   onError: (error: any) => {
  //     console.log(`Error updating profile: ${error.message}`);
  //   },
  // });
  

  const {mutate:fillProfileInfo} = useFillProfile(setIsEditing,isEditing)

  
  const handleSubmit = (fieldvalues:FillProfileInfoPayload) => {
    if (!user?.user?.id) {
      console.error("ID is undefined");
      return;
    }
    fillProfileInfo({values:fieldvalues, id:user?.user?.id});
  };

  const {data: profileData = { avatar_url: "",
    full_name_en: "",
    full_name_ka: "",
    username:"",
  }} = useGetProfileInfo({ queryOptions: { select: mapProfileTableData } }, user?.user?.id);

  

  return (
    <div className="p-6">
      {isEditing ? (
        <ProfileForm
          onFormSubmit={(data) => handleSubmit(data)}
          defaultValues={{...profileData, id: user?.user?.id}}
        />
      ) : (
        <div className="space-y-4">
          <div className="flex justify-center">
          <img
  src={profileData.avatar_url || undefined}
  alt="Avatar"
  className="h-24 w-24 rounded-full border object-cover"
/>

          </div>
          <div className="flex flex-col gap-1 space-y-2">
            <div>
              <strong>Full Name (English):</strong> {profileData.full_name_en || "Not provided"}
            </div>
            <div>
              <strong>Full Name (Georgian):</strong> {profileData.full_name_ka || "Not provided"}
            </div>
            <div>
              <strong>Username:</strong> {profileData.username || "Not provided"}
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { UserType } from "../../../../types/UserType";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { useGetUserMutation, useGetUserNameMutation, useUpdateUserMutation } from "../../../../store/api/profile.api";

//types


const useProfile = () => {
  const [backendErrors, setBackendErrors] = useState<null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<UserType | FieldValues>();

  const { profile, profileName} = useTypedSelector((state) => state.profile);
  const { setProfile, setProfileName } = useActions();

  //api
  const [getUser] = useGetUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [getUserName] = useGetUserNameMutation();
  // const [getUser] = useGetUserMutation();


  const getUserHandler = async () => {
    try {
      const profile = await getUser(null).unwrap();
      console.log("GET profile", profile);
      setProfile(profile);
    } catch (error) {}
  };
  const getUserNameHandler = async () => {
    try {
      const profileName = await getUserName(null).unwrap();
      console.log("GET profileName", profileName);
      setProfileName(profileName);
    } catch (error) {}
  };

  
const updateUserHandler = async (formData: any) => {
  reset();
  try {
    console.log("PUT profile, formData: ", formData);
    console.log("profile.id", profile.id )
      if(formData.id){
        await updateUser({ id: profile?.id, body: formData});
      }
      getUserHandler();
  } catch (error) {}
};

  return {
    register,
    handleSubmit,
    errors,
    backendErrors,
    profile,
    profileName,
    getUserHandler,
    updateUserHandler,
    getUserNameHandler,
  };
};

export default useProfile;

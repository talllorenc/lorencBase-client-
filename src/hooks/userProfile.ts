import { useProfileQuery } from "@/redux/slices/users/usersApiSlice";

export default function useUserProfile() {
    const { data: profileData } = useProfileQuery("");

    if (!profileData) {
        return null;
    }
    
    return profileData;
}
import { INoteData } from "@/types/NotesData";
import { motion } from "framer-motion";
import {
  useFavoriteAddMutation,
  useFavoriteRemoveMutation,
} from "@/redux/slices/notes/notesApislice";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import useUserProfile from "@/hooks/userProfile";

import { useEffect, useState } from "react";
import NotificationMessage from "../NotificationMessage/NotificationMessage";

interface IFavoritesButtonProps {
  note: INoteData;
}
const FavoritesButton = ({ note }: IFavoritesButtonProps) => {
  const userProfile = useUserProfile();
  const isFavorite =
    userProfile && userProfile.favoriteNotes.includes(note._id);
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>('')

  useEffect(() => {
    if (isFavorite !== null) {
      setFavoriteStatus(isFavorite);
    }
  }, [isFavorite]);

  const [addToFavorites, { isLoading, isSuccess }] = useFavoriteAddMutation();
  const [removeFromFavorites, { isLoading: removeLoading }] = useFavoriteRemoveMutation();

  const handleFavorite = async () => {
    if (favoriteStatus) {
      await removeFromFavorites(note._id);
      setFavoriteStatus(false);
    } else {
      await addToFavorites(note._id);
      setFavoriteStatus(true);
      setNotificationMessage('Note added to favorites')
    }
  };

  return (
    <div className="text-orange-500 text-xl flex items-center">
      <button
        onClick={handleFavorite}
        disabled={isLoading || removeLoading}
      >
        {favoriteStatus ? (
          <FaBookmark className="hover:scale-110" />
        ) : (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 2.5 }}>
            <FaRegBookmark />
          </motion.div>
        )}
      </button>
      <NotificationMessage message={notificationMessage}/>
    </div>
  );
};

export default FavoritesButton;

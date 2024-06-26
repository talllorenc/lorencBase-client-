"use state";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  useLikeNoteMutation,
  useUnlikeNoteMutation,
} from "@/redux/slices/notes/notesApislice";
// import useUserProfile from "@/hooks/userProfile";
import { INoteData } from "@/types/NotesData";
import { selectCurrentUser } from "@/redux/slices/auth/authSlice";
import { useSelector } from "react-redux";

interface ILikesButtonProps {
  note: INoteData;
}

const LikesButton = ({ note }: ILikesButtonProps) => {
  // const userProfile = useUserProfile();
  const userProfile = useSelector(selectCurrentUser);
  const isLiked = userProfile && userProfile.likedNotes.includes(note._id);
  const [likesCount, setLikesCount] = useState<number>(note.likes.length);
  const [likeStatus, setLikeStatus] = useState<boolean>(false);

  useEffect(() => {
    if (isLiked !== null) {
      setLikeStatus(isLiked);
    }
  }, [isLiked]);

  const [likeNote, { isLoading: likeLoading }] = useLikeNoteMutation();
  const [unlikeNote, { isLoading: unlikeLoading }] = useUnlikeNoteMutation();

  const handleLikeButtonClick = async () => {
    if (likeStatus) {
      await unlikeNote(note._id);
      setLikesCount((prevLikesCount) => prevLikesCount - 1);
      setLikeStatus(false);
    } else {
      await likeNote(note._id);
      setLikesCount((prevLikesCount) => prevLikesCount + 1);
      setLikeStatus(true);
    }
  };

  return (
    <div className="flex items-center gap-1 text-xl">
      <button
        onClick={handleLikeButtonClick}
        disabled={likeLoading || unlikeLoading}
      >
        {likeStatus ? (
          <FaHeart className="text-[#f33] hover:scale-110" />
        ) : (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 2.5 }}>
            <FaRegHeart className="text-[#f33]" />
          </motion.div>
        )}
      </button>
      <p>{likesCount}</p>
    </div>
  );
};

export default LikesButton;

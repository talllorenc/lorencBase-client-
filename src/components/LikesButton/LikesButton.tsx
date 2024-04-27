"use state";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  useLikeNoteMutation,
  useUnlikeNoteMutation,
} from "@/redux/slices/notes/notesApislice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/slices/auth/authSlice";
import { RootState } from "@/redux/store";

interface ILikesButtonProps {
  likes: number;
  slug: string;
  id: string;
}

const LikesButton = ({ likes, slug, id }: ILikesButtonProps) => {
  const currentUser = useSelector(selectCurrentUser);
  const isLiked = currentUser && currentUser.likedPosts.includes(id);
  const [likesCount, setLikesCount] = useState<number>(likes);
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
      await unlikeNote(slug);
      setLikesCount((prevLikesCount) => prevLikesCount - 1);
      setLikeStatus(false);
    } else {
      await likeNote(slug);
      setLikesCount((prevLikesCount) => prevLikesCount + 1);
      setLikeStatus(true);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handleLikeButtonClick}
        disabled={likeLoading || unlikeLoading}
      >
        {likeStatus ? (
          <FaHeart className="text-[#f33] hover:scale-110" />
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 2.5 }} 
          >
            <FaRegHeart className="text-[#f33]" />
          </motion.div>
        )}
      </button>
      <p>{likesCount}</p>
    </div>
  );
};

export default LikesButton;

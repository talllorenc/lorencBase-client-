import { useDeleteMutation } from "@/redux/slices/notes/notesApislice";
import { INoteData } from "@/types/NotesData";
import { useRouter } from "next/navigation";
import useUserProfile from "@/hooks/userProfile";
import { selectCurrentUser } from "@/redux/slices/auth/authSlice";
import { useSelector } from "react-redux";

interface IDeleteNoteButtonProps {
  note: INoteData;
}
const DeleteNoteButton = ({ note }: IDeleteNoteButtonProps) => {
  // const userProfile = useUserProfile();
  const userProfile = useSelector(selectCurrentUser);
  const router = useRouter();
  const [deleteNote, { isLoading, isSuccess }] = useDeleteMutation();
  const isCreatedBy = userProfile && userProfile._id === note.createdBy;

  const handleDelete = async () => {
    await deleteNote(note._id);
  };

  if (isSuccess) {
    router.push("/notes");
  }

  return (
    <div className={`${isCreatedBy ? "" : "hidden"}`}>
      <button
        onClick={handleDelete}
        className={`bg-[#FF3333] min-w-[100px] font-bold px-4 py-1 transition-all duration-200 cursor-pointer shadow-buttonRed hover:shadow-buttonRedBrick ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="spinner-border">
            <span className=""></span>
          </div>
        ) : (
          "DELETE"
        )}
      </button>
    </div>
  );
};

export default DeleteNoteButton;

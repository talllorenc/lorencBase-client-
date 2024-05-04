import Link from "next/link";
const CreateNoteButton = () => {
  return (
    <div className="fixed bottom-10 right-10">
      <Link href="/create-note" className="bg-green-500 px-4 py-1 shadow-buttonGreenBrick font-bold">
        CREATE NOTE
      </Link>
    </div>
  );
};

export default CreateNoteButton;

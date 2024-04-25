import CreateNoteForm from "./CreateNoteForm";

const CreateNote = () => {
  return (
    <section className="container">
      <div className="py-12 sm:py-16 lg:py-20">
        <h1 className="text-center text-6xl font-bold">CREATE NOTE</h1>
        <CreateNoteForm />
      </div>
    </section>
  );
};

export default CreateNote;

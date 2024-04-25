import Note from "./Note"

const NotesList = () => {
  return (
    <section className="container">
    <div className="py-12 sm:py-16 lg:py-20">
      <h1 className="text-center text-6xl font-bold">NOTES</h1>
      <div className="mt-8 max-w-2xl mx-auto">
        <Note/>
      </div>
    </div>
  </section>
  )
}

export default NotesList
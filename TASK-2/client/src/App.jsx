import Layout from "./layout/Layout";
import { MdAdd } from "react-icons/md";
import Modal from "./components/Modal";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import { noteApi } from "../api/noteApi";
function App() {

  const [note, setNote] = useState([]);

  useEffect(() => {
    noteApi.fetchNote().then((res) => {

      setNote(res)
    })
  }, [])

  return (
    <Layout>
      <div className="min-h-screen bg-customGreen">
        <section className="container p-6 mx-auto space-y-3">
          <div className="text-center mt-4 flex justify-center">
            <button
              onClick={() => document.getElementById('my_modal_1').showModal()}
              className="h-12 w-96 flex items-center justify-center gap-2 px-4 py-2 text-white bg-customWhite"
            >
              <MdAdd className="text-lg text-gray-900" />
              <span className="font-medium text-gray-900">Add Note</span>
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {
                note.map((data) => (
                  <Card key={data.id} id={data.id} setNote={setNote} title={data.title} content={data.content} date={data.date} />
                ))
              }

            </div>
          </div>
        </section>
        <Modal setNote={setNote} />
      </div>


    </Layout>
  );
}

export default App;

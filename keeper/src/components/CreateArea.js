import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";

function CreateArea(props) {
  const [clicked, setClicked] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setClicked(true);
  }

  function handleSubmit(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    axios({
      url: "/save",
      method: "POST",
      data: note,
    })
      .then(() => {
        console.log("Data has been sent to the server.");
      })
      .catch(() => {
        console.log("Internal error");
      });
  }

  return (
    <div>
      <form className="create-note">
        {clicked && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={handleClick}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked ? "3" : "1"}
        />
        {clicked && (
          <Zoom in={true}>
            <Fab onClick={handleSubmit}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;

import React, { useState } from "react";

const Note = () => {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleNoteChange = (e) => {
    const value = e.target.value;
    if (value.length <= 1000) {
      setNote(value);
    }
  };

  const handleSaveNote = () => {
    setSavedNote(note);
    setIsEditing(false);
  };

  const handleCancelNote = () => {
    setNote(savedNote);
    setIsEditing(false);
  };

  return (
    <div className="bg-emerald-50 pb-52">
      {isEditing ? (
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Enter your note..."
          rows={5}
          cols={40}
          className="bg-pink-50 border-2 border-black"
        />
      ) : (
        <p>{savedNote}</p>
      )}
      {isEditing ? (
        <div>
          <button
            onClick={handleSaveNote}
            className="bg-black text-white px-4 py-2 mr-2"
          >
            Save
          </button>
          <button
            onClick={handleCancelNote}
            className="bg-black text-white px-4 py-2"
          >
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Note;

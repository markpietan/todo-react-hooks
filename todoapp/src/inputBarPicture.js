import React, {useState} from "react";

const InputBarPicture = ({submitPictureForm}) => {
    const [text, setText] = useState("")
  return (
    <form onSubmit = {(e) => {
        e.preventDefault()
        submitPictureForm(text)
    }}>
      <label>Search for a Photo</label>
      <input type="text" value= {text} onChange= {(e) => {
          setText(e.target.value)
      }}></input>
      <input type= "submit" ></input>
    </form>
  );
};

export default InputBarPicture;

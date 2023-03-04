import React, { useState } from "react";


function App()
 {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App">
      <center>
			<h2>Add Your Favorite Image:</h2>     
			<input type="file" onChange={handleChange} />
      <br></br><br></br><br></br>
			<img src={file} />
      </center>
		</div>

	);
}

export default App;

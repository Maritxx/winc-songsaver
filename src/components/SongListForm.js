import { useDispatch } from "react-redux";
import { useState } from "react";
import { addSong } from "../actions/songListActions"

function SongListForm() {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        songName: "",
        songArtist: "",
        songGenre: "",
        songRating: ""
    });

    function handleChange(event) {
        setInputs((prevState) => ({
            ...prevState, [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addSong(inputs));
        setInputs({
            songName: "",
            songArtist: "",
            songGenre: "",
            songRating: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>  
            <input 
                name="songName"
                value={inputs.songName}
                onChange={handleChange}
                placeholder="Name"
            />

            <input 
                name="songArtist"
                value={inputs.songArtist}
                onChange={handleChange}
                placeholder="Artist"
            />

            <select 
                name="songGenre"
                value={inputs.songGenre}
                onChange={handleChange}
            >
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="rap">Rap</option>
                <option value="dance">Dance</option>
                <option value="classical">Classical</option>
                <option value="country">Country</option>
                <option value="metal">Metal</option>
                <option value="indie">Indie</option>
                <option value="other">Other</option>
            </select>

            <select 
                name="songRating"
                value={inputs.songRating}
                onChange={handleChange}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>               
            </select>

            <button type="submit">Add Song</button>

        </form>
    )
}

export default SongListForm;
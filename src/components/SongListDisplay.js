import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../actions/songListActions"

function SongListDisplay() {
    const songs = useSelector(state => state.songs.list);
    const genreFilter = useSelector(state => state.filter.selectedGenre);
    const dispatch = useDispatch();

    function handleRemove(key) {
        dispatch(removeSong(key));
    }

    function getList() {
        if (!genreFilter) {
            return songs
        } else {
            return songs.filter((song) => song.songGenre === genreFilter)
        }
    }


    return (
        <table>
            <thead>
                <tr className="song__header">
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                </tr>
            </thead>
            <tbody>
                {getList().map((song) => (
                    <tr key={song.songId}>
                        <td>{song.songName}</td>
                        <td>{song.songArtist}</td>
                        <td>{song.songGenre}</td>
                        <td>{song.songRating}</td>
                    <td>
                        <button type="button" onClick={() => handleRemove(song.songId)}>Delete Song</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SongListDisplay;
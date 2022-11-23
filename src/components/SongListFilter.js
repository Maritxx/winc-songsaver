import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../actions/songFilterActions";

function SongListFilter() {
    const filter = useSelector(state => state.filter.selectedGenre);
    const dispatch = useDispatch();

    function handleSelect(event) {
        dispatch(setFilter(event.target.value));
    }

    return (
        <div className="song-filter__container">
            <select
                name="songFilter"
                value={filter}
                onChange={handleSelect}
            >
                <option value="">No filter</option>
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
        </div>
    )
}

export default SongListFilter;
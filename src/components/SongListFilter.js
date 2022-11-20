import { useDispatch, useSelector } from "react-redux";

function SongListFilter() {
    const genreFilter = useSelector(state => state.genreFilter);
    const dispatch = useDispatch();

    function handleSelect() {
        
    }

    return (
        <select
            name="songFilter"
            value={genreFilter}
            onChange={handleSelect}
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
    )
}
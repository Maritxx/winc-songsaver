import SongListForm from "./SongListForm.js";
import SongListFilter from "./SongListFilter.js";
import SongListDisplay from "./SongListDisplay.js";

function SongListOverview() {
    return (
        <main>
            <SongListForm />
            <SongListFilter />
            <SongListDisplay />
        </main>
    )
}

export default SongListOverview
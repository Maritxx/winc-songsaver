import SongListForm from "./SongListForm.js";
import SongListFilter from "./SongListFilter.js";
import SongListDisplay from "./SongListDisplay.js";

function SongListOverview() {
    return (
        <main className="twelveHundred">
            <h1>Winc Lil' Liedjeslijst</h1>
            <SongListForm />
            <SongListFilter />
            <SongListDisplay />
        </main>
    )
}

export default SongListOverview
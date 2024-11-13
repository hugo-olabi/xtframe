import SearchbarComp from "../components/Searchbar.comp";

routing.onget(import.meta, ()=>[
    h1("Games"),
    SearchbarComp({placeholder: "Search game..."})
])
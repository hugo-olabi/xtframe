import IconComp from "../components/Icon.comp";

routing.onget(import.meta, ()=>[
    h1("Welcome to Xt!"),
    h3("Here you can find projects, games and posts of your interest."),
    IconComp("roomandroidshopad")
])
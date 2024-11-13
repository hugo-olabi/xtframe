import TopbarComp from "./components/Topbar.comp";

render(document.body,
    TopbarComp(),
    router({
        expect: {
            params: {
                page: Number
            },
        },
        loading_elem: [{
            elem: ()=>h1("Loading..."),
            paths: ["/pages/Home.page.ts", "/pages/Projects.page", "/pages/Games.page", "/pages/Videos.page"]
        }]
    },
        route("/", "/pages/Home.page.ts"),
        route("/home", "/pages/Home.page.ts"),
        route('/projects', "/pages/Projects.page"),
        route('/projects/:project-id', "/pages/Project.page"),
        route('/games', "/pages/Games.page"),
        route('/videos', "/pages/Videos.page"),
        route("/**", "/pages/404.page.ts")
    )
)
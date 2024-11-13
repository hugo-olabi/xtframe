import SearchbarComp from "../components/Searchbar.comp";
import { FetchedData, fetchRecentProjects } from "../utils/api";

const projects = passive(div({id: "projects"}),async ()=>{
    //debugger
    let fetched: FetchedData = {data: [], count: 0};
    const page = routing.way[0].params["page"] || 1;

    try {
        fetched = await fetchRecentProjects(page);
        console.log("Result:", data);
        // Do something with the result here
    } catch (error) {
        console.error("Error:", error);
    }

    console.log(data)

    const elems = fetched.data.map((v)=>{
        return anchor({href: "/projects/" + v.id, class: "project-card"},
            span({style: {backgroundImage: "url(/icons/brokenimage.svg)"}}),
            h1(v.title),
            p(v.desc),
            i(new Date(v.time).toLocaleDateString('en-GB', { timeZone: 'UTC' }))
        )
    })

    elems.push(
        div({id: "page-selector"},
            button({
                class: page !== 1 ? "" : "disabled",
                onclick: ()=>{
                    routing.goto(`/projects?page=${page - 1}`)
                }
            },"Voltar"),
            em(`Página ${page} de ${Math.ceil(fetched.count / 5)}`),
            button({
                class: page !== Math.ceil(fetched.count / 5) ? "" : "disabled",
                onclick: ()=>{
                    routing.goto(`/projects?page=${page + 1}`)
                }
            },"Próxima")
        )
    )

    return elems;
});

routing.addListener(()=>projects.react())

routing.onget(import.meta, ()=>{
    projects.react()

    return [
        h1("Projects"),
        SearchbarComp({placeholder: "Search projects..."}),
        projects,

    ]
})
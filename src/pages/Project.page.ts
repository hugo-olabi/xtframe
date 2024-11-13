import MarkdownComp from "../components/Markdown.comp";
import { fetchProject } from "../utils/api"

routing.onget(import.meta,()=>{

    const loadel = div({"xtify-passive": "", class: "loading"},
        img({src: "/icons/brokenimage.svg", style: {width: "100%"}}),
        h1(..."Lorem ipsum dolor sit amet, consectetur adipiscing elit".split(" ").map((v)=>span(v))),
        p(..."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.".split(" ").map((v)=>span(`${v}`))),
        i("2023-01-01"),
        p(...
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend id felis non volutpat. Integer volutpat lorem ac libero vulputate, vel lobortis risus tincidunt. Ut suscipit fringilla nibh, in lobortis augue pellentesque in. Ut iaculis, justo vitae maximus laoreet, eros sapien accumsan orci, vitae vehicula quam dolor vitae justo. Vestibulum consectetur venenatis est vel molestie. Phasellus sed nunc a elit pulvinar semper ac ut augue. Integer vulputate velit ac risus tristique condimentum a ac turpis. Aenean justo ligula, hendrerit et consectetur vel, tristique eget lacus. Sed quis nunc lectus. Mauris tristique eleifend mi. Vivamus hendrerit leo orci, at consectetur elit accumsan non. Suspendisse eros nibh, interdum nec lacus vitae, commodo eleifend lacus. Curabitur faucibus, quam in tempus eleifend, diam enim mollis libero, at pretium velit augue sit amet dolor.

 Nunc pulvinar elementum magna ut consequat. Donec sed nunc consequat, rhoncus velit a, pellentesque diam. Sed maximus, neque et fringilla pulvinar, dolor libero interdum lectus, pulvinar cursus sem enim quis turpis. Etiam vulputate tortor urna, sit amet hendrerit nisl elementum at. Etiam id lectus metus. In finibus vitae lacus a semper. Mauris congue sem eu leo lobortis, consectetur feugiat purus vestibulum. Praesent tempor gravida libero sed placerat. Maecenas sit amet velit a lectus vestibulum lobortis. Nam pharetra eu ex sed rhoncus. Cras dignissim, velit id aliquam ultrices, lectus velit dictum nibh, sed tempor arcu odio euismod velit. Integer at elit elementum, dapibus est ac, vehicula odio.
        
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam porttitor ipsum arcu, eget aliquet neque suscipit sed. Morbi vitae quam et nisl mollis porta. Integer porttitor est quis dui semper, nec auctor mauris ullamcorper. Maecenas in ipsum ut neque tincidunt dictum non vitae est. Nam velit nunc, consequat pretium urna quis, fringilla consequat elit. Integer nec viverra urna. Quisque tellus odio, rutrum a sem porttitor, vulputate fermentum odio. Aliquam erat volutpat.
        
Duis leo turpis, interdum eget rutrum sed, faucibus nec ante. Vestibulum sed velit id nibh rutrum fermentum. Nulla nec neque id arcu efficitur placerat. Aliquam molestie, nulla eu facilisis semper, sem mi mollis elit, vel posuere odio magna ut odio. Etiam interdum hendrerit nulla nec sagittis. Proin dapibus eros et orci iaculis interdum. Nam pretium dignissim rhoncus. Etiam quis mattis massa, convallis dapibus erat. Mauris varius, augue eget tempor tempor, quam risus sollicitudin enim, sit amet faucibus tellus felis nec lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dignissim ex magna, tincidunt consequat libero blandit sed.
        
Fusce a enim dui. Aliquam magna diam, gravida ac condimentum id, pretium condimentum est. Quisque vulputate dolor diam, molestie placerat risus auctor vel. Nunc vulputate suscipit velit sit amet mattis. Vivamus in nunc purus. Vestibulum justo purus, iaculis a fermentum sit amet, consectetur in dui. Nunc eget dolor non turpis venenatis maximus vel cursus dui. `.split(" ").map((v)=>span(`${v}`)))
    )

    const el = passive(async ()=>{
        const project = await fetchProject(routing.way[0].args["project-id"]);

        loadel.remove()

        if(project){

            return [
                img({src: "/icons/brokenimage.svg", style: {width: "100%"}}),
                h1(project.title),
                p(project.desc),
                i(new Date(project.time).toLocaleDateString()),
                MarkdownComp(project.markdown)
            ]
        }else{
            return [h1("Project not found")]
        }
    })

    el.react()

    return [
        loadel,
        el
    ]
})
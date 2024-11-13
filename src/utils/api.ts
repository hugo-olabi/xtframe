import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    "https://yvqwimapbxndtpwtlsfn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cXdpbWFwYnhuZHRwd3Rsc2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExODAzNDIsImV4cCI6MjA0Njc1NjM0Mn0.pP446H9IA6K4KsbR14PabctyY3iEMzYS2tJxwfYi0Gs"
)


export interface ProjectCard {
    title: string,
    desc: string,
    time: number,
    id: string,
}

export interface Project extends ProjectCard {
    markdown: string
}

export interface FetchedData {
    data: ProjectCard[];
    count: number;
}

const pageSize = 5;

export async function fetchRecentProjects(page: number): Promise<FetchedData> {
    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    const { data, count, error } = await supabase
        .from('projects')
        .select('id, title, desc, time', {count: "exact"})
        .order('time', { ascending: false })
        .range(start, end);

    if (error) {
        console.error("Error fetching projects:", error);
        return {data: [], count: 0};
    }

    return {data: data as ProjectCard[], count: count as number};
}

export async function fetchProject(id: string) : Promise<Project | null> {
    const { data, error } = await supabase
        .from('projects')
        .select('id, title, desc, time, markdown')
        .eq('id', id)
        .single()

    if (error) {
        console.error("Error fetching projects:", error);
        return null;
    }

    return data as Project;

}
import { createClient } from "@supabase/supabase-js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCYrYiuKxO5sgZkvn1NvT3tp2gMrpJipnI");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Make a randow news and return in this json format please dont use code blocks, make sure of using unicode in character which can break json: {title:\"TITLE\", desc:\"DESCRIPTION\", markdown:\"MARKDOWN\"}";

const result = await model.generateContent(prompt);
const news = JSON.parse(result.response.text());

console.log(news, result.response.text())


const supabase = createClient(
    "https://yvqwimapbxndtpwtlsfn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cXdpbWFwYnhuZHRwd3Rsc2ZuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTE4MDM0MiwiZXhwIjoyMDQ2NzU2MzQyfQ.Xj7cYPit4a3c6P-De66pitM7O56bWAUF3vFYO89Ennc"
)

const parsedNews = JSON.parse(result.response.text().replace(/[\n]/g, ''));
await supabase.from("projects").insert(parsedNews)
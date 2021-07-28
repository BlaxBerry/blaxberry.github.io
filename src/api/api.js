import axios from "axios";

// get all skill list
export const getAllSkillList = axios.get("./data/skills.json");


// get all works list
export const getAllWorkList = axios.get("./data/works.json");
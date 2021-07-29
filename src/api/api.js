import axios from "axios";

// get all skill list
export const getAllSkillList = axios.get("./data/skills.json");


// get all PC works list
export const getAllWorkList = axios.get("./data/works.json");

// get all Mobile works list
export const getAllWorkMobileList = axios.get("./data/worksMobile.json");
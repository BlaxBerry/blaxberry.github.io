import axios from "axios";

// get all skill list
export const getAllSkillList = axios.get("./data/skills.json");


// get all PC works list
export const getAllWorkList = axios.get("./data/works.json");

// get all Mobile works list
export const getAllWorkMobileList = axios.g






export const getSkillFront = axios.get("./data/skills/front.json")
export const getSkillBack = axios.get("./data/skills/back.json");
export const getSkillOther = axios.get("./data/skills/other.json");
import axios from "axios";


// Skills
export const getSkillFront = axios.get("./data/skills/front.json")
export const getSkillBack = axios.get("./data/skills/back.json");
export const getSkillOther = axios.get("./data/skills/other.json");

// Works
export const getWorksPC = axios.get("./data/works/PC.json")
export const getWorksMobile = axios.get("./data/works/Mobile.json")

// Skill's Description
export const getSkillDescriptions = axios.get("./data/skills/descriptions.json")
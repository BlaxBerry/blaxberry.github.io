import {
    getSkillFront,
    getSkillBack,
    getSkillOther,
} from "@/api/api";

export default {

    data() {
        return {
            // front
            FRONT_TYPE_LAYOUT: [],
            FRONT_TYPE_JS: [],
            FRONT_TYPE_VUE: [],
            FRONT_TYPE_REACT: [],
            // back
            BACK_TYPE_LANG: [],
            BACK_TYPE_SERVER: [],
            BACK_TYPE_DB: [],
            // other
            OTHER_TYPE_DEVTOOL: [],
            OTHER_TYPE_APIQUERY: [],
            OTHER_TYPE_APP: [],
        };
    },

    methods: {
        async init() {
            // front
            const FRONT = (await getSkillFront).data;
            // layout
            this.FRONT_TYPE_LAYOUT = FRONT.filter((item) => item.type == "LAYOUT" && item.showAsMain);
            // js 
            this.FRONT_TYPE_JS = FRONT.filter((item) => item.type == "JS" && item.showAsMain);
            // vue
            this.FRONT_TYPE_VUE = FRONT.filter((item) => item.type == "VUE" && item.showAsMain);
            // react
            this.FRONT_TYPE_REACT = FRONT.filter((item) => item.type == "REACT" && item.showAsMain);

            // back
            const BACK = (await getSkillBack).data;
            // lang
            this.BACK_TYPE_LANG = BACK.filter(item => item.type == "LANG" && item.showAsMain)
            // server
            this.BACK_TYPE_SERVER = BACK.filter(item => item.type == "SERVER" && item.showAsMain)
            // db
            this.BACK_TYPE_DB = BACK.filter(item => item.type == "DB" && item.showAsMain)

            // other
            const OTHER = (await getSkillOther).data;
            // dev tool
            this.OTHER_TYPE_DEVTOOL = OTHER.filter(item => item.type == "DEVTOOL" && item.showAsMain)
            // api query
            this.OTHER_TYPE_APIQUERY = OTHER.filter(item => item.type == "APIQUERY" && item.showAsMain)
            // app
            this.OTHER_TYPE_APP = OTHER.filter(item => item.type == "APP" && item.showAsMain)
        },
    },

    created() {
        this.init();
    },
}
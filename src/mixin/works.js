import {
    getWorksPC,
    getWorksMobile,
} from "@/api/api";

export default {
    data() {
        return {
            tabs: ["PC", "Mobile"],
            tabItems: [],
            WORKS_ALL: [],
        }
    },

    methods: {
        async init() {
            const PC = (await getWorksPC).data
            const MOBILE = (await getWorksMobile).data
            this.WORKS_ALL = [...PC, ...MOBILE]
            this.tabItems = [
                {
                    name: "PC Works",
                    content: [...PC],
                },
                {
                    name: "Mobile Works",
                    content: [...MOBILE],
                },
            ]
        }
    },

    created() {
        this.init()
    }

}
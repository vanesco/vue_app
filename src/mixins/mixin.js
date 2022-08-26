import { EventBus } from "../main";

export const modalPopMixin = {
    data() {
        return {
            isShow: false
        };
    },
    methods: {
        openModal() {
            this.isShow = true;
        },
        closeModal() {
            EventBus.$emit("modalPopClose", this.isShow);
        }

    },
};
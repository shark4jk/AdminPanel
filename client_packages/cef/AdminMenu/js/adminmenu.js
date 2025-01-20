<!-- Было внесено пару изменений - shark4jk -->

let AdminMenu = new Vue({
    el: "#admin",
    data: {
        enable: true,
        page: 0,
        main: {
            inputGlobal: "",
        },
        player: {
            inputId: null,
            inputMessage: "",
            inputDim: null,
            inputPunishTime: null,
            inputPubishReason: "",
        },
    },
    methods: {
        Open() {
            this.enable = true;
            this.page = 0
            if (typeof mp !== "undefined") {
                mp.trigger("openAdminPanel");
            }
        },
        changePage(index) {
            this.page = index;
        },
        useCommand(commandName) {
            if (typeof mp !== "undefined") {
                mp.invoke("command", commandName);
            }
        },
        Close() {
            this.enable = false;

            if (typeof mp !== "undefined") {
                mp.trigger("closeAdminPanel");
            }
        }
    }
});
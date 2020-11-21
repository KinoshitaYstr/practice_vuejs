var app = new Vue({
    el: "#app",
    data: {
        message: "Hello World",
        message2: {
            count: -101
        },
        message3: [
            {name: "neko", data: "nya--"},
            {name: "same", data: "hoo--"},
            {name: "inu",  data: "wa--n"}
        ],
        message4: "first",
        message5: [],
        message6: "pp",
        message7: "",
        message7_2: ""
    },
    methods: {
        foo: function() {
            alert(this.message4);
        }
    },
    computed: {
        updateMessage6: function() {
            return this.message6+this.message6+this.message6;
        }
    },
    watch: {
        message7: function() {
            this.message7_2 += this.message7;
        }
    }
});

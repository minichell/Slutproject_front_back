new Vue ({

    el: "#goal",
    data () {
        return{
            taskList: [],
            task: "",
            color: ""
        }
    },
    mounted(){
        if(localStorage.getItem('taskList')){
            try{
                this.taskList = JSON(localStorage.getItem('taskList'));
            }catch(e){
                localStorage.removeItem('taskList');
            }
        }
    },

    methods: {
        addTask: function () {
            if(this.task != ""){
                this.taskList.push(this.task);
                this.task = "";
                this.color = "#fff";
                this.saveTasks();
            } else{
                this.color = "#e74c3c";
                this.saveTasks();
            }
        },

        removeTask:function(index){
            this.taskList.splice(index, 1);
            this.saveTasks();
        },

        saveTasks() {
            let parsed = JSON.stringify(this.taskList);
            localStorage.setItem('taskList', parsed);
        }
    }
})
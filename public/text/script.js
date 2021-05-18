new Vue ({

    el: "#goal",
    data: {
        goals:[],
        newGoal:null,
      },
      mounted() {
        if(localStorage.getItem('goals')) {
          try {
            this.goals = JSON.parse(localStorage.getItem('goals'));
          } catch(e) {
            localStorage.removeItem('goals');
          }
        }
      },
  
      methods: {
        addGoal() {
          // ensure they actually typed something
          if(!this.newGoal) return;
          this.goals.push(this.newGoal);
          this.newGoal = '';
          this.saveGoals();
        },
        removeGoal(x) {
          this.goals.splice(x,1);
          this.saveGoals();
        },
        saveGoals() {
          let parsed = JSON.stringify(this.goals);
          localStorage.setItem('goals',parsed);
        }
      }
})
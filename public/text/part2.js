new Vue ({

  el: "#day2",
  data: {
      days_2:[],
      newDay_2:null,
    },
    mounted() {
      if(localStorage.getItem('days_2')) {
        try {
          this.days_2 = JSON.parse(localStorage.getItem('days_2'));
        } catch(e) {
          localStorage.removeItem('days_2');
        }
      }
    },

    methods: {
      addDay_2() {
        // ensure they actually typed something
        if(!this.newDay_2) return;
        this.days_2.push(this.newDay_2);
        this.newDay_2 = '';
        this.saveDays_2();
      },
      removeDays_2(x) {
        this.days_2.splice(x,1);
        this.saveDays_2();
      },
      saveDays_2() {
        let parsed = JSON.stringify(this.days_2);
        localStorage.setItem('days_2',parsed);
      }
    }
})
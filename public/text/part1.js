new Vue ({

  el: "#day1",
  data: {
      days:[],
      newDay:null,
    },
    mounted() {
      if(localStorage.getItem('days')) {
        try {
          this.days = JSON.parse(localStorage.getItem('days'));
        } catch(e) {
          localStorage.removeItem('days');
        }
      }
    },

    methods: {
      addDay() {
        // ensure they actually typed something
        if(!this.newDay) return;
        this.days.push(this.newDay);
        this.newDay = '';
        this.saveDays();
      },
      removeDays(x) {
        this.days.splice(x,1);
        this.saveDays();
      },
      saveDays() {
        let parsed = JSON.stringify(this.days);
        localStorage.setItem('days',parsed);
      }
    }
})
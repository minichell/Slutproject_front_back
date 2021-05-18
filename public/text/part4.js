new Vue ({

    el: "#day4",
    data: {
        days_4:[],
        newDay_4:null,
      },
      mounted() {
        if(localStorage.getItem('days_4')) {
          try {
            this.days_4 = JSON.parse(localStorage.getItem('days_4'));
          } catch(e) {
            localStorage.removeItem('days_4');
          }
        }
      },
  
      methods: {
        addDay_4() {
          // ensure they actually typed something
          if(!this.newDay_4) return;
          this.days_4.push(this.newDay_4);
          this.newDay_4 = '';
          this.saveDays_4();
        },
        removeDays_4(x) {
          this.days_4.splice(x,1);
          this.saveDays_4();
        },
        saveDays_4() {
          let parsed = JSON.stringify(this.days_4);
          localStorage.setItem('days_4',parsed);
        }
      }
  })
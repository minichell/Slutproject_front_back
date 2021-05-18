new Vue ({

    el: "#day3",
    data: {
        days_3:[],
        newDay_3:null,
      },
      mounted() {
        if(localStorage.getItem('days_3')) {
          try {
            this.days_3 = JSON.parse(localStorage.getItem('days_3'));
          } catch(e) {
            localStorage.removeItem('days_3');
          }
        }
      },
  
      methods: {
        addDay_3() {
          // ensure they actually typed something
          if(!this.newDay_3) return;
          this.days_3.push(this.newDay_3);
          this.newDay_3 = '';
          this.saveDays_3();
        },
        removeDays_3(x) {
          this.days_3.splice(x,1);
          this.saveDays_3();
        },
        saveDays_3() {
          let parsed = JSON.stringify(this.days_3);
          localStorage.setItem('days_3',parsed);
        }
      }
  })
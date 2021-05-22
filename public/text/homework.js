new Vue ({

    el: "#work",
    data: {
        works:[],
        newWork:null,
      },
      mounted() {
        if(localStorage.getItem('works')) {
          try {
            this.works = JSON.parse(localStorage.getItem('works'));
          } catch(e) {
            localStorage.removeItem('works');
          }
        }
      },
  
      methods: {
        addWork() {
          // ensure they actually typed something
          if(!this.newWork) return;
          this.works.push(this.newWork);
          this.newWork = '';
          this.saveWork();
        },
        removeWork(x) {
          this.works.splice(x,1);
          this.saveWorks();
        },
        saveWorks() {
          let parsed = JSON.stringify(this.works);
          localStorage.setItem('works',parsed);
        }
      }
})
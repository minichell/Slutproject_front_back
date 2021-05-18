const app = new Vue({
    el: '#date',
    data: {
      name: '',
      name2: '',
      name3:'',
      name4: '',
      name5: ''
    },
    mounted() {
      if (localStorage.name) {
        this.name = localStorage.name;
      }
      if (localStorage.name2) {
        this.name2 = localStorage.name2;
      }
      if (localStorage.name3) {
        this.name3 = localStorage.name3;
      }
      if (localStorage.name4) {
        this.name4 = localStorage.name4;
      }
      if (localStorage.name5) {
        this.name5 = localStorage.name5;
      }
      
    },
    watch: {
      name(newName) {
        localStorage.name = newName;
      },
      name2(newName2) {
        localStorage.name2 = newName2;
      },
      name3(newName3) {
        localStorage.name3 = newName3;
      },
      name4(newName4) {
        localStorage.name4 = newName4;
      },
      name5(newName5) {
        localStorage.name5 = newName5;
      },
     
    }
  });
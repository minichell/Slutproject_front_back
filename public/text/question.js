const app = new Vue({
    el: '#question',
    data: {
      name_1: '',
      name_2: '',
      name_3
    },
    mounted() {
      if (localStorage.name_1) {
        this.name_1 = localStorage.name_1;
      } 
      if (localStorage.name_2) {
        this.name_2 = localStorage.name_2;
      } 
      if (localStorage.name_3) {
        this.name_3 = localStorage.name_3;
      } 
    },
    watch: {
      name_1(newName_1) {
        localStorage.name_1 = newName_1;
      },
      name_2(newName_2) {
        localStorage.name_2 = newName_2;
      },
      name_3(newName_3) {
        localStorage.name_3 = newName_3;
      },
    }
  });
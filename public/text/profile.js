const app = new Vue({
    el: '#profile',
    data: {
      name6: '',
      name7: '',
      name8: '',
      name9: '',
      name10: '',
      name11: '',
      name12: '',
      name13: '',
      name14: '',
      name15: '',
      name16: ''
    },
    mounted() {
      if (localStorage.name6) {
        this.name6 = localStorage.name6;
      }
      if (localStorage.name7) {
        this.name7 = localStorage.name7;
      }
      if (localStorage.name8) {
        this.name8 = localStorage.name8;
      }
      if (localStorage.name9) {
        this.name9 = localStorage.name9;
      }
      if (localStorage.name10) {
        this.name10 = localStorage.name10;
      }
      if (localStorage.name11) {
        this.name11 = localStorage.name11;
      }
      if (localStorage.name12) {
        this.name12 = localStorage.name12;
      }
      if (localStorage.name13) {
        this.name13 = localStorage.name13;
      }
      if (localStorage.name14) {
        this.name14 = localStorage.name14;
      }
      if (localStorage.name15) {
        this.name15 = localStorage.name15;
      }
      if (localStorage.name16) {
        this.name16 = localStorage.name16;
      }
    },
    watch: {
      name6(newName6) {
        localStorage.name6 = newName6;
      },
      name7(newName7) {
        localStorage.name7 = newName7;
      },
      name8(newName8) {
        localStorage.name8 = newName8;
      },
      name9(newName9) {
        localStorage.name9 = newName9;
      },
      name10(newName10) {
        localStorage.name10 = newName10;
      },
      name11(newName11) {
        localStorage.name11 = newName11;
      },
      name12(newName12) {
        localStorage.name12 = newName12;
      },
      name13(newName13) {
        localStorage.name13 = newName13;
      },
      name14(newName14) {
        localStorage.name14 = newName14;
      },
      name15(newName15) {
        localStorage.name15 = newName15;
      },
      name16(newName16) {
        localStorage.name16 = newName16;
      },
    }
  });

  
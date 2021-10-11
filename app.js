const app = Vue.createApp({
  data() {
    return {
      name: "Kamil",
      age: 41,
      link: "https://www.treehugger.com/thmb/AvxBzQPlEy_uZU4JUAcWr2p-OEU=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2015__03__shutterstock_661154743-4c2af922fd774f3981816ff8e429ff2b.jpg",
      input: {
          name: "Camelleon"
      }
    };
  },
  methods: {
    ageInFiveYears(age) {
      if (isNaN(age)) {
        return "Error:" + age + " is not a number.";
      } else {
        return age + 5;
      }
    },
    randomNumber() {
      const randomNumber = Math.round(Math.random());
      return randomNumber;
    },
  },
});

app.mount("#assignment");

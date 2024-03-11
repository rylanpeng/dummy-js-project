AFRAME.registerComponent("test-aframe-component", {
  schema: {},
  init: function () {
    this.number = 0;
    this.count = 0;
  },
  start: function () {},
  tick: function () {
    this.count++;
    if (this.count == 100) {
      console.log(`emit event`);
      this.el.emit(`test-event-${this.number}`);
      if (this.number == 2) {
        this.number = 0;
      } else {
        this.number++;
      }
      this.count = 0;
    }
  },
  pause: function () {},
  play: function () {},
});

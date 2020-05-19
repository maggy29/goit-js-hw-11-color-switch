'use strict'

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const refs = {
    colorSwitcher: document.querySelector('body'),
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
};

const switcher = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.timerId = setInterval(() => {
            refs.colorSwitcher.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        }, 1000);
    },
    stop() {
        clearInterval(this.timerId);
        this.isActive = false;
    }
};

refs.start.addEventListener('click', switcher.start.bind(switcher));
refs.stop.addEventListener('click', switcher.stop.bind(switcher));

import Tooltip from './ui-library/tooltip';
import Dropdown from './ui-library/dropdown';
import Tabs from './ui-library/tabs';
import Snackbar from './ui-library/snackbar';


// create tooltip
// 1. Create a tooltip from the Tooltip class
// 2. pass the element u want to add the tooltip to
const newTooltip = new Tooltip(document.querySelector(".tooltip"));
// 3. cool the init method on the new instance of Tooltip class
newTooltip.init();


// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});


// create tabs 
const tabs = new Tabs(document.querySelector(".tabs")).init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

// trigger the show method on the buttun

const button = document.querySelector(".snackbar-trigger");
button.addEventListener("click", () => {
    snackbar.show("you clicked the button");
})
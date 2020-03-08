import Tooltip from './ui-library/tooltip';


// 1. Create a tooltip from the Tooltip class
// 2. pass the element u want to add the tooltip to
const newTooltip = new Tooltip(document.querySelector(".tooltip"));
// 3. cool the init method on the new instance of Tooltip class
newTooltip.init();

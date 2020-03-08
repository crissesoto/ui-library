import './styles/tabs.css';

class Tabs {
  constructor(container){
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
    this.contents = container.querySelectorAll('.content');
  }
  init(){
    this.tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        if(e.target.tagName === 'LI'){
          this.toggleTabs(e);
          this.toggleContent(e);
        }
      });
    });
  }
  toggleTabs(e){
    // remove current active classes
    this.tabs.forEach(tab => tab.classList.remove('active'));
    // add new active class
    e.target.classList.add('active');
  }
  toggleContent(e){
    // remove current active classes
    this.contents.forEach(item => {
      item.classList.remove('active');
    });
    // add active class to whatever the data-target was
    const active = e.target.getAttribute('data-target');
    const activeContent = this.container.querySelector(active); //ex. active = #about
    activeContent.classList.add('active');
  }
}

export { Tabs as default };
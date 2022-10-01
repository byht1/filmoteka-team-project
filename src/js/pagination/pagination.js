import { refs } from "../refs";

const leftBtn = document.createElement('button');
leftBtn.classList.add('pagination-item');
leftBtn.classList.add('prev');

const rightBtn = document.createElement('button');
rightBtn.classList.add('pagination-item');
rightBtn.classList.add('next');

export default class Pagination {
  constructor(root, options) {
    this.root = root;
    this.options = options;
    this.current = this.options.curr;
    this.items = [];
    
    this.init();
  }

  init() {
    this.root.classList.add('pagination-list');
    this.render();
  }
  
  destroy() {
    this.root.classList.remove('pagination-list');
    this.removeItems();
  }
  
  removeItems() {
    this.items.forEach(item => item.remove());
    this.items = [];
  }

  render() {
    this.removeItems();
    
    const isCollapsed = this.options.slots <= 6;
    const slots = Math.min(this.options.slots, this.options.total);
    const ellipsisPos = [];
    let i, showFirst, showLast;
    
    // Center active page in middle of pagination
    let start = this.current - Math.round(this.options.slots / 2) + 1;
    
    // If pagination values exceed the expected range,
    // Fix the range on start or end
    const overflow = (start + slots - 1) - this.options.total;
    if (overflow > 0) start -= overflow; 
    if (start <= 0) start -= start - 1;
      
    // Set end slot
    const end = start + slots - 1;
    
    // Check if it should have ellipsis and define sllipsis position
    const hasEllipsisLeft = start > 1;
    const hasEllipsisRright = end < this.options.total;
    if (hasEllipsisLeft) ellipsisPos.push(isCollapsed ? start : start + 1);
    if (hasEllipsisRright) ellipsisPos.push(isCollapsed ? end : end - 1);
    
    

    for (i = start; i <= end; i++) {
      showFirst = !isCollapsed && i == start && hasEllipsisLeft;
      showLast = !isCollapsed && i == end && hasEllipsisRright;
      
      if (showFirst) {
        this.renderElement(1);
      } else if (ellipsisPos.includes(i)) {
        this.renderElement('...');
      } else if (showLast) {
        this.renderElement(this.options.total);
      } else {
        this.renderElement(i);
      }
    }

    refs.paginationList.prepend(leftBtn);
    refs.paginationList.append(rightBtn);
  }

  renderElement(value) {
    const isPage = typeof value === 'number';
    const el = document.createElement(isPage ? 'button' : 'div');
    el.classList.add('pagination-item');             
    el.textContent = value;
    
    if (isPage) {
      el.classList.add('pagination-button');             
      el.addEventListener('click', () => {
          this.current = value;
          this.options.onChange(value);
          this.render();
      });
      
      if (value == this.current) {
        el.classList.add('active');   
      }
    }
    return this.items.push(this.root.appendChild(el));
  }

  prevPage() {
    leftBtn.addEventListener('click', () => {
      if (this.current === 1) {
        return;
      }
      this.current -= 1;
    this.options.onChange(this.current);
    this.render();
    })
  }

  nextPage() {
    rightBtn.addEventListener('click', () => {
      if (this.current === this.options.total) {
        return;
      }
      this.current += 1;
      this.options.onChange(this.current);
      this.render();
    })
  }
}
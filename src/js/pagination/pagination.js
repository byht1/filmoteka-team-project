import { refs } from "../refs";

const prevBtn = document.createElement('button');
prevBtn.classList.add('pagination-item');
prevBtn.classList.add('prev');

const nextBtn = document.createElement('button');
nextBtn.classList.add('pagination-item');
nextBtn.classList.add('next');

export default class Pagination {
  constructor(root, options) {
    this.root = root;
    this.options = options;
    this.current = this.options.firstCurrentPage;
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
    
    let start = this.current - Math.round(this.options.slots / 2) + 1;
    
    const overflow = (start + slots - 1) - this.options.total;
    if (overflow > 0) start -= overflow; 
    if (start <= 0) start -= start - 1;
      
    const end = start + slots - 1;
    
    const hasEllipsisLeft = start > 1;
    const hasEllipsisRight = end < this.options.total;
    if (hasEllipsisLeft) ellipsisPos.push(isCollapsed ? start : start + 1);
    if (hasEllipsisRight) ellipsisPos.push(isCollapsed ? end : end - 1);

    for (i = start; i <= end; i++) {
      showFirst = !isCollapsed && i == start && hasEllipsisLeft;
      showLast = !isCollapsed && i == end && hasEllipsisRight;
      
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
    
    if (this.items.length === 0 || this.items.length === 1) {
      return;
    } 
    this.addArrowPageNavigation();
  }

  addArrowPageNavigation() {
    refs.paginationList.prepend(prevBtn);
    refs.paginationList.append(nextBtn);
  }

  renderElement(value) {
    const isPage = typeof value === 'number';
    const el = document.createElement(isPage ? 'button' : 'span');
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
    prevBtn.addEventListener('click', () => {
      if (this.current === 1) {
        return;
      }
      this.current -= 1;
      this.options.onChange(this.current);
      this.render();
    })
  }

  nextPage() {
    nextBtn.addEventListener('click', () => {
      if (this.current === this.options.total) {
        return;
      }
      this.current += 1;
      this.options.onChange(this.current);
      this.render();
    })
  }
}
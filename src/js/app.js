class Collapse {
  constructor(className) {
    this.className = className;
    this.listener();
  }

  listener() {
    const btn = document.querySelectorAll(`.${this.className} .btn`);
    btn.forEach(btn => {
      btn.addEventListener('click', () => {
        const body = btn.closest('.' + this.className).querySelector('.body');
        if (body.classList.contains('active')) {
          body.style.maxHeight = '';
          body.classList.remove('active');
          
          return
        }
        body.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
        
      });
    })
  }
}

const collapse = new Collapse('collapse');
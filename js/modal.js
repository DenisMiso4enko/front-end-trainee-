export class Modal {
  constructor(text) {
    this.text = text;

    this.init();
  }

  init() {
    this.createMarkUp();
    this.modal = document.getElementById("myModal");
    this.closeBtn = this.modal.querySelector("#close");
    this.closeBtn2 = this.modal.querySelector("#close2");

    this.attachEvents();
  }

  createMarkUp() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div id="myModal" class="modal">
              <div class="modal-content">
                <h2 class="modal-title">SUCCESS!</h2> 
                <span class="close" id="close">&times;</span>
                <p class="modal-text">${this.text}</p>
                <button class="btn-rounded btn-close" id="close2">Close</button>
              </div>
          </div>`
    );
  }

  attachEvents() {
    this.closeFn = this.closeFn.bind(this);

    this.handleClick = this.handleClick.bind(this);

    this.closeBtn.addEventListener("click", this.closeFn);
    this.closeBtn2.addEventListener("click", this.closeFn);
    window.addEventListener("click", this.handleClick);
  }
  handleClick(e) {
    if (e.target === this.modal) {
      this.closeFn();
    }
  }
  closeFn() {
    this.dettachEvents();
    this.modal.remove();
    this.modal = null;
  }

  dettachEvents() {
    this.closeBtn.removeEventListener("click", this.closeFn);
    this.closeBtn2.removeEventListener("click", this.closeFn);
    window.removeEventListener("click", this.handleClick);
  }
}

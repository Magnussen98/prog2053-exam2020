import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
      checkForUser: { type: Function }
    };
  }

  constructor(){
    super();
    this.checkForUser();
  }

  render(){
    return html `
    <h1 id="${console.log(this.user)}">Delete</h1>
    <form>
      <div class="email">
        <label for="email">Email</label>
        <input type="email" id="uname" class="uname" value="${this.user.uname}">
      </div>
      <div class="firstName">
        <label for="firstName">First name</label>
        <input type="text" id="firstName" class="firstName" value="${this.user.firstName}">
      </div>
      <div class="lastName">
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" class="lastName" value="${this.user.lastName}">
      </div>
    </form>
    `
  }

}
customElements.define('edit-user', EditUser);

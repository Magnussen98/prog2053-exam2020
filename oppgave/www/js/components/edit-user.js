import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
      displayUser: { type: String },
      changePwd: { type: String }
    };
  }

  constructor(){
    super();
    this.displayUser = "none"
    this.changePwd ="noChange"
  }

  checkForUser(){
    if (this.user.uid)
      this.displayUser = "block"
  }

    

  render(){
    return html `
    <head>
      <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    </head>
    <div class="container ${this.checkForUser()}" style="display: ${this.displayUser}">
      <form class="userForm" method="POST" style="width: 40%">
          <div class="email">
            <label for="email">Email</label>
            <input type="email" id="uname" class="uname" value="${this.user.uname}">
            <input type="hidden" id="uid" class="uid" value="${this.user.uid}">
          </div>
          <div class="firstName">
            <label for="firstName">First name</label>
            <input type="text" id="firstName" class="firstName" value="${this.user.firstName}">
          </div>
          <div class="lastName">
            <label for="lastName">Last name</label>
            <input type="text" id="lastName" class="lastName" value="${this.user.lastName}">
          </div>
        <!--  <button class="change-password btn btn-sm btn-primary mt-2" id="changePassword" @onclick="${this.changePwd = 'block'}" style="display">Change password</button>   -->
          <div class="oldpwd">
            <label for="oldpwd">Old password</label>
            <input type="text" id="oldpwd" class="oldpwd" value="">
          </div>
          <div class="pwd">
            <label for="pwd">New password</label>
            <input type="password" id="pwd" class="pwd" value="">
          </div>
          <div class="confPwd">
            <label for="confPwd">Confirm password</label>
            <input type="password" id="confPwd" class="confPwd" value="">
          </div>
      </form>
    </div>

    `
  }

  changeUser(){
    var data = new FormData(e.target.form)

    fetch('/api/updateUser.php', {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(data => {
      if (data.status == 'success')
        console.log("The user was updated successfully!")
      else
        console.log("Something whent wrong. The user was not updated!")
      
    })

   
  }

  

}
customElements.define('edit-user', EditUser);

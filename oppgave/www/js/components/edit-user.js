import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
      displayUser: { type: String },
    };
  }

  constructor(){
    super();
    this.displayUser = "none"
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
      <form class="userForm" method="POST" style="width: 60%">
          <div class="email d-flex flex-column mt-2 ps-0">
            <label for="email">Email</label>
            <input type="email" id="uname" class="uname" value="${this.user.uname}" style="width: 70%" required>
          </div>
          <div class="firstName d-flex flex-column mt-2 ps-0">
            <label for="firstName">First name</label>
            <input type="text" id="firstName" class="firstName" value="${this.user.firstName}" style="width: 70%" required>
          </div>
          <div class="lastName d-flex flex-column mt-2 ps-0">
            <label for="lastName">Last name</label>
            <input type="text" id="lastName" class="lastName" value="${this.user.lastName}" style="width: 70%" required>
          </div>
        
          <div class="oldpwd d-flex flex-column mt-2 ps-0">
            <label for="oldpwd">Old password</label>
            <input type="text" id="oldpwd" class="oldpwd" value="" style="width: 70%">
          </div>
          <div class="pwd d-flex flex-column mt-2 ps-0">
            <label for="pwd">New password</label>
            <input type="password" id="pwd" class="pwd" value="" style="width: 70%">
          </div>

          <div>
            <button class="btn btn-sm btn-success mt-3 center" @click="${(e) => this.changeUser(e)}">Change user</button>
          </div>
      </form>


    </div>

    `
  }

    // Change the user!
  changeUser(e){
    e.preventDefault();     // Prevents from auto submitting

    
    var fData = new FormData(e.target.form)

    fData.append("uid", this.user.uid)

    console.log(Array.from(fData))
    

    fetch('/api/updateUser.php', {
      method: 'POST',
      body: fData
    }).then(res => res.json())
    .then(data => {
      if (data.status == 'success')
        console.log("The user was updated successfully!")
      else{
        console.log("The user was not updated!")
        console.log(data)
      }
      
    })
  }

  

}
customElements.define('edit-user', EditUser);

import React from 'react'
import './from.css'

function Form() {
  return (
    <div>
         
<h3>INT Contact Form</h3>

<div class="container">
  <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter your first name" onsubmit="validateForm()" />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter last name here"/>

    <label for="email">Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter email address"/>

    <label for="contact">Contact Number</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter your contact number"/>


    <label for="country">Gender</label>
    <select id="country" name="country">
      <option value="australia">Male</option>
      <option value="canada">Female</option>
    </select>

    <input type="submit" value="Submit"/>
  </form>
</div>

    </div>
  )
}

export default Form
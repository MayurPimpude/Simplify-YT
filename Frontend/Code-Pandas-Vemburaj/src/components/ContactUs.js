import React from 'react'

const ContactUs = () => {
  return (
    <div class="d-flex justify-content-center align-self-center my-4">
      <form>
        <div class="col my-2">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" placeholder="Rahul"/>
        </div>
        <div class="col my-2">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" placeholder="Saini"/>
        </div>
        <div class="form-group my-2">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
        </div>
  
        <div class="form-group my-2">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary my-2">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs
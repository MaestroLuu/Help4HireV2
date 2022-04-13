import React from 'react';

export default function Contact() {
  
  return (
    <div className='d-flex justify-content-center'>
      <div className='col-sm-5 shadow p-3 mb-5 bg-body rounded mt-2'>
        <form>
          <div>
            <div class="mb-3">
              <h1 className='text-center'>Contact</h1>
              <label for="name" class="form-label">Name</label>
                <input type="name" class="form-control" id="input" placeholder="Enter your first and last name" required/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" required/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Please fill out your comments or concerns.' required></textarea>
            </div>
          </div>
          <button type="click" className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  );
}

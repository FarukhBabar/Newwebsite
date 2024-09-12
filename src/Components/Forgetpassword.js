import React, { useState } from 'react';
import axios from 'axios';
// import './Forget.css';
import { useNavigate } from 'react-router-dom';

const Forgetpassword = () => {
  const [email, setEmail] = useState('');
 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.homeessentialshive.co.uk/request-reset-password', { email });
      alert(response.data.Message);
      navigate("/verifyotp")
    } catch (error) {
      alert('Error: ' + error.response.data.Message);
    }
  };


  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Reset password</h1>
              <p className="lead">Enter your email to reset your password.</p>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="m-sm-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                       value={email} onChange={(e) => setEmail(e.target.value)} required
                      />
                    </div>
                    <div className="text-center mt-3">
                      <button type="submit" className="btn btn-lg btn-primary">Reset password</button>
                    </div>
                  </form>
                  {/* {message && <div className="alert alert-info mt-3">{message}</div>} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;

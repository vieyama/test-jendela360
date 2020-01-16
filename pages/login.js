import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Nav from '../components/nav'
import Swal from "sweetalert2";
import Router from 'next/router'
import Link from "next/link";

const Home = () => {
  const [User, setUser] = useState("");
  const [Pass, setPass] = useState("");
  
  const handleSubmit = () => {
    const frmdetails = {
      "User" : User,
      "Pass" : Pass,
    };
    if(User === "admin@gmail.com" && Pass === "admin"){
      Swal.fire("", "Login Berhasil", "success").then(
        Router.push('/dashboard')
      );
    }else{
      Swal.fire("", "Login Gagal", "error");
    }
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <title>Nawasena bakery</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext"
        />
        <script src="/assets/js/require.min.js"></script>
        <link href="/assets/css/dashboard.css" rel="stylesheet" />
        <script src="/assets/js/dashboard.js"></script>
        <script src="/assets/plugins/input-mask/plugin.js"></script>
        <script src="/assets/plugins/datatables/plugin.js"></script>
      </Head>

      <div className="container">
        <div className="row" style={{ background: "white" }}>
          <div className="col-md-6">
            <div class="card-body p-6">
              <div class="card-title">Login to your account</div>
              <div class="form-group">
                <label class="form-label">Email address</label>
                <input
                  type="email"
                  onChange={e => setUser(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  onChange={e => setPass(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-footer">
                <button onClick={handleSubmit} class="btn btn-primary btn-block">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Home

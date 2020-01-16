import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Nav from '../components/nav'
import Swal from "sweetalert2";
import Link from 'next/link'

const Home = () => {
  const [hidden, setHidden] = useState(true);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [jml, setjml] = useState("");
  const [sumber, setsumber] = useState("");
  const [keterangan, setKeterangan] = useState("");
  
  const submitValue = () => {
    const frmdetails = {
      "fName" : fName,
      "lName" : lName,
      "phone" : phone,
      "email" : email,
      "jml" : jml,
      "sumber" : sumber,
      "keterangan" : keterangan,
    };
    console.log(frmdetails);
    Swal.fire("", "Pesanan Berhasil", "success");
    setHidden(true)
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

      <div className="header py-4">
        <div className="container">
          <div className="d-flex">
            <a className="header-brand" href="./index.html">
              NAWASENA BAKERY
            </a>
            <div class="d-flex order-lg-2 ml-auto">
              <div class="nav-item d-none d-md-flex">
                <Link href="/login">
                  <a class="btn btn-sm btn-outline-primary">Login</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">NAWASENA BAKERY</h1>
          <p className="lead font-weight-normal">Get Your Best Bakery Here</p>
          <a
            className="btn btn-outline-secondary"
            onClick={() => setHidden(!hidden)}
          >
            {" "}
            Make Order
          </a>
        </div>
      </div>
      <div
        className="container"
        style={{ marginTop: "-50px", display: hidden ? "none" : "" }}
      >
        <div className="row" style={{ background: "white" }}>
          <div className="card-body">
            <h3 className="card-title">Form Order</h3>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Sumber Pesanan</label>
                  <select
                    onChange={e => setsumber(e.target.value)}
                    className="form-control custom-select"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Call">Call</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Nama Depan</label>
                  <input
                    onChange={e => setfName(e.target.value)}
                    type="text"
                    className="form-control"
                    disabled=""
                    placeholder="Nama Depan"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Nama Belakang</label>
                  <input
                    onChange={e => setlName(e.target.value)}
                    type="text"
                    className="form-control"
                    disabled=""
                    placeholder="Nama Belakang"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    disabled=""
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Nomor Telepon</label>
                  <input
                    onChange={e => setPhone(e.target.value)}
                    type="text"
                    className="form-control"
                    disabled=""
                    placeholder="Nomor Telepon"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Jumlah Roti/Pesanan</label>
                  <input
                    onChange={e => setjml(e.target.value)}
                    type="number"
                    className="form-control"
                    disabled=""
                    placeholder="Jumlah Roti/Pesanan"
                    min={1}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Keterangan</label>
                  <textarea
                    onChange={e => setKeterangan(e.target.value)}
                    className="form-control"
                    placeholder="Jumlah Roti/Pesanan"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-right">
            <button onClick={submitValue} className="btn btn-primary">
              Make Order
            </button>
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

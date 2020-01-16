import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Nav from '../components/nav'
import Swal from "sweetalert2";
import Router from 'next/router'
import Link from "next/link";

const Home = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });

  const getBook = () => {
    setTimeout(() => {
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      }).then(Router.push('/'));
    }, 50000);
  }

  useEffect(() => {
    getBook();
  }, []);

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
                  <a class="btn btn-sm btn-outline-primary">Logout</a>
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
        </div>
      </div>
      <div className="container" style={{marginTop:'-50px'}}>
        <div className="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Invoices</h3>
              </div>
              <div class="table-responsive">
                <table className="table card-table table-striped table-vcenter">
                  <thead>
                    <tr>
                      <th>Nama Pemesan</th>
                      <th>Email</th>
                      <th>Nomer Telepon</th>
                      <th>Jumlah Pesanan</th>
                      <th>Sumber</th>
                      <th>Keterangan</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Yovie Fesya Pratama</td>
                      <td>yoviefp@gmail.com</td>
                      <td class="text-nowrap">089653858978</td>
                      <td>20 Bungkus</td>
                      <td>WhatsApp</td>
                      <td>-</td>
                      <td class="w-1">
                        <a href="#" class="icon mr-5">
                          <i class="fe fe-check"></i>
                        </a>

                        <a href="#" class="icon">
                          <i class="fe fe-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Yovie Fesya Pratama</td>
                      <td>yoviefp@gmail.com</td>
                      <td class="text-nowrap">089653858978</td>
                      <td>20 Bungkus</td>
                      <td>WhatsApp</td>
                      <td>-</td>
                      <td class="w-1">
                        <a href="#" class="icon mr-5">
                          <i class="fe fe-check"></i>
                        </a>

                        <a href="#" class="icon">
                          <i class="fe fe-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Yovie Fesya Pratama</td>
                      <td>yoviefp@gmail.com</td>
                      <td class="text-nowrap">089653858978</td>
                      <td>20 Bungkus</td>
                      <td>WhatsApp</td>
                      <td>-</td>
                      <td class="w-1">
                        <a href="#" class="icon mr-5">
                          <i class="fe fe-check"></i>
                        </a>

                        <a href="#" class="icon">
                          <i class="fe fe-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Yovie Fesya Pratama</td>
                      <td>yoviefp@gmail.com</td>
                      <td class="text-nowrap">089653858978</td>
                      <td>20 Bungkus</td>
                      <td>WhatsApp</td>
                      <td>-</td>
                      <td class="w-1">
                        <a href="#" class="icon mr-5">
                          <i class="fe fe-check"></i>
                        </a>

                        <a href="#" class="icon">
                          <i class="fe fe-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Yovie Fesya Pratama</td>
                      <td>yoviefp@gmail.com</td>
                      <td class="text-nowrap">089653858978</td>
                      <td>20 Bungkus</td>
                      <td>WhatsApp</td>
                      <td>-</td>
                      <td class="w-1">
                        <a href="#" class="icon mr-5">
                          <i class="fe fe-check"></i>
                        </a>

                        <a href="#" class="icon">
                          <i class="fe fe-trash"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

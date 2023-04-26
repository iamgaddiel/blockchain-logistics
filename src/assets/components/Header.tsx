import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <head>
      <title>Logistics &mdash; Colorlib Website Template</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <Link rel="stylesheet"
        to={"https://fonts.googleapis.com/css?family=Poppins:200,300,400,700,900|Display+Playfair:200,300,400,700"} />
      <Link rel="stylesheet" to={"fonts/icomoon/style.css"} />
      <Link rel="stylesheet" to={"css/bootstrap.min.css"} />
      <Link rel="stylesheet" to={"css/magnific-popup.css"} />
      <Link rel="stylesheet" to={"css/jquery-ui.css"} />
      <Link rel="stylesheet" to={"css/owl.carousel.min.css"} />
      <Link rel="stylesheet" to={"css/owl.theme.default.min.css"} />
      <Link rel="stylesheet" to={"css/bootstrap-datepicker.css"} />
      <Link rel="stylesheet" to={"fonts/flaticon/font/flaticon.css"} />
      <Link rel="stylesheet" to={"css/aos.css"} />
      <Link rel="stylesheet" to={"css/style.css"}></Link>
    </head>
  )
}

export default Header
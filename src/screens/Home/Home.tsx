// blog images
import Blog1 from "../../assets/img/home-post/blog1.jpg"
import Blog2 from "../../assets/img/home-post/blog2.jpg"
import Blog3 from "../../assets/img/home-post/blog3.jpg"

// components
import ShipmentForm from "../../components/ShipmentForm/ShipmentForm"
import Testimonial from "../../components/Testimonial/Testimonial"
import ServiceArea from "../../components/ServiceArea/ServiceArea"
import Features from "../../components/Features/Features"
import { useState } from "react"
import { ethers } from 'ethers';
import { parseEther, formatEther } from '@ethersproject/units';



const ShipmnetContractAddress = "0x77c3d458F5435B98Ca53d89Bc56195Ad1aCa1a16";
const emptyAddress = '0x0000000000000000000000000000000000000000';


const Home = () => {
  // Use hooks to manage component state
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState(0);
  const [myBid, setMyBid] = useState(0);
  const [isOwner, setIsOwner] = useState(false);
  const [highestBid, setHighestBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState('');

  // Sets up a new Ethereum provider and returns an interface for interacting with the smart contract
  // async function initializeProvider() {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   return new ethers.Contract(ShipmnetContractAddress, Auction.abi, signer);
  // }

  // // Displays a prompt for the user to select which accounts to connect
  // async function requestAccount() {
  //   const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //   setAccount(account[0]);
  // }

  // async function fetchHighestBid() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const contract = await initializeProvider();
  //     try {
  //       const highestBid = await contract.fetchHighestBid();
  //       const { bidAmount, bidder } = highestBid;

  //       // Convert bidAmount from Wei to Ether and round value to 4 decimal places
  //       setHighestBid(parseFloat(formatEther(bidAmount.toString())).toPrecision(4));
  //       setHighestBidder(bidder.toLowerCase());
  //     } catch (e) {
  //       console.log('error fetching highest bid: ', e);
  //     }
  //   }
  // }

  // async function fetchMyBid() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const contract = await initializeProvider();
  //     try {
  //       const myBid = await contract.bids(account);
  //       setMyBid(parseFloat(formatEther(myBid.toString())).toPrecision(4));
  //     } catch (e) {
  //       console.log('error fetching my bid: ', e);
  //     }
  //   }
  // }

  // async function fetchOwner() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const contract = await initializeProvider();
  //     try {
  //       const owner = await contract.getOwner();
  //       setIsOwner(owner.toLowerCase() === account);
  //     } catch (e) {
  //       console.log('error fetching owner: ', e);
  //     }
  //   }
  // }


  return (
    <>
      <section className="home_banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content d-flex flex-md-row flex-column">
                  <div className="banner-left text-md-right">
                    <h1 className="text-uppercase">Solid Super Service</h1>
                  </div>
                  <div className="banner-right position-relative">
                    <p>
                      If you are looking at blank cassettes on the web, you may be
                      very confused at the difference in price You may see some
                      for as low as each.
                    </p>
                    <a className="main_btn mt-md-0 mt-4" href="index.html#">Explore More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Features />


      <ServiceArea />

      <ShipmentForm />

      <Testimonial />


      <section className="home-blog-area">
        <div className="container">
          <div className="row justify-content-center section-title-wrap">
            <div className="col-lg-12">
              <h5>Latest Blog Posts</h5>
              <h2>
                Check the latest posts <br />
                from our blog
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-home-blog">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto" src={Blog1} alt="" />
                </div>
                <div className="home-blog-box">
                  <a href="index.html#">
                    <h4>Some statistics that we want to show</h4>
                  </a>
                  <p>
                    If you are looking at blank cassettes
                    on the web lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <div className="bottom d-flex">
                    <a href="index.html#">13th Mar, 2019</a>
                    <a href="index.html#">02 Comments</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-home-blog">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto" src={Blog2} alt="" />
                </div>
                <div className="home-blog-box">
                  <a href="index.html#">
                    <h4>Some statistics that we want to show</h4>
                  </a>
                  <p>
                    If you are looking at blank cassettes
                    on the web lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <div className="bottom d-flex">
                    <a href="index.html#">13th Mar, 2019</a>
                    <a href="index.html#">02 Comments</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-sm-block d-none">
              <div className="single-home-blog">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto invisible" src={Blog3} alt="" />
                </div>
                <img src="img/home-post/blog3.jpg" className="img-fluid large-img" alt="" />
                <div className="overlay"></div>
                <div className="home-blog-box border-0">
                  <a href="index.html#">
                    <h4 className="text-white">Some statistics that we want to show</h4>
                  </a>
                  <p>
                    If you are looking at blank cassettes
                    on the web lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <div className="bottom d-flex">
                    <a href="index.html#">13th Mar, 2019</a>
                    <a href="index.html#">02 Comments</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="cta_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta_inner d-flex flex-md-row flex-column justify-content-between align-items-center">
                <div className="mb-md-0 mb-4 text-sm-left text-center">
                  <p>Get a quick response from our team</p>
                  <h1>Please feel free to reach us</h1>
                </div>
                <div className="">
                  <a href="index.html#" className="main_btn">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it
                  has
                  that.
                </p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className="" id="mc_embed_signup">
                  <form target="_blank" noValidate
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get" className="form-inline">
                    <input className="form-control" name="EMAIL" placeholder="Email Address"
                      required type="email" />
                    <button className="click-btn btn btn-default"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} value="" type="text" />
                    </div>
                    <div className="info"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href="index.html#"><i className="fa fa-facebook"></i></a>
                  <a href="index.html#"><i className="fa fa-twitter"></i></a>
                  <a href="index.html#"><i className="fa fa-dribbble"></i></a>
                  <a href="index.html#"><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="footer-text">
                Copyright &copy;
                <script data-cfasync="false"
                  src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with
                <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com"
                  target="_blank">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
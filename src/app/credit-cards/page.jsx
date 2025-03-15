import Image from "next/image";
import logo from "../images/E-logo.svg";

import Rewards from "../images/Rewards.svg";

import money from "../images/interestFree.png";
import fire from "../images/ImageWhyChoose.png";
import bag from "../images/ImageWhyChoose2.png";
import man from "../images/ImageWhyChoose3.png";
import whyChooseImg from "../images/WhyChoose_1.png";
import whyChooseImg2 from "../images/WhyChoose_2.png";
import whyChooseImg3 from "../images/WhyChoose_3.png";
import whyChooseImg4 from "../images/WhyChoose_4.png";
import whyChooseImg5 from "../images/WhyChoose_5.png";
import whyChooseImg6 from "../images/WhyChoose_6.png";
import Form from "../form";
import Carousel from "../Carousel";

import contact from "../images/contact.svg";
import Global from "../images/global.svg";
import limit from "../images/limit.svg";

import ExploreCarousel from "../ExploreCarousel";
export default function Home() {

    return (
        <div className="">
            <div className="flex justify-center bg-zinc-50  mt-4">
                <div className="container">
                    <div className="row py-1 flex justify-between   items-center top_menu">
                        <Image className="img-fluid" src={'https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/E-logo.svg'} alt="" width={200} height={100} />
                        <div className="gap-10 flex   center-menu">
                            <a href="#cards">Cards </a>
                            {/* <a href="#cards">Eligibility Criteria </a> */}
                            <a href="#Benefits">Benefits  </a>
                            <a href="#why-choose">Why Choose Us </a>
                        </div>
                        <a href="#apply-now"> <button>Apply Now</button></a>
                    </div>
                </div>
            </div>
            {/* banner section */}
            <div className="flex justify-center" id="Cards">
                <div className="container ">
                    <div className="sec-banner">
                        <Carousel />
                        <div className=" w-sm     form_cont my-10   lg:my-10 rounded-md">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            {/* y choose as */}
            <div className="flex justify-center my-5 lg:my-10" id="why-choose">
                <div className="container">
                    {/* <p className="why-choose"><span>Why Choose Equitas <br /> Credit Cards?</span></p> */}
                    <p className="why-choose"><span>Why Choose Equitas Credit Cards?</span></p>
                    <div className="container why-chooseContent-section">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                            <div className="mt-5 flex flex-col items-center justify-center">
                                <Image src={whyChooseImg2} alt="" width={100} height={100} />
                                <p>Save up to 11% annually on spends.</p>
                            </div>
                            <div className="mt-5 flex flex-col items-center justify-center">
                                <Image src={whyChooseImg4} alt="" width={100} height={100} />
                                <p>Earn up to 5X reward points on purchases.</p>
                            </div>
                            <div className="mt-5 flex flex-col items-center justify-center">
                                <Image src={whyChooseImg5} alt="" width={100} height={100} />
                                <p>1% fuel surcharge waiver (up to ₹5,400/year).</p>
                            </div>
                            <div className="mt-10 flex flex-col items-center justify-center">
                                <Image src={whyChooseImg3} alt="" width={100} height={100} />
                                <p>Best in class tier based milestone program.</p>
                            </div>
                            <div className="mt-10 flex flex-col items-center justify-center">
                                <Image src={whyChooseImg} alt="" width={100} height={100} />
                                <p>Free airport lounge visits (on PowerMiles & Selfe).</p>
                            </div>
                            <div className="mt-10 flex flex-col items-center justify-center">
                                <Image src={whyChooseImg6} alt="" width={100} height={100} />
                                <p>Easy rewards redemption – Hotels, flights, e-vouchers & more..</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center cbg">
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:10 lg:gap-10">
            <div className="">
              <div className="y-box">
                <Image className="img-fluid" src={"https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/Rewards.svg"} width={70} height={100} alt="" />
                <div className="y-box-txt">
                  <p>Exciting Rewards & Benefits: </p>
                  <p>  Earn miles, cashback, and exclusive privileges on every transaction.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="y-box">
                <Image className="img-fluid" src={"https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/contact.svg"} width={70} height={100} alt="" />
                <div className="y-box-txt">
                  <p>Contactless & Secure:
                  </p>
                  <p>  Enjoy seamless and secure payments with tap-and-go technology.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="y-box">
                <Image className="img-fluid" src={"https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/global.svg"} width={70} height={100} alt="" />
                <div className="y-box-txt">
                  <p>Global Acceptance:
                  </p>
                  <p>    Use your card worldwide and unlock premium perks wherever you go.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="y-box">
                <Image className="img-fluid" src={"https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/limit.svg"} width={70} height={100} alt="" />
                <div className="y-box-txt">
                  <p>Custom Credit Limits:
                  </p>
                  <p>   Get personalized credit limits that adapt to your financial needs.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div> */}
            <div className="">
                <div className="container ">

                </div>
                <ExploreCarousel />
            </div>

            {/* How It Works? */}
            {/* <div className="flex justify-center my-5 lg:my-10 wbg"  >
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-10">
            <div className="">
              <div className="how-it-works-box">
                <div className="how-it-works-txt">
                  <p><span>Choose Your Card</span></p>
                  <p>Compare and select the best card for your lifestyle.</p>
                  <a href="#apply-now">   <span>Apply Now</span> </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="how-it-works-box">
                <div className="how-it-works-txt">
                  <p><span>Apply Online</span></p>
                  <p>Fill out the simple application form with minimal documentation.</p>
                  <a href="#apply-now">   <span>Apply Now</span> </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="how-it-works-box">
                <div className="how-it-works-txt">
                  <p><span>Get Instant Approval</span></p>
                  <p>Get quick approval and start using your card.</p>
                  <a href="#apply-now">   <span>Apply Now</span> </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="how-it-works-box">
                <div className="how-it-works-txt">
                  <p><span>Start Enjoying Benefits</span></p>
                  <p>Earn rewards, cashback, and access exclusive perks.</p>
                  <a href="#apply-now">   <span>Apply Now</span> </a>
                </div>
              </div>
            </div>
          </div>
          <p className="why-choose mt-14" id="Benefits"> <TextRevealT text="Additional Benefits & Features" /></p>
        </div>
      </div> */}

            {/* additional benifits */}
            <div className="flex justify-center my-5 lg:my-10 abg" id="Benefits">
                <div className="container">
                    <div className="">
                        <h2 className="why-choose mb-10"><span>Additional Benefits &  Features</span></h2>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-10">
                        <div className="col-span-2">
                            <div className="additional-benifits-box ">
                                <div className="additional-benifits-txt">
                                    <p className="">Up to 50 days interest free <br /> credit period</p>
                                    <h5><span>Apply Now</span></h5>
                                    {/* <p>Convert your high-value purchases into easy, flexible EMIs with attractive interest rates.</p> */}
                                </div>
                                <div className="flex justify-center"><Image className="img-fluid" src={money} width={300} height={300} alt="" /></div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="additional-benifits-box">
                                <div className="additional-benifits-txt">
                                    <p>Convert <br /> transactions to EMI</p>
                                    <h5><span>Apply Now</span></h5>
                                </div>
                                <div className="flex justify-center mt-5"><Image className="img-fluid" src={fire} width={300} height={300} alt="" /></div>
                            </div>
                        </div>
                        {/* <div className="">
              <div className="additional-benifits-box">
                <div className="additional-benifits-txt">
                  <p>Exclusive Lifestyle & Shopping Privileges</p>
                  <p>Avail special discounts on top brands, dining, movie tickets, and e-commerce platforms..</p>
                </div>
                <div className="flex justify-center mt-5"><img className="img-fluid " src="https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/fire.png" alt="" /></div>
              </div>
            </div> */}
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10">

                        <div className="col-span-1">
                            <div className="insurance-box relative">
                                <div className="flex gap-1 ">
                                    <div className="w-84 insurance-box-txt additional-benifits-txt">
                                        <p>Reward Points on every spends</p>
                                        <h5><span>Apply Now</span></h5>
                                        {/* <ul className="list-disc ">
                      <li>Travel insurance covering lost baggage, trip cancellations, and flight delays.</li>
                      <li>Purchase protection on gadgets and high-value items bought using your card.</li>
                      <li>Fraud protection against unauthorized transactions.</li>
                    </ul> */}
                                    </div>
                                    {/* <img className="img-fluid w-3xs absolute bottom-0 right-0" src="https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/insurance.png" alt="" /> */}


                                </div>
                                <div className="flex justify-center mt-5"><Image className="img-fluid-2" src={bag} width={300} height={300} alt="" /></div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="insurance-box relative ">
                                <div className="lg:flex gap-1 ">
                                    <div className="w-xs insurance-box-txt additional-benifits-txt">
                                        <p>24/7 customer support & assistance, dial 1800 103 277</p>
                                        <h5><span>Apply Now</span></h5>
                                        {/* <ul className="list-disc ">
                      <li>24/7 Customer Support & Assistance</li>
                      <li>Easy dispute resolution and emergency card blocking services..</li>
                    </ul> */}
                                    </div>

                                    <Image className="img-fluid  lg:absolute bottom-0 right-0" width={300} height={400} src={man} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-3 lg:mt-12 w-full" style={{ color: "#A8A8A8" }} />
                    <div className="   flex justify-between   items-center mt-5 footer_cam">
                        <div className="ri8s">Allrights reserved © 2024</div>
                        <div>
                            <p className="powered flex my-10">Powered By <span className="flex px-1"><img style={{ width: "25px" }} src="https://www.tuskmelon.com/wp-content/uploads/2022/06/image-14.png" alt="" /><b>Tuskmelon</b></span></p>
                        </div>
                        <div >
                            <p className="tc">Privacy policy|Terms of use</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

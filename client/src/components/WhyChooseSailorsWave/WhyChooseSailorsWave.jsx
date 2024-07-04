import React from 'react'
import WhyChoose1 from "../../assets/WhyChoose-1.jpeg";
import WhyChoose2 from "../../assets/WhyChoose-2.jpeg";
import WhyChoose3 from "../../assets/WhyChoose-3.jpeg";
import "./WhyChooseSailorsWave.css";

const WhyChooseSailorsWave = () => {
    return (
        <>
            <div class="container text-center">
                <h1>Why choose sailorswave</h1>
                <div class="row">
                    <div class="col">
                        <div class="card" style={{ width: "25rem" }}>
                            <img class="card-img-top" src={WhyChoose1} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title"><b>Expertise And Experience</b></h5>
                                <p class="card-text">Our Team Comprises Seasoned Professionals With Extensive Experience in The Maritime industry.  We Bring Deep Insights And Practical Knowledge To Every Project We Undertake.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "25rem" }}>
                            <img class="card-img-top" src={WhyChoose3} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title"><b>Commitment To Quality</b></h5>
                                <p class="card-text">Quality Is At The Core Of Everything We Do. We Adhere To the Highest Standards In All Our Services, Ensuring Reliability And Excellence.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "25rem" }}>
                            <img class="card-img-top" src={WhyChoose2} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title"><b>Customized Solutions</b></h5>
                                <p class="card-text">We Understand That Every Client Has Unique Needs. Our Services Are Tailored To Meet The Specific Requirements Of Each Client, Ensuring Maximum Satisfaction And Efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseSailorsWave

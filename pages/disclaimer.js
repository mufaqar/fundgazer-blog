import InnerPAgeBanner from '../components/innerPAgeBanner';
import Head from 'next/head'
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';

export default function Disclaimer() {

  const handleOnChange = () => {
    if (captcha.current.getValue()) {
      console.log('captcha value');
      setIsVarified(true);
    } else {
      setIsVarified(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log('submit');
    } else {
      alert('Please varify you are not robot.!');
    }
  };
  const captcha = useRef(null);
  return (
    <>
      <Head>
        <title>Disclaimer - Fundgazer</title>
        
      </Head>
      <InnerPAgeBanner />

      {/* Content Section End*/}
      <section>
        <div className="container md:w-[1020px] mx-auto py-20">
          <div className="p-4">
            <h3 className="mb-10 text-3xl font-bold md:text-5xl font-interBold text-skin-primary">
              Disclaimer
            </h3>

            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              The content this website has been prepared by contributions from
              people from the Investments community.
            </p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              The content on this website created solely for educational
              purposes. It is NOT meant to be fiduciary financial advice. When
              in doubt, a legally registered fiduciary financial advisor may be
              contacted. In India, a fee-only financial advisor registered with
              Securities and Exchange Board of India (SEBI) may be contacted.
            </p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              The authors of this website may or may not hold positions, either
              long or short, in any mutual fund, ETF, stock, bond, or any
              another investment instrument or securities mentioned on our
              website. These positions may or may not change in the future
              without any notification whatsoever. The act of an investment
              instrument being mentioned on our website does NOT constitute a
              recommendation or endorsement for or against investment in that
              instrument.
            </p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              Any and all numerical calculations made on our website in any form
              may be incorrect and subject to changes without any notification
              whatsoever. India Investments community and / or the authors of
              content on this website, cannot be held liable in any form or
              manner if anyone incurs financial losses in the securities markets
              based on information, either directly or indirectly, from our
              website.
            </p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              The content on this website may include material, including but
              not limited to excerpts, images, and videos, which has been
              modified with respect to the original source material. Such
              modifications have been made only for the purposes of
              illustration, education, and aesthetics. The original source
              material should be considered as the definitive source of truth.
            </p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              The content on this website may include recommendations for
              certain software, apps, platforms, portals, services, and
              websites. The authors from India Investments may or may not hold
              positions, either long or short, in the respective companies who
              own or invest in these software , apps, platforms, portals,
              services, and websites. These positions may or may not change in
              the future without any notification whatsoever. The content on
              this website might also recommend methods about how to use these
              software and websites. These methods may or may not be in
              compliance with the terms of service of the software, apps,
              platforms, portals, services, and website. India Investments
              cannot be held liable for any damages or loss anyone suffers
              because of using the methods shown in our content. The user is
              advised to read the terms and conditions of the software and
              websites they use before following the methods and recommendations
              mentioned in our content.
            </p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              The content on this website may include external 3rd party
              hyperlinks which we do not own, control, or recommend in any form
              or manner. Although we have included web archive links for these
              3rd party hyperlinks wherever possible, the content in the
              original 3rd party hyperlink may or may not be the same as it was
              when it was mentioned in our website. India Investments does not
              bear any responsibility whatsoever about the content on these 3rd
              party hyperlinks and it cannot be held liable for damages or loss
              anyone suffers as a result of using these 3rd party hyperlinks.
            </p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              The content on this website is provided “as is”, without warranty
              of any kind, express or implied, including but not limited to the
              warranties of merchantability, fitness for a particular purpose
              and non-infringement. In no event shall India Investments and its
              contributors be liable for any claim, damages or other liability,
              whether in an action of contract, tort or otherwise, arising from,
              out of or in connection with the content on this website or the
              use or other dealings in the content on this website.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-skin-primary cta md:hidden" id="cta">
        <div className="container grid items-center lg:h-[70vh] grid-cols-1 gap-8 py-12 lg:py-20 mx-auto lg:grid-cols-2">
          <div className="order-last p-4 mt-10 md:order-first md:mt-0">
            <h1 className="text-[32px] leading-9 md:text-6xl font-normal text-[#D1C6FF] font-interRegular">
              <span className="font-bold text-skin-light">Join </span> Waitlist
            </h1>
            <p className="mt-3 text-[15px] md:text-xl font-normal text-skin-light font-interRegular max-w-[500px]">
              From building your diversified long-term portfolio and tracking
              you.
            </p>
            <div className="mt-8">
              <form
                onSubmit={handleSubmit}
                className="space-x-0 space-y-2 md:flex md:space-x-2 md:space-y-0"
              >
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  className="font-interRegular bg-skin-light text-skin-muted text-2xl font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-4 rounded-md md:max-w-[395px] w-full"
                />
                {/* <button
                  type="submit"
                  className="text-[#D1C6FF] font-interRegular border border-[#D1C6FF] bg-transparent md:hidden hover:bg-skin-buttonAccent hover:border-transparent text-base font-normal flex items-center py-3 px-12 rounded-md captcha"
                >
                  I am not a robot
                </button> */}

                <button
                  type="submit"
                  className="flex items-center cursor-pointer px-12 py-3 text-[20px] w-full justify-center md:w-auto font-medium rounded-md font-interMedium bg-skin-dark text-skin-light hover:opacity-75 transition ease-in-out delay-75  hover:scale-110  duration-200"
                >
                  Join
                </button>
              </form>
              {/* <button type="submit" className="text-[#D1C6FF] hidden md:flex font-interRegular border border-[#D1C6FF] bg-transparent hover:bg-skin-buttonAccent hover:border-transparent text-base font-normal items-center py-3 px-12 rounded-md mt-5"
              >
                I am not a robot
              </button> */}
              <div className="mt-2 captch">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6Lc_b6ghAAAAAO4qDTfLsI44NR5guKc56BzSGkSY"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content Section End*/}
    </>
  );
}

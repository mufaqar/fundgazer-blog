import Link from 'next/link';
import InnerPAgeBanner from '../components/innerPAgeBanner';
import Head from 'next/head'
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';

export default function PrivacyPolicy() {
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
        <title>Privacy Policy - Fundgazer</title>
      </Head>
      
      <InnerPAgeBanner />

      {/* Content Section End*/}
      <section>
        <div className="container md:w-[1020px] mx-auto py-20">
          <div className="p-4">
            <h3 className="mb-10 text-3xl font-bold md:text-5xl font-interBold text-skin-primary">
              Privacy Policy
            </h3>

            <p className="mb-5 text-base italic font-normal md:text-xl font-interRegular text-skin-muted">
              Updated at 2022-07-12
            </p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
              Fundgazer ("we," "our" or “us") is committed to protecting your
              privacy. This Privacy Policy explains how your personal
              information collected, used, and disclosed by fundgazer This
              Privacy Policy applies to our website, www.fundgazer.com and its
              associated sub domains (collectively, our "Service") By accessing
              or using our Service, you that you have read, understood, and
              agree to our collection, storage, use, and disclosure of your
              personal information as described in this Privacy Policy and our
              Terms of Service.
            </p>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                What Information Do We Collect?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We collect information from you when you visit our service,
                register, place an order subscribe to our newsletter, respond to
                a survey or fill out a form
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                Name/username <br></br> Email Addresses <br></br> Location
                <br></br> Age
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We also collect information from mobile devices for a better
                user experience, although these features are completely
                optional:
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                How Do We Use The Information We Collect?
              </h6>
              <ul className="list-disc list-inside ">
                <li className="text-base font-normal md:text-xl font-interRegular text-skin-muted">
                  Any of the information we collect from you may be used in one
                  of the following ways:
                </li>
                <li className="text-base font-normal md:text-xl font-interRegular text-skin-muted">
                  To personalize your experience (your information helps us to
                  better respond to your individual needs)
                </li>
                <li className="text-base font-normal md:text-xl font-interRegular text-skin-muted">
                  To improve our service we continually strive to improve our
                  service offerings based on the information and feedback we
                  receive from you
                </li>
                <li className="text-base font-normal md:text-xl font-interRegular text-skin-muted">
                  To improve customer service (your information helps us to more
                  effectively respond to your customer service requests and
                  support needs)
                </li>
                <li className="text-base font-normal md:text-xl font-interRegular text-skin-muted">
                  To process transactions
                </li>
                <li className="text-base font-normal md:text-xl font-interRegular text-skin-muted">
                  To administer a contest, promotion, survey or other site
                  feature
                </li>
                <li className="text-base font-normal md:text-xl font-interRegular text-skin-muted">
                  To send periodic emails
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                When do we use customer information from third parties?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We resolve some information from the third parties when you
                contact us. For example, when you submit your email address to
                us to show interest in becoming our customer, we receive
                information from a third party that provides automated fraud
                detection services to us. We also occasionally collect
                information that is made publicly available on social media
                websites. You can control how much of your information social
                media websites make public by visiting these websites and
                changing your privacy settings
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Do we share the information we collect with third parties?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We may share the information that we collect, both personal and
                non-personal, with third parties such as advertisers, contest
                sponsors, promotional and marketing partners, and others who
                provide our content or whose products or services we think may
                Interest you We may also share it with our current and future
                affiliated companies and business partners, and if we are
                involved in a merger, asset sale or other business
                reorganization, we may also share or transfer your personal and
                non-personal information to our successors-in-interest .
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We may engage trusted third party service providers to perform
                functions and provide services to us, such as hosting and
                maintaining our server and our service, database storage and
                management, e-mail management, storage marketing credit card
                processing, customer service and fulfilling orders for products
                and services you they purchase through our platform. We will y
                share your personal information, and possibly some non-personal
                information, with these third parties to enable them to perform
                these services for us and for you
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We may share portions of our log file data, including IP
                addresses for analytics purposes with third parties such as web
                analytics partners, application developers, and ad networks If
                your IP address is shared, it may be used to estimate general
                location and other technographics such as connection speed,
                whether you have visited the service in a shared location, and
                type of device used to visit the service. They may aggregate
                information about our advertising and what you see on the
                service and then provide auditing research and reporting for us
                and our advertisement
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We may also disclose personal and non-personal information about
                you to government or law enforcement officials or private
                parties as we, in our sole discretion, believe necessary or
                appropriate in order to respond to claims, legal process
                (including subpoenas), o protect our rights and interests or
                those of a third party, the safety of the public or any person,
                to prevent or stop any legal, Unethical or legally actionable
                activity, or to otherwise comply with applicable count orders,
                laws, rules and regulations
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Where and when is information collected from customers and end
                users?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We will collect personal information that you submit to us. We
                may also receive personal information about you from third
                parties as described above
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                How Do We Use Your Email Address?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                By submitting your email address on this website, you agree to
                receive emails from us. You can cancel your participation in any
                of these email lists at any time by clicking on the opt-out link
                or other unsubscribe option that is included in the respective
                email. We only send emails to people who have authorized us to
                contact them, either directly or through a third party. We do
                not send unsolicited commercial emails, because we hate spam as
                much as you do. By submitting your email address, you also agree
                to allow s to use your email address for customer audience
                targeting on sites like Facebook, where we display custom
                adverting to specific people who have opted-in to receive
                communications from us Email addresses submitted only through
                the order processing page be used for the sole purpose of
                sending you information and updates pertaining to your order,
                however, you have provided the same email to us through another
                method, we may use it for any of the purposes stated in this
                Policy Note If at any time you would leo unsubscribe from
                receiving future emails, we include detailed unsubscribe
                instructions at the ballon of each a
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Could my information be transferred to other countries?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We are incorporated in india Information collected via our
                website, through direct interactions with you, or from use of
                our help services may be transformed from time to time to our
                offices or personnel, or to third parties, located throughout
                the world, and may be viewed and hosted anywhere in the world,
                including countries that may not have laws of general
                applicability regulating the use and transfer of such data. To
                the fullest extent allowed by applicable law, by using any of
                the above, you voluntarily consent to the trans border transfer
                and hosting of such information.
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Is the information collected through our service secure?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We take precautions to protect the security of your information.
                We have physical, electronic, and managerial procedures to help
                safeguard, prevent unauthorized access maintain data security,
                and correctly use your information However, neither people not
                security systems are fool proof, including encryption systems .
                In addition, people can commit intentional crimes, make mistakes
                or fail to follow policies. Therefore, while we use reasonable
                efforts to protect your personal information, we cannot
                guarantee its absolute security if applicable law imposes any
                non-disclaimable duty to protect your personal information you
                agree that intentional misconduct will be the standards used to
                measure our compliance with that duty
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Can I update or correct my information?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                The nights you have to request updates or corrections to the
                information we collect depend on your relationship with us
                Personnel may update or correct their information as detailed in
                our internal company employment policing Customers have the
                right to request the restriction of certain uses and disclosures
                of personally identifiable information as follows You can
                contact us in order to (1) update or correct your personally
                identifiable information (2) change your preferences with
                respect to communications and other information you receive from
                us or (3) delete the personally identifiable informatics
                maintained about you on our systems (subject to the following
                paragraph), by cancelling your account. Such updates corrections
                changes and deletions will have no effect on other information
                that we maintain, or information that we have provided to third
                parties in accordance with this Privacy Policy prior to such
                update, correction, change or deletion. To protect your privacy
                and security we may take measurable steps (such as requesting a
                unique password) to verify your identity before granting you
                profile access or making corrections. You are responsible for
                maintaining the secrecy of your unique password and account
                information at all times. You should be aware that it is not
                technologically possible remove each and every record of the
                information you have provided to us from our system. The need to
                back up our systems to protect information from inadvertent loss
                means that a copy of your information may exist in a
                non-erasable form that will be difficult or impossible for us to
                locate. Promptly after receiving your request, all personal
                information stored in databases we actively use and other
                readily searchable media will be updated corrected, changed or
                deleted, as appropriate, as soon as and to the extent reasonably
                and technically practicable If you are an end user and wish to
                update, delete, or receive any information we have about you,
                you may do so by contacting the organization of which you are a
                customer
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Sale of Business
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We reserve the right to transfer information to a third party in
                the event of sale, merger or other transfer of all or
                substantially at of the assets of us or any of its Corporate
                Affiliates (as defined herein, or that portion of us or any of
                its Corporate Affiliates to which the Service relates, or in the
                event that we discontinue our business on file a petition or
                have filed against us a petition in bankruptcy reorganization or
                similar proceedings provided that the third party agrees to
                adhere with the term of the Privacy Policy.
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Affiliates
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We may disclose information (including personal information
                about you to our Corporate Affiliates For purposes of this
                Privacy Policy Corporate Affiliate means any person or entity
                which directly or indirectly controls, is controlled by or is
                under common control with us, whether by ownership or otherwise
                Any information relating to you that we provide to our Corporate
                Affiliates will be treated by those Corporate Affiliates in
                accordance with the terms of this Privacy Policy
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                How Long Do We Keep Your Information?{' '}
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We keep your information only so long as we need it to provide
                service to you and fulfil the purposes described in this policy.
                Thin, un also the case for anyone that we share your information
                with and who carries out services on our behalf. When we no
                longer need for use your information and there is no need for us
                to keep it to comply with our legal or regulatory obligations,
                we either remove it from our systems or depersonalize it so that
                we can't identity you
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                How Do We Protect Your Information?
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We implement a variety of security measures to maintain the
                safety of your personal information when you place an order or
                submit, or access your personal information. We offer the use of
                a secure server. All supplied sensitive credit information is
                transmitted via Secure Socket Layer (SSL) technology and then
                encrypted into our Payment gateway providers database only to be
                accessible by those authorized with special access nights to
                such systems and are required to keep the information
                confidential. After a transaction, your private information
                credit cards, social security numbers, financials, etc is never
                kept on file we cannot however, ensure or warrant the absolute
                security of any information you transmit to us or guarantee that
                your information on the Service may not be accessed, disclosed,
                attired of destroyed by a breach of any of our physical
                technical, or managerial safeguards.
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Governing Law
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                The laws of India, excluding its conflicts of law rules, shall
                govern this Agreement and your use of our service .Your use of
                our service may also be subject to other local, state, national,
                or international laws.
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Your Consent
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                By using our service registering an account, or making a
                purchase you consent to this Privacy Policy
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Links to Other Websites
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                This Privacy Policy applies only to the Services The Services
                may contain links to other website not operated or controlled by
                fundgazer. We are not responsible for the content, accuracy or
                opinions expressed in such websites, and such websites are not
                investigated monitored or checked for accuracy or completeness
                by us. Please remember that when you use a link to go from the
                Services to another website, out<br></br>Privacy Policy is no
                longer in effect. Your browsing and interaction on any other
                website including those that have a link on our platform, is
                subject to that website's own rules and policies Such third
                parties may use the can cookies or other methods to collect
                information about you
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Cookies
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We use "Cookies" to identify me areas of our website that you
                have visited. A Cookie is a small piece of data stored on your
                computer
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                For mobile device by your web browser ,We use Cookies to
                personalize the .web browsers can be set to disable the use of
                Cookies However if you disable Cookies, you may not be able for
                access functionality on our website correctly or at all. We
                never place Personally Identifiable Information in Cookies
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Advertising
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                Advertising kites us and many of the websites and services you
                use free of charge. We work hard to make sure that ads are sale.
                unobtrusive, and as relevant as possible
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Cookies for Advertising
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                Cookies help to make advertising more effective. Without
                cookies, it's really hard for an advertiser to reaches audience
                or to know how many ads were shown and how many clicks they
                received
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Kids' Privacy
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We do not address anyone under the age of 13. We do not
                knowingly collect personally identifiable information from
                anyone under the age of 13 if You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact us if We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent. We take steps to remove that
                information from our servers
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                Changes To Our Privacy Policy If we decide to change our privacy
                policy, we will post those changes on this page, and/or update
                the Privacy Policy modification date below
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Third-Party Services
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We may display, include or make available third-party content
                including data, information, applications and other products
                services or provide links to third-party websites or services
                Third-Party Services"
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                You acknowledge and agree that we shall not be responsible for
                any Third-Party Services, including their accuracy,
                completeness, validity copyright compliance, legality, decency,
                quality or any other aspect thereof. We do not assume and shall
                not have
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                any ability or responsibility to you or any other person or
                entity for any Third-Party Services Third-Party Services and
                links thereto are provided solely as a convenience to you and
                you access and use them entirely at your own risk and subject to
                such third parties terms and conditions
              </p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                Facebook Pixel <br></br> Facebook pixel an analytics tool that
                allows you to measure the effectiveness of your advertising by
                understanding the actions people take on your website, You can
                use the pixel to Make sure your ads are shown to the right
                people Facebook pixel may collect information from your device
                when you use the service. Facebook pixel collects information
                that is held in accordance with its Privacy Policy
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Information about General Data Protection
              </h6>
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Regulation
              </h6>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">
                We may be collecting and using information from you if you are
                from the European Economic Area (EEA), and in this section of
                cur Privacy Policy we are going to explain exactly how and why
                is this data collected, and how we maintain this data under
                protection from being replicated or used in the wrong way
              </p>
            </div>
            <div className="mb-5">
              <h6 className="mb-5 text-lg font-bold md:text-xl font-interBold text-skin-dark">
                Contact Us
              </h6>
              <p className="text-base italic font-normal md:text-xl font-interRegular text-skin-muted">
                Don't hesitate to contact us if you have any questions
              </p>
              <p className="mb-5 text-base italic font-normal md:text-xl font-interRegular text-skin-muted">
                <span>Via email:</span>
                <Link href="mailto:support@fundgazer.com">
                  <a className="text-skin-primary"> support@fundgazer.com</a>
                </Link>
              </p>
            </div>
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
    </>
  );
}

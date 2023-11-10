import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <div>
      <footer className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center bg-footerBgColorOne text-fontColorOne py-[10rem]">
          <h1 className="text-[32px] font-inter">CONTACT US</h1>
          <p className="text-center text-[20px] leading-[36px] font-inter py-4">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-footerBgColorTwo text-fontColorOne py-[10rem]">
          <h1 className="text-[32px] font-inter">Follow US</h1>
          <p className="text-[20px] leading-[36px] font-inter py-4">
            Join us on social media
          </p>
          <div className="flex gap-8">
            <FaFacebookF size={40} className="hover:scale-150 duration-300" />
            <FaInstagram size={40} className="hover:scale-150 duration-300" />
            <FaTwitter size={40} className="hover:scale-150 duration-300" />
          </div>
        </div>
      </footer>
      <div className="bg-footerBgColorThree text-fontColorOne mx-auto text-center py-2">
        <h1 className="text-[20px] leading-[36px]">
          Copyright © CulinaryCloud. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default FooterSection;

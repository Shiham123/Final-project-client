import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import CoverSection from '../../Section/Cover/CoverSection';
import OrderImg from '../../assets/shop/banner2.jpg';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PerOrderSection from './PerOrderSection';

const OrderPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>Bistro project || Our Shop</title>
      </Helmet>
      <CoverSection
        heading="OUR SHOP"
        para="Would you like to try a dish?"
        img={OrderImg}
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="w-full flex justify-center items-center my-12 gap-8">
          <Tab className="font-inter font-bold uppercase text-footerBgColorOne text-xl focus:border-b-4 focus:border-buttonColorOne focus:text-buttonColorOne cursor-pointer">
            Salad
          </Tab>
          <Tab className="font-inter font-bold uppercase text-footerBgColorOne text-xl focus:border-b-4 focus:border-buttonColorOne focus:text-buttonColorOne cursor-pointer">
            Pizza
          </Tab>
          <Tab className="font-inter font-bold uppercase text-footerBgColorOne text-xl focus:border-b-4 focus:border-buttonColorOne focus:text-buttonColorOne cursor-pointer">
            soup
          </Tab>
          <Tab className="font-inter font-bold uppercase text-footerBgColorOne text-xl focus:border-b-4 focus:border-buttonColorOne focus:text-buttonColorOne cursor-pointer">
            Desserts
          </Tab>
          <Tab className="font-inter font-bold uppercase text-footerBgColorOne text-xl focus:border-b-4 focus:border-buttonColorOne focus:text-buttonColorOne cursor-pointer">
            Drinks
          </Tab>
        </TabList>
        <TabPanel>
          <PerOrderSection category={'salad'} />
        </TabPanel>
        <TabPanel>
          <PerOrderSection category={'pizza'} />
        </TabPanel>
        <TabPanel>
          <PerOrderSection category={'soup'} />
        </TabPanel>
        <TabPanel>
          <PerOrderSection category={'dessert'} />
        </TabPanel>
        <TabPanel>
          <PerOrderSection category={'drinks'} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;

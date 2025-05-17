import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { invoicesCategory } from '../../../mocks/mocks';
import icon from "../../../assets/images/my-services/invoice-manager.png";
import './invoice-manager-page.scss';
import { useSelector } from 'react-redux';
import InvoicesTable from './invoices/table/InvoicesTable';
import { invoices } from '../../../mocks/mocks';
import { money } from '../../../mocks/mocks';
import { clients } from '../../../mocks/mocks';
import { products } from '../../../mocks/mocks';
import InvoiceManagerDetailsBar from './InvoiceManagerDetailsBar';
import MoneyTable from './money/table/MoneyTable';
import ClientsTable from './clients/table/ClientsTable';
import ProductsTable from './products/table/ProductsTable';
import invoiceGrayIcon from '../../../assets/images/invoice-manager/invoice.svg';
import invoiceColorIcon from '../../../assets/images/invoice-manager/invoice-color.svg';
import moneyGrayIcon from '../../../assets/images/invoice-manager/money.svg';
import moneyColorIcon from '../../../assets/images/invoice-manager/money-color.svg';
import clientGrayIcon from '../../../assets/images/invoice-manager/client.svg';
import clientColorIcon from '../../../assets/images/invoice-manager/client-color.svg';
import productGrayIcon from '../../../assets/images/invoice-manager/product.svg';
import productColorIcon from '../../../assets/images/invoice-manager/product-color.svg';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const InvoiceManagerContent = () => {
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);




  // start showing invoice category tab
  const [activeTab, setActiveTab] = useState(0);
  const handleShowInvoice = (event, newValue) => {
    // if (event.target === event.currentTarget) {
      setActiveTab(newValue);
      // setNewMailToggler(false);
    // }
  };
  // end showing chat tab

  
  // start handle category show
  const [showCategory, setShowCategory] = useState(true);
  // end handle category show
  
  // start handle single invoice show
  const [activeSingleInvoice, setActiveSingleInvoice] = useState(false);
  // end handle single invoice show
  
  const [searchText, setSearchText] = useState('');


  
  return (

  <div className="cloud-page">
      <div className="cloud-page__header">

        <div className='grid-content'>
          <div className='grid-content_left cloud-page__header_share'>
            <div className='cloud-page__header_share_icon'>
              <img src={icon} />
            </div>

            <div className="cloud-page__header_share_title">
              {t("INVICE_MANAGER_PAGE.TITLE")}
            </div>
          </div>

          <div className='grid-content_right'>
            <div className='cloud-page__header_invoice-manager-details'>
              <InvoiceManagerDetailsBar activeTab={activeTab} setSearchText={setSearchText} />
            </div>
          </div>
        </div>
      </div>

      <div className="cloud-page__content">
        <div className='invoice-manager-page'>

        <div className='grid-content'>
          <div className='grid-content_left'
            style={{display: {lg: secondPopupTab || activeSingleInvoice ? 'none' : 'block', md: secondPopupTab || activeSingleInvoice ? 'none' : 'block'}}}
          >
            <div className='invoice-manager-page_sidebar'>
              <div className='invoice-manager-page_sidebar-section'>
                <div className='invoice-manager-page_sidebar-section_category'>
                  <Tabs
                    orientation="vertical"
                    // variant="scrollable"
                    value={activeTab}
                    onChange={handleShowInvoice}
                    aria-label="Vertical tabs example"
                    className='invoice-manager-page_sidebar-section_category-list'
                  >
                    {invoicesCategory.map((item, index) => (
                      <Tab
                        className='invoice-manager-page_sidebar-section_category-item'
                        key={item.id}
                        {...a11yProps(index)}
                        component={'div'}
                        label={
                          <>
                            <div className='invoice-manager-page_sidebar-section_category-item_content'>

                              {
                                item.title === 'Invoices' ? 
                                  <>
                                    <img src={invoiceGrayIcon} className="gray-icon"/>
                                    <img src={invoiceColorIcon} className="blue-icon"/>
                                  </> :

                                item.title === 'Money' ? 
                                  <>
                                    <img src={moneyGrayIcon} className="gray-icon"/>
                                    <img src={moneyColorIcon} className="blue-icon"/>
                                  </> :

                                item.title === 'Clients' ? 
                                  <>
                                    <img src={clientGrayIcon} className="gray-icon"/>
                                    <img src={clientColorIcon} className="blue-icon"/>
                                  </> :

                                  <>
                                    <img src={productGrayIcon} className="gray-icon"/>
                                    <img src={productColorIcon} className="blue-icon"/>
                                  </>
                              }
                                <p className='invoice-manager-page_sidebar-section_category-item_content-title'>{item.title}</p>
                            </div>
                          </>
                        } 
                      />
                    ))}
                  
                  </Tabs>
                </div>
              </div>
            </div>
          </div>

          <div className='grid-content_right'
            style={{ overflow: activeTab === 1 ? 'hidden' : 'auto'}}
          >
            <div className='invoice-manager-page_main'>
              <div className='invoice-manager-page_main_tabs'>
                <TabPanel value={activeTab} index={0} className='invoice-manager-page_main_invoices-tab'>
                  <InvoicesTable
                    invoices={invoices}
                    searchText={searchText}
                    setSearchText={setSearchText}
                  />
                </TabPanel>
                
                <TabPanel value={activeTab} index={1} className='invoice-manager-page_main_money-tab'>
                  <MoneyTable
                    invoices={money}
                    searchText={searchText}
                    setSearchText={setSearchText}
                  />
                </TabPanel>
                
                <TabPanel value={activeTab} index={2} className='invoice-manager-page_main_clients-tab'>
                  <ClientsTable
                    invoices={clients}
                    searchText={searchText}
                    setSearchText={setSearchText}
                  />
                </TabPanel>
                
                <TabPanel value={activeTab} index={3} className='invoice-manager-page_main_clients-tab'>
                  <ProductsTable
                    invoices={products}
                    searchText={searchText}
                    setSearchText={setSearchText}
                  />
                </TabPanel>
              </div>
            </div>
          </div>
        </div>


          {/* <Grid container spacing={3}>
            <Grid 
              item 
              xl={activeSingleInvoice ? 0 : 2} 
              lg={activeSingleInvoice ? 0 : 3} 
              md={activeSingleInvoice ? 0 : 3} 
              xs={12}
              sx={{
                display: {lg: secondPopupTab || activeSingleInvoice ? 'none' : 'block', md: secondPopupTab || activeSingleInvoice ? 'none' : 'block'},
              }}
            >

            </Grid>

            <Grid
              item
              xl={secondPopupTab || activeSingleInvoice ? 12 : 10}
              lg={secondPopupTab || activeSingleInvoice ? 12 : 9}
              md={secondPopupTab || activeSingleInvoice ? 12 : 9}
              xs={12}
            >
             
            </Grid>
          </Grid> */}
        </div>  
      </div>
  </div>

  );
}


const InvoiceManager = () => {
  return (
    <div className="page-container">
      <InvoiceManagerContent />
    </div>
  )
}

export default InvoiceManager;
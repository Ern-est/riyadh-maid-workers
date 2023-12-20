import React, { useState } from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom';
import qr from '../Assets/qr.jpg';
import fold2 from '../Assets/fold2.png';
import call from '../Assets/call.png'
import facebook from '../Assets/fb.png'
import linkedin from '../Assets/link.png'
import pin from '../Assets/pin.png'
import upon from '../Assets/upon.png'
import twit from '../Assets/twit.png'
import google from '../Assets/Google.png'
import profile from '../Assets/profile.jpg'
import Number from './Number';
const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalContent, setSelectedModalContent] = useState(null);


  const openModal = (content) => {
    setSelectedModalContent(content);
  };

  const closeModal = () => {
    setSelectedModalContent(null);
  };

  return (
    
    <div className="homer">
        <div className="leftie">
          <div className="start">
            <div className="left">
              <p>
              {selectedModalContent === 'Number' && (
    <Number isOpen={!!selectedModalContent} onClose={closeModal} content={<p>{selectedModalContent}</p>} />
  )}
                <h2>SIMILAR ARTICLES</h2>
                <h3>Office of monthly maids in Riyadh 0583595089</h3>
                <span>November 11, 2020</span>
                <hr />
                <h3>Female workers per month in Riyadh 0538839342</h3>
                <span>August 21, 2020</span>
                <hr />
                <h3>Maids per month in Riyadh 0557562109</h3>
                <span>August 17, 2020</span>

              </p>
            </div>
            <span className="straight"></span>
            <div className="right">
            <p>
              <h1>Hourly workers in Riyadh</h1>
              <span>Hourly maid rental companies in Riyadh are among the most important companies approved by the Ministry of Labor and Social Development in the Kingdom of Saudi Arabia. They also have a special permit to employ a large number of maids in the city of Riyadh for valued customers  in order to save them the hassle of searching for hourly maids in Riyadh with special specifications. The company for renting maids and domestic workers in the city of Riyadh is distinguished by renting maids with expirience in household chores and managing special events and parties</span>
            </p>
            </div>
          </div>
            <p>
              <h1>Hourly maid in Riyadh</h1>
              <span>Hourly maid rental offices in Riyadh have services that have expirience, efficiency and high skill in all household chores, whether cooking, cleaning, or raising young children. They are also obedient and know well how to deal with any problems they may encounter in household chores. They are also very proficient in the filed of cleaning, as they <b>Hourly maid rental companies in Riyadh</b> provide domestic workers with ease and safety</span>
            </p>
            <p>
              <h1>Hourly maids, Riyadh</h1>
              <span>The special prices of <b>maid rental companies in Riyadh</b> satisfy everyone, and they are considered very good prices for the service that the maid will provide in the client's home, as the maid of <b>domestic labor rental companies in Riyadh</b> is skilled in cleaning and completing household chores very quickly</span>
            </p>
            <p>
              <h1>An hourly labor rental company in Riyadh</h1>
              <span><b>Domestic labor rental companies in Riyadh</b> also provide Indonesian maids, as this type has a wonderful touch in cleaning bathrooms and floors.Beacause of the expirience and skill they possess, they are highly conscientious in terms of performing household chores with perfection and incredible freedom, and one of the things that maids in <b>hourly maid rental offices in Riyadh</b> are most keen on in performing household chores is to preserve the health of the children, so the housewife can leave Her Child with her without any worry or fear</span>
            </p>
            <div className="caller">
            <img src={call} onClick={() => openModal('Number')} alt="" className='call'/>
            </div>
            <p>
              <h1>Expirienced hourly workers in Riyadh</h1>
              <span><b>The maids of domestic labor rental companies in Riyadh</b> are trained to the highest level to carry out househld chores, such as cleaning the house, washing the floors, washing the bathroom, and washing clothes, in addition to their flexible dealings, which is widely apparent at parties and events. Hourly <b>maid rental companies in Riyadh</b> adhere to the deadlines that are set. Agreed upon between them and the client. The <b>maid and domestic labor rental company in Riyadh</b> appreciates the importance of adhering to appointments, especially on large occasssions</span>
            </p>
            <p>
              <h1>Hourly maids office, Riyadh</h1>
              <span><b>The Hourly Cleaning Office in Riyadh</b> is keen from time to provide various and different offers suitable for the holidays and occasions expirienced by the Islam nation. It also helps greatly in providing real discounts and reductions on the services of the <b>Hourly Cleaning Workers in Riyadh</b> in order to make housewives happy. <b>The Hourly Cleaning Office in Riyadh</b> is keen to provide Providing its services at fantastic prices that no client can find in any office other than an <b>hourly cleaning office in Riyadh</b></span>
            </p>
            <p>
              <h1>Hourly workers in Riyadh</h1>
              <span>Credibility and proffesionalism in work are the most important features of <b>an hourly cleaning office in Riyadh</b>, as we offer customers the best services from time to time in order to obtain the best results. <b>Hourly workers in Riyadh</b> have aa great deal of proffesionalism and proffesionalism, thanks to the efforts made by <b>the hourly cleaning office. In Riyadh,</b> it was able to completely change customer's minds about services that do not reach the level of proffessionalism from other companies</span>
            </p>
            <div className="caller">
            <img src={call} onClick={() => openModal('Number')} alt="" className='call'/>
            </div>
            <p>
              <h1>Hourly domestic workers in Riyadh</h1>
              <span><b>The offices for renting hourly maids in Riyadh</b> are reliable and trust all the maids who offer to work at home, and they were able to gain the customer's trust thanks to the quality of their services and their cheap prices for <b>hourly</b> maids in Riyadh. In case you want to hire domestic workers, you must contact <b>the offices for renting hourly maids in Riyadh</b> from By calling their numbers at any time you wish, on al  days of the week, <b>hourly maid rental offices in Riyadh</b> provide the best hourly domestic workers who possess mastery and honest, and at the lowest prices that suit every home in the Kingdom of Saudi Arabia</span>
            </p>
            <p>
              <h1>Hourly maid east of Riyadh</h1>
              <span>We offer you, dear customer, through <b>the offices for renting hourly maids in Riyadh,</b> everything you want and are looking for in terms of the specifications <b>of an hourly maid in eastern Riyadh ,</b> as <b>the offices renting hourly maids in Riyadh</b> guarantee you the best maid to help with household chores and perform them with proffessionalism and sincerity. <b>The hourly maid</b> in eastern Riyadh has great expirience. In the field of cleaning, whether it is cleaning, wether it is cleaning floors, ceramics, tiles and marble, not only that, but she also masters the arts of cooking all kinds, and the cooking for <b>hourly maid services in Riyadh</b> is distinguished by its good taste</span>
            </p>
            <p>
              <h1>Hourly maid rental office in Riyadh</h1>
              <span><b>An hourly maid in Riyadh</b> can make all Eastern and western sweets, and she can wash dishes and do anything the house needs. When you hire an <b>hourly cleaning office in Riyadh</b>, you will be in safe hands, and our prices are unbeatable, as we can provide the best <b>hourly services in Riyadh</b> is oe of those who have the proffesionalism at the lowest prices, and our prices are suitable for every housewife and every Saudi home</span>
            </p>
            <div className="caller">
            <img src={call} onClick={() => openModal('Number')} alt="" className='call'/>
            </div>
            <p>
              <h1>Companies that rent hourly miads in Riyadh</h1>
              <span>The goal <b>of companies renting hourly maids in Riyadh</b> is to maintain the comfort of our valued customers, so that we can be the preffered office for all residents of the Riyadh region. You can also hire hourly <b>maids in Riyadh</b> at any time. Each maid has all the guarantees and official papers that confirm her origin, and <b>an hourly maid is also appointed. East Riyadh</b> has been under the most difficult selections for months, and after ensuring all of this and that they have become qualified to implement the service, they are immediately sent to the customers</span>
            </p>
            <p>
              <h1>Hourly workers in Riyadh</h1>
              <span>We can save you from searching now for an office to rent hourly maids , as it may be an unsuccessful choice if this is not licensed, or the maids are not qualified and do not have a consience, and we offer you <b>hourly maids in Riyadh</b>who have been put through many tests until <b>Hourly maid rental companies in Riyadh</b> have confirmed that <b>hourly maids in eastern Riyadh</b>are fit to carry out the service</span>
            </p>
            <p>
              <h1>Hourly maid numbers in Riyadh</h1>
              <span>If you, dear customer, would like to benefit from the service of <b>hourly maid rental companies in Riyadh,</b> all you have to do is communicate quickly with <b>hourly maid rental company in Riyadh </b>, as it starts working from seven in the morning until 12:00, and you will be answered immediately by one of the employees. The company <b>rents maids and domestic workers in the city of Riyadh</b> in order to take your data ad determine the nationality of the maid you want according to special specfifications. The work agreement or work contract begins, which is annual,monthly,or in hours according to your request, which you desire</span>
            </p>
            <p>
              <h1>Worker for rent by the hour in Riyadh</h1>
              <span>As for the special prices for maids for rent by the hour in Riyadh from <b>companies that rent domestic workers in Riyadh</b>, they are prices that suit all categories in the Kingdom of Saudi Arabia. They are also competitive prices when compared to other pricews of companies that <b>rent maids and domestic workers in Riyadh.</b> All that a company <b>that rents maids by the hour in Riyadh</b> wants is to get its good reputation, gaining the trust of valued customers in all regions of the Kingdom of Saudi Arabia, especially in the Riyadh region, and saving the effort and fatigue that a person expends in searching for a maid</span>
            </p>
            <div className="caller">
            <img src={call} onClick={() => openModal('Number')} alt="" className='call'/>
            </div>
            <p>
              <h1>Maids in Riyadh</h1>
              <span>Home work service is one of the most requested services these days and this is in addition to requests to rent a babysitter, requests to rent babysitters for the elderly, and other requests for housework services. Most requests are to hire maids for the month in order to take care of the entire housework throughout the month, and there many companies that provide these services. Services, whether each of them separately or all of the previously mentioned services. The demand for home services within Riyadh and customer questions about the best worker recruitment company in Riyadh increases every month</span>
            </p>
            <p>
              <h1>Hourly workers in Riyadh</h1>
              <span>As we mentioned previously, there are many companies and offices specialized in renting services in al cities, and these companies and offices provide Indonesian maids per month in Riyadh, provided that they provide services for household chores of all ages, as well as of various foreign and Arab nationalities. The company also provides maids for renting children's nannies and babysitters for the elderly maids per month. In Riyadh, they are usually contracted to live in the house throughout the month and this was agreed upon with the company before sending the workers to the client, provided that they are given a suitable monthly salary for the required home service. The maid rental company also has African maids as well as Somali maids, and it also provides cooks for homes and villas. House management specialists in palaces and villas</span>
            </p>
            <p>
              <h1>The best companies for renting maids in Riyadh</h1>
              <span>The best maid rental company in Riyadh always seeks to satisfy the customer and gain his trust, so it has maids who are trustworthy and honesty in dealing with customers and company guarantees that it always seeks to provide housemaids with very high efficiency in working in this field and they have honesy and respect in dealing with homeowners. Whereas, service offices for domestic workers in Riyadh only provide well-trained maids for all household chores, such as cleaning cooking, washing, etc.,using the latest methods and techniques that guarantee the quality and efficiency of the service, in addition to that the best maid rental company in Riyadh can provide services. Others such as providing babysitters known as babysitters as well as cooks, drivers, and dining workers, can be relied upon to provide a full staff to work in you villa</span>
            </p>
            <p>
              <h1>Riyadh maid rental office</h1>
              <span>If you want to get a maid for a small house or a nanny for your child at reasonable prices for the service provided, you can help from maid rental offices in Riyadh, which know the specifications required for the maid you want to hire and immediately suggest to you the best foreign and Arab maids upon request. The maid rental offices in Riyadh provide Servants of Somali and Sudanese nationalities, which usually require a much lower monthly wage than foreign maids. The maid rental office can also provide you with foreign servants if you wish. They usually speak Arabic in addition to their priary language, and thus they can help your children study and take more care of them. It is wonderful, so if you want to hire servants, you must use such offices</span>
            </p>
            <p>
              <h1>Workers for daily rent in Riyadh</h1>
              <span>Hiring maids per day in northern Riyadh is done through a Riyadh maid rental company designated for this service, where company or office sends the domestic worker to the client's  home for a number of hours, by hiring domestic workers to perform a specific occassion. Or take care of the children until the mother returns, provided that the worker receives a daily wage from the servant company</span>
            </p>
            <p>
              <h1>Hourly workers in Riyadh</h1>
              <span>Most requests for renting maids in the city of Riyadh are for the maid to be of Filipino nationality. This is because Filipino maids are well proficient in doing housework very quickly and with very high quality, using the latest innovative methods to complete cleaning, washing and cooking work, which makes them the first choice of customers. Therefore, companies seek Renting servants to provide Filipino workers</span>
            </p>
            <hr className="stripp" />
            <div className="media">
            <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="" className='fb'/>
          </a>
          <a href="https://www.stumbleupon.com/">
            <img src={upon} alt="" className='fb'/>
          </a>
          <a href="https://www.google.com/">
            <img src={google} alt="" className='fb'/>
          </a>
          <a href="https://www.twitter.com/">
            <img src={twit} alt="" className='fb'/>
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="" className='fb'/>
          </a>
          <a href="https://www.pinterest.com/">
            <img src={pin} alt="" className='fb'/>
          </a>
            </div>
            <div className="tags">
              <button>HOURLY MAID IN RIYADH</button>
              <button>HOURLY MAIDS, RIYADH</button>
              <button>HOURLY MAID NUMBERS IN RIYADH</button>
              <button>HOURLY WORKERS IN RIYADH</button>
              <button>AN HOURLY LABOR RENTAL COMPANY IN RIYADH</button>
              <button>WORKER FOR RENT BY THE HOUR IN RIYADH</button>
              <button>EXPIRIENCED HOURLY WORKERS IN RIYADH</button>
              <button>HOURLY MAIDS OFFICE IN RIYADH</button>
              <button>HOURLY WORKERS IN RIYADH</button>
              <button>HOURLY COOK IN RIYADH HARAJ</button>
            </div>
            <div className="art">
          <img src={qr} alt="Search" className="latest" /> <span className='chat'>ABOUT ROZALMADENA</span>
          </div>
          <div className="profile">
            <img src={profile} alt="" className='pro'/>
          </div>
        </div>
        <div className="rightie">
          <div className="tex">
          <img src={qr} alt="qrcode" className="rq" />
        <div className="search">
          <input type="text" className='init' placeholder='...research' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="butt" onClick={() => setSearchQuery('')}>research</button>
          </div>
          </div>
        
          <div className="tex">
          <img src={qr} alt="Search" className="qrer" /> <span className='chat'>LATEST ARTICLES</span>
          </div>
          <div className="research">
            <p>
              <span>Landscaping teacher in Riyadh</span>
              <hr />
              <span>City paints teacher, Al-Rabwa district,</span>
              <hr />
              <span>Paints teacher in the city, King Fahd District, 0510865923</span>
              <hr />
              <span>Mallis West Riyadh 0540017022</span>
              <hr />
              <span>City decoration techinician, Sayyid Al-Shuhada districit, 0510865923</span>
            </p>
          </div>
          <div className="tex">
          <img src={qr} alt="qrcode" className="rer" /> <span className='chat'>THE LATEST COMMENTS</span>
          <div className="empty"></div>
          </div>
          <div className="tex">
          <img src={qr} alt="qrcode" className="arch" /> <span className='chat'>ARCHIVES</span>
          </div>
          <div className="box">
          <p>
            <span>November 2023</span>
            <hr />
            <span>October 2023</span>
            <hr />
            <span>September 2023</span>
            <hr />
            <span>August 2023</span>
            <hr />
            <span>July 2023</span>
            <hr />
            <span>May 2023</span>
            <hr />
            <span>April 2023</span>
            <hr />
            <span>March 2023</span>
            <hr />
            <span>February 2023</span>
            <hr />
            <span>January 2023</span>
            <hr />
            <span>December 2022</span>
            <hr />
            <span>November 2022</span>
            <hr />
            <span>October 2022</span>
            <hr />
            <span>September 2022</span>
            <hr />
            <span>August 2022</span>
            <hr />
            <span>July 2022</span>
            <hr />
            <span>June 2022</span>
            <hr />
            <span>May 2022</span>
            <hr />
            <span>April 2022</span>
            <hr />
            <span>March 2022</span>
            <hr />
            <span>February 2022</span>
            <hr />
            <span>January 2022</span>
            <hr />
            <span>December 2021</span>
            <hr />
            <span>November 2021</span>
            <hr />
            <span>October 2021</span>
            <hr />
            <span>September 2021</span>
            <hr />
            <span>August 2021</span>
            <hr />
            <span>July 2021</span>
            <hr />
            <span>June 2021</span>
            <hr />
            <span>May 2021</span>
            <hr />
            <span>April 2021</span>
            <hr />
            <span>March 2021</span>
            <hr />
            <span>February 2021</span>
            <hr />
            <span>January 2021</span>
            <hr />
            <span>December 2020</span>
            <hr />
            <span>November 2020</span>
            <hr />
            <span>October 2020</span>
            <hr />
            <span>September 2020</span>
            <hr />
            <span>August 2020</span>
            <hr />
            <span>July 2020</span>
            <hr />
            <span>June 2020</span>
            <hr />
            <span>May 2020</span>
            <hr />
            <span>April 2020</span>
            <hr />
            <span>February 2020</span>
            <hr />
            <span>January 2020</span>
            <hr />
            <span>December 2019</span>
            <hr />
            <span>September 2019</span>
            <hr />
            <span>January 2019</span>
            <hr />
            <span>November 2018</span>
            <hr />
            <span>June 2017</span>
            <hr />
            <span>May 2017</span>
        </p>
          </div>
          <div className="tex">
          <img src={qr} alt="qrcode" className="arch" /> <span className='chat'>CATEGORIES</span>
          </div>
          <div className="box">
            <p>
              <div className="rel">
              <span>Uncategorized</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Jubali dyes and paints</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Plumbing works in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Plumbing and electrical works in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Tile installation work in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Restoration and contracting works in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Restoration and contracting works in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Gypsum board works in Dammam and Al-Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Decoration works in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Plumbing works in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Landing works in Al-Ahsa</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Landing works in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Recruiting a private driver from Egypt</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Recruiting domestic workers from Egypt</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Electronic shopping</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr /><div className="rel">
              <span>Renting maids in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Jeddah car rental</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Hiring maids in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Hiring female workers per month in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Furniture storage in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installing IKEA furniture in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>IKEA furniture installation in Yanbu</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Interlock installation in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Parquet installation in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Parquet installation in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Parquet installation in Hafar Al-Batin</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Tile installation in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation of gypsum board Al-Ahsa</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Gypsum board installation in Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation of gypsum board in Hafar Al-Batin</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation of marble and tiles in Jubail</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installing curtains in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installing curtains in Qatif</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Curtain installation in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Al-Ahsa ceramic installation</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Khobar ceramic installation</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation of ceramic tiles in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Ceramic installation in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Ceramic installation in Qassim</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Ceramic installation in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation of ceramic tiles in Hafar Al-Batin</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installing pigeon repellent in the toilets</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installing a pigeon repellent in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation of bedrooms in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Air conditioning installation in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation and manufacture of hafar Al-Batin shutters</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Plumbing installation and maintenance in Al-Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Kitchen installation and maintenance</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation and maintenance of kitchens in Jubail</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation and maintenance of kitchens in Al-Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation and maintenance of kitchens in Dharhan</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Installation and maintenance of air conditioners in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Customized kitchens in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Detailing and installation of Dammam sinks</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Peeling and pigment removal in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Ceramic and marble crushing in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Tank cleaning in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Steam cleaning in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Cleaning water tanks in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Cleaning tanks in Qassim</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Cleaning tanks in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Sofa cleaning in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Cleaning sofas and sitting rooms in Dawadmi</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Cleaning city councils</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Dammam air conditioner cleaning</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Air conditioner cleaning in Dawadmi</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Air conditioner cleaning in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Air conditioner cleaning south of Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Split air conditioner cleaning in Qatif</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Split air condtioner cleaning in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Air conditioner  cleaning east of Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>Air conditioner cleaning west of Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr />
              <div className="rel">
              <span>House cleaning in Dawadmi</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Cleaning and installation of air conditioners in Hafar Al-Batin</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Polishing tiles in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Elderly babysitter in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Babysitter and home care Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Cleaning services in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture moving services in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture moving services in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture transportation services from the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Khobar paint</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Jeddah painting</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Khamis Mushayt Paints</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Sakaka Al-Jouf Paints</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Hafar Al-Batin paints and dyes</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Abha Paints and dyes</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Al-Ahsa paints and dyes</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Qatif paints</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Paints and gypsum board, Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam paints and Decorations</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Paints and decorations in Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Mecca paints and decorations</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Gypsum board decorations in Al-Ahsa</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam decorations and paints</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Home care in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam and Khobar plumber</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Riyadh plumber</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Jeddah plumber</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Hafar Al-Batin plumber</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Plumber Yanbu</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Al-Ahsa and Hofuf plumbing</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Buying used furniture in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Domestic labor rental companies in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Plumbing company in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Home renovation company in Jubail</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>House restoration and maintainance company in Hafar Al-Batin</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Restoration company in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Cleaning company in Hafr Al-Batin</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Air conditioner cleaning company in Al-Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Painting and dyeing company in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture transportation company from Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Cleaning company in Arar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Hourly Indonesian workers south of Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Indonesian hourly workers south of Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Hourly workers in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Hourly workers in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Female workers per month in Dawadmi and Affif</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Female workers per month in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Workers per month, Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Monthly maids in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Monthly maids in Al-Kharj</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Work per month and hour in news</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Workers in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Workers and maids in Al-Ahsa</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Workers and maids in Jubail</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Workers and cooks in Al-Shahr Al-Qassim and its post office</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Sewerage suction in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Sanitation suction in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Khafji dyer</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam and khobar dyer</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Refrigerator maintenance in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam washing machines maintenance</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Air conditioning maintenance in Hafar Al-Batin</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Air conditioning maintenance in Mecca</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Maintenance and installation of air conditioners in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Maintenance and cleaning of gas ovens in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Maintenance-plumbing-works-Yanbu</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Qatif refrigerator maintenance</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Maintenance and repair of plumbing works in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>A cook and babysitter in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>A cook by the month and hour in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>A cook and babysitter for the elderly in Kharj</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Female workers in the month of Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Monthly workers in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Monthly workers in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Filipina cleaning ladies in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Hourly domestic workers in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Hourly domestic workers, Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Cleaning tanks in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Mobile car wash in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Opening cores and cutting concrete in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dismantling and installing Riyadh furniture</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dismantling and installing kitchen maintenance in Al-Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dismantling and installing kitchens in Jubail</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dismantling and installing kitchens in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dismantling, installing and maintaining Dammam kitchens</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Cutting and perforating concrete in Dammam and Jubail</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Water leak detection Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Detecting leaks and installing insulation in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Electrician in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam electrician</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Hafar Al-Batin Electrician</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Welding tanks in Jubail and Al-Ahsa</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Welding tanks in Dammam and Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam Plumbing and Electricity Corporation</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture stores</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Bedroom stores</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Riyadh massage</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam and Khobar paint teacher</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Court teacher in Yanbu</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>A boyah teacher in Dammam is a Pakistani</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Jeddah painting teacher</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Riyadh building contractor</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Landscaping contractor in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Riyadh recruitment offices</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Domestic labor recruitment offices</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Labor rental offices in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Pest control in Qassim</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Pest control in Qatif</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Pest control in Dawadmi</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Pest control in the city</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Jeddah recruitment office</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Melissa Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Dammam and Khobar Carpentry</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Carpenter in Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Carpenter in Dammam</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Carpenter in Qatif</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Carpenter in Medina</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Carpenter in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Saihat carpenter</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Carpenter dismantling and installing furniture in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Carpenter dismantling and installing bedrooms in Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture transportation within Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture transportation in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Moving furniture in Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Moving furniture inside Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture transportation from Al-Khobar to Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Moving furniture from Al-Khobar to Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Furniture transportation from Dammam to Riyadh</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Transporting furniture from Dammam to Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Moving furniture from Jeddah</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
              <hr className='lain'/>
              <div className="rel">
              <span>Carpentry workshop in Dammam and Al-Khobar</span>
              <img src={fold2} alt="foldersnap" className="folder" />
              </div>
            </p>
          </div>
          <div className="tex">
          <img src={qr} alt="Search" className="coder" /> <span className='chat'>MIX</span>
          </div>
          <div className="research">
            <p>
              <Link to="/Loginform">
              <span className='signin'>Sign in</span>
              </Link>
              <hr />
              <span>Feed entries</span>
              <hr />
              <span>Summary of comments</span>
              <hr />
              <a href="https://ar.wordpress.org/" className='ref'>Wordpress.org</a>
            </p>
          </div>
      </div>
    </div>
  )
}

export default Homepage
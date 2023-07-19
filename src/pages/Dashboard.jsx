// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
// import ContactTable from '../components/ContactTable'

// import { Pagination } from '@mantine/core';
// import Cookies from 'js-cookie';
// import { useGetContactsQuery } from '../features/api/contactApi';
// import { useDispatch } from 'react-redux';

// const Dashboard = () => {
//   const token = Cookies.get("token");
//   const dispatch=useDispatch
//  const { data } = useGetContactsQuery(token);
//   const [activePage, setPage] = useState(1);

//   if(data){
//     dispatch((data?.contacts.data))
//     setPage(data?.contacts.current_page)

//   }


//   return (
//     <div>
//       <Navbar/>

//       <Sidebar/>
//       <div className="px-4 ml-0 md:ml-64">
//             <ContactTable />
//           </div>

//           <Pagination


// value={activePage}
// onChange={setPage}
//       total={10}
//       position="center"
//       styles={(theme) => ({
//         control: {
//           '&[data-active]': {
//             backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
//           },
//         },
//       })}
//     />

//     </div>
//   )
// }

// export default 

// import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className='w-6/12 m-16'>
        <div className='flex gap-3'>
          <div className='flex-none font-bold '>A B O U T</div>
          <div className='flex-auto' >B A U E N</div>
        </div>

        <div className='flex flex-col gap-4 mt-4'>
          <div> Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabit tristiqu</div>
          <div>a duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.</div>

          <div>
            Planner inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.
          </div>
        </div>

      </div>
      <div className='w-6/12'>      <img className='' src='https://webredox.net/demo/wp/bauen/light/el/multi/demo1/wp-content/uploads/2021/09/about.jpg' />
      </div>
</div>
)
}

// export default Dashboard

// import React from 'react'
// import Slide from './Slide'

// const Dashboard = () => {
//   return (
    


//       <div>
//         <div className='flex gap-4 items-center justify-around xl:py-44'>
//           <div>
//             <h2>Phone</h2>
//             <div>+1-203-123-0606</div>
//             <div className=''>© Copyright 2023 Bauen. Developed By webRedox</div>
//           </div>
//           <div>
//             <h2>Email</h2>
//             <div>support@bauen.com</div>
//             <div>ss</div>
//           </div>
//           <div>
//             <h2>Our Address</h2>
//             <div>24 King St, Charleston, SC 29401 USA</div>
//           </div>
//         </div>
//       </div>

//       {/* slide */}

//         <Slide/>
//     </div>
//   )<div className=''>
//       {/* backgroundImage */}

//       {/* <div className=''>
//           <img className='bg-cover w-full xl:h-96' src='https://webredox.net/demo/wp/bauen/dark/el/onepage/demo1/wp-content/uploads/2021/09/2-540x317.jpg' />

//         </div> */}

//       {/* card body */}

//       <div className='relative flex justify-center items-center bg-[url(https://webredox.net/demo/wp/bauen/dark/el/onepage/demo1/wp-content/uploads/2021/09/2-540x317.jpg)] h-[400px]'>
//         <div className='absolute right-0 bottom-[-100px] h-48 w-96 bg-white border border-gray-200' >
//           <div >
//             <p className='text-justify'> This is a wider card with supporting text below as a natural lead-in
//               to additional content. This content is a little bit longer.</p>
//           </div>


//           <div className='flex gap-4 mt-7 '>
//             <img className='rounded-full w-16 h-16' src='https://webredox.net/demo/wp/bauen/light/el/multi/demo1/wp-content/uploads/2021/09/1-1.jpg' />
//             <div>
//               <h5>Jason Brown</h5>
//               <h5>Crowne Plaza Owner</h5>
//             </div>
//           </div>
//         </div>
//       </div>


//       <div class="relative overflow-visible bg-cover bg-[url(https://webredox.net/demo/wp/bauen/dark/el/onepage/demo1/wp-content/uploads/2021/09/2-540x317.jpg)] bg-[url(https://placekitten.com/1400)] h-400">

//       </div>


// }

// export default Dashboard


// <div className="bg-red-300 text-black rounded-lg p-4 mt-4 mx-6 h-52">
// <p className="text-white">This is an example testimonial from a satisfied client. They were impressed with our services and mentioned some positive feedback.</p>
// <div className="flex items-center mt-4">
//   <img src="https://webredox.net/demo/wp/bauen/light/el/multi/demo1/wp-content/uploads/2021/09/1-1.jpg" alt="Jason Brown" className="w-10 h-10 rounded-full mr-2" />
//   <div>
//     <p className="text-sm text-white">Jason Brown</p>
//     <p className="text-xs text-white">Crowne Plaza Owner</p>
//   </div>
// </div>
// </div>
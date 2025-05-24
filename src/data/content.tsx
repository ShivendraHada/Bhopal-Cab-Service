import { AiOutlineDollarCircle } from "react-icons/ai";
import {
  BsAndroid2,
  BsApple,
  BsFacebook,
  BsLinkedin,
  BsPersonBadge,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { LuBadgePercent, LuWallet } from "react-icons/lu";

import chat from "@/images/chat.png";
import driver from "@/images/driver.png";
import settings from "@/images/login.png";
import drivers from "@/images/payment.png";
import qrCode from "@/images/qr-code.png";

export const navLinks = [
  {
    id: "suka33",
    href: "/",
    name: "Home",
  },
  {
    id: "hjv44",
    href: "/#",
    name: "Features",
  },
  {
    id: "bdf00",
    href: "/#",
    name: "About Us",
  },
  {
    id: "cfe32",
    href: "/#",
    name: "How It Works",
  },
  {
    id: "357pp",
    href: "/#reviews",
    name: "Testimonial",
  },
  {
    id: "sre56",
    href: "/#",
    name: "Blog",
  },
];

export const headingData = {
  description: "The Most Reliable Taxi Booking Service",
  spanText: "from Bhopal to Anywhere in India",
  title: "Your On-Demand Taxi Booking",
  subtext:
    "Experience hassle-free, safe, and comfortable taxi bookings with us. Whether for business or leisure, we connect you to trusted taxis across the country.",
};

export const profilesPhotos = [
  "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80",
  "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
];

export const downloadStats = {
  title: "2000+",
  description: "Satisfied Customers",
};

export const downloadSectionData = {
  headingStart: "Call Us",
  headingEnd: "Now",
  spanText: "Taxi Booking",
  description:
    "Experience hassle-free taxi booking from Bhopal to all over India right through our easy-to-use website. Travel with comfort and confidence anytime, anywhere.",
  stats: [
    {
      title: "2000+",
      description: "Happy Customers Served",
    },
    {
      title: "100+",
      description: "Cities Covered Across India",
    },
    {
      title: "50+",
      description: "Reliable Vehicles in Our Fleet",
    },
  ],
  downloadLinks: [
    {
      title: "For iOS",
      OSversion: "IOS 15.6+",
      qrCode,
      href: "/#",
      svg: <BsApple className="text-5xl" />,
    },
    {
      title: "For Android",
      OSversion: "Android 8.0+",
      qrCode,
      href: "/#",
      svg: <BsAndroid2 className="text-5xl" />,
    },
  ],
};

export const benefitsData = {
  headingStart: "Benefits of",
  span: "Taxi Booking Service",
  description: "Benefits of the Service",
  benefits: [
    {
      svg: <AiOutlineDollarCircle className="text-2xl" />,
      title: "Fare Estimates",
      description:
        "Get clear, upfront pricing with no hidden charges — know your fare before you travel.",
    },
    {
      svg: <LuWallet className="text-2xl" />,
      title: "Secure Payments",
      description:
        "Choose from multiple safe payment options including UPI, bank transfer, or cash",
    },
    {
      svg: <LuBadgePercent className="text-2xl" />,
      title: "Exclusive Offers",
      description:
        "Enjoy discounts on popular routes and special deals for return trips.",
    },
    {
      svg: <BsPersonBadge className="text-2xl" />,
      title: "24/7 Support",
      description:
        "Have a question or need urgent travel? Our support team is always ready to assist you.",
    },
  ],
};

export const aboutUsData = {
  headingStart: "About",
  spanText: "Our Taxi Booking",
  headingEnd: "Service",
  description: "About Us",
  downloadHref: "/#",
  list: [
    "We provide reliable outstation taxi services from Bhopal to any city across India.",
    "Booking a ride is quick and easy through our website or a simple phone call.",
    "Our fleet includes clean, comfortable, and well-maintained vehicles driven by experienced professionals.",
    "Whether it is a business trip, family travel, or emergency journey — we ensure safe, timely, and affordable travel solutions.",
  ],
};

export const sectionDemoData = {
  headingStart: "View",
  spanText: "Our App Demo",
  description: "App Demo",
  mockup:
    "https://cdn.dribbble.com/users/8491023/screenshots/19772741/media/7ae7e21d9757b69788a4e9c2b24dc3aa.png",
};

export const featuresData = {
  spanText: "Key Features",
  headingEnd: "of Taxi Booking App",
  descriptionTwo: "Best Features",
  descriptionOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  features: [
    {
      title: "Instant Driver & call chat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      screenshot: chat,
    },
    {
      title: "Instant Notifications",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      screenshot: drivers,
    },
    {
      title: "Wide Selection of drivers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      screenshot: settings,
    },
  ],
};

export const pricingData = {
  headingStart: "Let us know the Pricing",
  spanText: "Plan for you",
  description: "Pricing & Plans",
  plans: [
    {
      name: "Basic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      priceMonthly: 69,
      priceYearly: 199,
      href: "/#",
      plans: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
      ],
    },
    {
      name: "Standard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      priceMonthly: 89,
      priceYearly: 299,
      href: "/#",
      plans: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
      ],
    },
    {
      name: "Premium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      priceMonthly: 109,
      priceYearly: 599,
      href: "/#",
      plans: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
      ],
    },
  ],
};

export const countries = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Coimbatore",
  "Visakhapatnam",
  "Vadodara",
  "Ludhiana",
  "Agra",
];

// export const reviewSectionData = {
//   headingStart: "Our Customers",
//   spanText: "Testimonials",
//   description: "Testimonials",
//   reviews: [
//     {
//       name: "John Doe",
//       occupation: "Govt Job",
//       review:
//         "John is an exceptional web developer. He delivers high-quality code on time and always goes the extra mile to ensure a successful project.",
//       profilePhoto:
//         "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       name: "Alice Smith",
//       occupation: "Senior Engineer",
//       review:
//         "Alice is a talented graphic designer. Her creative designs have greatly improved our brand's image. She's a pleasure to work with.",
//       profilePhoto:
//         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=500",
//     },
//     {
//       name: "Mark Johnson",
//       occupation: "Marketing Specialist",
//       review:
//         "Mark's marketing strategies have boosted our sales significantly. He's a results-driven professional who understands our target audience.",
//       profilePhoto:
//         "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       name: "Sarah Adams",
//       occupation: "Accountant",
//       review:
//         "Sarah is a highly organized accountant who has helped us streamline our financial processes. Her attention to detail is impressive.",
//       profilePhoto:
//         "https://images.unsplash.com/photo-1619420674819-da50b9f76950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       name: "Michael Brown",
//       occupation: "Sales Manager",
//       review:
//         "Michael's leadership has motivated our sales team. He consistently meets and exceeds our sales targets. An asset to the company.",
//       profilePhoto:
//         "https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       name: "Emily Wilson",
//       occupation: "Customer Support",
//       review:
//         "Emily's friendly demeanor and prompt responses make her a valuable member of our customer support team. She leaves our customers satisfied.",
//       profilePhoto:
//         "https://images.unsplash.com/photo-1607982863027-0cb6818ee8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//   ],
// };

export const reviewSectionData = {
  headingStart: "Our Customers",
  spanText: "Testimonials",
  description:
    "Hear from our satisfied customers who have traveled across India with us.",
  reviews: [
    {
      name: "Ravi Kumar",
      occupation: "Business Owner",
      review:
        "The taxi service from Bhopal to Delhi was seamless and comfortable. The driver was punctual and courteous. Highly recommend for long-distance travel!",
      profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg", // Indian-looking male
    },
    {
      name: "Sneha Patel",
      occupation: "Software Engineer",
      review:
        "Booking my trip from Bhopal to Mumbai was easy and affordable. The vehicle was clean and the driver very professional. Will use again!",
      profilePhoto: "https://randomuser.me/api/portraits/women/65.jpg", // Indian-looking female
    },
    {
      name: "Anil Sharma",
      occupation: "Travel Blogger",
      review:
        "Excellent service with transparent pricing. The journey from Bhopal to Jaipur was comfortable and safe. Support team was very responsive.",
      profilePhoto: "https://randomuser.me/api/portraits/men/44.jpg", // Indian-looking male
    },
    {
      name: "Priya Singh",
      occupation: "Teacher",
      review:
        "I trusted them for my family trip from Bhopal to Agra. The drivers are very professional and the booking process was smooth. Highly recommended!",
      profilePhoto: "https://randomuser.me/api/portraits/women/56.jpg", // Indian-looking female
    },
    {
      name: "Deepak Verma",
      occupation: "Sales Executive",
      review:
        "The taxi was clean, and the driver was very courteous. The ride from Bhopal to Indore was on time and hassle-free. Great experience overall.",
      profilePhoto: "https://randomuser.me/api/portraits/men/34.jpg", // Indian-looking male
    },
    {
      name: "Neha Gupta",
      occupation: "Freelancer",
      review:
        "I loved the ease of booking and the transparent fare. The trip from Bhopal to Hyderabad was very comfortable and the driver was friendly.",
      profilePhoto: "https://randomuser.me/api/portraits/women/40.jpg", // Indian-looking female
    },
  ],
};

export const driversSectionData = {
  headingStart: "The",
  spanText: "Best Drivers",
  headingEnd: "at Your Fingertips",
  description: "Top Rated Driver",
  href: "/#",
  drivers: [
    {
      profile: driver,
      name: "Eleanor Simmons",
      car: "CityCruiser",
      rating: 5.0,
    },
    {
      profile: driver,
      name: "Victor Ramirez",
      car: "UrbanShuttle XL",
      rating: 5.0,
    },
    {
      profile: driver,
      name: "Isabella Chen",
      car: "EcoCab 2000",
      rating: 5.0,
    },
  ],
};

export const blogSectionData = {
  headingStart: "Our Latest",
  spanTextOne: "Blogs",
  spanTextTwo: "News",
  descriptionOne: "Blogs & News",
  descriptionTwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  blogs: [
    {
      coverImage:
        "https://img.freepik.com/foto-gratis/mujer-usando-su-telefono-movil-computadora-portatil-coche_23-2148510578.jpg?w=740&t=st=1697629361~exp=1697629961~hmac=2769a9a56100adb27c0ec6ecdd666f04726820575d105629c211873d60c18a41",
      tag: "Taxi Booking",
      title: "How to Choose the Best Taxi Booking App for You",
      date: "23 Oct, 2023",
      writer: "By Admin",
    },
    {
      coverImage:
        "https://img.freepik.com/free-photo/woman-talking-with-taxi-driver-car_23-2149149582.jpg?w=740&t=st=1697629261~exp=1697629861~hmac=146835e791ae4331efe49d60d3918388b25b4277fd323ac1f22c33c159759846",
      tag: "Taxi Booking",
      title: "The Best Taxi Booking Apps for Budget Travelers",
      date: "23 Oct, 2023",
      writer: "By Admin",
    },
    {
      coverImage:
        "https://img.freepik.com/free-photo/business-woman-using-smartphone-car_23-2148213555.jpg?w=740&t=st=1697629299~exp=1697629899~hmac=27a4606d05e6ef696cdd7a3c6ffa260cfb47aa4e63b82c82d6120026102f5123",
      tag: "Taxi Booking",
      title: "The Best Taxi Booking Apps for the Safety-Conscious",
      date: "23 Oct, 2023",
      writer: "By Admin",
    },
  ],
};

export const footerBannerData = {
  heading: "Call Us Now!",
  phoneText: "+91-79997-14860",
  descriptionOne: "Unlock Your Dream Ride: Your Taxi Booking Destination",
  descriptionTwo:
    "Experience the comfort and convenience of long-distance travel with our trusted taxi service from Bhopal to anywhere in India. Whether you're planning a weekend getaway, a business trip, or an urgent journey — we're just a call away.",
};

const contactLinks = [
  {
    id: "suka33",
    href: "tel:+1(234)567-890",
    name: "+1(234)567-890",
  },
  {
    id: "hjv44",
    href: "mailto:taxiBooking@email.com",
    name: "taxiBooking@email.com",
  },
];

export const footerData = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  footerLinks: [
    {
      title: "Company",
      links: navLinks,
    },
    {
      title: "Contact",
      links: contactLinks,
    },
  ],
};

export const socials = [
  <BsTwitter key="twitter" className="text-lg" />,
  <BsLinkedin key="linkedIn" className="text-lg" />,
  <BsFacebook key="facebook" className="text-lg" />,
  <FaTelegramPlane key="telegram" className="text-lg" />,
  <BsYoutube key="youtube" className="text-lg" />,
];

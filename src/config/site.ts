export const siteConfig = {
  name: "Brother's Lift Technology",
  description:
    "Best Lift Company in Bangladesh - Quality lifts for all properties, from personal family houses to high-rise apartments.",
  url:
    process.env.NODE_ENV === "production"
      ? "https://propertylifts.com"
      : "http://localhost:3000",
  ogImage:
    process.env.NODE_ENV === "production"
      ? "https://propertylifts.com/og.jpg"
      : "http://localhost:3000/dummy_background.jpg",
  links: {
    facebook: "https://www.facebook.com/Propertyliftsbd",
    linkedin: "https://www.linkedin.com/company/property-lifts",
  },
  contact: {
    phone: "+8801920-883427",
    email: "wahid2487@gmail.com",
    address:
      "House # 447/C, Road # 08(3rd Floor), D.I.T Road, Malibagh, Dhaka-1217",
    emergency: "+8801920-883427",
  },
};

export const navigation = {
  main: [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "ABOUT US",
      href: "/about-us",
    },
    {
      title: "PRODUCTS",
      href: "#",
      children: [
        {
          title: "LIFT",
          href: "/products/lift",
          children: [
            {
              title: "PASSENGER LIFT",
              href: "/products/lift/passenger-lift",
            },
            {
              title: "CAPSULE LIFT",
              href: "/products/lift/capsule-lift",
            },
            {
              title: "HOSPITAL LIFT",
              href: "/products/lift/hospital-lift",
            },
            {
              title: "CARGO LIFT",
              href: "/products/lift/cargo-lift",
            },
            {
              title: "ESCALATOR",
              href: "/products/lift/escalator",
            },
            // {
            //   title: "Brother's Lift Technology",
            //   href: "#",
            //   children: [
            //     {
            //       title: "PASSENGER LIFT",
            //       href: "/products/lift/property-lifts/passenger-lift",
            //     },
            //     {
            //       title: "CAPSULE LIFT",
            //       href: "/products/lift/property-lifts/capsule-lift",
            //     },
            //     {
            //       title: "HOSPITAL LIFT",
            //       href: "/products/lift/property-lifts/hospital-lift",
            //     },
            //     {
            //       title: "CARGO LIFT",
            //       href: "/products/lift/property-lifts/cargo-lift",
            //     },
            //     {
            //       title: "ESCALATOR",
            //       href: "/products/lift/property-lifts/escalator",
            //     },
            //   ],
            // },
            {
              title: "IMPORTED LIFTS",
              href: "#",
              children: [
                {
                  title: "KONE",
                  href: "/products/lift/imported-lifts/kone",
                },
                {
                  title: "SRH",
                  href: "/products/lift/imported-lifts/srh",
                },
                {
                  title: "MP",
                  href: "/products/lift/imported-lifts/mp",
                },
                {
                  title: "SHANGHAI MITSUBISHI",
                  href: "/products/lift/imported-lifts/shanghai-mitsubishi",
                },
              ],
            },
          ],
        },
        {
          title: "FORKLIFT",
          href: "/products/forklift",
        },
        {
          title: "GENERATOR",
          href: "/products/generator",
        },
        {
          title: "HVAC",
          href: "/products/hvac",
        },
        {
          title: "STREET LIGHT",
          href: "/products/street-light",
        },
        {
          title: "SOLAR",
          href: "/products/solar",
        },
      ],
    },
    {
      title: "SPARE PARTS",
      href: "/spare-parts",
    },
    {
      title: "PROJECTS",
      href: "/projects",
      // children: [
      //   {
      //     title: "LIFT",
      //     href: "/projects/lift",
      //   },
      //   {
      //     title: "FORKLIFT",
      //     href: "/projects/forklift",
      //   },
      //   {
      //     title: "GENERATOR",
      //     href: "/projects/generator",
      //   },
      //   {
      //     title: "HVAC",
      //     href: "/projects/hvac",
      //   },
      // ],
    },
    {
      title: "MEDIA",
      href: "#",
      children: [
        {
          title: "PICTURE GALLERY",
          href: "/media/picture-gallery",
        },
        {
          title: "VIDEO GALLERY",
          href: "/media/video-gallery",
        },
        {
          title: "CATALOGUE",
          href: "/media/catalogue",
        },
      ],
    },
    // {
    //   title: "CERTIFICATE",
    //   href: "/certificate",
    // },
    {
      title: "CONTACT US",
      href: "/contact-us",
    },
  ],
};

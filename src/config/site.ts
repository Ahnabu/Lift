export const siteConfig = {
  name: "Brother's Lift Technology",
  description:
    "Best Lift Company in Bangladesh - Quality lifts for all properties, from personal family houses to high-rise apartments.",
  url:
      "https://brotherslifttechnology.com",
  ogImage:
    "https://res.cloudinary.com/brotherslift/image/upload/v1759174303/favicon-removebg-preview_glnxnv.png",
  links: {
    facebook: "https://www.facebook.com/profile.php?id=61578739861772",
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
      href: "/products",
      children: [
        {
          title: "LIFT",
          href: "/products/lift",
          children: [
            {
              title: "BLT LIFT",
              href: "/products/lift/blt-lift",
            },
            {
              title: "HIDOKS - TURKEY",
              href: "/products/lift/hidoks",
            },
            {
              title: "OTIS - CHINA",
              href: "/products/lift/otis",
            },
            {
              title: "LG - SINO KOREA",
              href: "/products/lift/lg",
            },
            {
              title: "SUNNY",
              href: "/products/lift/sunny",
            },
            {
              title: "FUJI",
              href: "/products/lift/fuji",
            },
          ],
        },
        {
          title: "GENERATOR",
          href: "/products/generator",
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

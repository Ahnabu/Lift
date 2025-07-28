export const siteConfig = {
  name: "Property Lifts",
  description: "Best Lift Company in Bangladesh - Quality lifts for all properties, from personal family houses to high-rise apartments.",
  url: process.env.NODE_ENV === 'production' ? "https://propertylifts.com" : "http://localhost:3000",
  ogImage: process.env.NODE_ENV === 'production' ? "https://propertylifts.com/og.jpg" : "http://localhost:3000/dummy_background.jpg",
  links: {
    facebook: "https://www.facebook.com/Propertyliftsbd",
    linkedin: "https://www.linkedin.com/company/property-lifts",
  },
  contact: {
    phone: "+0800-7777777",
    email: "mktg980@prangroup.com",
    address: "PRAN Center, 105 Middle Badda, Dhaka-1212",
    emergency: "09613737777"
  }
}

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
          href: "#",
          children: [
            {
              title: "PROPERTY LIFTS",
              href: "#",
              children: [
                {
                  title: "PASSENGER LIFT",
                  href: "/products/lift/property-lifts/passenger-lift",
                },
                {
                  title: "CAPSULE LIFT",
                  href: "/products/lift/property-lifts/capsule-lift",
                },
                {
                  title: "HOSPITAL LIFT",
                  href: "/products/lift/property-lifts/hospital-lift",
                },
                {
                  title: "CARGO LIFT",
                  href: "/products/lift/property-lifts/cargo-lift",
                },
                {
                  title: "ESCALATOR",
                  href: "/products/lift/property-lifts/escalator",
                }
              ]
            },
            {
              title: "IMPORTED LIFT",
              href: "#",
              children: [
                {
                  title: "KONE",
                  href: "/products/lift/imported-lift/kone",
                },
                {
                  title: "SRH",
                  href: "/products/lift/imported-lift/srh",
                },
                {
                  title: "MP",
                  href: "/products/lift/imported-lift/mp",
                },
                {
                  title: "SHANGHAI MITSUBISHI",
                  href: "/products/lift/imported-lift/shanghai-mitsubishi",
                }
              ]
            }
          ]
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
        }
      ]
    },
    {
      title: "PROJECTS",
      href: "#",
      children: [
        {
          title: "LIFT",
          href: "/projects/lift",
        },
        {
          title: "FORKLIFT",
          href: "/projects/forklift",
        },
        {
          title: "GENERATOR",
          href: "/projects/generator",
        },
        {
          title: "HVAC",
          href: "/projects/hvac",
        }
      ]
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
        }
      ]
    },
    {
      title: "CERTIFICATE",
      href: "/certificate",
    },
    {
      title: "CONTACT US",
      href: "/contact-us",
    }
  ]
}

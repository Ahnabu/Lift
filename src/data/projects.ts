export interface ProjectData {
  id: string;
  name: string;
  image: string;
  description?: string;
  location?: string;
  completedDate?: string;
  category: "lift" | "forklift" | "generator" | "hvac";
  images?: {
    id: string;
    url: string;
    title: string;
    description: string;
  }[];
}

export const projectsData: ProjectData[] = [
  // REAL LIFT Projects
  {
    id: "lr-bhaban",
    name: "LR BHABAN",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1756820178/LR_Bhaban.jpg",
    description:
      "Modern lift installation and maintenance services for commercial building with advanced safety features and smooth operation.",
    location: "1/2 Outer Circular, Malibagh Mor, Dhaka-1217",
    completedDate: "2024",
    category: "lift",
    images: [
      {
        id: "lr-bhaban-1",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805523/DSC03652-min_zrsql3.jpg",
        title: "LR Bhaban Building Exterior",
        description:
          "Modern apartment complex with newly installed lift system",
      },
      {
        id: "lr-bhaban-2",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805526/DSC03690-min_xwg6p4.jpg",
        title: "Professional Installation",
        description: "Expert technicians installing the lift system",
      },
      {
        id: "lr-bhaban-3",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805520/DSC03628-min_ddcwn9.jpg",
        title: "Modern Control Panel",
        description: "State-of-the-art lift control system",
      },
      {
        id: "lr-bhaban-4",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805523/DSC03653-min_koadms.jpg",
        title: "Finished Lift Interior",
        description: "Completed lift cabin with modern interior design",
      },
      {
        id: "lr-bhaban-5",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805528/DSC03709-min_sa3kyw.jpg",
        title: "LR Bhaban",
        description: "Completed lift",
      },
    ],
  },
  {
    id: "safe-shelter",
    name: "SAFE SHELTER",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1756820177/SafeShelter.jpg",
    description:
      "Residential building lift system installation providing safe and reliable vertical transportation for residents.",
    location: "182/C Mogbazar, Dhaka",
    completedDate: "2024",
    category: "lift",
    images: [
      {
        id: "safe-shelter-1",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889504/DSC03752-min_varz2s.jpg",
        title: "Safe Shelter Building",
        description: "Residential building with professional lift installation",
      },
      {
        id: "safe-shelter-2",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889509/DSC03729-min_txs4tv.jpg",
        title: "Lift",
        description: "Premium looks on Lift",
      },
      {
        id: "safe-shelter-3",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889504/DSC03769-min_a6eeeu.jpg",
        title: "Control System",
        description: "Modern lift control panel installation",
      },
    ],
  },
  {
    id: "krishnachura-nibas",
    name: "KRISHNACHURA NIBAS",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1756820179/KrisnochuraNibas.jpg",
    description:
      "Premium residential complex lift solutions ensuring comfort and safety for all residents with modern elevator technology.",
    location: "423/1, Nayatola, Mogbazar, Dhaka-1217",
    completedDate: "2024",
    category: "lift",
    images: [
      {
        id: "krishnachura-1",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889516/DSC03831-min_fv9ury.jpg",
        title: "Krishnachura Nibas Complex",
        description:
          "Premium residential complex with modern lift installation",
      },
      {
        id: "krishnachura-2",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889515/DSC03814-min_zxwydi.jpg",
        title: "Elevator Interior",
        description: "Luxurious elevator cabin design",
      },
      {
        id: "krishnachura-3",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889513/DSC03799-min_hs7eq5.jpg",
        title: "Safety Features",
        description: "Advanced safety and control systems",
      },
      {
        id: "krishnachura-4",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889513/DSC03787-min_sfp4se.jpg",
        title: "Safety Features",
        description: "Advanced safety and control systems",
      },
    ],
  },
  {
    id: "keya-plaza",
    name: "KEYA PLAZA",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758830915/DSC03873-min_z0halg.jpg",
    description:
      "Premium residential complex lift solutions ensuring comfort and safety for all residents with modern elevator technology.",
    location: "Pachtala bazar mor, Post office road, Badda, Dhaka-1212",
    completedDate: "2024",
    category: "lift",
    images: [
      {
        id: "keya-plaza-1",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830920/DSC03835-min_tcvn1k.jpg",
        title: "Keya Plaza",
        description: "Keya Plaza building exterior",
      },
      {
        id: "keya-plaza-2",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830914/DSC03846-min_bise9j.jpg",
        title: "Technical Work",
        description: "Skilled technicians ensuring quality installation",
      },
      {
        id: "keya-plaza-3",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830915/DSC03873-min_z0halg.jpg",
        title: "Completed Installation",
        description: "Finished lift ready for operation",
      },
      {
        id: "keya-plaza-4",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830919/DSC03896-min_punlmn.jpg",
        title: "COP & LOP",
        description: "Control and landing operation panels",
      },
      {
        id: "keya-plaza-5",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830913/DSC03845-min_ppsb2x.jpg",
        title: "Traction Machine",
        description: "Modern traction machine setup",
      },
    ],
  },
];

export const getProjectsByCategory = (
  category: "lift" | "forklift" | "generator" | "hvac"
): ProjectData[] => {
  return projectsData.filter((project) => project.category === category);
};

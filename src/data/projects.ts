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
      {
        id: "lr-bhaban-6",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805529/DSC03717-min_uwtgqm.jpg",
        title: "LR Bhaban Installation",
        description: "",
      },
      {
        id: "lr-bhaban-7",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805528/DSC03711-min_fhllpy.jpg",
        title: "LR Bhaban",
        description: "",
      },
      {
        id: "lr-bhaban-8",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805527/DSC03692-min_ltctxe.jpg",
        title: "LR Bhaban",
        description: "",
      },
      {
        id: "lr-bhaban-9",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805527/DSC03705-min_bppqcq.jpg",
        title: "LR Bhaban ",
        description: "",
      },
      {
        id: "lr-bhaban-10",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805526/DSC03690-min_xwg6p4.jpg",
        title: "LR Bhaban",
        description: "",
      },
      {
        id: "lr-bhaban-11",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805524/DSC03673-min_qmulbh.jpg",
        title: "LR Bhaban ",
        description: "",
      },
      {
        id: "lr-bhaban-12",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805523/DSC03646-min_ru2wwa.jpg",
        title: "LR Bhaban ",
        description: " ",
      },
      {
        id: "lr-bhaban-13",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805522/DSC03629-min_sxtj6x.jpg",
        title: "LR Bhaban",
        description: "",
      },
      {
        id: "lr-bhaban-14",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805522/DSC03642-min_zsiozj.jpg",
        title: "LR Bhaban ",
        description: "",
      },
      {
        id: "lr-bhaban-15",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758805520/DSC03641-min_y23k9w.jpg",
        title: "",
        description: "",
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
      {
        id: "safe-shelter-4",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889509/DSC03766-min_af0mlx.jpg",
        title: "Safe Shelter Exterior",
        description: "Building exterior view",
      },
      {
        id: "safe-shelter-5",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889507/DSC03780-min_kle2fx.jpg",
        title: "Safe Shelter Lift ",
        description: "",
      },
      {
        id: "safe-shelter-6",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889507/DSC03778-min_sqpfgp.jpg",
        title: "Safe Shelter",
        description: "",
      },
      {
        id: "safe-shelter-7",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889507/DSC03776-min_qbqbif.jpg",
        title: "Safe Shelter ",
        description: "",
      },
      {
        id: "safe-shelter-8",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889506/DSC03773-min_xts08h.jpg",
        title: "Safe Shelter ",
        description: "",
      },
      {
        id: "safe-shelter-9",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889505/DSC03760-min_z27bcc.jpg",
        title: "Safe Shelter",
        description: "",
      },
      {
        id: "safe-shelter-10",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889506/DSC03775-min_uiggod.jpg",
        title: "Safe Shelter",
        description: "",
      },
      {
        id: "safe-shelter-11",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889505/DSC03771-min_vveemp.jpg",
        title: "Safe Shelter ",
        description: "",
      },
      {
        id: "safe-shelter-12",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889504/DSC03769-min_a6eeeu.jpg",
        title: "Safe Shelter",
        description: "",
      },
      {
        id: "safe-shelter-13",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889504/DSC03750-min_oajywt.jpg",
        title: "Safe Shelter View 1",
        description: "Additional view",
      },
      {
        id: "safe-shelter-14",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889502/DSC03739-min_snuyfr.jpg",
        title: "Safe Shelter View 2",
        description: "",
      },
      {
        id: "safe-shelter-15",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889504/DSC03769-min_a6eeeu.jpg",
        title: "Safe Shelter ",
        description: "",
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
      {
        id: "krishnachura-6",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889521/DSC03819-min_utgcp6.jpg",
        title: "Krishnachura ",
        description: "",
      },
      {
        id: "krishnachura-7",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889516/DSC03824-min_mizmzd.jpg",
        title: "Krishnachura",
        description: "",
      },
      {
        id: "krishnachura-8",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889516/DSC03821-min_o6oz7m.jpg",
        title: "Krishnachura",
        description: "",
      },
      {
        id: "krishnachura-9",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889515/DSC03823-min_rlvxfq.jpg",
        title: "Krishnachura",
        description: "",
      },
      {
        id: "krishnachura-10",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889514/DSC03817-min_rrocql.jpg",
        title: "Krishnachura ",
        description: "",
      },
      {
        id: "krishnachura-11",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889514/DSC03793-min_pvyhev.jpg",
        title: "Krishnachura",
        description: "",
      },
      {
        id: "krishnachura-12",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889514/DSC03812-min_jd1lkq.jpg",
        title: "Krishnachura",
        description: "",
      },
      {
        id: "krishnachura-13",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889513/DSC03816-min_jwn2td.jpg",
        title: "Krishnachura",
        description: "",
      },
      {
        id: "krishnachura-14",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889513/DSC03787-min_sfp4se.jpg",
        title: "Krishnachura View 1",
        description: "Additional view",
      },
      {
        id: "krishnachura-15",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758889514/DSC03806-min_pex8xu.jpg",
        title: "Krishnachura ",
        description: "",
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
      {
        id: "keya-plaza-6",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830913/DSC03893-min_t3loqy.jpg",
        title: "Keya Plaza Exterior",
        description: "",
      },
      {
        id: "keya-plaza-7",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830913/DSC03845-min_ppsb2x.jpg",
        title: "Keya Plaza ",
        description: "",
      },
      {
        id: "keya-plaza-8",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830914/DSC03860-min_gtjboj.jpg",
        title: "Keya Plaza ",
        description: "",
      },
      {
        id: "keya-plaza-9",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830915/DSC03847-min_loqsbt.jpg",
        title: "Keya Plaza ",
        description: "",
      },
      {
        id: "keya-plaza-10",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830918/DSC03895-min_sgne98.jpg",
        title: "Keya Plaza",
        description: "",
      },
      {
        id: "keya-plaza-11",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830917/DSC03901-min_n5fblg.jpg",
        title: "Keya Plaza ",
        description: "",
      },
      {
        id: "keya-plaza-12",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830915/DSC03847-min_loqsbt.jpg",
        title: "Keya Plaza ",
        description: "",
      },
      {
        id: "keya-plaza-13",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830916/DSC03848-min_w5lh5d.jpg",
        title: "Keya Plaza ",
        description: "",
      },
      {
        id: "keya-plaza-14",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830920/DSC03852-min_iy1tuo.jpg",
        title: "Keya Plaza View 1",
        description: "Additional view",
      },
      {
        id: "keya-plaza-15",
        url: "https://res.cloudinary.com/brotherslift/image/upload/v1758830916/DSC03876-min_agh5cl.jpg",
        title: "Keya Plaza Final",
        description: "",
      },
    ],
  },
];

export const getProjectsByCategory = (
  category: "lift" | "forklift" | "generator" | "hvac"
): ProjectData[] => {
  return projectsData.filter((project) => project.category === category);
};

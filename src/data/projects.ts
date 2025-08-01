export interface ProjectData {
    id: string;
    name: string;
    image: string;
    description?: string;
    location?: string;
    completedDate?: string;
    category: 'lift' | 'forklift' | 'generator' | 'hvac';
}

export const projectsData: ProjectData[] = [
    // LIFT Projects
    {
        id: 'azimpur-govt-colony',
        name: 'AZIMPUR GOVT. COLONY',
        image: '/dummy_rectangular.jfif',
        description: 'Residential lift installation for government housing complex',
        location: 'Azimpur, Dhaka',
        completedDate: '2024',
        category: 'lift'
    },
    {
        id: 'bangladesh-secretariat',
        name: 'BANGLADESH SECRETARIAT',
        image: '/dummy_rectangular.jfif',
        description: 'High-capacity passenger lifts for government secretariat building',
        location: 'Dhaka',
        completedDate: '2023',
        category: 'lift'
    },
    {
        id: 'bangabandhu-sheikh-mujib-medical-university',
        name: 'BANGABANDHU SHEIKH MUJIB MEDICAL UNIVERSITY',
        image: '/dummy_rectangular.jfif',
        description: 'Medical lifts and patient transportation systems',
        location: 'Shahbag, Dhaka',
        completedDate: '2024',
        category: 'lift'
    },
    {
        id: 'dhaka-cantonment',
        name: 'DHAKA CANTONMENT',
        image: '/dummy_rectangular.jfif',
        description: 'Military facility lift installations',
        location: 'Dhaka Cantonment',
        completedDate: '2023',
        category: 'lift'
    },
    {
        id: 'sheikh-hasina-national-institute',
        name: 'SHEIKH HASINA NATIONAL INSTITUTE OF BURN AND PLASTIC SURGERY',
        image: '/dummy_rectangular.jfif',
        description: 'Specialized medical lifts for burn and plastic surgery institute',
        location: 'Dhaka',
        completedDate: '2024',
        category: 'lift'
    },
    {
        id: 'pan-pacific-sonargaon',
        name: 'PAN PACIFIC SONARGAON',
        image: '/dummy_rectangular.jfif',
        description: 'Luxury hotel passenger and service lifts',
        location: 'Sonargaon, Dhaka',
        completedDate: '2023',
        category: 'lift'
    },
    {
        id: 'kidney-foundation-hospital',
        name: 'KIDNEY FOUNDATION HOSPITAL & RESEARCH INSTITUTION',
        image: '/dummy_rectangular.jfif',
        description: 'Medical facility lift systems',
        location: 'Dhaka',
        completedDate: '2024',
        category: 'lift'
    },
    {
        id: 'judges-quarter-kakrail',
        name: 'JUDGES QUARTER, KAKRAIL',
        image: '/dummy_rectangular.jfif',
        description: 'Residential lifts for judicial housing complex',
        location: 'Kakrail, Dhaka',
        completedDate: '2023',
        category: 'lift'
    },
    {
        id: 'heaven-city-center',
        name: 'HEAVEN CITY CENTER',
        image: '/dummy_rectangular.jfif',
        description: 'Commercial building passenger lifts',
        location: 'Dhaka',
        completedDate: '2024',
        category: 'lift'
    },

    // FORKLIFT Projects
    {
        id: 'dhaka-port-authority',
        name: 'DHAKA PORT AUTHORITY',
        image: '/dummy_rectangular.jfif',
        description: 'Heavy-duty forklifts for port operations',
        location: 'Narayanganj',
        completedDate: '2024',
        category: 'forklift'
    },
    {
        id: 'pran-rfl-group',
        name: 'PRAN-RFL GROUP',
        image: '/dummy_rectangular.jfif',
        description: 'Industrial forklifts for manufacturing facility',
        location: 'Dhaka',
        completedDate: '2023',
        category: 'forklift'
    },
    {
        id: 'bashundhara-group',
        name: 'BASHUNDHARA GROUP',
        image: '/dummy_rectangular.jfif',
        description: 'Warehouse forklift operations',
        location: 'Dhaka',
        completedDate: '2024',
        category: 'forklift'
    },
    {
        id: 'square-pharmaceuticals',
        name: 'SQUARE PHARMACEUTICALS',
        image: '/dummy_rectangular.jfif',
        description: 'Clean room compatible forklifts',
        location: 'Pabna',
        completedDate: '2023',
        category: 'forklift'
    },

    // GENERATOR Projects
    {
        id: 'dhaka-medical-college',
        name: 'DHAKA MEDICAL COLLEGE',
        image: '/dummy_rectangular.jfif',
        description: 'Backup power generators for medical facility',
        location: 'Dhaka',
        completedDate: '2024',
        category: 'generator'
    },
    {
        id: 'baridhara-diplomatic-zone',
        name: 'BARIDHARA DIPLOMATIC ZONE',
        image: '/dummy_rectangular.jfif',
        description: 'High-capacity generators for embassy buildings',
        location: 'Baridhara, Dhaka',
        completedDate: '2023',
        category: 'generator'
    },
    {
        id: 'jamuna-future-park',
        name: 'JAMUNA FUTURE PARK',
        image: '/dummy_rectangular.jfif',
        description: 'Shopping mall backup power systems',
        location: 'Dhaka',
        completedDate: '2024',
        category: 'generator'
    },
    {
        id: 'hazrat-shahjalal-airport',
        name: 'HAZRAT SHAHJALAL INTERNATIONAL AIRPORT',
        image: '/dummy_rectangular.jfif',
        description: 'Airport terminal generator systems',
        location: 'Dhaka',
        completedDate: '2023',
        category: 'generator'
    },

    // HVAC Projects
    {
        id: 'bashundhara-city',
        name: 'BASHUNDHARA CITY',
        image: '/dummy_rectangular.jfif',
        description: 'Central air conditioning for shopping complex',
        location: 'Dhaka',
        completedDate: '2024',
        category: 'hvac'
    },
    {
        id: 'united-hospital',
        name: 'UNITED HOSPITAL',
        image: '/dummy_rectangular.jfif',
        description: 'Medical-grade HVAC systems',
        location: 'Gulshan, Dhaka',
        completedDate: '2023',
        category: 'hvac'
    },
    {
        id: 'bangladesh-bank',
        name: 'BANGLADESH BANK',
        image: '/dummy_rectangular.jfif',
        description: 'Precision HVAC for banking headquarters',
        location: 'Motijheel, Dhaka',
        completedDate: '2024',
        category: 'hvac'
    },
    {
        id: 'dhaka-regency-hotel',
        name: 'DHAKA REGENCY HOTEL',
        image: '/dummy_rectangular.jfif',
        description: 'Hotel HVAC and climate control systems',
        location: 'Dhaka',
        completedDate: '2023',
        category: 'hvac'
    }
];

export const getProjectsByCategory = (category: 'lift' | 'forklift' | 'generator' | 'hvac'): ProjectData[] => {
    return projectsData.filter(project => project.category === category);
};

import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen mx-auto">
      {/* Hero Section with Moving Background */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center moving-bg opacity-40"
          style={{
            backgroundImage: "url('/dummy_background.jpg')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide glass-line">
            ABOUT US
          </h1>
        </div>

        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden z-5">
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ top: "20%", left: "10%", animationDelay: "0s" }}
          />
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ top: "40%", left: "80%", animationDelay: "1s" }}
          />
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ top: "60%", left: "30%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ top: "80%", left: "70%", animationDelay: "3s" }}
          />
        </div>
      </section>

      {/* A Few Words About Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            A FEW WORDS ABOUT US
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4 text-justify">
            <p>
              At 1961 PROPERTY Group started its business as a procurer of
              fruits and vegetables in Bangladesh. Now PROPERTY Group is the
              leading agricultural and plastic product company in Bangladesh.
              During food and plastic products export PRAN (PROduct NAme)
              Limited (PPL) being a sister concern of PRAN RFL Group since 1981
              enjoying a massive demand for lifts and generators. PPL wanted to
              be the most prominent electronic equipment and automobile spare
              parts importer in Bangladesh. There was to fulfil the demand of
              PRAN-RFL own company and factory demand. After then when we able
              to fulfil the demand of our own PPL measures the local market
              demand for lifts and generator. According to the demand we expand
              its activities and now we are the largest importer of lifts and
              generators, Forklift and HVAC in our country. We are not only
              importing from China but also importing from Korea, Thailand,
              Japan, India, Germany, Italy and UK.
            </p>

            <p>
              Brother's Lift Technology is the premier lift brand of Bangladesh
              since 2000. We are importing 6 world top class lift brands KONE,
              SRH, MP and Mitsubishi under Brother's Lift Technology. Property
              Generators & brands like the premier generators brand of our
              country since 17 March, 2000 with a generator brands CPL, VSG and
              VOLKAN. Since 1981 Property Air Conditioner maintain a huge
              activity and 2017 it&apos;s started its journey as a largest
              specialized cooling system of our country. Now we are the
              authorized distribution of world class brand LG for HVAC Solution.
              Property Forklift is also a part of the Property Groups, offering
              high quality and latest technology industrial equipment specially
              warehouse items by other world class branded product YXLH.
            </p>

            <p>
              By these activity, we like Property Lift, Property Generator,
              Property Forklift and Property Air Conditioner are the most
              trustworthy business of Bangladesh. We think our customers as our
              partners. And that&apos;s why we respect the deal.
            </p>
          </div>
        </div>
      </section>

      {/* Our Management Team Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          {/* Title and horizontal line */}
          <div className="flex items-center mb-12">
            <div className="w-32 h-px bg-gradient-to-r from-white via-white/70 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white whitespace-nowrap tracking-wide ml-6">
              OUR MANAGEMENT TEAM
            </h2>
          </div>

          {/* Team members cards below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chairman and CEO */}
            <div className="bg-gray-600 p-3 rounded-lg text-center border-r-6 border-b-6 border-gray-500">
              <h3 className="text-primary font-bold text-sm mb-4 uppercase tracking-wide">
                CHAIRMAN AND CEO
              </h3>
              <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-white border-2 border-gray-300">
                <Image
                  src="/dummy_user.png"
                  alt="Chairman and CEO"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-sm leading-relaxed">
                Ahsan Khan Chowdhury is the Chairman and CEO of PRAN- RFL Group
              </p>
            </div>

            {/* Managing Director */}
            <div className="bg-gray-600 p-3 rounded-lg text-center border-r-6 border-b-6 border-gray-500/50">
              <h3 className="text-primary font-bold text-sm mb-4 uppercase tracking-wide">
                MANAGING DIRECTOR
              </h3>
              <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-white border-2 border-gray-300">
                <Image
                  src="/dummy_user.png"
                  alt="Managing Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-sm leading-relaxed">
                R. N Paul is the Managing Director of RFL Group
              </p>
            </div>

            {/* Chief Operating Officer */}
            <div className="bg-gray-600 p-3 rounded-lg text-center border-r-6 border-b-6 border-gray-500/50">
              <h3 className="text-primary font-bold text-sm mb-4 uppercase tracking-wide">
                CHIEF OPERATING OFFICER
              </h3>
              <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-white border-2 border-gray-300">
                <Image
                  src="/dummy_user.png"
                  alt="Chief Operating Officer"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-sm leading-relaxed">
                Md. Moynul Islam is the Chief Operating Officer of PDL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 24/7 Service */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                24/7 SERVICE
              </h3>
              <p className="text-gray-600 text-sm">
                The one-stop call center 09613777777 provides 24/7 service in
                all complexes construction, installation, big leader, use,
                maintenance and other services.
              </p>
            </div>

            {/* Technical Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                TECHNICAL SUPPORT AND TRAINING
              </h3>
              <p className="text-gray-600 text-sm">
                The after-sales and installation service includes staff
                training, explanation of usage & routine check up.
              </p>
            </div>

            {/* Continued Routine Maintenance */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                CONTINUED ROUTINE MAINTENANCE
              </h3>
              <p className="text-gray-600 text-sm">
                Every fortnight routine service guarantees safety & efficient
                movement to ensure that your company&apos;s elevation is ended
                operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Factory Image */}
            <div className="relative">
              <Image
                src="/dummy_rectangular.jfif"
                alt="Factory Overview"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Factory Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                FACTORY INFORMATION:
              </h2>

              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">• Factory Location:</span>{" "}
                  Rajir Char, Danga, Polash, Narsingdi
                </p>
                <p>
                  <span className="font-semibold">• Factory Size:</span> The
                  factory size is 100,000 SQF
                </p>
                <p>
                  <span className="font-semibold">• Land size:</span> 10 acres
                </p>
                <p>
                  <span className="font-semibold">• Test tower:</span> The test
                  tower is 50 meters tall. (Under Construction)
                </p>
                <p>
                  <span className="font-semibold">• Production capacity:</span>{" "}
                  The factory has a production capacity of 1,200 units per year.
                </p>
                <p>
                  <span className="font-semibold">• Manufacturing Items:</span>{" "}
                  The factory produces a variety of products, including complete
                  lift cabin, landing doors, lift pump, complete control system,
                  motor base, control frame, counter weight, air bracket items.
                </p>
                <p>
                  <span className="font-semibold">
                    • Research and development:
                  </span>{" "}
                  The factory has an R&D center and a center laboratory
                  dedicated to developing and applying new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

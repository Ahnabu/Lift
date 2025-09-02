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
              Brothers Lift Technology is a professional elevator and elevator
              components Supplier and importer. The company has a professional
              technical, and an after-sales Service team. And major elevator
              components are imported from some of the largest manufacturers of
              Europe & Asia (Japan, Spain, Italy, China, Germany, Turkey &
              Greece) & the other mechanical parts, i.e,. Cabin & Landing Doors
              are assembled in our own establishment.
            </p>

            <p>
              The company has been adhering to the business philosophy of
              service and quality are the foundation. The products have been
              supplied to more than 20 Districts and regions, and won high
              praise from customers. The Annual sales day by day is increasing
              steadily.
            </p>

            <p>
              We believe that quality service is the guarantee of excellent
              performance. In order to meet the needs of different markets, the
              company has been constantly improving the product structure to
              make the product cover a wider variety. We are committed to
              creating a one-stop service platform for customers.
            </p>

            <p>
              We believe that with our high starting point, high quality, and
              excellent service, it will not only bring you reliable products,
              but a promise of mutual benefit and growth as well. Looking
              forward to working with you for a beautiful future in the elevator
              industry.
            </p>

            <p>
              Driven by a core philosophy that prioritizes service and quality
              as its unshakeable bedrock, the company has forged a reputation
              for excellence. This commitment has led to the successful supply
              of products to over 20 diverse districts and regions, garnering
              widespread acclaim and high praise from a continually growing
              customer base. This positive reception is tangibly reflected in
              the consistent and steady increase of annual sales, a testament to
              the company&apos;s robust operational efficacy and market
              acceptance.
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

          {/* Single management card centered */}
          <div className="flex justify-center">
            {/* Managing Director and CEO */}
            <div className="bg-gray-600 p-6 rounded-lg text-center border-r-6 border-b-6 border-gray-500 max-w-md">
              <h3 className="text-primary font-bold text-sm mb-4 uppercase tracking-wide">
                MANAGING DIRECTOR AND CEO
              </h3>
              <div className="w-40 h-40 mx-auto mb-6 rounded-lg overflow-hidden bg-white border-2 border-gray-300">
                <Image
                  src="https://res.cloudinary.com/brotherslift/image/upload/v1756406745/Wahid.png"
                  alt="Managing Director and CEO"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-lg leading-relaxed">
                Wahidur Rahman is the Managing Director and CEO at Brothers Lift
                Technology
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
    </div>
  );
}

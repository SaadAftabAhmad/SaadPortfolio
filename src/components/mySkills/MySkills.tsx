import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MySkills = () => {

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div id="skill" className="flex justify-start items-center h-full bg-gradient-to-tr from-[#261c33] via-[#344ab4] to-[#b65881] py-20 relative">
      <div className="absolute top-[-20px] left-[-20px] w-[350px] max-[950px]:w-[300px] max-[550px]:w-[250px] h-[350px] max-[950px]:h-[300px] max-[550px]:h-[250px] bg-gradient-to-bl from-[#530760]/50 to-[#2b0738]/50 rounded-full flex justify-center items-center">
        <div className="w-[300px] max-[950px]:w-[250px] max-[550px]:w-[200px] h-[300px] max-[950px]:h-[250px] max-[550px]:h-[200px] bg-[#140a29]/50 rounded-full flex justify-center items-center">
          <div className="w-[250px] max-[950px]:w-[200px] max-[550px]:w-[150px] h-[250px] max-[950px]:h-[200px] max-[550px]:h-[150px] bg-gradient-to-br from-[#261c33] via-[#344ab4] to-[#b65881] rounded-full flex justify-center items-center">
            <h2 className="text-white text-[50px] max-[950px]:text-[40px] max-[550px]:text-[30px] font-[700] italic">My Skills</h2>
          </div>
        </div>
      </div>
      <div ref={ref} className="grid grid-cols-2 max-[550px]:grid-cols-1 gap-10 max-[870px]:gap-3 pl-[550px] max-[1230px]:pl-[350px] max-[950px]:pl-[250px] max-[830px]:pl-[50px] max-[375px]:px-[30px] pt-[120px] max-[830px]:pt-[250px] max-[550px]:pt-[180px]">
        {/* HTML */}
        <div className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            className="flex items-center justify-between"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#e96228]"
              >
                <path
                  stroke="none"
                  strokeWidth="0"
                  d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                />
              </svg>
              <div className="absolute top-5 left-4 group">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <path
                    fill="#e96228"
                    className="group-hover:fill-white"
                    d="M6.233 2h.902v.89h.824V2h.902v2.697h-.902v-.903h-.824v.903h-.902zm3.813.894h-.793V2h2.489v.894h-.794v1.803h-.902zM12.136 2h.94l.579.948l.578-.948h.94v2.697h-.898V3.36l-.62.96h-.015l-.621-.96v1.337h-.882zm3.486 0h.901v1.806h1.268v.891h-2.17z"
                  />
                  <path
                    fill="#e96228"
                    clipRule="evenodd"
                    fillRule="evenodd"
                    className="group-hover:fill-white"
                    d="m4.915 5.93l1.29 14.464L11.99 22l5.802-1.609l1.291-14.46zm11.202 6.547H9.652l-.162-1.816h6.788l.159-1.774H7.552l.478 5.364h6.148l-.206 2.3l-1.978.535h-.002l-1.976-.533l-.126-1.415H8.11l.248 2.785l3.633 1.009l.009-.002l3.63-1.007l.443-4.97z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 70, duration: 1000, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              HTML 5
            </p>
          </motion.div>
        </div>

        {/* CSS */}
        <div className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className="flex items-center justify-between"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#284add]"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                />
              </svg>
              <div className="absolute top-6 left-6 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <path
                    fill="currentColor"
                    className="group-hover:fill-white"
                    d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z"
                  />
                  <path
                    fill="#284add"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    className="group-hover:fill-white"
                    d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 70, duration: 1000, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              CSS
            </p>
          </motion.div>
        </div>

        {/* Shad CN */}
        <div className="flex gap-4 group">
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            initial={{ opacity: 0, y: 100 }}
            className="flex items-center justify-between"
            transition={{ type: "spring", stiffness: 50, duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#383636]"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                />
              </svg>
              <div className="absolute top-5 left-4 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <path
                    fill="currentColor"
                    className="group-hover:fill-white"
                    d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            initial={{ opacity: 0, y: 100 }}
            className="flex items-center justify-between"
            transition={{ type: "spring", stiffness: 70, duration: 1, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              Shad CN
            </p>
          </motion.div>
        </div>

        {/* Next UI */}
        <div className="flex gap-4 group">
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            initial={{ opacity: 0, y: 100 }}
            className="flex items-center justify-between"
            transition={{ type: "spring", stiffness: 50, duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#383636]"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                />
              </svg>
              <div className="absolute top-4 left-5 group">
                <p className="text-[35px] font-[500] transition-all duration-1000 ease-in-out group-hover:text-white">UI</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            initial={{ opacity: 0, y: 100 }}
            className="flex items-center justify-between"
            transition={{ type: "spring", stiffness: 50, duration: 1, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              Next UI
            </p>
          </motion.div>
        </div>

        {/* Flowbite */}
        <div className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className="flex items-center justify-between"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#1c61ea]"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                />
              </svg>
              <div className="absolute top-5 left-5 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <g
                    fill="currentColor"
                    className="group-hover:fill-white"
                  >
                    <path
                      fill="#1732cc"
                      className="group-hover:fill-white"
                      d="M15.907 11.998L10.332 9.23a1 1 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974z"
                    />
                    <path
                      fill="#1732cc"
                      className="group-hover:fill-white"
                      d="m11.463 4.054l5.579 3.323A4 4 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65a3.1 3.1 0 0 1-1.55.951c-.022.007-.045.005-.07.01q-.093.045-.191.08l-2.72.667l-1.992 2.48c-.18.227-.41.409-.67.534c.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154a10 10 0 0 0-3.375-2.989a10.1 10.1 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z"
                    />
                    <path
                      fill="#0388f6"
                      className="group-hover:fill-white"
                      d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761a3.7 3.7 0 0 1 1.238-1.34a3.92 3.92 0 0 1 3.433-.245q.265.045.508.161l5.753 2.856q.123.075.236.165a2.13 2.13 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a10 10 0 0 0-2.5 3.496a9.9 9.9 0 0 0 .283 8.368a10 10 0 0 0 2.73 3.322a17 17 0 0 1-.424-2.729"
                    />
                    <path
                      fill="#1c61ea"
                      className="group-hover:fill-white"
                      d="m19.102 16.163l-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.1 4.1 0 0 1-2 .53a3.95 3.95 0 0 1-1.983-.535a3.8 3.8 0 0 1-1.36-1.361a3.75 3.75 0 0 1-.51-1.85a2 2 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07q-.084.03-.162.07a1.8 1.8 0 0 0-.787 1.516v6.377a10.7 10.7 0 0 0 1.113 4.27a10.11 10.11 0 0 0 8.505-.53a10 10 0 0 0 3.282-2.858a9.9 9.9 0 0 0 1.75-3.97a19.6 19.6 0 0 1-2.845 2.216Z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              Flowbite
            </p>
          </motion.div>
        </div>

        {/* Bootstrap */}
        <div className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className="flex items-center justify-between"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#7417f5]"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                />
              </svg>
              <div className="absolute top-6 left-5 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <path
                    fill="#7417f5"
                    className="group-hover:fill-white"
                    d="M41.135 3.815c-2.65 0-5.017.593-7.037 1.762c-1.943 1.124-3.575 2.8-4.853 4.98c-1.197 2.043-2.079 4.529-2.623 7.389c-1.046 5.513-.82 12.414.657 19.954c.186.949.391 1.91.612 2.865a90 90 0 0 0-3.41 1.105c-7.118 2.482-13.07 5.725-17.213 9.379c-2.148 1.892-3.81 3.893-4.947 5.945c-1.208 2.183-1.82 4.421-1.82 6.654c0 4.476 2.479 9.012 7.17 13.126c4.416 3.875 10.662 7.259 18.057 9.788q1.033.35 2.089.677a88 88 0 0 0-.678 3.222c-1.406 7.406-1.57 14.182-.478 19.596c.568 2.805 1.469 5.246 2.68 7.256c1.286 2.136 2.92 3.786 4.854 4.901c2.038 1.175 4.436 1.771 7.129 1.771c3.665 0 7.764-1.087 12.18-3.23c4.331-2.102 8.752-5.112 13.139-8.946a70 70 0 0 0 2.068-1.882h1.04v-.002h31.485q6.889 0 11.883-2.01c3.337-1.338 6.052-3.145 8.189-5.412s3.695-4.974 4.694-8.117c1-3.117 1.498-6.493 1.498-10.1c.002-6.289-1.138-11.493-3.395-15.668q-3.357-6.174-9.88-8.01a.17.17 0 0 1-.106-.171a.18.18 0 0 1 .081-.16c3.238-1.8 5.726-4.363 7.47-7.633q2.635-4.947 2.635-11.906c0-7.654-1.937-13.348-5.793-17.135s-8.989-5.67-15.38-5.67h-34.46a84 84 0 0 0-1.63-1.491c-4.556-4.042-9.098-7.213-13.505-9.417c-4.518-2.263-8.691-3.41-12.402-3.41m.038 8.992c2.295 0 5.266.901 8.588 2.607c3.601 1.85 7.506 4.602 11.293 7.964q.352.313.72.65c-3.33 3.683-6.613 7.775-9.768 12.181c-5.376.525-10.544 1.31-15.383 2.334a81 81 0 0 1-.49-2.298l-.014-.078c-1.153-5.895-1.434-11.28-.813-15.567c.538-3.685 1.74-6.319 3.305-7.225c.65-.377 1.512-.567 2.562-.567zM68.48 29.82v68.336l-4.052-5.002l-2.647-3.268c-1.336-1.65-3.476-4.702-6.028-8.594a153 153 0 0 1-4.207-6.781l-.077-.132c-1.223-2.109-2.13-3.807-2.86-5.171a207 207 0 0 1-2.68-5.192l.158-.309l.01-.017c.955-1.947 1.96-3.901 2.994-5.81l.01-.016l1.097-2.13l1.62-2.685l.011-.018c.605-1.03 1.233-2.07 1.866-3.09l1.116-1.842c1.485-2.458 2.678-4.251 4.561-6.85c1.015-1.397 1.977-2.625 3.501-4.53l.004-.004l.075-.095l.03-.038c.618-.789 1.243-1.566 1.856-2.311l.02-.025l.012-.015a440 440 0 0 1 3.61-4.411m12.65 1.344h20.26c3.398 0 5.998.955 7.797 2.838c1.799 1.882 2.697 5.156 2.697 9.798c0 4.129-.999 7.276-2.999 9.494s-4.498 3.302-7.497 3.302h-20.26c-.074 0-.135-.079-.135-.175l.001-25.082c0-.097.06-.175.136-.175M45.47 46.096a167 167 0 0 0-4.197 7.276a121 121 0 0 1-2.208-6.136a124 124 0 0 1 6.405-1.14m-15.16 3.351c1.523 4.723 3.43 9.608 5.67 14.54c-2.273 5.014-4.206 9.977-5.75 14.77a64 64 0 0 1-1.591-.52c-6.148-2.1-11.267-4.813-14.806-7.843c-2.708-2.319-4.324-4.765-4.324-6.543c0-1.826 1.616-4.178 4.436-6.458c3.283-2.654 7.954-5.08 13.5-7.012c.942-.327 1.901-.64 2.864-.934zm50.82 18.747h21.952c3.799 0 6.718 1.187 8.836 3.662c2.12 2.474 3.16 5.957 3.16 10.522c0 4.641-1.06 8.252-3.158 10.779c-2.08 2.552-5.038 3.82-8.837 3.82H81.13c-.075 0-.136-.079-.136-.176V68.37c0-.096.06-.174.136-.174zM41.28 74.59a166 166 0 0 0 4.328 7.467a117 117 0 0 1-6.62-1.105a123 123 0 0 1 2.292-6.362m-4.73 15.052c4.775.977 10.002 1.714 15.562 2.191c3.186 4.437 6.496 8.557 9.85 12.261q-.621.573-1.247 1.121c-4.856 4.246-9.733 7.314-14.1 8.876l-.091.032c-1.958.691-3.706 1.041-5.193 1.041c-1.096 0-1.982-.19-2.632-.564c-1.582-.913-2.813-3.49-3.378-7.07c-.66-4.172-.429-9.427.667-15.197c.171-.895.358-1.796.563-2.69z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              Bootstrap
            </p>
          </motion.div>
        </div>

        {/* Ant Design */}
        <div className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className="flex items-center justify-between"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#f14e5d]"
              >
                <path
                  stroke="none"
                  strokeWidth="0"
                  d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                />
              </svg>
              <div className="absolute top-5 left-5 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <defs>
                    <linearGradient id="deviconAntdesign0" x1=".621" x2="1.082" y1="0" y2=".379" gradientTransform="matrix(94.54297 0 0 127.17188 .418 .406)" gradientUnits="userSpaceOnUse">
                      <stop
                        offset="0"
                        stop-color="#4285eb"
                      />
                      <stop
                        offset="1"
                        stop-color="#2ec7ff"
                      />
                    </linearGradient>
                    <linearGradient id="deviconAntdesign1" x1=".696" x2=".54" y1="0" y2="1.085" gradientTransform="matrix(94.54297 0 0 127.17188 .418 .406)" gradientUnits="userSpaceOnUse">
                      <stop
                        offset="0"
                        stop-color="#29cdff"
                      />
                      <stop
                        offset=".379"
                        stop-color="#148eff"
                      />
                      <stop
                        offset="1"
                        stop-color="#0a60ff"
                      />
                    </linearGradient>
                    <linearGradient id="deviconAntdesign2" x1=".697" x2=".167" y1="-.13" y2="1.174" gradientTransform="matrix(31.49219 0 0 49.5586 96.176 39.402)" gradientUnits="userSpaceOnUse">
                      <stop
                        offset="0"
                        stop-color="#fa816e"
                      />
                      <stop
                        offset=".415"
                        stop-color="#f74a5c"
                      />
                      <stop
                        offset="1"
                        stop-color="#f51d2c"
                      />
                    </linearGradient>
                    <linearGradient id="deviconAntdesign3" x1=".681" x2=".304" y1="-.357" y2="1.149" gradientTransform="matrix(30.21094 0 0 30.1836 49.227 49.188)" gradientUnits="userSpaceOnUse">
                      <stop
                        offset="0"
                        stop-color="#fa8e7d"
                      />
                      <stop
                        offset=".513"
                        stop-color="#f74a5c"
                      />
                      <stop
                        offset="1"
                        stop-color="#f51d2c"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#deviconAntdesign0)"
                    className="group-hover:fill-white"
                    d="M58.617 2.672L2.676 58.566a7.67 7.67 0 0 0 0 10.868l55.941 55.894a7.684 7.684 0 0 0 10.871 0l23.457-23.437a6.89 6.89 0 0 0 0-9.746a6.9 6.9 0 0 0-9.754 0l-17.78 17.765c-.75.75-1.888.75-2.634 0L18.102 65.277c-.747-.75-.747-1.886 0-2.632l44.675-44.637c.746-.746 1.883-.746 2.633 0l17.781 17.765a6.9 6.9 0 0 0 9.754 0a6.89 6.89 0 0 0 0-9.746L69.492 2.594c-3.02-2.938-7.879-2.914-10.875.078m0 0"
                  />
                  <path
                    fill="url(#deviconAntdesign1)"
                    className="group-hover:fill-white"
                    d="M58.617 2.672L2.676 58.566a7.67 7.67 0 0 0 0 10.868l55.941 55.894a7.684 7.684 0 0 0 10.871 0l23.457-23.437a6.89 6.89 0 0 0 0-9.746a6.9 6.9 0 0 0-9.754 0l-17.78 17.765c-.75.75-1.888.75-2.634 0L18.102 65.277c-.747-.75-.747-1.886 0-2.632l44.675-44.637c1.864-1.606 4.903-4.86 9.371-5.621q4.977-.849 10.883 3.734q-3.948-3.948-13.539-13.527c-3.02-2.938-7.879-2.914-10.875.078m0 0"
                  />
                  <path
                    fill="url(#deviconAntdesign2)"
                    className="group-hover:fill-white"
                    d="M98.36 86.945a6.9 6.9 0 0 0 9.753 0l17.301-17.285a7.667 7.667 0 0 0 0-10.863l-17.453-17.379a6.91 6.91 0 0 0-9.762.012a6.884 6.884 0 0 0 0 9.746l11.79 11.777a1.826 1.826 0 0 1 0 2.629l-11.63 11.621a6.88 6.88 0 0 0 0 9.742Zm0 0"
                  />
                  <path
                    fill-rule="evenodd"
                    fill="url(#deviconAntdesign3)"
                    className="group-hover:fill-white"
                    d="M79.438 64.281c0-8.336-6.762-15.094-15.106-15.094c-8.34 0-15.105 6.758-15.105 15.094c0 8.332 6.765 15.09 15.105 15.09c8.344 0 15.106-6.758 15.106-15.09m0 0"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              Ant Design
            </p>
          </motion.div>
        </div>

        {/* Material */}
        <div className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className="flex items-center justify-between"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#007dc5]"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                />
              </svg>
              <div className="absolute top-7 left-6 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <path
                    fill="#1fa6ca"
                    className="group-hover:fill-white"
                    d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8z"
                  />
                  <path
                    fill="#1c7fb6"
                    className="group-hover:fill-white"
                    d="m48 41l47.9-27.6v55.3L64 87l-16-9.2l32-18.4V41L48 59.4z"
                  />
                  <path
                    fill="#1fa6ca"
                    d="M48 77.8v18.4l32 18.4V96.2z"
                    className="group-hover:fill-white"
                  />
                  <path
                    fill="#1c7fb6"
                    className="group-hover:fill-white"
                    d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2zM111.9 41V22.6l16-9.2v18.4z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              Material UI
            </p>
          </motion.div>
        </div>

        {/* Framer */}
        <div className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className="flex items-center justify-between"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#4d24f7]"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                />
              </svg>
              <div className="absolute top-5 left-4 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <g
                    fill="#4d24f7"
                    stroke="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="group-hover:fill-white"
                  >
                    <path fill="#4d24f7" className="group-hover:fill-white" d="M12 12L4 4v16L20 4v16l-4-4" />
                    <path fill="#4d24f7" className="group-hover:fill-white" d="m20 12l-8 8l-4-4" />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              Framer Motion
            </p>
          </motion.div>
        </div>

        {/* Tailwind */}
        <div className="flex items-center gap-4 group">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            className="flex items-center justify-between"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                width="80"
                height="80"
                fill="#dfdddd"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-1000 ease-in-out group-hover:fill-[#05b0ce]"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                />
              </svg>
              <div className="absolute top-5 left-4 group">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-1000 ease-in-out group-hover:fill-white"
                >
                  <path
                    fill="#05b0ce"
                    className="group-hover:fill-white"
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <p className="text-white text-[25px] font-[600] italic whitespace-nowrap">
              Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;

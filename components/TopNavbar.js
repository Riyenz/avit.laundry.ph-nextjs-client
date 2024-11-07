import Icon from "./Icon";

export default function TopNavbar() {
  const socials = [
    {
      icon: "facebook",
      href: "https://www.facebook.com/avit.laundry",
    },
    {
      icon: "instagram",
      href: "https://www.instagram.com/avit.laundry",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/company/avit-laundry",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center shadow-lg">
      <div className="avit-container py-2 items-center hidden lg:flex">
        <p className="text-[#7b7d83] text-[14px] font-medium">
          Welcome to AVIT Laundry Services!
        </p>

        <div className="ml-auto grid grid-flow-col gap-6">
          {socials.map((social) => {
            return (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon
                  name={social.icon}
                  className="w-[15px] h-[15px] text-primary"
                />
              </a>
            );
          })}
        </div>
      </div>
      <hr className="border border-b-[#e4e5ea] border-t-0 w-full hidden lg:block" />
      <div className="avit-container py-3 flex items-center lg:py-6">
        <img
          className="h-[60px] hidden lg:block"
          src="/images/AVIT_LAUNDRY_HORIZONTAL.svg"
          alt="AVIT_LAUNDRY_HORIZONTAL"
        />
        <img
          className="h-[40px] lg:hidden"
          src="/images/AVIT_LAUNDRY_LOGO.svg"
          alt="AVIT_LAUNDRY_LOGO"
        />

        <div className="ml-auto grid grid-flow-col gap-6">
          <div className="items-center hidden sm:flex">
            <Icon name="email" className="w-[30px] h-[30px] mr-4" />
            <div className="flex flex-col">
              <p className="text-[14px] text-[#7b7d83] font-medium">
                hello@avit.ph
              </p>
              <a
                href="mailto:hello@avit.ph"
                className="text-primary text-[15px] font-bold hover:opacity-90"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="h-full w-[1px] bg-[#dadcdf] hidden sm:block"></div>

          <div className="items-center hidden lg:flex">
            <Icon name="clock" className="w-[30px] h-[30px] mr-4" />
            <div className="flex flex-col">
              <p className="text-[14px] text-[#7b7d83] font-medium">
                Mon to Sun
              </p>
              <p className="text-primary text-[15px] font-bold">7am - 7pm</p>
            </div>
          </div>

          <div className="h-full w-[1px] bg-[#dadcdf] hidden lg:block"></div>

          <div className="items-center flex">
            <Icon name="phone" className="w-[30px] h-[30px] mr-4" />
            <div className="flex flex-col">
              <p className="text-[14px] text-[#7b7d83] font-medium">
                Call Anytime
              </p>
              <a
                href="tel:+639763399092"
                className="text-primary text-[15px] font-bold hover:opacity-90"
              >
                +63 976 339 9092
              </a>
            </div>
          </div>

          <div className="h-full w-[1px] bg-[#dadcdf] hidden md:block"></div>

          <div className="items-center hidden md:flex">
            <Icon name="location" className="w-[30px] h-[30px] mr-4" />
            <div className="flex flex-col">
              <p className="text-[14px] text-[#7b7d83] font-medium">
                BLK 1 LOT 10 Terra Alta Homes
              </p>
              <p className="text-primary text-[15px] font-bold">
                Dasmariñas Cavite
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

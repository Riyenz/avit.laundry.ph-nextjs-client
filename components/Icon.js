import FacebookIcon from './../assets/icons/facebook-icon.svg';
import InstagramIcon from './../assets/icons/instagram-icon.svg';
import LinkedinIcon from './../assets/icons/linkedin-icon.svg';
import EmailIcon from './../assets/icons/email-icon.svg';
import ClockIcon from './../assets/icons/clock-icon.svg';
import PhoneIcon from './../assets/icons/phone-icon.svg';
import LocationIcon from './../assets/icons/location-icon.svg';
import DeliveryIcon from './../assets/icons/delivery-icon.svg';
import PriceIcon from './../assets/icons/price-icon.svg';
import FastDeliveryIcon from './../assets/icons/fast-delivery-icon.svg';

const iconTypes = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
  clock: ClockIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  delivery: DeliveryIcon,
  price: PriceIcon,
  fastDelivery: FastDeliveryIcon,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = iconTypes[name];

  if (!IconComponent) throw Error(`icon name '${name}' doesn't exists on iconTypes`);
  return <IconComponent {...props} />;
};

export default Icon;

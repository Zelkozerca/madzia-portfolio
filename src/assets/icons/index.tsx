import dynamic from 'next/dynamic';

export type IconComponentPropsType = React.SVGProps<SVGSVGElement> & {
  color: string;
  size: string | number;
};

export type IconType = 'github' | 'facebook' | 'linkedin';

const icons = {
  github: dynamic(() => import(`@assets/icons/Github`)),
  facebook: dynamic(() => import(`@assets/icons/Facebook`)),
  linkedin: dynamic(() => import(`@assets/icons/Linkedin`)),
};

interface PropsInterface {
  name: IconType;
  color?: string;
  size?: string | number;
}
const Icon = ({
  name,
  color = '#9D0191',
  size = 24,
  ...rest
}: PropsInterface): JSX.Element => {
  const IconComponent = icons[name];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <IconComponent color={color} size={size} className="" {...rest} />;
};

export default Icon;

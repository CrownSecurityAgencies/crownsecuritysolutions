// types/hero.ts
export interface HeroButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  iconBgColor?: string;
}

export interface HeroContent {
  title: string;
  description: string;
  buttons?: HeroButton[];
  titleClassName?: string;
  descriptionClassName?: string;
}

export interface HeroMedia {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string; // For video poster image
  videoProps?: {
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
  };
}

export interface HeroSectionProps {
  media: HeroMedia;
  content: HeroContent;
  overlay?: {
    enabled: boolean;
    color?: string;
    gradient?: string;
    opacity?: number;
  };
  contentPosition?: 'left' | 'center' | 'right';
  minHeight?: string;
  className?: string;
}
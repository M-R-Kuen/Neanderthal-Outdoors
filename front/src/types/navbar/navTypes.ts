export interface NavbarStylesType {
  defaultProps?: {
    variant?: string;
    color?: string;
    shadow?: boolean;

    className?: string;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      navbar?: {
        initial?: object;
        shadow?: object;
        blurred?: object;
        fullWidth?: object;
      };
      mobileNav?: object;
    };
    variants?: {
      filled?: object;
      gradient?: object;
    };
  };
}

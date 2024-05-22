import { Icon, Style } from "ol/style";

export const getIconStyle = (iconPath: string) =>
  new Style({
    image: new Icon({
      scale: 0.09,
      src: `icons/${iconPath}`,
    }),
  });

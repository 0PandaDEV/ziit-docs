import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";
import { mdiIcons } from "./mdi-icon-map";

export const source = loader({
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);

    if (typeof icon === "string" && icon.startsWith("Mdi")) {
      const iconName = icon.substring(3);
      const IconComponent = mdiIcons[iconName];

      if (IconComponent) {
        return createElement(IconComponent);
      }
    }

    console.warn(`Icon not found: ${icon}`);
    return undefined;
  },
  baseUrl: "/",
  source: docs.toFumadocsSource(),
});

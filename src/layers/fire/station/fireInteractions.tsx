import { Map, Overlay, Feature } from "ol";
import { Select } from "ol/interaction";

interface fireStationProperties {
  brannstasj: string;
  brannvesen: string;
}

export function fireStInteraction(map: Map): void {
  const infoBox = document.createElement("div");
  infoBox.className = "info-box";

  const [title, brannstasj, brannvesen] = ["strong", "div", "div"].map(
    (tag) => {
      const element = document.createElement(tag);
      infoBox.appendChild(element);
      return element;
    },
  );

  title.textContent = "Fire station:";

  const select = new Select();
  map.addInteraction(select);

  const overlay = new Overlay({ element: infoBox });
  map.addOverlay(overlay);

  select.on("select", (e) => {
    const features = e.selected[0]?.get("features") as Feature[];
    const properties = features?.[0]?.getProperties() as fireStationProperties;

    if (features?.length === 1) {
      brannstasj.textContent = `Name: ${properties.brannstasj}`;
      brannvesen.textContent = `Fire district: ${properties.brannvesen}`;
      overlay.setPosition(e.mapBrowserEvent.coordinate);
    } else {
      overlay.setPosition(undefined);
    }
  });
}

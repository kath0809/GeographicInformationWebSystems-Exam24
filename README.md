[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/y-IGFidy)

[![GitHub Pages](https://img.shields.io/badge/Exam%20Map-Deployed-blue)](https://kristiania-kws2100-2024.github.io/kws2100-exam-kath0809/)

# KWS2100 EXAM

---

## Description

FireHub (BrannHub) is a cutting-edge map application designed to provide vital information to the Norwegian population
regarding
the locations of nearby fire stations and emergency call-centers (alarmsentraler). With a focus on user-friendliness and
accessibility,
FireHub has a responsive design tailored for seamless interaction across various devices. While currently in its
developmental phase, the provided code represents a robust prototype showcasing the application's potential.

### Present Features

- **Responsive Design:** FireHub is meticulously crafted to ensure optimal performance and usability across desktop and
  mobile platforms.
- **Technological Foundation:** Built on React using TypeScript and JavaScript, FireHub leverages the power of the
  OpenLayers library and incorporates Stadia maps for its mapping functionalities.
- **Location Awareness:** Users can effortlessly toggle between different map layers, revealing the comprehensive
  network of fire departments and stations spanning across Norway. Each location is intuitively marked with an icon for
  easy identification. Using an additional toggle layer, the user can view the area of responsibility for each fire
  department and call center.
- **Emergency Call Centers:** In addition to fire station data, FireHub provides essential information on the locations
  of emergency switchboards and their corresponding service zones.
- **Zone Drawing Capability:** FireHub also gives users the ability to draw and designate custom zones of interest
  directly on the map interface.
- **Map Customization:** Offering a diverse selection of map styles, FireHub allows users to tailor their visual
  experience by choosing from four distinct map types, each meticulously crafted to suit individual preferences.
- **Overview Map:** FireHub includes an overview map that provides a zoomed-out view of the main map. This feature helps
  users understand their current location in a broader context and navigate the map more effectively. The overview map's
  zoom level adjusts dynamically based on the main map's zoom level, ensuring a consistent and useful perspective.
- **Fire Station Clustering:** FireHub implements a clustering feature for fire stations. When the map is zoomed out,
  nearby fire stations are grouped into clusters for a cleaner and more intuitive visual representation. The size of
  each cluster represents the number of fire stations within that cluster. As the user zooms in, clusters break down to
  reveal individual fire stations.
- **API and Server Setup:** Equipped with a local server built using Express.js, FireHub's structure allows for
  potential
  integration of a database for dynamic data retrieval and manipulation.

### Future Roadmap

**Real-time Tracking & User Location:** Future iterations of FireHub will introduce advanced features such as
real-time tracking of fire trucks responding to emergency calls. Users will gain insights into response times and
vehicle locations, enhancing overall situational awareness. "How long does it take for the fire-truck to get to my
location?"

## Prerequisites

## Installation

To install the project, follow these steps:

    npm install
    npm run build
    npm run dev

The server must be run on local port 3000.

## Citation

Various sources and inspiration used for this project:

- [GeoNorge](https://www.geonorge.no/)
- [Stadia Maps](https://stadiamaps.com/)
- [Kartverket](https://kart.dsb.no/)
- [Kartverket](https://www.kartverket.no/)
- [OpenLayers](https://openlayers.org/)
- Lectures and exercises from KWS2100
- Our own lecture notes and previous projects

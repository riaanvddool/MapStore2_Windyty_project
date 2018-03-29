Testrun of version 2018.01.01
==========

Quick Start
------------

Clone the repository with the --recursive option to automatically clone submodules:

`git clone --recursive https://github.com/riaanvddool/MapStrore2_Windyty_project.git`

Install NodeJS >= 7.10.0 , if needed, from [here](https://nodejs.org/en/download/releases/).

Start the development application locally:

`npm install`

`npm start`

The application runs at `http://localhost:8081` afterwards.


Windyty basemap
---------------

See Windyty map at http://localhost:8081/#/viewer/leaflet/0

Windyty (https://windy.com) integration involves changes to the following files:

* `./index.html` 
* `./windyty/`
* `./MapStore2/web/client/components/map/leaflet/Map.jsx`

The integration is not very correct in terms of React-Redux, but the design of the windyty API caused some problems.

To enable/disable set `useWindyty` in `./MapStore2/web/client/components/map/leaflet/Map.jsx`

    static defaultProps = {
        //...
        useWindyty: true,
    };

In `index.html` we add a `<div>` for Windyty, and declare two global variables that the API uses during init.

In `Map.jsx` we mount a `<script>` and a css `<link>` tag and then we move the Windyty `<div>` to the correct place in the DOM once Windyty has created its Leaflet map.

The `./windyty/` directory contains the windyty API static files with some modifications. See http://api.windyty.com/ for reference.

Lots of room for improvement!





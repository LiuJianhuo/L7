// @ts-ignore
import { PointLayer, Scene } from '@antv/l7';
// @ts-ignore
import { GaodeMap, Mapbox } from '@antv/l7-maps';
import React, { useEffect } from 'react';
  
export default () => {
    useEffect( () => {
      const scene = new Scene({
        id: 'map',
        map: new GaodeMap({
          center: [120.188193, 30.292542],
          pitch: 0,
          zoom: 13,
        }),
      });
  
      const layer = new PointLayer()
        .source(
          {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [120.188193, 30.292542]
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [120.201665, 30.26873]
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [120.225209, 30.290802]
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [120.189641, 30.293248]
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [120.189389, 30.292542]
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [120.190837, 30.293303]
                }
              }
            ]
          }
          
        )
        .size(100)
        .color('#f00')
        .shape('radar')
        .style({
          unit:'meter',
        })
        .animate(true)
        .active(true);
  
      scene.on('loaded', () => {
        scene.addLayer(layer);
      });
          
    }, []);
    return (
      <div
        id="map"
        style={{
          height: '500px',
          position: 'relative',
        }}
      />
    );
  };
  
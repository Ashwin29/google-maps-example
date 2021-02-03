import { Mappable } from './interface/Mappable';

/**
 * Creates a google map instance and marks the location
 * provided when the class gets initialized.
 */
export class CustomMap {
  googleMap: google.maps.Map;

  /**
   * Initializing an instance of the google map once this class is initiated.
   * @param elementId Element id that holds the generated google map iframe.
   */
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 1,
    });
  }

  /**
   * Adds the marker and the info window for the current google map instance.
   * @param mappable Mappable argument contains the coordinates and the marker content.
   */
  addMarker(mappable: Mappable): void {
    // Initialize the marker.
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    // Listen for the click events.
    marker.addListener('click', () => {
      // Initialize the info window for the maps.
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      // Open the info window by passing the current map instance and marker.
      infoWindow.open(this.googleMap, marker);
    });
  }
}

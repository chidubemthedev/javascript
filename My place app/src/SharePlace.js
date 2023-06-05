import { Modal } from "./ui/Modal";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  locateUserHandler = function () {
    if (!navigator.geolocation) {
      alert(
        "Location feature not available in your browser! Please, use the address form above."
      );
      return;
    }

    const modal = new Modal('loading-modal-content', 'Loading location... Please wait...')
    modal.show()

    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide()
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };

        console.log(coordinates);
      },
      (error) => {
        modal.hide()
        alert("Auto location failed. Please, use the address form above.");
      }
    );
  };

  findAddressHandler = function () {};
}

const placeFinder = new PlaceFinder();

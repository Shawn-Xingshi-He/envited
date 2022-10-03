import { styled, TextField, InputLabel } from "@mui/material";

const LocationInput = styled("input")({
  backgroundColor: "transparent",
  borderBottom: "2px solid #9500ae",
  wordBreak: "break-word",
  outline: "none",
});

function AddressField({ eventInfo, setEventInfo, themeColor }) {
  const fields = ["Street", "State", "Suburb", "Postcode"];

  //   const displaySuggestions = (predictions, status) => {
  //     if (status === google.maps.places.PlacesServiceStatus.OK) {
  //       predictions.forEach((prediction) => {
  //         console.log(prediction.description);
  //       });
  //     }
  //   };

  //   let autocomplete = new google.maps.places.AutocompleteService();
  //   autocomplete.getQueryPredictions({ input: "Sichuan" }, displaySuggestions);

  // let autocomplete;
  // const initAutocomplete = () => {
  //   // eslint-disable-next-line no-undef
  //   autocomplete = new google.maps.places.Autocomplete(
  //     document.querySelector("#address"),
  //     {
  //       types: ["establishment"],
  //       componentRestrictions: { country: ["AU"] },
  //       fields: ["adr_address", "name"], //adr_address
  //     }
  //   );
  //   autocomplete.addListener("place_changed", onPlaceChanged);
  // };

  // const onPlaceChanged = () => {
  //   let place = autocomplete.getPlace();
  //   if (!place.name) {
  //     document.querySelector("#address").placeholder = "Enter here";
  //   } else {
  //     console.log(place.adr_address);
  //     const addressTag = new DOMParser().parseFromString(
  //       place.adr_address,
  //       "text/html"
  //     );

  //     const newAddress = {};
  //     if (addressTag.querySelector(".street-address")) {
  //       newAddress["Street"] =
  //         addressTag.querySelector(".street-address").innerHTML;
  //     }
  //     if (addressTag.querySelector(".locality")) {
  //       newAddress["Suburb"] = addressTag.querySelector(".locality").innerHTML;
  //     }
  //     if (addressTag.querySelector(".region")) {
  //       newAddress["State"] = addressTag.querySelector(".region").innerHTML;
  //     }
  //     if (addressTag.querySelector(".postal-code")) {
  //       newAddress["Postcode"] =
  //         addressTag.querySelector(".postal-code").innerHTML;
  //     }
  //     newAddress["Name"] = place.name;
  //     document.querySelector("#address").value = place.name;
  //     setEventInfo({ ...eventInfo, location: newAddress });
  //   }
  // };

  // useEffect(() => {
  //   initAutocomplete();
  // });

  const handleOnChange = (value, field) => {
    const newAddress = eventInfo.location;
    newAddress[field] = value;
    setEventInfo({ ...eventInfo, location: newAddress });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col ">
          <InputLabel sx={{ color: "#9500ae" }} shrink htmlFor="street">
            Location name *
          </InputLabel>
          <LocationInput
            id="address"
            label={"Location"}
            placeholder="Search location here"
            variant="standard"
            onChange={(e) => {
              handleOnChange(e.target.value, "Name");
            }}
          />
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-4">
          {fields.map((item, index) => (
            <TextField
              className={index % 2 === 0 ? "col-span-2" : "col-span-1"}
              key={"address-" + item}
              label={item}
              variant="standard"
              color="secondary"
              value={eventInfo.location[item]}
              required
              focused
              onChange={(e) => {
                handleOnChange(e.target.value, item);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AddressField;

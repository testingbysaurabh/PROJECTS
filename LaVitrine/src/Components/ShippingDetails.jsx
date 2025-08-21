import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

const ShippingDetails = ({ onContinue }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const refs = {
    name: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    address: useRef(null),
    city: useRef(null),
    state: useRef(null),
    pincode: useRef(null),
  };

  const handleChange = (key) => {
    const value = refs[key].current.innerText;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const allFilled = Object.values(form).every((v) => v.trim() !== "");
    if (!allFilled) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Shipping details saved");
    onContinue(form);
  };

  return (
    <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-lg p-6 my-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Shipping Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EditableField label="Full Name" refObj={refs.name} onChange={() => handleChange("name")} />
        <EditableField label="Phone Number" refObj={refs.phone} onChange={() => handleChange("phone")} />
        <EditableField label="Email" refObj={refs.email} onChange={() => handleChange("email")} />
        <EditableField label="Pincode" refObj={refs.pincode} onChange={() => handleChange("pincode")} />
        <EditableField label="City" refObj={refs.city} onChange={() => handleChange("city")} />
        <EditableField label="State" refObj={refs.state} onChange={() => handleChange("state")} />

        <div className="md:col-span-2">
          <div className="text-sm text-gray-600 mb-1">Full Address</div>
          <div
            ref={refs.address}
            contentEditable
            onInput={() => handleChange("address")}
            className="p-3 border rounded h-28 overflow-auto"
          ></div>
        </div>

        <div
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-center py-3 px-4 rounded cursor-pointer md:col-span-2"
          onClick={handleSubmit}
        >
          Save & Continue
        </div>
      </div>
    </div>
  );
};

const EditableField = ({ label, refObj, onChange }) => {
  return (
    <div>
      <div className="text-sm text-gray-600 mb-1">{label}</div>
      <div
        ref={refObj}
        contentEditable
        onInput={onChange}
        className="p-3 border rounded min-h-[44px]"
      ></div>
    </div>
  );
};

export default ShippingDetails;

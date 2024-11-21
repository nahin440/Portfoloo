import React, { useState } from "react";
import { toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import styles
import { useLoaderData, useParams, useNavigate } from "react-router-dom";

const DonationDetails = () => {
    const { id } = useParams();
    const campId = parseInt(id);
    const navigate = useNavigate();
    const camps = useLoaderData();
    const camp = camps.find((camp) => camp.id === campId);

    const { title, image, description, division, contactInfo, status } = camp;

    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.", {

        });
        setFormData({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            notes: "",
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate("/");
    };

    return (
        <div className="lg:flex gap-5 bg-base-100 my-16 md:w-9/12  mx-auto p-6">

            <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={title} className="w-full h-60 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <p>Contact: {contactInfo}</p>
                    <p>
                        Status: <span className="text-green-500 font-bold">{status}</span>
                    </p>
                    <span className="text-lg text-sky-950 font-semibold">
                        Division: {division}
                    </span>
                </div>
            </div>


            <div className="mt-8 card w-full bg-base-100 shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Donate Items</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity of Items</span>
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="e.g., 2 jackets, 3 blankets"
                            className="input input-bordered"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Type</span>
                        </label>
                        <select
                            name="itemType"
                            className="select select-bordered"
                            value={formData.itemType}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select an item type
                            </option>
                            <option value="blanket">Blanket</option>
                            <option value="jacket">Jacket</option>
                            <option value="sweater">Sweater</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input
                            type="text"
                            name="pickupLocation"
                            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                            className="input input-bordered"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Additional Notes (Optional)</span>
                        </label>
                        <textarea
                            name="notes"
                            placeholder="Any special instructions"
                            className="textarea textarea-bordered"
                            value={formData.notes}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary bg-sky-950 btn-md w-full hover:bg-sky-200 hover:text-sky-950"
                    >
                        Submit Donation
                    </button>
                </form>
            </div>


            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">🎉 Congratulations!</h3>
                        <p className="py-4">
                            Thank you for your donation. We truly appreciate your generosity!
                        </p>
                        <div className="modal-action">
                            <button className="btn btn-primary text-sky-50 hover:bg-sky-950 bg-sky-900" onClick={handleCloseModal}>
                                Close & Go Home
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonationDetails;

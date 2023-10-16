import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { _id, name, supplier, category, quantity, taste, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, supplier, category, quantity, taste, details, photo }
        // console.log(newCoffee);

        // send data to the server
        fetch(`https://coffee-store-server-ed7obws83-coddings-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Coffee has been updated successfully!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-4">Update Coffee: {name}</h1>
            <form onSubmit={handleUpdateCoffee} className="border w-2/3 mx-auto my-12 p-5 bg-zinc-200">
                <div className="form-control">

                    <div className="flex justify-between gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name:</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Supplier:</span>
                            </label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Category:</span>
                            </label>
                            <input type="text" name="category" defaultValue={category} placeholder="Category Name" className="input input-bordered border-zinc-600 w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Available Quantity:</span>
                            </label>
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Taste:</span>
                            </label>
                            <input type="text" name="taste" defaultValue={taste} placeholder="How is this taste" className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Details:</span>
                            </label>
                            <input type="text" name="details" defaultValue={details} placeholder="Write Details" className="input input-bordered border-zinc-600 w-full" required />
                        </div>
                    </div>

                    <label className="label">
                        <span className="label-text text-lg font-semibold">Photo:</span>
                    </label>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered border-zinc-600" required />
                </div>
                <button className="btn btn-block mt-4 bg-zinc-700 text-white hover:bg-zinc-800">Add Coffee</button>
            </form>
        </div>
    );
};


export default UpdateCoffee;
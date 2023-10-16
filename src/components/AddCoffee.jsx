import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, supplier, category, quantity, taste, details, photo }
        // console.log(newCoffee);

        // send data to the server
        fetch('https://coffee-store-server-ed7obws83-coddings-projects.vercel.app/coffee', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Coffee has been saved successfully!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }


    return (
        <div>
            <div>
                <h2 className="text-4xl font-bold text-center">Add new coffee</h2>
                <p className="text-center my-3 px-72">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aliquid odit, adipisci laborum id nobis molestias aut iusto veniam sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, alias quam reiciendis quas odit esse quos perspiciatis sit voluptate est?</p>
            </div>
            <form onSubmit={handleAddCoffee} className="border w-2/3 mx-auto my-12 p-5 bg-zinc-200">
                <div className="form-control">

                    <div className="flex justify-between gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name:</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered border-zinc-600 w-full" required/>

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Supplier:</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered border-zinc-600 w-full"  required/>

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Category:</span>
                            </label>
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered border-zinc-600 w-full"  required/>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Available Quantity:</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered border-zinc-600 w-full"  required/>

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Taste:</span>
                            </label>
                            <input type="text" name="taste" placeholder="How is this taste" className="input input-bordered border-zinc-600 w-full"  required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Details:</span>
                            </label>
                            <input type="text" name="details" placeholder="Write Details" className="input input-bordered border-zinc-600 w-full"  required/>
                        </div>
                    </div>

                    <label className="label">
                        <span className="label-text text-lg font-semibold">Photo:</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered border-zinc-600"  required/>
                </div>
                <button className="btn btn-block mt-4 bg-zinc-700 text-white hover:bg-zinc-800">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;
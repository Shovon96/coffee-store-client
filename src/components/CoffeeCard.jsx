import { FaEdit, FaStreetView } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, supplier, category, quantity, taste, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-ed7obws83-coddings-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coff => coff._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="flex justify-normal items-center p-4 gap-8 my-5 shadow-lg">
            <div>
                <img className="h-52" src={photo} alt="" />
            </div>
            <div className="text-lg font-medium">
                <h2>Name: {name}</h2>
                <h2>Supplier: {supplier}</h2>
                <h2>Category: {category}</h2>
                <h2>Quantity: {quantity}</h2>
                <h2>Taste: {taste}</h2>
            </div>
            <div className="space-y-2">
                <button title='View' className="btn btn-primary block"><FaStreetView></FaStreetView></button>
                <Link to={`/updateCoffee/${_id}`}>
                    <button title='Update' className="btn btn-warning block"><FaEdit></FaEdit></button>
                </Link>
                <button onClick={() => handleDelete(_id)} title='Delete' className="btn btn-error block"><MdDeleteForever></MdDeleteForever></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}

export default CoffeeCard;
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const ReviewModal = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const reviews = {
            name: name,
            email: email,
            message: message
        }
        fetch('https://easy-transport-server-eosin.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Successfull');

                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <textarea type="text" name="message" className="textarea textarea-bordered w-full h-24" placeholder="Please Review"></textarea>
                        <input type="submit" className='w-full btn btn-accent' value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
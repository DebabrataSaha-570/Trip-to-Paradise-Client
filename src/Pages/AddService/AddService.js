import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const AddService = () => {
    return (
        <>
            <Navigation></Navigation>
            <h3 className='text-center my-4'>Please add a Service</h3>
            <section className='w-50 mx-auto mb-4'>

                <form onSubmit="">
                    <div class="mb-3">
                        <label for="placeName" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="placeName" placeholder="Place Name" />
                    </div>
                    <div class="mb-3">
                        <label for="placeDescription" class="form-label">Place Description</label>
                        <textarea class="form-control" id="placeDescription" placeholder='Place Description' rows="4"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="placeImage" class="form-label">Place Image</label>
                        <input type="text" class="form-control" id="placeImage" placeholder="Image URL" />
                    </div>

                    <div class="mb-3">
                        <label for="placeDuration" class="form-label">Duration (days)</label>
                        <input type="number" class="form-control" id="placeDuration" placeholder="Tour Duration" />
                    </div>

                    <div class="mb-3">
                        <label for="placeDressCode" class="form-label">Dress Code</label>
                        <input type="text" class="form-control" id="placeDressCode" placeholder="Dress Code" />
                    </div>

                    <div class="mb-3">
                        <label for="placePrice" class="form-label">$ Price</label>
                        <input type="number" class="form-control" id="placePrice" placeholder="Price" />
                    </div>
                </form>

                <button type='submit' className='btn btn-primary'>Add Service</button>
            </section>
            <Footer></Footer>
        </>
    );
};

export default AddService;
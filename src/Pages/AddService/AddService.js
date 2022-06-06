import React, { useRef } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const AddService = () => {
    const nameRef = useRef()
    const descriptionRef = useRef()
    const imageRef = useRef()
    const durationRef = useRef()
    const dressCodeRef = useRef()
    const priceRef = useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')

        const nameValue = nameRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const imageValue = imageRef.current.value;
        const durationValue = durationRef.current.value;
        const dressValue = dressCodeRef.current.value;
        const priceValue = priceRef.current.value;

        const serviceData = { nameValue, descriptionValue, imageValue, durationValue, dressValue, priceValue }
        console.log('serviceData', serviceData)

    }
    return (
        <>
            <Navigation></Navigation>
            <h3 className='text-center my-4'>Please add a Service</h3>
            <section className='w-50 mx-auto mb-4'>

                <form onSubmit={handleFormSubmit}>
                    <div class="mb-3">
                        <label for="placeName" class="form-label">Place Name</label>
                        <input type="text" class="form-control" id="placeName" ref={nameRef} placeholder="Place Name" />
                    </div>
                    <div class="mb-3">
                        <label for="placeDescription" class="form-label">Place Description</label>
                        <textarea class="form-control" id="placeDescription" placeholder='Place Description' rows="4" ref={descriptionRef}></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="placeImage" class="form-label">Place Image</label>
                        <input type="text" class="form-control" id="placeImage" placeholder="Image URL" ref={imageRef} />
                    </div>

                    <div class="mb-3">
                        <label for="placeDuration" class="form-label">Duration (days)</label>
                        <input type="number" class="form-control" id="placeDuration" placeholder="Tour Duration" ref={durationRef} />
                    </div>

                    <div class="mb-3">
                        <label for="placeDressCode" class="form-label">Dress Code</label>
                        <input type="text" class="form-control" id="placeDressCode" placeholder="Dress Code" ref={dressCodeRef} />
                    </div>

                    <div class="mb-3">
                        <label for="placePrice" class="form-label">$ Price</label>
                        <input type="number" class="form-control" id="placePrice" placeholder="Price" ref={priceRef} />
                    </div>
                    <input type='submit' className='btn btn-primary' value="Add Service"></input>
                </form>

            </section>
            <Footer></Footer>
        </>
    );
};

export default AddService;
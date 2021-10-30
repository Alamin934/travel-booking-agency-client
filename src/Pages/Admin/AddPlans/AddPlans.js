import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddPlans = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/addTourPlans', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Tour Plans Details Added Successfully');
                }
            })

    }
    return (
        <div>
            <Container className="w-50 py-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Plans Title</label>
                    <input {...register("title")} className="form-control form-control-lg mb-3" placeholder="Plans Title" />

                    <label>Price</label>
                    <input type="number" {...register("price")} className="form-control form-control-lg mb-3" placeholder="Price" />

                    <label>Location</label>
                    <input {...register("location")} className="form-control form-control-lg mb-3" placeholder="Location" />

                    <label>Descrioption</label>
                    <textarea rows="4" {...register("description")} className="form-control form-control-lg mb-3" placeholder="Description"></textarea>

                    <label>Banner URL</label>
                    <input {...register("url")} className="form-control form-control-lg mb-3" placeholder="Insert Image URL" />

                    <div className="text-end mt-4">
                        <input className="btn btn-danger btn-lg" type="submit" value="Add Tour Plans" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default AddPlans;
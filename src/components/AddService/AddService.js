import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import('./AddService.css')

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);

        axios.post('https://stark-forest-68756.herokuapp.com/services', data)
            .then(res => {


                if (res.data.insertedId) {
                    alert(' Your Event Added Successfully');
                    reset();
                }
            })

    }

    return (
        <div className="add-service">
            <br />
            <br />
            <br />
            <br />
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Event-Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Ticket/Package-Cost" />
                <input {...register("img")} placeholder="image url" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
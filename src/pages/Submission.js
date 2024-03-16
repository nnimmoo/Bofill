import React, { useState } from 'react';
import axios from 'axios';

function Submission(props) {
    const AUTH = process.env.REACT_APP_AUTH;
    console.log(AUTH)
    const [formData, setFormData] = useState({
        name: '',
        imageLinks: [''], // Initialize as an array with an empty string
        dateOfCreation: '',
        location: '',
        shortBio: ''
    });

    const handleImageLinkChange = (index, value) => {
        const updatedImageLinks = [...formData.imageLinks];
        updatedImageLinks[index] = value;
        setFormData({
            ...formData,
            imageLinks: updatedImageLinks
        });
    };

    const addImageLinkInput = () => {
        setFormData({
            ...formData,
            imageLinks: [...formData.imageLinks, '']
        });
    };

    const removeImageLinkInput = (index) => {
        const updatedImageLinks = [...formData.imageLinks];
        updatedImageLinks.splice(index, 1);
        setFormData({
            ...formData,
            imageLinks: updatedImageLinks
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const headers = {
            'Authorization': `Bearer ${AUTH}`,
            'Content-Type': 'application/json'
        };
        console.log(formData)
        try {
            const response = await axios.post('https://crudapi.co.uk/api/v1/Bofill', JSON.stringify([formData]), { headers });
            console.log('POST response:', response.data);
            alert("good")
        } catch (error) {
            console.error('Error:', error);
            alert("bad")
        }
    };

    return (
        <div>
            <h2>Submission Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Image Links:
                    {formData.imageLinks.map((link, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name={`imageLink-${index}`}
                                value={link}
                                onChange={(e) => handleImageLinkChange(index, e.target.value)}
                            />
                            <button type="button" onClick={() => removeImageLinkInput(index)}>-</button>
                        </div>
                    ))}
                    <button type="button" onClick={addImageLinkInput}>Add Image Link</button>
                </label>
                <br />
                <label>
                    Date of Creation:
                    <input type="text" name="dateOfCreation" value={formData.dateOfCreation} onChange={handleChange} />
                </label>
                <br />
                <label>
                    location:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Short Bio:
                    <textarea name="shortBio" value={formData.shortBio} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Submission;

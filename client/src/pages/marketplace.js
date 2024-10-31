import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "../components/layout/layout";

const Marketplace = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list', {
          params: { limit: 12 },
        });
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Layout>
    <div className="container mt-5">
      <h1 className="text-center mb-4">Marketplace</h1>
      <div className="row">
        {images.map((image) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={image.id}>
            <div className="card">
              <img src={`https://picsum.photos/id/${image.id}/300/200`} className="card-img-top" alt={image.author} />
              <div className="card-body">
                <h5 className="card-title">{image.author}</h5>
                <p className="card-text">ID: {image.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Marketplace;

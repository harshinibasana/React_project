import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PhotoGallery(){
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{ load(page); }, [page]);

  const load = async (p) => {
    const res = await axios.get('https://picsum.photos/v2/list?page=' + p + '&limit=6');
    setPhotos(res.data);
  };

  return (
    <div>
      <h2>Photos</h2>
      <div className="row">
        {photos.map(ph=>(
          <div className="col-md-4 mb-3" key={ph.id}>
            <img src={ph.download_url} loading="lazy" alt="" className="img-fluid rounded"/>
          </div>
        ))}
      </div>
      <button className="btn btn-secondary me-3" disabled={page===1} onClick={()=>setPage(p=>p-1)}>Prev</button>
      <button className="btn btn-secondary" onClick={()=>setPage(p=>p+1)}>Next</button>
    </div>
  );
}

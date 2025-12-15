import React, { useState } from 'react';

export default function ContactForm(){
  const [form, setForm] = useState({name:'',email:'',date:'',message:''});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if(!form.name.trim()) e.name='Required';
    if(!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) e.email='Invalid email';
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(form.date);
    if(d < today) e.date='No past dates allowed';
    setErrors(e);
    return Object.keys(e).length===0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if(!validate()) return;
    console.log(form);
    alert("Submitted");
    setForm({name:'',email:'',date:'',message:''});
  };

  return (
    <form onSubmit={submit}>
      <h2>Contact</h2>
      <input className="form-control mb-2" name="name" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      {errors.name && <div className="text-danger">{errors.name}</div>}

      <input className="form-control mb-2" name="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      {errors.email && <div className="text-danger">{errors.email}</div>}

      <input type="date" className="form-control mb-2" name="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/>
      {errors.date && <div className="text-danger">{errors.date}</div>}

      <textarea className="form-control mb-2" name="message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>

      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

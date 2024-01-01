import React, { useState } from 'react';
import styles from '../styles/contact.module.css';



const Contact = () => {
  const [formdata , setFormdata] = useState({
    name : '',
    email : '',
    phone:'',
    desc:''
  });
  const handleChange = (e)=>{
    if (e.target.name === 'name') {
      setFormdata({ ...formdata, name: e.target.value });
    } else if (e.target.name === 'email') {
      setFormdata({ ...formdata, email: e.target.value });
    } else if (e.target.name === 'phone') {
      setFormdata({ ...formdata, phone: e.target.value });
    } else if (e.target.name === 'desc') {
      setFormdata({ ...formdata, desc: e.target.value });
    }
  }


    const handleSubmit = async (e)=>{
      e.preventDefault()
        try {
          const response = await fetch("http://localhost:3000/api/postcontact", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
          });
      
          const result = await response.json();
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
        setFormdata({name:'' , phone:'',email:'',desc:''});
      }
      

      
      
   

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Page</h1>
        <form onSubmit={handleSubmit} >
          <div className={styles.mb}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" value={formdata.name} onChange={handleChange}  className={styles.control} id="name" name='name' aria-describedby="emailHelp" />
          </div>
          <div className={styles.mb}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="email" onChange={handleChange} value={formdata.email} className={styles.control} name='email' id="email" aria-describedby="emailHelp" />
          </div>
          <div className={styles.mb}>
          <label htmlFor="desc"> Elaborate your concern </label>
            <textarea className={styles.control} onChange={handleChange} value={formdata.desc} placeholder="Write your concern here" id="desc" name='desc'></textarea>
          </div>
          <div className={styles.mb}>
            <label htmlFor="phone" className={styles.label}>Phone</label>
            <input type="number" onChange={handleChange} value={formdata.phone} className={styles.control} name='phone' id="phone" />
          </div>

          <button type="submit" className={styles.btn}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact;
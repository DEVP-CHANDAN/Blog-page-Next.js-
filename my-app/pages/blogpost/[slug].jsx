import React ,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Blogpost.module.css';

const Slug = (props)=>{
    const[data ,setData] = useState(props.data);
    const router = useRouter();
    function createMarkup() {
      return {__html: data.content};
    }
    return (
        <>
                    <div className={styles.container}>
                     <main className={styles.main}>
                     <h1 className={styles.titleh1}> Title of the topic is {data.title}</h1>
                      <hr style={{'width': '100%'}}/>
                        <div>
                        <div dangerouslySetInnerHTML={createMarkup()} />
                           
                        </div>
                     </main>
                     </div>
        </>
            
    )
}


export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/getblogs?slug=${context.query.slug}`);
  const data = await res.json()
 
  
  return { props: { data } }
}

export default Slug;
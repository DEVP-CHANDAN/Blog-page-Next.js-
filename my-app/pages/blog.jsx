import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
const Blog = (props) => {
  const [data, setData] = useState(props.data);
  const fetchData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };




  return (
    <>
      <style jsx>
        {
          `
        h2{
          margin-bottom : 12px;
        }

        
      `
        }
      </style>
      <div className={`${styles.container} ${styles.blog}`}>
        <div >
          <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={fetchData}
            
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {data.map((item, index) => {
              return (
                <div className={styles.iblogs} key={index}>
                  <Link key={index} className={styles.card} href={`/blogpost/${item.slug}`}>
                    <h2>
                      {item.title}
                    </h2>
                    <p>
                      {item.metadesc.substr(0, 50).concat("....")}
                    </p>
                  </Link>
                  <hr width="100%"/>
                </div>
              )
              
            })}
          </InfiniteScroll>

        </div>
      </div>
    </>
  )
}






export async function getServerSideProps() {

  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json()


  return { props: { data } }
}


export default Blog;
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [news, setNews] = useState([]);
  const fetchNew = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      console.log(response.data);
      setNews(response.data);
    });
  };
  useEffect(() => {
    fetchNew();
  }, []);
  return (
    <>
      <div className="container mt-5">
      <h3 className="text-center">Axios Api Fetch Fake API</h3>
        <div className="row">
          {news.map((item) => {
            const { title, body, id } = item;
            return (
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{body}</p>
                    <a href="#" class="btn btn-primary">
                      {id}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;

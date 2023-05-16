import { Button, TextField } from '@mui/material';
import { useState, useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const fetchNews = () => {
    //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const apiKey = "e64beaaee7084e38bbddb0daffaa0b13";
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
      if (search !== "") {
        url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;
      }
      const request = new Request( url);

      fetch(request)
        .then(response => response.json())
        .then((news) => {
          setArticles(news.articles);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchNews();
  }, [search, category, country]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleTopNews = () => {
    setSearch("");
    setCategory("business");
    setCountry("us");
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '200px' }}>
        <TextField
          label="Search News"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
        <Button variant="outlined" onClick={handleTopNews}>Top News</Button>
      </div>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, paddingTop:"78px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={article.urlToImage}
                  alt="Article Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

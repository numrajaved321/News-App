import { Button } from '@mui/material';
import { useState, useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Pcs() {
  const [authors, setAuthors] = useState([]);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const qInTitle = "mui"; // search for "mui" in the article title
    const from = "";
    const apiKey = "e64beaaee7084e38bbddb0daffaa0b13";
    const url = ` https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=e64beaaee7084e38bbddb0daffaa0b13`;
    const request = new Request(url);
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        setAuthors(news.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (
    <Grid container spacing={2}>
      {authors.map((article, index) => (
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
                  {showFullContent ? article.content : article.description}
                </Typography>
             
                {!showFullContent && (
                  <Button
                    variant="outlined"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </Button>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

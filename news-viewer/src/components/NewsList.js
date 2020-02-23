import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NesItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;




const NewsList = ({category}) =>{
    /*
    usePromise 적용전
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try{
                const query = category === 'all' ? '':`&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=bb05428e33f54c7d9c630b501036b325`,
                );
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    },[category]);

    if(loading){
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    if(!articles){
        return null;
    }*/
    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=bb05428e33f54c7d9c630b501036b325`
        );
    },[category]);

    if(loading){
        return <NewsListBlock>대기중</NewsListBlock>;
    }

    if(!response){
        return null;
    }

    if(error){
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const {articles} = response.data;
    return(
        <NewsListBlock>
            {articles.map(article =>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};
export default NewsList;
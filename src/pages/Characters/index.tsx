import { response } from "express";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../serives/api";
import {  Container, Card, CardList, ButtonMore } from './styles';
import { FiChevronDown } from 'react-icons/fi';


const baseURL = "http://gateway.marvel.com/v1/public/characters?";

interface ResponseData {
    id:string;
    name:string,
    description:string;
    thumbnail:{
        path:string;
        extension:string;
    };
}

const Characters: React.FC = () => {

    const [characters, setCharacters] = useState<ResponseData[]>([]);

    useEffect(()=> {
        api.get('/characters')
        .then(response => {
            setCharacters(response.data.data.results);

        })
        .catch(err => console.log(err));
    },[]);

    const handleMore = useCallback(async () => {
        try{
            const offset = characters.length;
            const response = await api.get('characters', {
                params: {
                    offset,
                },
            });

            setCharacters([...characters, ...response.data.data.results]);
        }catch(err){
            console.log(err)
        }
    },[characters]);
    return (
        <Container>
            <CardList>
                {characters.map(characters => {
                    return (
                        <Card key={characters.id} thumbnail={characters.thumbnail}>
                            <div id="img" />
                            <h2>{characters.name}</h2>
                            <p>{characters.description}</p>
                        </Card>
                        
                    )
                })}
            </CardList>
            <ButtonMore onClick={handleMore}>
                <FiChevronDown size={20} />
                Mais
                <FiChevronDown size={20} />
            </ButtonMore>

        </Container>
    );
};

export default Characters;


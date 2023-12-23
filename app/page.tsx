'use client'
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import Projects from '@/components/Projects';
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { styled } from '@/stitches.config';
import { Wrapper } from '@/components/Wrapper';


const HomePage = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  '@bp2': { width: 800 },
  padding:'60px'
})

export default function Home() {
  const word = "Fuull Stack Web Developer & Entrepreneur";
  const [displayedText, setDisplayedText] = useState("");
  let i = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      if (i < word.length) {
        setDisplayedText((prevState) => prevState + word.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper>
      <HomePage>
        <PostContent>
          <PostContainer>
            <h1>{'Samuel Ironkwe'}</h1>
            <p>
              <strong>{displayedText.toString()}
              </strong><br />
              Currently building <a className='border-b ml-1' href="https://cruiseo.xyz" target="blank">Cruiseo</a>
            </p>
          </PostContainer>
        </PostContent>

      </HomePage >
    </Wrapper>
  )
}

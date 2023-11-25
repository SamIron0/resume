"use client";
import styled from 'styled-components';


export default function HomepageIntroduction() {

const RowSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
height:500px;
  // Responsive design
  @media (max-width: 520px) {
    padding: 1rem;
  }
`;
  const Header = styled.h1`
      margin-bottom: 1.5rem;
      font-size: 75px;
    `;

  const Paragraph = styled.p`
      margin-top: 1.5rem;
      font-size:15px;
    `;
  return (
    <RowSection>
      <Header>My Portfolio</Header>
      <p className='text-xl w-md'>Welcome, I am a web developer who specializes in buildding simple responsive websites for small businesses and startups.</p>
    </RowSection>
  );

}

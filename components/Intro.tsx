"use client";
import styled from 'styled-components';

export default function Intro() {


  const RowSection = styled.div`
  display: flex;
  flex-direction: column;
height:500px;
  
`;
  const Header = styled.h1`
      margin-bottom: 1.5rem;
      font-size: 70px;
    `;

  const Paragraph = styled.p`
      margin-top: 1.5rem;
      font-size:15px;
    `;

  const two = <h2 className="pt-6 sm:text-6xl text-4xl">Samuel Ironkwe.</h2>;
  const three = <h3 className="pt-6 max-w-xl sm:text-6xl text-4xl">I build things for the web.</h3>;
  const four = (

    <p className='pt-6 pb-6 max-w-lg text-md'>
      I’m a software engineer and web designer specializing in building and designing exceptional
      digital experiences. Currently, I’m focused on building accessible, human-centered websites for small and mid sized businesses.
      .
    </p>
  );

  const five = (
    <button
      className="bg-white h-sm rounded-md"
    >
      <p className='px-4 py-3 text-black'>
        Work With Me!
      </p>
    </button>

  );

  const items = [two, three, four, five];


  return (
    <RowSection>
      <>
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </>
    </RowSection>
  );

}

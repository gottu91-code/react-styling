import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";
import { FcAndroidOs } from "react-icons/fc";
import { DiAndroid } from "react-icons/di";
import { IconContext } from "react-icons";

// styled-components
const SAppContainer = styled.div`
  background-color: grey;
  width: fit-content;
  padding: 20px 40px;
  border-radius: 10px;
  text-align: center;
  margin: auto;
  color: #fff;
`;
const SAppTitle = styled.h1`
  font-size: 40px;
  margin: 0;
  ::before {
    content: 'aaaa';
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
const SAppText = styled.p`
  font-style: italic;
  margin: 0;
`;

// inline style
const btn = {
  backgroundColor: 'red',
  fontSize: '20px',
  textAlign: 'center',
};

function App() {
  return (
    <>
      <ChakraProvider>
        <VStack
          divider={<StackDivider />}
          // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600' }}
          borderColor='blackAlpha.500'
          borderWidth='1px'
          borderRadius='3px'
          p={5}
          alignItems='start'
        >
          <h2>
            chakraのタイトル
            <IconContext.Provider value={{color: 'red' , size: '2em', className: 'aaa' }}>
              <DiAndroid />
            </IconContext.Provider>
          </h2>
          <p>こんにちは</p>
          <p>テキストです</p>
        </VStack>
        <IconContext.Provider value={{color: 'red' , size: '2em', className: 'aaa' }}>
          <DiAndroid />
        </IconContext.Provider>
      </ChakraProvider>

      <DiAndroid />

      <SAppContainer>
        <SAppTitle>タイトルです</SAppTitle>
        <SAppText>テキストですテキストですテキストですテキストです</SAppText>
        <button style={btn}>ボタン</button>
      </SAppContainer>
    </>
  );
}

export default App;

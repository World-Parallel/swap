import { Text } from '@chakra-ui/react';
import React from 'react';


interface Props {
  children: React.ReactNode;
}

const ContentBox = ({ children }: Props) => (
  // @ts-ignore
  <Text align='justify' color="white">{children}</Text>
);

export default ContentBox;
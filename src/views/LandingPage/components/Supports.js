import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import spt from '../../../assets/supports/image 5.png';
import { institutionSupports } from '../../../variables/general';
const Supports = () => {
  const bgSupport = useColorModeValue("transparent", "gray.200")

  return (
    <Flex flexDirection="column" alignItems="center" textAlign="center" mt={100}>
      <Text
        fontFamily={'heading'}
        fontSize={{ base: '25px', md: '35px', lg: '45px' }}
        fontWeight={700}
        mb={{ base: '5px', md: '7px', lg: '10px' }}
        mt={{ base: '15px', md: '18px', lg: '20px' }}
        ml={{ base: '5px', md: '7px', lg: '10px' }}
        color={useColorModeValue('blue.700', 'gray.100')}
      >
        Lembaga & Program Kabupaten
      </Text>
      <Flex flexDirection="row" p={"45px"} justifyContent="center" alignContent={"center"} flexWrap="wrap">
        {institutionSupports.map((e, index) => {
          return (
            <Link href="youtube.com">
              <Box
                m={2}
                w={{ base : "130px",lg: "300px" }}
                h={{ base : "65px",lg: "150px" }}
                border="3px solid black"
                rounded="lg"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg={bgSupport}
                _hover={{ bg: 'gray.100' }}
              >
                <Image
                  src={e.image}
                  alt={'Youtube'}
                  objectFit="contain"
                  w={{base: "50px", lg: "140px" }}
                />
              </Box>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Supports;

const supportBox = () => {
  return (
    <Link href="youtube.com">
      <Box
        w="300px"
        h="150px"
        border="3px solid black"
        rounded="lg"
        display="flex"
        justifyContent="center"
        alignItems="center"
        // bg="teal"
        _hover={{ bg: 'gray.100' }}
      >
        <Image src={spt} alt={'Youtube'} objectFit="contain" w="140px" />
      </Box>
    </Link>
  );
};

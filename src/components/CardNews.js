import {
  Card,
  Text,
  CardHeader,
  CardBody,
  Badge,
  Heading,
} from '@chakra-ui/react';
import CoverImage from './CoverImage';

export default function CardNews({ title, image, caption, date, ...rest }) {
  return (
    <Card
      size="md"
      overflow="hidden"
      w="100%"
      h="100%"
      _hover={{
        transform: 'translateY(-5px)',
        transition: 'transform 0.3s',
      }}
      {...rest}
    >
      <CoverImage src={image} alt={title} />
      <CardHeader pb={0}>
        <Badge colorScheme="green" fontSize="xs" mb="2" fontFamily="default">
          {date}
        </Badge>
        <Heading size="sm">{title}</Heading>
      </CardHeader>
      <CardBody fontFamily="body" pb={2}>
        <Text fontSize={{ base: 'sm', lg: 'md' }}>{caption}</Text>
      </CardBody>
    </Card>
  );
}

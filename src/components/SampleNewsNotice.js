import { Flex, Icon, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { SHOW_SAMPLE_NEWS_NOTICE } from '../variables/general';

// The news on this site is placeholder content (see variables/general.js).
// This says so in plain sight; switch it off with SHOW_SAMPLE_NEWS_NOTICE once
// real articles replace it.
export default function SampleNewsNotice(props) {
  if (!SHOW_SAMPLE_NEWS_NOTICE) return null;

  return (
    <Flex
      align="flex-start"
      gap={2}
      color="gray.500"
      fontFamily="default"
      {...props}
    >
      <Icon as={InfoOutlineIcon} mt="3px" flexShrink={0} />
      <Text fontSize="xs">
        Berita pada bagian ini adalah konten contoh (dummy) untuk keperluan
        demo desain, bukan pemberitaan resmi. Foto: Unsplash.
      </Text>
    </Flex>
  );
}

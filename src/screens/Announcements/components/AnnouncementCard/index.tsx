import { useRef, FC } from 'react';
import { FlatList, Animated } from 'react-native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { AnnouncementsDTO } from '@dtos/AnnouncementsDTO';

import { useSettings } from '@hooks/useSettings';

import { ImageDot } from '@components/ImageDot';

import {
  Container,
  Wrapper,
  CreatedAt,
  Image,
  DotWrapper,
  DescriptionWrapper,
  Description,
  Tags,
  Tag,
} from './styles';

interface Props {
  data: AnnouncementsDTO.Response;
}

export const AnnouncementCard: FC<Props> = (props) => {
  const { createdAt, description, images, tags } = props.data;

  console.log(images);

  const { fontSizeValue } = useSettings();

  const imageSliderRef = useRef<FlatList>(null);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;

  const formattedCreatedAt = format(new Date(createdAt), "dd 'de' MMMM 'às' HH:mm", {
    locale: ptBR,
  });

  return (
    <Container>
      <CreatedAt style={{ fontSize: fontSizeValue(14) }}>{formattedCreatedAt}</CreatedAt>

      <Wrapper>
        <Animated.FlatList
          ref={imageSliderRef}
          data={images}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Image source={{ uri: item.url }} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } },
              },
            ],
            { useNativeDriver: true }
          )}
        />

        <DotWrapper>
          <ImageDot data={images} scrollX={scrollX} />
        </DotWrapper>

        <DescriptionWrapper>
          <Description style={{ fontSize: fontSizeValue(16) }}>{description}</Description>

          <Tags>
            {tags.map((tag) => (
              <Tag key={tag} style={{ fontSize: fontSizeValue(16) }}>
                {tag}
              </Tag>
            ))}
          </Tags>
        </DescriptionWrapper>
      </Wrapper>
    </Container>
  );
};

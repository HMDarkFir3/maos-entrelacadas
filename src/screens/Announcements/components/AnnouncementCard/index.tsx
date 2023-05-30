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
  const { createdAt, description, tags } = props.data;

  const { fontSizeValue } = useSettings();

  const introductionSliderRef = useRef<FlatList>(null);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;

  const formattedCreatedAt = format(new Date(createdAt), "dd 'de' MMMM 'às' HH:mm", {
    locale: ptBR,
  });

  return (
    <Container>
      <CreatedAt style={{ fontSize: fontSizeValue(14) }}>{formattedCreatedAt}</CreatedAt>

      <Wrapper>
        <FlatList
          ref={introductionSliderRef}
          data={[0, 1, 2, 3, 4]}
          keyExtractor={(item) => String(item)}
          renderItem={() => <Image source={{ uri: 'https://github.com/hmdarkfir3.png' }} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } },
              },
            ],
            { useNativeDriver: false }
          )}
        />

        <DotWrapper>
          <ImageDot data={[0, 1, 2, 3, 4]} scrollX={scrollX} />
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

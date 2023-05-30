import { FC } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { AnnouncementsDTO } from '@dtos/AnnouncementsDTO';

import { useSettings } from '@hooks/useSettings';

import {
  Container,
  Wrapper,
  CreatedAt,
  Image,
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

  const formattedCreatedAt = format(new Date(createdAt), "dd 'de' MMMM 'às' HH:mm", {
    locale: ptBR,
  });

  return (
    <Container>
      <CreatedAt style={{ fontSize: fontSizeValue(14) }}>{formattedCreatedAt}</CreatedAt>

      <Wrapper>
        <Image source={{ uri: 'https://github.com/hmdarkfir3.png' }} />

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

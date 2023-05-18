import { FC } from 'react';

import { useSettings } from '@hooks/useSettings';

import { Container, Wrapper, Date, Image, DescriptionWrapper, Description, Tag } from './styles';

export const AnnouncementCard: FC = () => {
  const { fontSizeValue } = useSettings();

  return (
    <Container>
      <Date style={{ fontSize: fontSizeValue(14) }}>24 de agosto às 12:21</Date>

      <Wrapper>
        <Image source={{ uri: 'https://github.com/hmdarkfir3.png' }} />

        <DescriptionWrapper>
          <Description style={{ fontSize: fontSizeValue(16) }}>
            ATENÇÃO comunicação Mãos Entrelaçadas ensaio do dia 28/08/2022 CANCELADO! Fiquem atentos
            que em breve divulgaremos a nova data! 🙏🏻💙
          </Description>

          <Tag style={{ fontSize: fontSizeValue(16) }}>#maosentrelaçadas #vemdemãos💙</Tag>
        </DescriptionWrapper>
      </Wrapper>
    </Container>
  );
};

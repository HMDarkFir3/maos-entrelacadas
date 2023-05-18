import { FC } from 'react';

import { Container, Wrapper, Date, Image, DescriptionWrapper, Description, Tag } from './styles';

export const AnnouncementCard: FC = () => (
  <Container>
    <Date>24 de agosto às 12:21</Date>

    <Wrapper>
      <Image source={{ uri: 'https://github.com/hmdarkfir3.png' }} />

      <DescriptionWrapper>
        <Description>
          ATENÇÃO comunicação Mãos Entrelaçadas ensaio do dia 28/08/2022 CANCELADO! Fiquem atentos
          que em breve divulgaremos a nova data! 🙏🏻💙
        </Description>

        <Tag>#maosentrelaçadas #vemdemãos💙</Tag>
      </DescriptionWrapper>
    </Wrapper>
  </Container>
);

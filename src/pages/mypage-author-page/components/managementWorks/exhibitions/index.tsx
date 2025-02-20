import { useNavigate } from 'react-router-dom';
import IconPlus from '@assets/svg/Icon_Plus.svg?react';
import { Artwork } from '@/components/common/ArtWork';

import {
  ArtworkContainer,
  ArtworkGrid,
  ArtWorksContainer,
  ButtonContainer,
  StyledButton,
} from './index.style';

import { useGetAuthorArtworksExhibitions } from '@/pages/mypage-author-page/hooks/useGetAuthorArtworksExhibitions';

const Exhibitions = () => {
  const navigate = useNavigate();

  const { data } = useGetAuthorArtworksExhibitions();

  const artworks = data?.artworks || [];

  const exhibitions = data?.exhibitions || [];

  return (
    <ArtWorksContainer>
      <h1>진행 중인 전시</h1>

      <ArtworkContainer>
        <ArtworkGrid>
          {exhibitions.map((exhibition) => {
            const relatedArtwork = artworks.find(
              (artwork) => artwork.id === exhibition.id
            );
            return (
              <Artwork
                key={exhibition.id}
                imageUrl={exhibition.image_url}
                title={exhibition.title}
                artworkId={relatedArtwork?.id || exhibition.id}
              />
            );
          })}
        </ArtworkGrid>
      </ArtworkContainer>

      <ButtonContainer>
        <StyledButton onClick={() => navigate('/exhibit-register')}>
          <IconPlus />
          전시 등록
        </StyledButton>
      </ButtonContainer>
    </ArtWorksContainer>
  );
};

export default Exhibitions;

import {
  EagerLoadImage,
  LazyLoadImage,
} from '@components/common/CustomImageContainer';
import {
  Artist,
  ArtworkContainer,
  ArtworkInfo,
  GlassmorphismOverlay,
  HeartButton,
  ImageContainer,
  Price,
  Size,
  Title,
} from '@components/common/ArtWork/index.style.ts';
import { useState } from 'react';
import EmptyHeart from '@assets/svg/empty-heart.svg?react';
import theme from '@styles/theme.ts';
interface ArtworkProps {
  imageUrl: string;
  artist: string;
  title: string;
  artworkWidth: number;
  artworkHeight: number;
  price?: number;
  variant?: 'eager' | 'lazy';
  hoverable?: boolean;
}
/**
 * 이는 가장 많이 사용되는 컴포넌트입니다.
 * 기존의 EagerLoadImage 와 LazyLoadImage 를 사용합니다. 사용자의 화면에 최초로 보이는 곳인지, 드래그 해야 보이는지 여부에 따라 variant를 정합니다.
 * title 및 size, price를 받습니다. price가 필요없는 경우가 있기에 price는 optional로 둡니다.
 * price 의 존재 여부에 따라서 컴포넌트가 달라집니다.
 * @author 홍규진
 * */
export const Artwork = ({
  imageUrl,
  artist,
  title,
  artworkWidth,
  artworkHeight,
  price,
  variant = 'eager',
  hoverable = true, // 기본값은 true로 설정
}: ArtworkProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const formattedSize = `${artworkWidth}cm * ${artworkHeight}cm`;
  let formattedPrice = null;
  if (price) {
    formattedPrice = `${price.toLocaleString()} 원`;
  }

  return (
    <ArtworkContainer>
      <ImageContainer>
        {variant === 'eager' ? (
          <EagerLoadImage imageUrl={imageUrl} alt={title} />
        ) : (
          <LazyLoadImage imageUrl={imageUrl} alt={title} />
        )}
        {hoverable && (
          <GlassmorphismOverlay hoverable={hoverable}>
            <HeartButton
              onClick={() => setIsLiked(!isLiked)}
              aria-label={isLiked ? '좋아요 취소' : '좋아요'}
            >
              {isLiked ? (
                <EmptyHeart fill={theme.colors.white} />
              ) : (
                <EmptyHeart />
              )}
            </HeartButton>
          </GlassmorphismOverlay>
        )}
      </ImageContainer>
      <ArtworkInfo>
        <Artist>{artist}</Artist>
        <Title>{title}</Title>
        <Size>{formattedSize}</Size>
        <Price>{formattedPrice}</Price>
      </ArtworkInfo>
    </ArtworkContainer>
  );
};

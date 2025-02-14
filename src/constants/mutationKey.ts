import { postAuthRegister } from '@/apis/register/postAuthRegister';
import { postAuctionRegister } from '@/apis/auctionRegister/postAuctionRegister';
import { postArtworkRegister } from '@/apis/artworkRegister/postArtworkRegister';
import { getAvailableArtworksQuery } from '@/constants/queryKeys';
import { toggleArtworkLike } from '@/apis/artwork-like/like';
/**
 * 인증 회원가입 뮤테이션
 * @author 홍규진
 * */
export const postAuthRegisterMutation = () => {
  return {
    mutationKey: ['auth'],
    mutationFn: postAuthRegister,
  };
};

/**
 * 경매 등록 뮤테이션
 * @author 홍규진
 * */
export const postAuctionRegisterMutation = () => {
  return {
    mutationKey: [...getAvailableArtworksQuery().queryKey],
    mutationFn: postAuctionRegister,
  };
};

/**
 * 작품 등록 뮤테이션
 * TODO-[홍규진] 작품 등록 후, 홈 화면 내 작품 쿼리 키 지정시 해당 키로 수정 필요
 * @author 홍규진
 * */
export const postArtworkRegisterMutation = () => {
  return {
    mutationKey: ['artwork'],
    mutationFn: postArtworkRegister,
  };
};

/**
 * 작품 좋아요 뮤테이션
 * @author 김서윤
 */
export const toggleArtworkLikeMutation = (artworkId: number) => {
  return {
    mutationKey: ['artworkDetail', artworkId],
    mutationFn: () => toggleArtworkLike(artworkId),
  };
};

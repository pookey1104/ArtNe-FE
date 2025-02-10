import exampleArtwork from '@/assets/png/example_artwork.png';
import exampleExhibition from '@/assets/png/example_exhibition.png';

import { ArtBuyerDataProps } from '@/types/artBuyer';

export const artBuyerData: ArtBuyerDataProps = {
  success: true,
  code: 200,
  message: '요청에 성공하였습니다.',
  result: {
    paymentCounts: {
      pending: 2,
      completed: 5,
      received: 3,
    },
    auctions: [
      {
        artwork_id: 10,
        title: '숲의 빛',
        author: { name: '김예린' },
        end_date: '2023-12-25T00:00:00Z',
        price: 1200000,
        status: '응찰중',
      },
      {
        artwork_id: 11,
        title: '숲속의 정오 (Noon in the Forest)',
        author: { name: '윤지혜' },
        end_date: '2023-12-25T00:00:00Z',
        price: 850000,
        status: '입찰중',
      },
      {
        artwork_id: 12,
        title: '푸른 시간 (The Blue Hour)',
        author: { name: '정민우' },
        end_date: '2023-12-25T00:00:00Z',
        price: 1200000,
        status: '응찰중',
      },
    ],
    payments: [
      {
        artwork_id: 15,
        title: '숲의 빛',
        author: { name: '김예린' },
        price: 1200000,
        created_at: '2023-12-25T00:00:00Z',
        status: '결제 대기중',
      },
      {
        artwork_id: 16,
        title: '숲속의 정오 (Noon in the Forest)',
        author: { name: '윤지혜' },
        price: 850000,
        created_at: '2023-12-25T00:00:00Z',
        status: '결제 완료',
      },
      {
        artwork_id: 17,
        title: '푸른 시간 (The Blue Hour)',
        author: { name: '정민우' },
        price: 1200000,
        created_at: '2023-12-25T00:00:00Z',
        status: '낙찰',
      },
    ],
    myCollection: {
      artworks: [
        {
          id: 22,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 23,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 24,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 25,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 26,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 27,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 28,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 29,
          title: '바람이 머무는 곳',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '박서연' },
        },
        {
          id: 30,
          title: '작품 제목이 들어갈 자리입니다.작품 제목이 들어갈 자리입니다.',
          image_url: exampleArtwork,
          width: 234,
          height: 234,
          author: { name: '작가명' },
        },
      ],
      exhibitions: [
        {
          exhi_id: 5,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
        {
          exhi_id: 6,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
        {
          exhi_id: 7,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
        {
          exhi_id: 8,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
        {
          exhi_id: 9,
          title: 'The Ground Gallery',
          image_url: exampleExhibition,
        },
      ],
    },
  },
};

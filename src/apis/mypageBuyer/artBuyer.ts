import { instance } from '@/apis/axios';
import { TGetResponse } from '@/apis/type';
import { TUpdateUserInfo } from './type';

/**
 * 사용자 정보 수정 API 호출 함수
 * @param userInfo - 수정할 사용자 정보 (nickname, address, birth)
 * @returns API 응답(TGetResponse)
 * @author 노찬영, 홍규진 
 */
export const updateUserInfo = async (
  userInfo: TUpdateUserInfo
): Promise<void> => {
  await instance.patch<TGetResponse<void>>(`/api/user/update`, userInfo);
};

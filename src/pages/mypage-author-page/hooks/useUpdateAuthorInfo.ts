import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateAuthorInfo } from '@/apis/mypageAuthor/author';
import { getUpdateAuthorInfoQueryKey } from '@/constants/queryKeys';
import { getQueryClient } from '@/contexts/query/getQueryClient';
import { TUpdateAuthorInfo } from '@/apis/mypageAuthor/type';

/**
 * 작가 계정 정보 수정을 위한 React Query 훅
 * @returns mutate 함수와 상태를 반환하여 작가 계정 정보 수정 요청 가능
 * @author 노찬영, 홍규진
 **/
export const useUpdateAuthorInfo = () => {
  const queryClient = getQueryClient();

  const {
    mutate: updateAuthor,
    isPending,
    error,
  } = useMutation<
    void,
    Error,
    { authorId: number; authorInfo: TUpdateAuthorInfo }
  >({
    mutationKey: getUpdateAuthorInfoQueryKey(),
    mutationFn: ({ authorId, authorInfo }) =>
      updateAuthorInfo(authorId, authorInfo),
    onSuccess: () => {
      toast.success('계정 정보가 성공적으로 업데이트되었습니다.');
      queryClient.invalidateQueries({
        queryKey: getUpdateAuthorInfoQueryKey(),
      });
    },
    onError: (error) => {
      toast.error(`계정 정보 수정에 실패했습니다. ${error.message}`);
    },
  });

  return { updateAuthor, isPending, error };
};

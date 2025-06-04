# x = [3,2,1]
# x = sorted(x, key=lambda a:a)
# print(x)
# y = [{ "c": 3},{"a": 1}, {"b": 2}]
# y = sorted(y, key=lambda x:list(x.values())[0])
# print(y)
import heapq


nums = [1,3,-1,-3,5,3,6,7]
k = 3

nums = [1,2,3,4,5,6,7,8]



class Solution:
    def maxSlidingWindow(self, nums, k):
        n = len(nums)
        # 注意 Python 默认的优先队列是小根堆，取负数当成小根堆，最后在取回来根节点代表最大值
        q = [(-nums[i], i) for i in range(k)]
        # print(q)
        heapq.heapify(q)
        # print(q)
        # [(-3, 1), (-1, 0), (1, 2)]
        ans = [-q[0][0]]
        for i in range(k, n):
            heapq.heappush(q, (-nums[i], i))
            while q[0][1] <= i - k:
                heapq.heappop(q)
            ans.append(-q[0][0])
        
        print(q, 'qqq')
        print(ans, 'ans')
        return ans
                



sut = Solution()
sut.maxSlidingWindow(nums, k)


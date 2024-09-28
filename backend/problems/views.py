from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from collections import defaultdict

# Create your views here.
class problem1(APIView):
    def post(self,request):
        result = queensAttack(request)
        return Response({'result': result}, status=status.HTTP_200_OK)
    
class problem2(APIView):
     def post(self,request):
        result = stringValue(request)
        return Response({'result': result}, status=status.HTTP_200_OK)

def stringValue(request):
    data = request.data.get('data')
    n = len(data)
    substring_count = defaultdict(int)     
    for i in range(n):
        for j in range(i + 1, n + 1):
            substring = data[i:j]
            substring_count[substring] += 1
    max_value = 0
    for substring, count in substring_count.items():
        value = len(substring) * count
        max_value = max(max_value, value)
    return max_value
def queensAttack(request):
        n = request.data.get('n')
        k = request.data.get('q')
        rq = request.data.get('rq')
        cq = request.data.get('cq')
        obstacles = request.data.get('obstacles')
        obstacles = [tuple(obstacle) for obstacle in obstacles]
        rtoplimit,rbotlimit = n+1,0
        ctoplimit,cbotlimit = n+1,0
        diagbotleft = (rq-min(rq-1,cq-1)-1,cq-min(rq-1,cq-1)-1)
        diagtopright = (rq+min(n-rq,n-cq)+1,cq+min(n-rq,n-cq)+1)
        diagbotright = (rq-min(rq-1,n-cq)-1,cq+min(rq-1,n-cq)+1)
        diagtopleft = (rq+min(n-rq,cq-1)+1,cq-min(n-rq,cq-1)-1)
        diags = [diagbotleft,diagtopright,diagbotright,diagtopleft]
        for i in obstacles:
            if(i[1] == cq):
                if(i[0] > rq):
                     rtoplimit = min(i[0],rtoplimit)
                if(i[0] < rq):rbotlimit = max(i[0],rbotlimit)
            elif(i[0] == rq):
                if(i[1] > cq):ctoplimit = min(i[1],ctoplimit)
                if(i[1] < cq):cbotlimit = max(i[1],cbotlimit)
            elif(abs(i[0] - i[1]) == abs(rq-cq)):
                 if(i[0] < rq): diags[0] = max(i, diags[0])
                 elif(i[0] > rq): diags[1] = min(i, diags[1])
            elif(i[0] + i[1] == rq+cq):
                 if(i[0] < rq): diags[2] = max(i, diags[2])
                 elif(i[0] > rq): diags[3] = min(i, diags[3])
        result = abs(ctoplimit-cbotlimit)+abs(rtoplimit-rbotlimit)+abs(diags[0][0]-diags[1][0])+abs(diags[2][0]-diags[3][0])-8
        return result
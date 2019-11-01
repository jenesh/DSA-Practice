import math
# => 'olleh'
s = ['h', 'e', 'l', 'l', 'o']

# Example 1:
# Example 2:

def reverseASttringInPlace (s):
    left = 0
    right = len(s) - 1
    floored = math.floor(len(s) / 2) - 1

    for i in range(floored):
        temp = s[i]
        s[i] = s[right]
        s[right] = temp
        left += 1
        right -= 1
    
    print(''.join(s))


# reverseASttringInPlace(s)

# Recursive approach => Check Scheme syntax
def R (s, i, j):
    if i > j: return 

    c = s[j]
    d = s[i]
    R(s, i + 1, j - 1)
    s[j] = d
    s[i] = c


# 'aabbccc' => 'a2b2c3'
# 

char = 'abbaaccc'

def compress (s):
    if (len(s) < 2):
        return s
    
    string = ''
    start = 1
    end = len(char) - 1
    count = 1
    
    while (start <= end):
        print(s[start])
        if (s[start] != s[start - 1]):
            string += s[start - 1] + str(count)
            count = 1
        else:
            count += 1            
        start += 1

    string += s[end] + str(count)
    print(string)


# compress(char)


# Decompression

# 'RLRRLLRLRL' => return 4
# 'LLLLRRRR' => 1
# 'LRRL' => 2

s1 = 'RLRRLLRLRL'
s2 = 'LLLLRRRR'
s3 = 'LRRL'
s4 = ''

# def balancedString (s):
#     i = 0
#     currChar = ''
#     currStr = ''
#     count = 1
#     n = 0
#     while (i < len(s)): 
#         if (currChar != s[i]):
#             count += 1
#         currChar = s[i]
#         count = 1
#         if (len(currStr))


#     return n

def balancedString (s):
    n = 0
    k = 0 # Size of Stack
    incr = '' # value of stack
    for c in s:
        if k == 0:
            incr = c
            k += 1
        else:
            if c == incr:
                k += 1
            else:
                k -= 1
            if k == 0:
                n += 1
    return n



print(balancedString(s1)) # 4
print(balancedString(s2)) # 1
print(balancedString(s3)) # 2
print(balancedString(s4)) # 0


# x = 7
# y = 11

# print(x + y)

# x = '7'
# y = '11'

# z = addStrings(x, y)
# print(z) # '18'

x = '1118'
y = '999'

def addString(num1, num2):
    carry = 0
    n = max(len(num1), len(num2)) # 4
    num1Last = len(num1) - 1
    num2Last = len(num2) - 1
    result = ''

    for i in range(n):
        a = 0
        b = 0
        if i < len(num1):
            a = int(num1[num1Last - i])
        if i < len(num2):
            b = int(num2[num2Last - i])
        r = a + b
        if r >= 10:
            r -= 10
            carry = 1
        result += str(r)
        # res.append(r)
    if carry == 1:
        result += str(carry)
        result.reverse() # reverse the order
import sys, json

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    lines = read_in() #lines is the input now. 
    #the input is sent as an array, so it is recieved as an array

    ret = int(lines[0]) + 1
    print (ret)

if __name__ == '__main__':
    main()
    
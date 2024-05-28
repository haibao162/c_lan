import json
def get_stored_name():
    name='username.json'
    try:
        with open(name) as na:
            username=json.load(na)
    except:
        return None
    else:
        print(username)
        return username
def greet_user():
    username=get_stored_name()
    if username:
        print('Welcome back')
    else:
        username=input()
        name='username.json'
        with open(name,'w') as na:
            json.dump(username,na)
            print('I will remember you')
greet_user()

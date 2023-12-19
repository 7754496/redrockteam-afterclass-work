#generate 10000 random fake user_agents

from faker import Faker
import json

fake = Faker()
set1=set()

while True:
    mobile_user_agent = fake.user_agent()
    if not "Android" in mobile_user_agent:
        continue
        
    set1.add(mobile_user_agent)
    print(len(set1))
                 
    if len(set1)>=10000:
        break

with open("mobile_user_agent-10000.json","w") as f:
    json.dump(list(set1),f,indent=4)
                
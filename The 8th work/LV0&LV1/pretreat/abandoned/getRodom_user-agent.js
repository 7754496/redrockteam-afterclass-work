const url="file:///storage/emulated/0/草稿/mobile_user_agent-10000.json";

let user_agents;
const callback=function(text){
    user_agents=JSON.parse(text);
}

const xhr = new XMLHttpRequest();
xhr.onload = function () {
    callback(this.responseText);
};
xhr.open("GET", url, false);
xhr.send();

const getRodomUser_agent=function(){    
    return user_agents[Math.floor(Math.random()*user_agents.length)];
}

//console.log(getRodomUser_agent())
export default getRodomUser_agent;
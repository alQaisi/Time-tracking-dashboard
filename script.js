var data=[];
async function getData(){
    let response=await fetch('./data.json');
    data=await(response.json());
}
getData();
var frames={
    daily:'Day',
    weekly:'Week',
    monthly:"Month"
};
var smallTxt=document.querySelectorAll('.small-txt');
var largeTxt=document.querySelectorAll('.large-txt');
var active=document.querySelector('.active');
var buttons=document.querySelectorAll('button');
buttons.forEach(button=>button.addEventListener('click',function(){
    active.classList.remove('active');
    this.classList.add('active');
    active=this;
    title=this.title.toLocaleLowerCase();
    changeTimeFrame(frames[title],title)
}));
function changeTimeFrame(title,frame){
    smallTxt.forEach(function(txt,index){
        txt.textContent=`Last ${title} - ${data[index].timeframes[frame].previous}hrs`;
    });
    largeTxt.forEach(function(txt,index){
        txt.textContent=`${data[index].timeframes[frame].current}hrs`;
    });
}


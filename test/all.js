const submit=document.querySelector('.submit');
const getAll=document.querySelector('.get');
const alter=document.querySelector('.alter');
const del=document.querySelector('.del');
const message=document.querySelector('.message');
function getForm(){
    let data={};
    const content=document.querySelector('.content').value;
    const type=document.querySelector('.type').value;
    if(content==""||type==""){
        alert("form can't empyt");
    }
    data.course_id=8;
    data.created_user_id=1;
    data.topic_content=content;
    data.topic_type=type;
    return data;
}
function ajax (form,action,url){
    let xhr=new XMLHttpRequest();
    xhr.open(action,url,true);
    xhr.setRequestHeader('Content-type','application/json')
    xhr.send(JSON.stringify(form));
    xhr.onload=()=>{
        return xhr.responseText;
    }
} 
submit.addEventListener('click',()=>{
    let form=getForm();
    ajax(form,'post','addTopic');
})
getAll.addEventListener('click',()=>{
    let form ={};
    form.course_id=7;
    let data=ajax(form,'post','/getTopic');
    console.log(data);
})

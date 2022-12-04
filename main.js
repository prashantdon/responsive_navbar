const starIcon = document.getElementById('icon-star');
const star = document.getElementById('star');
const driveIcon = document.getElementById('icon-drive');
const drive = document.getElementById('drive');
const infoIcon = document.getElementById('icon-info');
const info1 = document.getElementById('info1');
const cloudIcon = document.getElementById('icon-cloud');
const cloud = document.getElementById('cloud');
const requestAccess = document.getElementById("request-access");
const request = document.getElementById('request');
const user = document.getElementById("user");
const user1 = document.getElementById('user1');
const videoCall = document.getElementById("video-call");
const video = document.getElementById('video');
const shareLink = document.getElementById("share-link");
const share = document.getElementById('share');
const acLink = document.getElementById("ac-link");
const account = document.getElementById('account');
const hamIcon = document.getElementById("hamberg-icon");
const menu = document.getElementsByClassName("navbar__menu")
const hambergMenu = document.getElementById("navbar__menu-hamberg");




const info = document.createElement("p")
// info.classList.add("newP")


starIcon.addEventListener('mouseover', ()=>{
     info.innerText = "star"
     star.appendChild(info)
     info.style.background = "black"
})

starIcon.addEventListener('mouseout', ()=>{
 
    info.innerText = ""
    
})

driveIcon.addEventListener('mouseover', ()=>{
    info.innerText = "Add shortcut to drive"
    drive.appendChild(info)
    info.style.background = "black"
})

driveIcon.addEventListener('mouseout', ()=>{

   info.innerText = ""
   
})

infoIcon.addEventListener('mouseover', ()=>{
    info.innerText = "Document details"
    info1.appendChild(info)
    info.style.background = "black"
})

infoIcon.addEventListener('mouseout', ()=>{

   info.innerText = ""
   
})

cloudIcon.addEventListener('mouseover', ()=>{
    info.innerText = " See Document status"
    cloud.appendChild(info)
    info.style.background = "black"
})

cloudIcon.addEventListener('mouseout', ()=>{

   info.innerText = ""
   
})

requestAccess.addEventListener('mouseover', ()=>{
    info.innerText = `You can only view this document. To
     make changes, ask the owner for
     edit access.`
    request.appendChild(info)
    info.style.background = "black"
    requestAccess.style.background = "rgb(182, 182, 202)"

})

requestAccess.addEventListener('mouseout', ()=>{

   info.innerText = ""
   requestAccess.style.background = "none"
   
})

user.addEventListener('mouseover', ()=>{
    info.innerText = "Anonymous Heart"
    user1.appendChild(info)
    info.style.background = "black"
    
})

user.addEventListener('mouseout', ()=>{

   info.innerText = ""
   
})

videoCall.addEventListener('mouseover', ()=>{
    info.innerText = "Join a call here to present this tab to the call."
    video.appendChild(info)
    info.style.background = "black"
    
})

videoCall.addEventListener('mouseout', ()=>{

   info.innerText = ""
   
})

shareLink.addEventListener('mouseover', ()=>{
    info.innerHTML = `<i class="fa fa-share-alt-square" aria-hidden="true"></i> <span>Anyone with the link</span> 
                       Anyone who has the link can access. No sign-
                       in required.`
    share.appendChild(info)
    info.style.background = "black"
    
})

shareLink.addEventListener('mouseout', ()=>{

   info.innerText = ""
   
})

acLink.addEventListener('mouseover', ()=>{
    info.innerText ="Google Account"
    account.appendChild(info)
    info.style.background = "black"
    
})

acLink.addEventListener('mouseout', ()=>{

   info.innerText = ""
   
})

hamIcon.addEventListener("click", ()=>{
    hambergMenu.innerHTML = `   <i id="hamberg-icon" class="fa fa-bars" aria-hidden="true"></i>
                                <p id="menu--p">File</p>
                                <p id="menu--p">Edit</p>
                                <p id="menu--p">View</p>
                                <p id="menu--p">Tools</p>
                                <p id="menu--p">Help</p>`
})
console.log(hamIcon)
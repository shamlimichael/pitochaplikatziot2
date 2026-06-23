/*Michael-Shamli-219489044-Roy-Usarov-334862018-Ofek-Cohen-218519189*/

let posts = [
    {
        id: 1,
        username: "notengland",
        pfp: "longahhproject/england_flag.webp",
        image: "longahhproject/bellingham_england.avif",
        caption: "Jude Bellingham Scored a Banger",
        likes: 48,
        isLiked: false,
        comments: [],
        repost: 90,
        isReposted: false,
        isSaved: false,
        time: "12h",
        isVerified: true,
        type: "image"
    },
    {
        id: 2,
        username: "notfrance",
        pfp: "longahhproject/Flag_of_France.svg.webp",
        image: "longahhproject/63f6aba0-69c5-11f1-83dd-d98c2c7d45fb.jpg",
        caption: "Kylian Mbappe With a Crazy Hat-Trick",
        likes: 906,
        isLiked: false,
        comments: [],
        repost: 800,
        isReposted: false,
        isSaved: false,
        time: "2d",
        isVerified: true,
        type: "image"
    },
    {
        id: 3,
        username: "notgermany",
        pfp: "longahhproject/Flag_of_Germany.svg.png",
        image: "longahhproject/kai_havertz.jpg",
        caption: "Kai Havertz Won MOTM",
        likes: 534,
        isLiked: false,
        comments: [],
        repost: 20,
        isReposted: false,
        isSaved: false,
        time: "50m",
        isVerified: true,
        type: "image"
    }
]

function likeorunlike(IDofpost)
{
    let postTolike;
    posts.forEach(post=>
    {
        if (post.id == IDofpost)
            postTolike= post;
    })
    postTolike.isLiked = !postTolike.isLiked;
    if (postTolike.isLiked == true)
    {
        document.getElementById("heart_engage_" + IDofpost).src = "longahhproject/heart-fill.svg";
        postTolike.likes++;
        let popup = document.getElementById("like_popup_" + IDofpost);
        popup.classList.remove("heart_pop");
        void popup.offsetWidth
        popup.classList.add("heart_pop");
    }
    else
    {
        document.getElementById("heart_engage_" + IDofpost).src = "longahhproject/heart.svg";
        postTolike.likes--;
    } 
    document.getElementById("numlikes_" + IDofpost).innerHTML = postTolike.likes;
}

function startup_posts()
{
    let container = document.querySelector(".post_container");
    posts.forEach(post => {
        let postHTML = `<div class="posts_div" id="post_nu${post.id}">
                            <div class="post_header">
                                <div class="header_left">
                                    <img src="${post.pfp}" class="pfp_header_post">
                                    <span class="header_item username_header">${post.username}</span>
                                    ${post.isVerified ? `<img src="longahhproject/Twitter_Verified_Badge.svg.png" class="verfied_header">` : ""}
                                    <span class="when_posted">• ${post.time}</span>
                                </div>
                                <div class="header_right">   
                                    <span class="follow_header">Follow</span>
                                    <span class="header_item three_dots" onclick="deletePost(${post.id})" title="Delete post" style="color:#ff4d4d;">🗑</span>
                                </div>
                            </div>
                            <div class="post_main">
                                ${post.type === 'text' ? 
                                    `<div style="background:#1e2329; padding:40px 20px; border-radius:15px; text-align:center; color:white; font-size:20px; font-family:sans-serif; border:1px solid #2d343f; box-sizing:border-box; width:100%; word-break:break-word;">${post.caption}</div>` : 
                                    (post.type === 'video' ? 
                                        `<div style="position:relative; width:100%; display:flex;">
                                            <img src="${post.image || 'longahhproject/kai_havertz.jpg'}" class="post_img" style="width:100%;">
                                            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background:rgba(0,0,0,0.6); border-radius:50%; width:60px; height:60px; display:flex; justify-content:center; align-items:center;">
                                                <div style="width: 0; height: 0; border-top: 12px solid transparent; border-bottom: 12px solid transparent; border-left: 20px solid white; margin-left: 4px;"></div>
                                            </div>
                                        </div>` : 
                                        `<img src="${post.image}" class="post_img">`
                                    )
                                }
                                <img src="longahhproject/heart-fill.svg" class="like_popup" id="like_popup_${post.id}">
                                <div class="comment_section" id="comment_section_nu${post.id}" style="display:none">
                                    <div class="comment_list" id="comment_list_nu${post.id}">

                                    </div>
                                    <span class="typing_indicator" id="typing_nu${post.id}" style="display:none">typing a comment...</span>
                                    <div class="commentbar" id="commentbar_nu${post.id}">
                                        <input type="text" class="typecom" id="typecom_nu${post.id}" placeholder="What did you think about the post?" oninput="typingIndicator(${post.id})">
                                        <img src="longahhproject/paper-plane-tilt.svg" class="send_comment" id="send_comment_nu${post.id}" onclick="SendYourComment(${post.id})">
                                    </div>
                                </div>
                            </div>
                            <div class="post_engage">
                                <div class="engage_left">
                                    <div class="engage_like" onclick="likeorunlike(${post.id})">
                                        <img src="longahhproject/heart.svg" class="post_engage_icon" id="heart_engage_${post.id}">
                                        <span class="engage_number" id="numlikes_${post.id}" >${post.likes}</span>
                                    </div>
                                    <div class="engage_comment" onclick="toggleComments(${post.id})">
                                        <img src="longahhproject/comments.svg" class="post_engage_icon"  >
                                        <span class="engage_number" id="numcomments_nu${post.id}">${post.comments.length}</span>
                                    </div>
                                    <div class="engage_repost">
                                        <img src="longahhproject/repost.svg" class="post_engage_icon">
                                        <span class="engage_number">${post.repost}</span>
                                    </div>
                                    <div class="engage_share">
                                        <img src="longahhproject/paper-plane-tilt.svg" class="post_engage_icon">
                                    </div>
                                </div>
                                <div class="engage_right">
                                    <img src="longahhproject/save.svg" class="post_engage_icon">
                                </div>
                            </div>
                            <div class="post_title">
                                <span class="title_username username_header">${post.username}</span>
                                ${post.isVerified ? `<img src="longahhproject/Twitter_Verified_Badge.svg.png" class="verfied_header">` : ""}
                                <span class="post_desc">${post.caption}</span>
                            </div>
                        </div>`

        container.innerHTML += postHTML
    })
}

function searchfunc()
{
    let bar = document.getElementById("search_bar");
    if (bar.style.display === "none" || bar.style.display === "")
        bar.style.display = "block";
    else
        bar.style.display = "none";
}

function filterPosts()
{
    let target = document.getElementById("search_bar").value.toLowerCase();
    let typeFilter = document.getElementById("post_type_filter").value;

    posts.forEach(post=> {
        let posthide = document.getElementById("post_nu" + post.id);
        if (!posthide) return;

        let matchesSearch = post.caption.toLowerCase().includes(target);
        let matchesType = (typeFilter === "all" || post.type === typeFilter);

        if (matchesSearch && matchesType)
        {
            posthide.style.display = "block";
            document.getElementById("like_popup_" + post.id).classList.remove("heart_pop");
        }
        else
        {
            posthide.style.display = "none";
        }        
    })
}

function toggleComments(id)
{
    let section = document.getElementById("comment_section_nu" + id);
    if (section.style.display === "none")
        section.style.display = "block";
    else
        section.style.display = "none";
}

function SendYourComment(id)
{
    let content = document.getElementById("typecom_nu" + id).value;
    if (content === "") return;
    let thepost;
    document.getElementById("typecom_nu" + id).value = "";
    posts.forEach(post=>{
        if (id == post.id)
            thepost = post;
    })
    thepost.comments.unshift(content);
    let commentList = document.getElementById("comment_list_nu" + id);
    commentList.innerHTML += `<div class="comment_item">
        <span class="username_com"> You </span><br>
        <span class="content_com">${content}</span>
        </div> <br><br>`;
    document.getElementById("typing_nu" + id).style.display = "none";
    document.getElementById("typecom_nu" + id).value = "";
    document.getElementById("numcomments_nu"+ id ).innerHTML = thepost.comments.length;
    
}

function typingIndicator(id)
{
    let input = document.getElementById("typecom_nu" + id).value;
    let indicator = document.getElementById("typing_nu" + id);
    if (input !== "")
        indicator.style.display = "block";
    else
        indicator.style.display = "none";
}

window.onscroll = function() {
    let btn = document.getElementById("scroll_up");
    if (window.scrollY > 100)
        btn.style.display = "block";
    else
        btn.style.display = "none";
}

function scrollUpfunc()
{
    window.scrollTo({ top: 0, behavior: "smooth" });
}

startup_posts()

function openModal() {
    let modals = document.querySelectorAll("#create_modal");
    modals.forEach(m => m.style.display = "flex");
}

function closeModal() {
    let modals = document.querySelectorAll("#create_modal");
    modals.forEach(m => m.style.display = "none");
    let captions = document.querySelectorAll("#modal_caption");
    let images = document.querySelectorAll("#modal_image");
    captions.forEach(c => c.value = "");
    images.forEach(i => i.value = "");
}

function submitNewPost() {
    let captionEl = document.querySelector("#modal_caption");
    let imageEl = document.querySelector("#modal_image");
    let typeEl = document.querySelector("#modal_type");
    
    let caption = captionEl ? captionEl.value : "";
    let image = imageEl ? imageEl.value : "";
    let type = typeEl ? typeEl.value : "image";
    
    if (!caption && !image) return;
    
    createPost("ilia.topuria", "longahhproject/topuria.webp", image, caption, true, type);
    closeModal();
}

function createPost(username, pfp, image, caption, isVerified, type = "image")
{
    let newPost = {
        id: posts.length + 1,
        username: username,
        pfp: pfp,
        image: image,
        caption: caption,
        likes: 0,
        isLiked: false,
        comments: [],
        repost: 0,
        isReposted: false,
        isSaved: false,
        time: "just now",
        isVerified: isVerified,
        type: type
    };

    posts.push(newPost);
    
    let post = newPost;
    let container = document.querySelector(".post_container");
    let postHTML = `<div class="posts_div" id="post_nu${post.id}">
                        <div class="post_header">
                            <div class="header_left">
                                <img src="${post.pfp}" class="pfp_header_post">
                                <span class="header_item username_header">${post.username}</span>
                                ${post.isVerified ? `<img src="longahhproject/Twitter_Verified_Badge.svg.png" class="verfied_header">` : ""}
                                <span class="when_posted">• ${post.time}</span>
                            </div>
                            <div class="header_right">   
                                <span class="follow_header">Follow</span>
                                <span class="header_item three_dots" onclick="deletePost(${post.id})" title="Delete post" style="color:#ff4d4d;">🗑</span>
                            </div>
                        </div>
                        <div class="post_main">
                            ${post.type === 'text' ? 
                                `<div style="background:#1e2329; padding:40px 20px; border-radius:15px; text-align:center; color:white; font-size:20px; font-family:sans-serif; border:1px solid #2d343f; box-sizing:border-box; width:100%; word-break:break-word;">${post.caption}</div>` : 
                                (post.type === 'video' ? 
                                    `<div style="position:relative; width:100%; display:flex;">
                                        <img src="${post.image}" class="post_img" style="width:100%;">
                                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background:rgba(0,0,0,0.6); border-radius:50%; width:60px; height:60px; display:flex; justify-content:center; align-items:center;">
                                            <div style="width: 0; height: 0; border-top: 12px solid transparent; border-bottom: 12px solid transparent; border-left: 20px solid white; margin-left: 4px;"></div>
                                        </div>
                                    </div>` : 
                                    `<img src="${post.image}" class="post_img">`
                                )
                            }
                            <img src="longahhproject/heart-fill.svg" class="like_popup" id="like_popup_${post.id}">
                            <div class="comment_section" id="comment_section_nu${post.id}" style="display:none">
                                <div class="comment_list" id="comment_list_nu${post.id}"></div>
                                <span class="typing_indicator" id="typing_nu${post.id}" style="display:none">typing a comment...</span>
                                <div class="commentbar" id="commentbar_nu${post.id}">
                                    <input type="text" class="typecom" id="typecom_nu${post.id}" placeholder="What did you think about the post?" oninput="typingIndicator(${post.id})">
                                    <img src="longahhproject/paper-plane-tilt.svg" class="send_comment" id="send_comment_nu${post.id}" onclick="SendYourComment(${post.id})">
                                </div>
                            </div>
                        </div>
                        <div class="post_engage">
                            <div class="engage_left">
                                <div class="engage_like" onclick="likeorunlike(${post.id})">
                                    <img src="longahhproject/heart.svg" class="post_engage_icon" id="heart_engage_${post.id}">
                                    <span class="engage_number" id="numlikes_${post.id}">${post.likes}</span>
                                </div>
                                <div class="engage_comment" onclick="toggleComments(${post.id})">
                                    <img src="longahhproject/comments.svg" class="post_engage_icon">
                                    <span class="engage_number" id="numcomments_nu${post.id}">${post.comments.length}</span>
                                </div>
                                <div class="engage_repost">
                                    <img src="longahhproject/repost.svg" class="post_engage_icon">
                                </div>
                                <div class="engage_share">
                                    <img src="longahhproject/paper-plane-tilt.svg" class="post_engage_icon">
                                </div>
                            </div>
                            <div class="engage_right">
                                <img src="longahhproject/save.svg" class="post_engage_icon">
                            </div>
                        </div>
                        <div class="post_title">
                            <span class="title_username username_header">${post.username}</span>
                            ${post.isVerified ? `<img src="longahhproject/Twitter_Verified_Badge.svg.png" class="verfied_header">` : ""}
                            <span class="post_desc">${post.caption}</span>
                        </div>
                    </div>`

    container.innerHTML += postHTML;
    let newPostEl = document.getElementById("post_nu" + post.id);
    newPostEl.classList.add("post_flash");
    
    filterPosts();

    let notification = document.getElementById("new_post_notification");
    if (notification) {
        notification.style.display = "block";
        setTimeout(() => { notification.style.opacity = "1"; }, 10);
        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => { notification.style.display = "none"; }, 300);
        }, 4000);
    }
    
}
function deletePost(id) {
    posts = posts.filter(post => post.id !== id);
    let postEl = document.getElementById("post_nu" + id);
    if (postEl) {
        postEl.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        postEl.style.opacity = "0";
        postEl.style.transform = "scale(0.95)";
        setTimeout(() => postEl.remove(), 400);
    }
}
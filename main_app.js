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
                                    <span class="header_item three_dots">•••</span>
                                </div>
                            </div>
                            <div class="post_main">
                                <img src="${post.image}" class="post_img">
                                <img src="longahhproject/heart-fill.svg" class="like_popup" id="like_popup_${post.id}">
                            </div>
                            <div class="post_engage">
                                <div class="engage_left">
                                    <div class="engage_like" onclick="likeorunlike(${post.id})">
                                        <img src="longahhproject/heart.svg" class="post_engage_icon" id="heart_engage_${post.id}">
                                        <span class="engage_number" id="numlikes_${post.id}" >${post.likes}</span>
                                    </div>
                                    <div class="engage_comment">
                                        <img src="longahhproject/comments.svg" class="post_engage_icon">
                                        <span class="engage_number">${post.comments.length}</span>
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
    let target = document.getElementById("search_bar").value;
    posts.forEach(post=> {
        let posthide = document.getElementById("post_nu" + post.id);
        if (!(post.caption.toLowerCase().includes(target.toLowerCase())))
            posthide.style.display = "none";
        else
            posthide.style.display = "block";
    })
}

startup_posts()

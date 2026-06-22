let posts = [
    {
        id: 1,
        username: "notengland",
        pfp: "longahhproject/england_flag.webp",
        image: "longahhproject/bellingham_england.avif",
        caption: "Jude Bellingham Scored a Banger",
        likes: 3200000,
        isLiked: false,
        comments: [],
        repost: 700,
        isReposted: false,
        isSaved: false,
        time: "12h",
        type: "image"
    },
    {
        id: 2,
        username: "notfrance",
        pfp: "longahhproject/Flag_of_France.svg.webp",
        image: "longahhproject/63f6aba0-69c5-11f1-83dd-d98c2c7d45fb.jpg",
        caption: "Kylian Mbappe With a Crazy Hat-Trick",
        likes: 5000000,
        isLiked: false,
        comments: [],
        repost: 900000,
        isReposted: false,
        isSaved: false,
        time: "2d",
        type: "image"
    },
    {
        id: 3,
        username: "notgermany",
        pfp: "longahhproject/Flag_of_Germany.svg.png",
        image: "longahhproject/kai_havertz.jpg",
        caption: "Kai Havertz Won MOTM",
        likes: 899000,
        isLiked: false,
        comments: [],
        repost: 70000,
        isReposted: false,
        isSaved: false,
        time: "50m",
        type: "image"
    }
]

function startup_posts(){
    container = document.querySelector(".post_container");
    posts.forEach(post => {
        postHTML = <div class=""></div>
    })
}